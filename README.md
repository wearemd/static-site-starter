<p align="center">
  <img width="600px" src="README-header.gif" alt="">
</p>
<p align="center">
  <strong>Static site starter</strong> is a starter template for static sites.
  <br>
  <b>Stack:</b>
  <b><a href="https://babeljs.io">Babel</a></b>,
  <b><a href="https://www.browsersync.io">Browsersync</a></b>,
  <b><a href="https://gulpjs.com">Gulp</a></b>,
  <b><a href="https://jgthms.com/minireset.css/">minireset.css</a></b>,
  <b><a href="https://pugjs.org">Pug</a></b>,
  <b><a href="https://sass-lang.com">Sass</a></b>,
  <b><a href="https://webpack.js.org">Webpack</a></b>.
</p>

- - -

## 📝 Table of contents
- [**Prerequisites**](#prerequisites)
- [**Commands**](#commands)
- [**Project structure**](#project-structure)
- [**Layout structure**](#layout-structure)
- [**Cache busting**](#cache-busting)
- [**Setting meta tags**](#setting-meta-tags)
- [**Authors**](#authors)
- [**Contributing**](#contributing)
- [**License**](#license)

- - -

<a name="prerequisites"></a>
## ⚙️ Prerequisites
- [**asdf**](https://github.com/asdf-vm/asdf)
- [**Make**](https://www.gnu.org/software/make/)
- [**Node.js**](https://nodejs.org)
- [**Yarn**](https://yarnpkg.com)

<a name="commands"></a>
## ⌨️ Commands 
### Serve
```makefile
## Serve site at http://localhost:3000 with live reloading

make
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Build
```makefile
## Build site for production use

make build
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Help
```makefile
## List available commands

make help
```

<a name="project-structure"></a>
## 🗄️ Project structure
```
.
├── gulp                   # GULP/WEBPACK CONFIGURATION AND TASKS
│   ├── env                # Gulp configuration per environment
│   │   ├── dev.js         # Development environment
│   │   └── prod.js        # Production environment
│   │
│   ├── helpers            # Gulp helpers
│   │   └── url.js         # Helper for URL creation
│   │
│   ├── tasks              # Gulp tasks
│   │   ├── pug.js         # Pug task declaration
│   │   ├── sass.js        # Sass task declaration
│   │   └── script.js      # JavaScript task declaration
│   │
│   ├── webpack            # Webpack configuration per environment
│   │   ├── common.js      # Shared between development and production environments
│   │   ├── dev.js         # Development environment
│   │   └── prod.js        # Production environment
│   │
│   └── index.js           # Script to invoke proper environment and dynamically load Gulp tasks
│
│
├── js                     # JAVASCRIPT SOURCE FILES
│   ├── foo.js             # Sample script imported in scripts.js
│   └── scripts.js         # Main JavaScript file used as entry by Webpack
│
│
├── sass                   # SASS STYLE
│   ├── base               # Base style
│   │   ├── _all.sass      # Importing all stylesheets
│   │   └── generic.sass   # Style for generic elements (html, body, etc.)
│   │
│   ├── dev                # Development utilities
│   │   ├── shame.sass     # WIP style or dirty hacks
│   │   └── structure.sass # Highlighting site structure (import commented by default)
│   │
│   ├── fonts              # Fonts style
│   │   ├── _all.sass      # Importing all stylesheets
│   │   └── roboto.sass    # @font-face style for Roboto
│   │
│   ├── layout             # Layout style
│   │   ├── _all.sass      # Importing all stylesheets
│   │   └── layout.sass    # Very light starter style for structure elements and titles
│   │
│   ├── utilities          # Utilities
│   │   ├── _all.sass      # Importing all stylesheets
│   │   ├── functions.sass # Functions available in all .sass files
│   │   ├── mixins.sass    # Mixins available in all .sass files
│   │   └── variables.sass # Variables available in all .sass files
│   │
│   └── style.sass         # Main Sass file used as source by Gulp
│
│
├── site                   # SITE BUILD DESTINATION FOLDER
│   ├── fonts              # Font assets
│   │   └── roboto         # Roboto from Google Fonts (TTF, WOFF, WOFF2)
│   │
│   └── images             # Image assets
│       ├── favicon.ico    # Favicon (placeholder by default)
│       ├── og-image.jpg   # Image for og:image meta tag (placeholder by default)
│       └── unicorn.jpg    # Sample image
│
│
├── templates              # PUG TEMPLATES
│   ├── layouts            # Layouts
│   │   └── default.pug    # Default layout
│   │
│   ├── partials           # Partials
│   │   └── unicorn.pug    # Sample partial featuring an image
│   │
│   ├── index.pug          # Home page
│   └── page.pug           # Sample page
│
│
├── .babelrc               # Presets and plugins to use, used by Babel
├── .gitignore             # Files and folders ignored by Git
├── .tool-versions         # Which version to use locally for each language, used by asdf
├── gulpfile.js            # Gulp configuration
├── LICENSE                # License
├── Makefile               # Commands for this project
├── package.json           # JavaScript dependencies, used by Yarn
├── README-header.gif      # README header image
├── README.md              # Project documentation
└── yarn.lock              # Tracking exact versions for JavaScript dependencies, used by Yarn
```

<a name="layout-structure"></a>
## 🖥 Layout structure
The starter comes with a simple layout, structured like the following:
```pug
// Wrapper
.wrapper
  // Header
  header.header
    .container
      …

  // Main
  main.main
    // Section (repeatable)
    section.section
      .container
        …

  // Footer
  footer.footer
    .container
      …
```

There is also a **Sass utility allowing to highlight the site structure** (pretty useful in development). Simply uncomment [`@import "dev/structure.sass"` in `style.sass`](sass/style.sass#L30) if you want to use it.

<a name="cache-busting"></a>
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

<a name="setting-meta-tags"></a>
## ⚙️ Setting meta tags
It is required to do some configuration to get `title`, `description` and `og:` meta tags ready for production. You can read more about OG meta tags in the [Open Graph protocol documentation](https://ogp.me).

**Step 1:** Set the following variables in [`default.pug`](templates/layouts/default.pug#L1):

```pug
- var siteTitle = "Site title";
- var siteDescription = "Site description";
- var baseUrl = "https://site-url.com";
```

**Step 2:** Set `pageTitle` variable for each page. For example in [`index.pug`](templates/index.pug#L4):

```pug
- pageTitle = "Home";
```

**Step 3:** Customize the [OG image](site/images/og-image.jpg).

<a name="authors"></a>
## ✍️ Authors
- [**@Awea**](https://github.com/Awea) - Idea and initial work
- [**@mmaayylliiss**](https://github.com/mmaayylliiss) - Design, code/documentation review

<a name="contributing"></a>
## 🤜🤛 Contributing
**Contributions, issues and feature requests are welcome!** See the list of [contributors](../../graphs/contributors) who participated in this project.

<a name="license"></a>
## 📄 License
**Static site starter** is licensed under the [GNU General Public License v3.0](LICENSE).
