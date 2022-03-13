const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel') // allows usage of multiple mongoose methods

// @desc     Get goals
// @route    GET /api/goals
// @access   Private
const getGoals =  asyncHandler(async (req,res) => {
    const goals = await Goal.find() // to query an object 

    res.status(200).json(goals) // .status to show custom status on retrieval
})

// @desc     Post goal
// @route    POST /api/goals
// @access   Private
const setGoal = asyncHandler( async (req,res) => {
    if (!req.body.text) { //if not
        res.status(400)
        throw new Error('Please add text field') // specifies error
    }

    const goal = await Goal.create({ //creates new goal
        text:req.body.text
    }
    )
    res.status(201).json(goal)
})

// @desc     Update a goal
// @route    PUT /api/goal/:id
// @access   Private
const putGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal) // access params
})

// @desc     Delete a goal
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = asyncHandler (async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('goal not found')
    }

    await goal.remove() // await waits for action to complete before continuing
    
    res.status(200).json(id=req.params.id) // access params
})

module.exports = {
    getGoals,
    setGoal,
    putGoal,
    deleteGoal
}