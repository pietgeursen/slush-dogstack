# slush-dogstack

[![Build Status](https://secure.travis-ci.org/ahdinosaur/slush-pages.png?branch=master)](https://travis-ci.org/ahdinosaur/slush-pages) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-pages.png)](http://badges.enytc.com/for/npm/slush-pages)

> a slush generator for dogstack static pages using browserify

## Getting Started

Install `slush` and `slush-dogstack` globally:

```bash
$ npm install -g slush slush-dogstack
```

## Usage

### Create a new project:

Create a new folder for your project:

```bash
$ mkdir my-slush-pages
```

Run the generator from within the new folder:

```bash
$ cd my-slush-pages && slush dogstack
```

Woo! Check out the generated README for more usage information.

### Create a new domain
In the root of your project:
```bash
slush dogstack:domain [<domain-name>]
```

### Create a new action in a domain
Creates a new set of async actions including a thunk for a given 'task.'
Where a 'task' would be `create` or `update` etc...

In the root of your project:
```bash
slush dogstack:action
```


## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).
