
// BASE UNIQ ***********************************************

import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import cacheHas from './cacheHas.js'
import createSet from './createSet.js'
import setToArray from './setToArray.js'

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200

/**
 * The base implementation of `uniqBy`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  let index = -1
  let includes = arrayIncludes
  let isCommon = true

  const { length } = array
  const result = []
  let seen = result

  if (comparator) {
    isCommon = false
    includes = arrayIncludesWith
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    const set = iteratee ? null : createSet(array)
    if (set) {
      return setToArray(set)
    }
    isCommon = false
    includes = cacheHas
    seen = new SetCache
  }
  else {
    seen = iteratee ? [] : result
  }
  outer:
  while (++index < length) {
    let value = array[index]
    const computed = iteratee ? iteratee(value) : value

    value = (comparator || value !== 0) ? value : 0
    if (isCommon && computed === computed) {
      let seenIndex = seen.length
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer
        }
      }
      if (iteratee) {
        seen.push(computed)
      }
      result.push(value)
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed)
      }
      result.push(value)
    }
  }
  return result
}

export default baseUniq

// CREATE SET ***********************************************

import setToArray from './setToArray.js'

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
const createSet = (Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY)
  ? (values) => new Set(values)
  : () => {}

export default createSet

// SET TO ARRAY ***********************************************

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  let index = -1;
  const result = new Array(set.size);

  set.forEach(value => {
    result[++index] = value;
  });
  return result;
}

export default setToArray;
