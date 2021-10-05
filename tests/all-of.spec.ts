import { allOf } from '../src'

describe('All of', () => {
  it('Should return true for valid input', () => {
    const results = [
      [1, 2, 3],
      [1, 2, 3, 4],
      [NaN, -1, 2, 3, 4, 1],
    ].map((options) => allOf(1, 2, 3).test(options))

    expect(results).not.toContain(false)
  })

  it('Should return false for invalid input', () => {
    const results = [[1], [1, 2, 4, 5], [-1, 2, 3, 4, 4]].map((options) =>
      allOf(1, 2, 3).test(options),
    )

    expect(results).not.toContain(true)
  })
})
