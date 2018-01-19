.PHONY: serve s pug sass build help
.DEFAULT_GOAL := serve

serve: ## Serve ./site with livereload on localhost:3000
	@gulp

pug: ## Build Pug to ./site
	@gulp pug

sass: ## Build Sass to ./site/css
	@gulp sass

script: ## Build JS to ./site/js
	@gulp script

build: ## Build everything to ./site
	@NODE_ENV=production gulp 

help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'