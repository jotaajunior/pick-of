import { Testable } from './types'

/**
 * Returns a testable for `oneOf`
 *
 * @param options The options
 *
 * @example
 *
 * const one = oneOf(1, 2, 3)
 *
 * one.test([1]) // true
 * one.test([5]) // false
 * one.test([1,2,3]) // true
 */
export function oneOf(...options: any[]): Testable {
  return {
    /**
     * Returns true if at least one of options are included
     * in input
     *
     * @param input The input
     */
    test(input: any[]) {
      for (const option of options) {
        if (input.includes(option)) {
          return true
        }
      }

      return false
    },
  }
}
