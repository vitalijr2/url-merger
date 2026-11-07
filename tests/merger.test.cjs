"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const context = vm.createContext({URL, URLSearchParams});
vm.runInContext(fs.readFileSync(path.join(__dirname, "../merger.js"), "utf8"), context);
const merge = (urls) => context.mergeUrls(urls, (key, values = {}) =>
  key + Object.entries(values).map(([name, value]) => ` ${name}=${value}`).join("")
);
const params = (url) => new URL(url).searchParams;

test("merges different parameters and retains their first-seen order", () => {
  const result = merge(["https://example.com/p?a=1", "https://example.com/p?b=2&a=3"]);
  assert.deepEqual([...params(result)], [["a", "1"], ["a", "3"], ["b", "2"]]);
});

test("preserves duplicates within one URL but removes duplicates across URLs", () => {
  const result = merge(["https://example.com/?x=1&x=1&x=2", "https://example.com/?x=1&x=3&x=3"]);
  assert.deepEqual(params(result).getAll("x"), ["1", "1", "2", "3", "3"]);
});

test("merges comma-separated values, retaining within-URL duplicates", () => {
  const result = merge(["https://example.com/?x=a,a,b&x=b", "https://example.com/?x=b,c,c"]);
  assert.equal(params(result).get("x"), "a,a,b,b,c,c");
  assert.equal(params(result).getAll("x").length, 1);
});

test("handles mixed comma and non-comma values", () => {
  const result = merge(["https://example.com/?x=a&x=b", "https://example.com/?x=b,c"]);
  assert.equal(params(result).get("x"), "a,b,c");
});

test("preserves empty values, including repeated empty values", () => {
  const result = merge(["https://example.com/?x&x=&x=1", "https://example.com/?x=&x=1"]);
  assert.deepEqual(params(result).getAll("x"), ["", "", "1", ""]);
});

test("preserves URL fragment and handles a URL without query parameters", () => {
  assert.equal(merge(["https://example.com/path#part"]), "https://example.com/path#part");
  assert.equal(merge(["https://example.com/path?a=1#part", "https://example.com/path#part"]),
    "https://example.com/path?a=1#part");
});

test("accepts equivalent normalized URLs", () => {
  const result = merge(["https://EXAMPLE.com:443/a?x=1", "https://example.com/a?y=2"]);
  assert.equal(result, "https://example.com/a?x=1&y=2");
});

test("rejects empty input", () => {
  assert.throws(() => merge([]), /errEmpty/);
});

test("rejects invalid URLs and unsupported protocols", () => {
  assert.throws(() => merge(["not a url"]), /errInvalid/);
  assert.throws(() => merge(["ftp://example.com/path"]), /errProtocol/);
});

test("rejects credentials in URLs", () => {
  assert.throws(() => merge(["https://user:pass@example.com/"]), /errCredentials/);
});

test("rejects different resources", () => {
  for (const other of [
    "http://example.com/p", "https://other.com/p",
    "https://example.com/other", "https://example.com/p#other"
  ]) {
    assert.throws(() => merge(["https://example.com/p", other]), /errMismatch/);
  }
});
