#! /usr/bin/env sh

npm run build

git subtree push "$@" --prefix dist origin gh-pages