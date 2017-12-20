# Static Gulp Website

## Getting started

### Prerequisites
* Node.js ~> v8.0.0
* Yarn ~> 1.0.0
* Gulp ~> 3.9.1

### Setup
`yarn install`

## Gulp tasks
You can't natively document your Gulp tasks so they are wrapped with [Make](https://www.gnu.org/software/make/) to achieve that. Type `make` to get a documented list of Gulp tasks.

### Serve
`make serve` or `make s`: Serve ./site with livereload on localhost:3000

### Build
`make build`: Build everything to ./site

## Folders
* Templates are written in [Pug/Jade](https://pugjs.org/api/getting-started.html)
  * Located in `templates/`
  * A converter HTML to Jade is available on: [http://html2jade.org](http://html2jade.org)
* Stylesheets are written in Sass
  * Located in `sass/`
* Fonts and images are located in `site/`

## Sass
To `@import` something from an installed package:

* Look at the path in the desired package 
  * Example: [bulma/sass/utilities/_all](https://github.com/jgthms/bulma/blob/master/sass/utilities/_all.sass)
* Write your import `@import bulma/sass/utilities/_all`
