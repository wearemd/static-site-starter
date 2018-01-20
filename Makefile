.PHONY: serve s pug sass build help
.DEFAULT_GOAL := serve

serve: ## Serve ./site with livereload on localhost:3000
	@npm run gulp -- --continue

pug: ## Build Pug to ./site
	@npm run gulp -- pug

sass: ## Build Sass to ./site/css
	@npm run gulp -- sass

script: ## Build JS to ./site/js
	@npm run gulp -- script

build: ## Build everything to ./site
	@NODE_ENV=production npm run gulp 

help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'