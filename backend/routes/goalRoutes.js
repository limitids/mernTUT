const express = require('express')
const router = express.Router()
const { getGoals, deleteGoal, putGoal, setGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal) // simplifies code below

//router.get('/', getGoals)

//router.post('/',setGoal)

router.route('/:id').put(putGoal).delete(deleteGoal)

module.exports = router
