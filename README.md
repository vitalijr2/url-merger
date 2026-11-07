# URL Merger

[Українська](#українська) | [English](#english)

**Live app / Вебзастосунок:** https://vitalijr2.github.io/url-merger/

## Українська

**URL Merger** — автономний вебінструмент для об'єднання query-параметрів кількох URL одного ресурсу. Обробка відбувається локально у браузері: введені посилання не надсилаються на сервер. Для роботи не потрібні реєстрація, бекенд, сторонні бібліотеки чи збірка.

### Можливості

- Окрема сторінка [«Про застосунок»](https://vitalijr2.github.io/url-merger/about.html) з можливостями, гарячими клавішами, конфіденційністю та поточною версією.

- Вставлення одного або кількох URL, по одному на рядок; порожні рядки ігноруються.
- Автоматичний перенос після вставлення коректних HTTP/HTTPS URL наприкінці поля або в порожньому рядку. Ручне введення тексту не змінюється.
- Об'єднання параметрів зі збереженням порядку та видаленням дублікатів між різними URL за правилами нижче.
- Перегляд параметрів результату: назва, кількість входжень і значення, включно з порожніми.
- Вибір параметрів за допомогою чекбоксів; кнопки **Усі** та **Жодного**. Результат оновлюється після кожної зміни.
- Вставлення тексту з буфера обміну кнопкою (за дозволом браузера), копіювання результату поруч із ним та відкриття в новій вкладці. Окреме очищення результату або всіх введених URL разом із результатом.
- Гарячі клавіші: **Ctrl/⌘+Enter** — обʼєднати URL, **Ctrl/⌘+Shift+C** — скопіювати результат, **Ctrl/⌘+Shift+Backspace** — очистити результат. Перехід між елементами керування — клавішею **Tab**.
- Приклад вхідних URL та очищення поля.
- Інтерфейс 11 мовами: українська, англійська, польська, спрощена китайська, японська, німецька, французька, іспанська, португальська, суахілі та хауса. Обрана мова зберігається в браузері.

### Як скопіювати URL усіх відкритих вкладок

Якщо потрібні адреси з кількох вкладок браузера, необов'язково копіювати кожну окремо:

- **Vivaldi:** скористайся вбудованою можливістю копіювання посилань із вибраних вкладок (назва команди залежить від версії та контекстного меню).
- **Chrome, Edge, Brave:** встанови розширення для копіювання URL вкладок, наприклад *Copy All URLs*.
- **Firefox:** скористайся розширенням для копіювання адрес вкладок, наприклад *Copy Tabs*.

Скопіюй адреси **у форматі звичайного тексту, по одному URL на рядок**, і встав їх у URL Merger. Якщо розширення дозволяє, вибери лише вкладки поточного вікна.

**Важливо:** URL Merger не потребує розширень і не має доступу до вкладок браузера. Він об'єднує лише URL, які ти сам вставиш. Для успішного об'єднання адреси мають відповідати [правилам об'єднання](#правила-обєднання).

### Правила об'єднання

1. Підтримуються HTTP та HTTPS URL без вбудованих імен користувачів і паролів.
2. Усі URL повинні мати однакові протокол, домен/порт, шлях і фрагмент (`#...`). Порівняння виконується після нормалізації через браузерний `URL`.
3. Параметри з різними назвами об'єднуються.
4. Якщо хоча б одне значення параметра містить кому, значення цього параметра об'єднуються в один список через кому. Однакові непорожні елементи з різних URL прибираються; повтори в межах одного URL зберігаються.
5. Якщо жодне значення параметра не містить коми, повторювані входження залишаються окремими. Однакові непорожні значення прибираються лише між різними URL.
6. Порожні значення зберігаються; параметри без знака `=` інтерпретуються як параметри з порожнім значенням. У випадку списків із комами порожні елементи входять до спільного списку.

### Локальний запуск

Відкрий `index.html` у сучасному браузері. Залежностей та кроку збірки немає.

### Публікація через GitHub Pages

1. Відкрий **Settings → Pages** у репозиторії.
2. Вибери **Build and deployment → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` запускається після push у `main` або вручну через **Actions**.
4. Опублікований застосунок:  
   `https://<твій username>.github.io/url-merger/`

---

## English

**URL Merger** is a standalone browser tool for combining query parameters from multiple URLs pointing to the same resource. All URL processing happens locally in your browser: input URLs are not sent to a server. No account, backend, external libraries, or build step required.

### Features

- A dedicated [About page](https://vitalijr2.github.io/url-merger/about.html) with features, keyboard shortcuts, privacy information, and the deployed version.

- Paste one or more URLs, one per line; blank lines are ignored.
- Automatic line break after pasting valid HTTP/HTTPS URLs at the end of the input or on an empty line. Typing is unaffected.
- Merge query parameters in order, deduplicating values across different URLs according to the rules below.
- Inspect result parameters with their names, occurrence counts, and values (including empty values).
- Include or exclude parameter names using checkboxes, or use **All** / **None**; the output updates immediately.
- Paste text from the clipboard with a button (subject to browser permissions), copy the highlighted result beside it, or open it in a new tab. Clear only the result, or clear both the input URLs and the result.
- Keyboard shortcuts: **Ctrl/⌘+Enter** to merge, **Ctrl/⌘+Shift+C** to copy the result, and **Ctrl/⌘+Shift+Backspace** to clear the result. Use **Tab** to navigate controls.
- Load sample URLs or clear the input.
- UI in 11 languages: Ukrainian, English, Polish, Simplified Chinese, Japanese, German, French, Spanish, Portuguese, Swahili, and Hausa. The selected language is saved in the browser.

### How to copy URLs from open tabs

To collect URLs from several browser tabs, you don't have to copy each address individually:

- **Vivaldi:** use its built-in option to copy links from selected tabs (the command name may vary by version and context menu).
- **Chrome, Edge, Brave:** install a tab URL copying extension, such as *Copy All URLs*.
- **Firefox:** use a tab URL copying extension, such as *Copy Tabs*.

Copy the addresses **as plain text, one URL per line**, and paste them into URL Merger. If the extension offers a choice, select tabs from the current window only.

**Note:** URL Merger requires no extensions and cannot access your browser tabs. It processes only the URLs you paste. To merge successfully, the URLs must satisfy the [merging rules](#merging-rules).

### Merging rules

1. HTTP and HTTPS URLs are supported; embedded usernames and passwords are rejected.
2. All URLs must have the same protocol, host/port, path, and fragment (`#...`), compared after browser `URL` normalization.
3. Different query parameter names are combined.
4. If any value of a parameter contains a comma, its values are combined into one comma-separated list. Duplicate nonempty items across different URLs are removed; repeats within the same URL are preserved.
5. Otherwise, repeated parameter occurrences stay separate. Duplicate nonempty values are removed only across different URLs.
6. Empty values are preserved; parameters without `=` are interpreted as having an empty value. In comma-separated lists, empty items become part of the combined list.

### Run locally

Open `index.html` in a modern browser. No dependencies or build process are needed.

### Deploy with GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Choose **Build and deployment → Source: GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` or manually from **Actions**.
4. Published app:  
   `https://<your username>.github.io/url-merger/`

---

[![Hits](https://hits.sh/github.com/vitalijr2/url-merger.svg?color=9f9f9f&labelColor=464646&logo=github)](https://hits.sh/github.com/vitalijr2/url-merger/)
