# Static site starter
A starter template for static sites featuring Gulp, Pug, Sass and Webpack.

## Getting started

### Prerequisites
* Node.js ~> v8.0.0
* Yarn ~> 1.0.0
* Gulp ~> 3.9.1

### Setup
`yarn install`

## Gulp tasks
Because you can't natively document Gulp tasks, they are wrapped with [Make](https://www.gnu.org/software/make/). Type `make help` to get a documented list of available tasks.

### Serve
`make`: Serve `./site` with livereload on [localhost:3000](http://localhost:3000)

### Build
`make build`: Build HTML, CSS and JavaScript to `./site`

## Folders
* `templates`: [Pug](https://pugjs.org/api/getting-started.html) templates
  * An [HTML to Pug converter](http://html2jade.org) can be useful
* `sass`: CSS is compiled with [Sass](https://sass-lang.com)
* `js`: JavaScript is compiled with [Babel](https://babeljs.io)
* `site`: Put your fonts and images there

## Sass
To `@import` something from an installed package:
1. Look at the path in the desired package, for example: [`bulma/sass/utilities/_all`](https://github.com/jgthms/bulma/blob/master/sass/utilities/_all.sass)
2. Write your import: `@import bulma/sass/utilities/_all`
