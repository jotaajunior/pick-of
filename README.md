# allone

![](https://img.shields.io/badge/license-MIT-green)
[![codecov](https://codecov.io/gh/jotaajunior/allone/branch/main/graph/badge.svg?token=S0PI1DT4UA)](https://codecov.io/gh/jotaajunior/allone)

> Simple `allOf`, `oneOf` and `mixOf` methods.

Utilitary library containing methods for testings collections.

## Install

```
$ yarn add allone
```

## Usage

## Importing

```ts
import { oneOf, allOf, mixOf } from 'allone'
```

## `oneOf`

`oneOf` accepts an array of options and returns an object with a `test` function that returns `true` if at least one of options are present in the input.

```ts
const one = oneOf(1, 2, 3)
```

`one.test` will return true input contains `1`, `2` **OR** `3`.

```ts
valid.test([1]) // true
valid.test([1, 8, 63]) // true
valid.test([4, 5, 6]) // false
valid.test([-1, 0, 4, 5]) // false
```

## `allOf`

`allOf` accepts an array of requirements and returns an object with a `test` function that returns `true` if all requirements are present in the input.


```ts
const all = allOf(1, 2, 3)
```

`all.test` will return true if the input contains `1`, `2` **AND** `3`.

```ts
all.test([1]) // false
all.test([1, 2, 3]) // true
all.test([1, 2, 3, 4]) // true
```

## `mixOf`

`mixOf` accepts an array of testables as arguments and returns an object with a `test` function that returns `true` if all testables are true.

```ts
const mix = mixOf(
  oneOf(1),
  allOf(4, 5, 6)
)
```

`mix.test` will return true for any input that contains `1` and contains `4`, `5` and `6`.

---

<div align="center">
  Made with ❤ by <a href="https://github.com/jotaajunior">Jota</a>.
</div>