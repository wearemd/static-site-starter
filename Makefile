GULP := $(PWD)/node_modules/.bin/gulp

.PHONY: deps
deps: node_modules

node_modules: package.json yarn.lock
	@yarn install
	@touch $@

.DEFAULT_GOAL := serve
## Serve site at http://localhost:3000 with live reloading
.PHONY: serve
serve: deps
	@$(GULP) --continue

## Build site for production use
.PHONY: build
build: deps
	@NODE_ENV=production $(GULP)

define green-bold
\033[38;2;166;204;112;1m$(1)\033[0m
endef

define orange
\033[38;2;255;204;102m$(1)\033[0m\n
endef

## List available commands
.PHONY: help
help:
	@printf "$(call green-bold,static-site-starter) $(shell git describe --tags --abbrev=0)\n"
	@printf "A starter template for static sites using Make\n\n"
	@printf "$(call orange,USAGE)"
	@printf "    make <SUBCOMMAND>\n\n"
	@printf "$(call orange,SUBCOMMANDS)"
	@awk '{ \
		if ($$0 ~ /^.PHONY: [a-zA-Z\-\_0-9]+$$/) { \
			helpCommand = substr($$0, index($$0, ":") + 2); \
			if (helpMessage) { \
				printf "    $(call green-bold,%-8s)%s\n", \
					helpCommand, helpMessage; \
				helpMessage = ""; \
			} \
		} else if ($$0 ~ /^##/) { \
			if (helpMessage) { \
				helpMessage = helpMessage "\n            " substr($$0, 3); \
			} else { \
				helpMessage = substr($$0, 3); \
			} \
		} \
	}' \
	$(MAKEFILE_LIST)
