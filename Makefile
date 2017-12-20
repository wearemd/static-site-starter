.PHONY: serve s jade sass build help
.DEFAULT_GOAL := help

serve: ## Serve .site/ with livereload on localhost:3000
	@gulp

s: serve

jade: ## Build Jade to .site/
	@gulp jade

sass: ## Build SASS to .site/
	@gulp sass

build: ## Build Jade/SASS to .site/
	@gulp -p

help: ## Print this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'