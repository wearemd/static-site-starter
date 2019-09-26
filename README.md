<h1 align="center">Static site starter</h1>
<p align="center"><strong>Static site starter</strong> is a starter template for static sites.</p>

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

## 🥞 Stack
- [**Babel**](https://babeljs.io)
- [**Browsersync**](https://www.browsersync.io)
- [**Gulp**](https://gulpjs.com)
- [**minireset.css**](https://jgthms.com/minireset.css/)
- [**Pug**](https://pugjs.org)
- [**Sass**](https://sass-lang.com) 
- [**Webpack**](https://webpack.js.org)

## ⌨️ Commands 
### Serve
```bash
# Serve site at localhost:3000 with live reloading
make
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Build
```bash
# Build site for production use
make build
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Help
```bash
# List available commands
make help
```

## 🗄️ Project structure
```
.
├── gulp                     # Gulp tasks and configuration
│   ├── env                  # Gulp configuration file per environment
│   │   ├── dev.js           # Development environment configuration file
│   │   └── prod.js          # Production environment configuration file
│   ├── helpers              # Gulp helpers folder
│   │   └── url.js           # Helper for URL creation
│   ├── tasks                # Gulp tasks folder
│   │   ├── pug.js           # Pug task declaration
│   │   ├── sass.js          # Sass task declaration
│   │   └── script.js        # JavaScript task declaration
│   ├── webpack              # Webpack configuration files
│   │   ├── common.js        # Configuration shared between dev and prod environments
│   │   ├── dev.js           # Development environment configuration file
│   │   └── prod.js          # Production environment configuration file
│   └── index.js             # Script to invoke correct environment 
│                            # and dynamically load tasks from tasks folder
│
├── js                       # JavaScript source files
│   ├── foo.js               # Sample JavaScript file imported in scripts.js
│   └── scripts.js           # Main JavaScript file used as entry by Webpack
│
├── sass                     # Sass stylesheets folder 
│   ├── dev                  # Development stylesheets folder
│   │   ├── _all.sass        # Sass file to register all development stylesheets
│   │   └── shame.sass       # Here we put WIP style or dirty hacks
│   │                        # See csswizardry.com/2013/04/shame-css/
│   ├── fonts                # Fonts stylesheets folder
│   │   └── _all.sass        # Sass file to register all fonts stylesheets
│   ├── utilities            # Utilities style folder
│   │   ├── _all.sass        # Sass file to register all utilities stylesheets
│   │   └── functions.sass   # Sass functions
│   └── style.sass           # Main Sass file used as source by Gulp
│
├── site                     # Site folder
│   ├── css                  # Minified, optimized and compiled CSS
│   ├── fonts                # Fonts folder
│   ├── images               # Images folder
│   └── js                   # Minified, optimized and compiled JavaScript
│
├── templates                # Pug templates folder
│   ├── index.pug            # Home page
│   ├── layouts              # Layout templates folder
│   │   └── default.pug      # Default layout template
│   ├── page.pug             # Sample page
│   └── partials             # Partial templates folder
│       └── unicorn.pug      # Sample partial featuring an unicorn image
│
├── .tool-versions           # Tells asdf which version to use locally for each language
├── gulpfile.js              # Gulp configuration
├── Makefile                 # Defines commands for this project
└── package.json             # Defines libraries and dependencies
```

## 🍱 Cache busting
Our strategy for cache busting is to automatically append a `?v=[version]` to each asset query. When you need to bust the cache, simply update [`version` in `package.json`](package.json#L3).

In Pug templates an `assetVersion` variable is available. Usage:

```pug
img(src="images/unicorn.jpg" + assetVersion, alt="")
```

In Sass files an `urlVersion` function is available. Usage:

```sass
background-image: urlVersion("/images/unicorn.jpg")
```

## 🤜🤛 Contributing
Contributions, issues and feature requests are welcome!

## 📄 License
Static site starter is licensed under the [GNU General Public License v3.0](LICENSE).
