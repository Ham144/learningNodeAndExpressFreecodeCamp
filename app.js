import express from 'express'
import lodash from 'lodash'

const router = express.Router()
const arr = [1[2[3[4[5]]]]]
function flating() {
    return lodash.flattenDeep(arr)
}
router.get("/route", (req,res)=> {
    console.log(`hahahaha`)
    res.send(flating)
})

export default router


