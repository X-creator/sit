# Команды Git

- [Базовая настройка](#базовая-настройка)
- [Создание Git-репозитория](#создание-git-репозитория)
- [Работа с файлами](#работа-с-файлами)
- [Другие частые команды](#другие-частые-команды)

## Базовая настройка

- `git config --list` — посмотреть все установленные настройки.
- `git config --global user.name "Ваше имя"` — задать имя пользователя.
- `git config --global user.email "Ваш email"` — задать email.
- `git config --global init.defaultBranch main` — установить имя `main` для вашей ветки по умолчанию.

## Создание Git-репозитория

- `git init` — создаёт в текущем каталоге новый Git-репозиторий.
- `git clone <url>` — клонирование существующего Git-репозитория.

## Работа с файлами

- `git add` — это многофункциональная команда, она используется для добавления под версионный контроль новых файлов, для индексации изменений, а также для других целей, например для указания файлов с исправленным конфликтом слияния. Принимает параметром путь к файлу или каталогу, если это каталог, команда рекурсивно добавляет все файлы из указанного каталога в индекс.
- `git rm` — используется для удаления файлов из индекса и рабочей директории. Она похожа на git add с тем лишь исключением, что она удаляет, а не добавляет файлы для следующего коммита.
    - `git rm --cached` — удаляет файлы из индекса, но не из рабочей директории.
- `git mv` — перемещает файл из одного каталога в другой (или для переименования файла).

## Другие частые команды

- `git commit` — зафиксирует индексированные изменения.
- `git status` — показывает состояния файлов.
- `git diff` — отображает изменения.
- `git log` — отображает историю коммитов.
- `git show` — отображает содержимое коммита. 
