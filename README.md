# Cacao cultura: автоматизация с Playwright

## Описание
Репозиторий содержит автотесты для веб-приложения [CACAO CULTURA](https://cacaocultura.ru/) (интернет-магазин по продаже шоколада). 

Технологии: фреймворк [Playwright](https://playwright.dev/), язык TypeScript.

#
## Тестовое покрытие
### E2E тесты (test)
1. Login/Logout
2. Переход по ссылкам header/ footer
3. Поиск
4. Добавление товара в корзину

 
На текущий момент тестами покрыты только базовые сценарии перечисленных функциональностей. По каждой функциональности требуется расширение тестового покрытия. 


## Настройка проекта локально
1. Установить [Node.js](https://nodejs.org/en/download/) и менеджер пакетов npm.
2. Клонировать этот репозиторий и открыть его в VS Code
3. Выполнить в терминале VS Code следующие команды для установки Playwright:
```
$ npm install @playwright/test
$ npx playwright install
```
#
## Запуск тестов
Запуск тестов производится **локально**. 

- Запуск всех тестов (в режиме headless по умолчанию):
```
npx playwright test
```
- Запуск тестов в headfull режиме (т.е. с запуском браузера):
```
npx playwright test --headed
```
- Запуск тестов во всех браузерах в headless режиме:
```
npx playwright test --browser=all
```
- Запуск в Firefox браузере в headfull режиме:
```
npx playwright test --browser=firefox --headed
```
- Запуск конкретного файла с тестами:
```
npx playwright test tests/example.spec.ts
```
