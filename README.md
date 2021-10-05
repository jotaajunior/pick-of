# allone

> Simple `allOf` and `oneOf` methods.

Utilitary library for implementing `allOf` and `oneOf` methods.

## Usage

## Importing

```ts
import { oneOf, allOf, mixOf } from 'allone'
```

## `oneOf`

```ts
const one = oneOf(1, 2, 3)
```

Variable `one` will be valid if input contains `1`, `2` **OR** `3`.

```ts
valid.test([1]) // true
valid.test([1, 8, 63]) // true
valid.test([4, 5, 6]) // false
valid.test([-1, 0, 4, 5]) // false
```

## `allOf`

```ts
const all = allOf(1, 2, 3)
```

Will return true if the input contains `1`, `2` **AND** `3`.

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

`mix` will return true for any input that contains `1` and contains `4`, `5` and `6`.