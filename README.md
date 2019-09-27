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
```makefile
# Serve site at localhost:3000 with live reloading

make
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Build
```makefile
# Build site for production use

make build
```

💡 This command will also **install dependencies** on first run and when `package.json` or `yarn.lock` files are updated.

### Help
```makefile
# List available commands

make help
```

## 🗄️ Project structure


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
