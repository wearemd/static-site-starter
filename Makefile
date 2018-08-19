.PHONY: deps serve pug sass script build help
.DEFAULT_GOAL := serve

GULP := $(PWD)/node_modules/.bin/gulp

deps: node_modules

node_modules: package.json yarn.lock
	@yarn install
	touch $@

serve: deps ## Serve ./site with livereload on localhost:3000
	@$(GULP) --continue

pug: deps ## Build HTML to ./site
	@$(GULP) pug

sass: deps ## Build CSS to ./site/css
	@$(GULP) sass

script: deps ## Build JavaScript to ./site/js
	@$(GULP) script

build: deps ## Build HTML, CSS and JavaScript to ./site
	@NODE_ENV=production $(GULP)

help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
