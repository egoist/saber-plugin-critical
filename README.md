# saber-plugin-critical

[![NPM version](https://badgen.net/npm/v/saber-plugin-critical)](https://npmjs.com/package/saber-plugin-critical) [![NPM downloads](https://badgen.net/npm/dm/saber-plugin-critical)](https://npmjs.com/package/saber-plugin-critical) [![CircleCI](https://badgen.net/circleci/github/egoist/saber-plugin-critical/master)](https://circleci.com/gh/egoist/saber-plugin-critical/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://patreon.com/egoist)

## Introduction

This plugin extracts & inlines critical-path (above-the-fold) CSS from HTML after `saber generate`, for example if you're using [Tailwind CSS](https://tailwindcss.com) or other CSS frameworks you can use this plugin to remove unused CSS.

## Install

```bash
yarn add saber-plugin-critical --dev
```

## Usage

In your `saber-config.yml` (or `.js`, `.toml` etc):

```yml
plugins:
  - resolve: saber-plugin-critical
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**saber-plugin-critical** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/saber-plugin-critical/contributors)).

> [Website](https://egoist.sh) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
