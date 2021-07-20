develop:
	npx webpack serve

deploy:
	make build && npx surge ./dist -d $(d)

install:
	npm ci

build:
	rm -rf dist
	NODE_ENV=production npx webpack

test:
	npm test

lint:
	npx eslint .

.PHONY: test
