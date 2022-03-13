const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({ //.Schema to make a model schema
    text: {
        type:String, //defines model params
        required: [true,'Please add a text value']
    }
}, {
    timestamps: true // auto creates timestamps
})

module.exports = mongoose.model('Goal',goalSchema) 