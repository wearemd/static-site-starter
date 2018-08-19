.PHONY: serve pug sass script build help
.DEFAULT_GOAL := serve

GULP := $(PWD)/node_modules/.bin/gulp

serve: ## Serve ./site with livereload on localhost:3000
	@$(GULP) --continue

pug: ## Build HTML to ./site
	@$(GULP) pug

sass: ## Build CSS to ./site/css
	@$(GULP) sass

script: ## Build JavaScript to ./site/js
	@$(GULP) script

build: ## Build HTML, CSS and JavaScript to ./site
	@NODE_ENV=production $(GULP)

help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
