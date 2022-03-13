const asyncHandler = require('express-async-handler')


// @desc     Get goals
// @route    GET /api/goals
// @access   Private
const getGoals =  asyncHandler(async (req,res) => {
    res.status(200).json({message:'get goals'}) // .status to show custom status on retrieval
})

// @desc     Post goal
// @route    POST /api/goals
// @access   Private
const setGoal = asyncHandler( async (req,res) => {
    if (!req.body.text) { //if not
        res.status(400)
        throw new Error('Please add text field') // specifies error
    }
    res.status(201).json({message:'Set goal'}) 
})

// @desc     Update a goal
// @route    PUT /api/goal/:id
// @access   Private
const putGoal = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`}) // access params
})

// @desc     Delete a goal
// @route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`}) // access params
})

module.exports = {
    getGoals,
    setGoal,
    putGoal,
    deleteGoal
}