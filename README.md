# hsx

[![hsx Stability Index](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index) [![hsx on NPM](https://img.shields.io/npm/v/hsx.svg?style=flat-square)](https://www.npmjs.com/package/hsx) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Static HTML sites with JSX, Sass, and webpack (no React).

## About

* Meant for building static websites (not apps)
* Compiles JSX to HTML, without React (JSX becomes an HTML templating language)
* Create simple Components similar to React's functional stateless components
* Uses webpack2 to build the JSX

## Why?

* JSX is an incredibly powerful templating language
* "HTML in JS" feels awesome
* `webpack` is insanely powerful
* Building static sites via a module bundler offers some advantages over `gulp`/`grunt`

## What's in the Box

`hsx` is a CLI for scaffolding a new project (see the [template](https://github.com/callmecavs/hsx/tree/master/template)). A brief description of what's inside follows:

* A swag [`webpack2` setup](https://github.com/callmecavs/hsx/blob/master/template/webpack.config.js)
  * JSX to static HTML via [`string-dom`](https://github.com/callmecavs/string-dom)
  * Sass and [`postcss`](https://github.com/postcss/postcss) (with [`autoprefixer`](https://github.com/postcss/autoprefixer) and [`rucksack`](https://github.com/simplaio/rucksack))
  * Image compression via [`imagemin`](https://github.com/imagemin/imagemin)
  * Local server powered by [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)
* Minimal [`package.json`](https://github.com/callmecavs/hsx/blob/cavs/master/template/package.json) with some useful [`npm scripts`](https://github.com/callmecavs/hsx/blob/cavs/master/template/package.json#L13-L15)

## Install

```sh
$ npm i hsx -g
```

## Use

To create a new project:

```sh
# using node and npm
# install hsx globally
$ npm install hsx -g

# use the hsx command from the CLI to scaffold a project
# template files are copied to the CWD, unless a path is specified
$ hsx [path]
$ npm i
$ npm run dev
```

## First Component

Note the cue to `babel` to [transform JSX into `sd` function calls](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-jsx#custom), instead of `React.createElement`.

```javascript
import sd from 'string-dom'

/** @jsx sd */

// create a simple Div component
// children is the HTML wrapped by the element
const Div = ({ children, name }) => (
  <div class={ name }>
    { children }
  </div>
)

// render it to the DOM, with some inner content
document.body.innerHTML += (
  <Div name="site">
    <h1>hsx</h1>
    <p>This is inside the Div component!</p>
  </Div>
)
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
