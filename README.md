# URL Merger

[Українська](#українська) | [English](#english)

**Live app / Вебзастосунок:** https://vitalijr2.github.io/url-merger/

## Українська

**URL Merger** — автономний вебінструмент для об'єднання query-параметрів кількох URL одного ресурсу. Обробка відбувається локально у браузері: введені посилання не надсилаються на сервер. Для роботи не потрібні реєстрація, бекенд, сторонні бібліотеки чи збірка.

### Можливості

- Вставлення одного або кількох URL, по одному на рядок; порожні рядки ігноруються.
- Автоматичний перенос після вставлення коректних HTTP/HTTPS URL наприкінці поля або в порожньому рядку. Ручне введення тексту не змінюється.
- Об'єднання параметрів зі збереженням порядку та видаленням дублікатів між різними URL за правилами нижче.
- Перегляд параметрів результату: назва, кількість входжень і значення, включно з порожніми.
- Вибір параметрів за допомогою чекбоксів; кнопки **Усі** та **Жодного**. Результат оновлюється після кожної зміни.
- Копіювання результату, відкриття в новій вкладці та завантаження як `merged-url.txt`.
- Приклад вхідних URL та очищення поля.
- Інтерфейс 11 мовами: українська, англійська, польська, спрощена китайська, японська, німецька, французька, іспанська, португальська, суахілі та хауса. Обрана мова зберігається в браузері.

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

- Paste one or more URLs, one per line; blank lines are ignored.
- Automatic line break after pasting valid HTTP/HTTPS URLs at the end of the input or on an empty line. Typing is unaffected.
- Merge query parameters in order, deduplicating values across different URLs according to the rules below.
- Inspect result parameters with their names, occurrence counts, and values (including empty values).
- Include or exclude parameter names using checkboxes, or use **All** / **None**; the output updates immediately.
- Copy the resulting URL, open it in a new tab, or download it as `merged-url.txt`.
- Load sample URLs or clear the input.
- UI in 11 languages: Ukrainian, English, Polish, Simplified Chinese, Japanese, German, French, Spanish, Portuguese, Swahili, and Hausa. The selected language is saved in the browser.

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
