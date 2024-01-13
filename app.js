import express from 'express'
import lodash from 'lodash'

const router = express.Router()
const arr = [1[2[3[4[5]]]]]
router.get("/home", (req,res)=> {
    res.send("hello this is home from router")
    const newArr = lodash.flattenDeep(arr)
    console.log(`mnew Array : ${newArr}`)
})

export default router


