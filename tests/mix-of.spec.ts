import { allOf, mixOf, oneOf } from '../src'

describe('Mix of', () => {
  it('Should return true if all testables are true', () => {
    const results = [
      [1, 4, 5, 6],
      [4, 1, 8, 4, 9, 5, NaN, 6],
    ].map((inputs) => mixOf(oneOf(1), allOf(4, 5, 6)).test(inputs))

    expect(results).not.toContain(results)
  })

  it('Should return false if at least one of the testables is not true', () => {
    const results = [
      [1, 4, 5],
      [4, 5, 6],
    ].map((inputs) => mixOf(oneOf(1), allOf(4, 5, 6)).test(inputs))

    expect(results).not.toContain(true)
  })
})
