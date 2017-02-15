# hsx

[![hsx on NPM](https://img.shields.io/npm/v/hsx.svg?style=flat-square)](https://www.npmjs.com/package/hsx) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

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

## Note

This repo is basically just a CLI for scaffolding a new project, and the template (basically an opinionated `webpack` config). Under the hood, [`string-dom`](https://github.com/callmecavs/string-dom) is what transforms the JSX to HTML.

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

## Linting

[![JS Standard Style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
