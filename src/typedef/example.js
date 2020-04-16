/**
 * Some custom type we use.
 *
 * @typedef {string} OurCustomType
 */

/**
 * First Function.
 *
 * @param {OurCustomType} param Param description.
 * @return {string} Output.
 */
export function firstFunction(param) {
  return param;
}

/**
 * Second Function.
 *
 * @param {string} param Param description.
 * @return {OurCustomType} Output.
 */
function secondFunction(param) {
  return param;
}

export default secondFunction;
