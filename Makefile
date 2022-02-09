# Установка зависимостей проекта
install:
	npm ci

# Запуск игры brain-games
brain-games:
	node bin/brain-games.js

# Запуск игры brain-even
brain-even:
	node bin/brain-even.js

# Запуск игры brain-calc
brain-calc:
	node bin/brain-calc.js

# Запуск игры brain-gcd
brain-gcd:
	node bin/brain-gcd.js

# 3апуск игры brain-progression
brain-progression:
	node bin/brain-progression.js

# Запуск игры brain-prime
brain-prime:
	node bin/brain-prime.js

# Тестовая публикация пакета
publish:
	npm publish --dry-run

# Запуск линтера eslint
lint:
	npx eslint .

# Запуск линтера eslint с --fix
lint-fix:
	npx eslint --fix .
