import { oneOf } from '../src'

describe('One of', () => {
  it('Should return true for valid input', () => {
    const results = [[1, 2, 3], [-1, 2, -4], [3]].map((options) =>
      oneOf(1, 2, 3).test(options),
    )

    expect(results).not.toContain(false)
  })

  it('Should return false for invalid input', () => {
    const results = [[5], [4, 5, 6], [8]].map((options) =>
      oneOf(1, 2, 3).test(options),
    )

    expect(results).not.toContain(true)
  })
})
