import { Testable } from './types'

/**
 * Returns a testable for `allOf`
 *
 * @param requirements The requirements
 *
 * @example
 *
 * const one = oneOf(1, 2, 3)
 *
 * one.test([1]) // true
 * one.test([5]) // false
 * one.test([1,2,3]) // true
 */
export function allOf(...requirements: any[]): Testable {
  return {
    /**
     * Returns true if all the requirements are included in the input
     *
     * @param input The input
     */
    test(input: any[]) {
      for (const option of requirements) {
        if (!input.includes(option)) {
          return false
        }
      }

      return true
    },
  }
}
