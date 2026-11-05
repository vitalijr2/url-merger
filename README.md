# URL Merger

[Українська](#українська) | [English](#english)

## Українська

Невеликий автономний інструмент для об'єднання query-параметрів кількох URL одного ресурсу. Уся обробка виконується в браузері; сервер, зовнішні бібліотеки та збірка не потрібні.

## Локальний запуск

Відкрий `index.html` у сучасному браузері.

## Публікація через GitHub Pages

1. У репозиторії відкрий **Settings → Pages**.
2. У розділі **Build and deployment** вибери **Source: GitHub Actions**.
3. Workflow автоматично запускається після кожного push у гілку `main`; його також можна запустити вручну у вкладці **Actions**.
4. Після успішного запуску сайт буде доступний за адресою `https://<твій username>.github.io/url-merger/`.

## Правила об'єднання

- Вхідні URL повинні мати однакові протокол, host/порт, шлях і fragment.
- Різні query-ключі об'єднуються.
- Якщо значення ключа містить кому, усі значення цього ключа зливаються в список із видаленням дублікатів і збереженням порядку.
- Для ключів без коми повторювані значення залишаються окремими параметрами.
- Обробка відбувається лише локально в браузері.

---

## English

A lightweight, standalone tool for merging query parameters from multiple URLs pointing to the same resource. All processing takes place in your browser; no server, external libraries, or build step is required.

## Run locally

Open `index.html` in a modern web browser.

## Deploy with GitHub Pages

1. In your repository, open **Settings → Pages**.
2. Under **Build and deployment**, select **Source: GitHub Actions**.
3. The workflow runs automatically after every push to the `main` branch. You can also trigger it manually from the **Actions** tab.
4. Once the workflow completes successfully, the site will be available at `https://<your username>.github.io/url-merger/`.

## Merging rules

- All input URLs must have the same protocol, host/port, path, and fragment.
- Query parameters with different keys are combined.
- If any value for a key contains a comma, all values for that key are merged into a list, with duplicates removed and the original order preserved.
- For keys whose values do not contain commas, repeated values remain as separate parameters.
- All processing takes place locally in your browser.
