import { Testable } from './types'

/**
 * Returns a testable for a mix of testables
 *
 * @param testables The testables
 * @example
 *
 * const mix = mixOf(oneOf(1, 2, 3), allOf(4, 5, 6))
 *
 * mix.test(1, 4, 5, 6) // true
 * mix.test(1, 7, 8, 9) // false
 * mix.test(4, 5, 6) // false
 */
export function mixOf(...testables: Testable[]): Testable {
  return {
    /**
     * Returns true if all the testables are true for the input
     *
     * @param input the input
     */
    test(input: any[]) {
      for (const testable of testables) {
        if (!testable.test(input)) {
          return false
        }
      }

      return true
    },
  }
}
