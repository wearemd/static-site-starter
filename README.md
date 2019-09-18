<h1 align="center">Static site starter</h1>
<p align="center"><strong>Static site starter</strong> is a starter template for static sites<br>featuring Gulp, Pug, Sass and Webpack.</p>

## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

## 🥞 Stack
- [**Babel**](https://babeljs.io)
- [**Pug**](https://pugjs.org)
- [**Sass**](https://sass-lang.com) 
- [**Webpack**](https://webpack.js.org)

## ⌨️ Commands 
### Serve
Serve `site/` with livereload on [localhost:3000](http://localhost:3000).

```
make
``` 

💡 This command will also install dependencies on first run and when `package.json` or `yarn.lock` files are updated.

### Build
Build HTML, CSS and JavaScript to `site/`.

```
make buid
```

### Help
Display a list of available commands.

```
make help
```

💡 Because you can't natively document Gulp tasks, they are wrapped with [Make](https://www.gnu.org/software/make/).

## 🗄️ Project structure
```
.
├── gulp                         # Gulp tasks and configuration
│   ├── env                      # Gulp configuration file per environment
│   │   ├── dev.js               # Development environment configuration file
│   │   └── prod.js              # Production environment configuration file
│   ├── helpers                  # Gulp task helpers 
│   │   └── url.js               # Helper for URL creation
│   ├── tasks                    # Gulp tasks folder
│   │   ├── pug.js               # Pug task declaration
│   │   ├── sass.js              # Sass task declaration
│   │   └── script.js            # JavaScript task declaration
│   ├── webpack                  # Webpack configuration files
│   │   ├── webpack.common.js   # Configuration shared between dev and prod environment
│   │   ├── webpack.dev.js       # Development environment configuration file
│   │   └── webpack.prod.js      # Production environment configuration file
│   └── index.js                 # Script to invoke correct environment and 
│                                # dinamically load tasks from 
│
├── js                           # JavaScript source files
│   ├── foo.js                   # Sample JavaScript file imported in scripts.js
│   └── scripts.js               # Main JavaScript file used as entry by Webpack
│
├── sass                         # Sass stylesheets folder 
│   ├── dev                      # Development stylesheets folder
│   │   ├── _all.sass            # Sass file to register all development styles
│   │   └── shame.sass           # Here we put WIP style or dirty hacks
│   │                            # See csswizardry.com/2013/04/shame-css/
│   ├── fonts                    # Fonts stylesheets folder
│   │   └── _all.sass            # Sass file to register all fonts stylesheets
│   ├── utilities                # Utilities style folder
│   │   ├── _all.sass            # Sass file to register all utilities stylesheets
│   │   └── functions.sass       # Sass functions
│   └── style.sass               # Main Sass file used by as source by Gulp
│
├── site                         # Site folder
│   ├── css                      # Minified, optimized and compiled Sass
│   ├── fonts                    # Fonts folder
│   ├── images                   # Images folder
│   └── js                       # Minified, optimized and compiled JavaScript
│
├── templates                    # Pug templates folder
│   ├── index.pug                # Home page
│   ├── layouts                  # Layouts templates folder
│   │   └── default.pug          # Default layout template
│   ├── page.pug                 # Simple page
│   └── partials                 # Partials templates folder
│       └── unicorn.pug          # Unicorn partial 
│
├── .tool-versions               # Tells asdf which version to use locally for each language
├── gulpfile.js                  # Gulp configuration
├── Makefile                     # Defines commands for this project
└── package.json                 # Defines libraries and dependencies 
```

## 👓 Sass
To `@import` something from an installed package:
1. Look at the path in the desired package, for example: [`bulma/sass/utilities/_all`](https://github.com/jgthms/bulma/blob/master/sass/utilities/_all.sass)
2. Write your import: `@import bulma/sass/utilities/_all`

## 🤜🤛 Contributing
Contributions, issues and feature requests are welcome!

## 📝 License
Static site starter is licensed under the [GNU General Public License v3.0](LICENSE).
