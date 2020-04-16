/**
 * Some custom type we use.
 *
 * @typedef {string} OurCustomType
 */



function utilityFunction( content ){
  return content;
}

/**
 * First Function.
 *
 * @param {OurCustomType} param Param description.
 * @return {string} Output.
 */
export function firstFunction(param) {
  return utilityFunction(param);
}

/**
 * Second Function.
 *
 * @param {string} param Param description.
 * @return {OurCustomType} Output.
 */
function secondFunction(param) {
  return utilityFunction(param);
}

export default secondFunction;
