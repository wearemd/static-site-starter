GULP := $(PWD)/node_modules/.bin/gulp

.PHONY: deps
deps: node_modules

node_modules: package.json yarn.lock
	@yarn install
	touch $@

.DEFAULT_GOAL := serve
.PHONY: serve
serve: deps ## Serve ./site with livereload on localhost:3000
	@$(GULP) --continue

.PHONY: pug
pug: deps ## Build HTML to ./site
	@$(GULP) pug

.PHONY: sass
sass: deps ## Build CSS to ./site/css
	@$(GULP) sass

.PHONY: script
script: deps ## Build JavaScript to ./site/js
	@$(GULP) script

.PHONY: build
build: deps ## Build HTML, CSS and JavaScript to ./site
	@NODE_ENV=production $(GULP)

.PHONY: help
help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
