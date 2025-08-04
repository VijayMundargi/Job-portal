const mongoose = require('mongoose');
const User = require('./User');

const SubscriptionsScheme = new mongoose.model({
    userId :{type:mongoose.Schema.ObjectId, ref:User},
    pan:{type:String},
    startDate:{type:Date, Timestamps:true},
    updateDate:{}
})