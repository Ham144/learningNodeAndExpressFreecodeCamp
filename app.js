const lodash = require('lodash')
const arrays = [1[2[3[4]]]]
const newArr = lodash.flattenDeep(arrays)

console.log(newArr)
