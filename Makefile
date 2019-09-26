GULP := $(PWD)/node_modules/.bin/gulp

.PHONY: deps
deps: node_modules

node_modules: package.json yarn.lock
	@yarn install
	@touch $@

.DEFAULT_GOAL := serve
.PHONY: serve
serve: deps ## Serve site at localhost:3000 with live reloading
	@$(GULP) --continue

.PHONY: build
build: deps ## Build site for production use
	@NODE_ENV=production $(GULP)

.PHONY: help
help: ## List available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
