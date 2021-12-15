import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const jsonPatchSchema = new Schema({
    username:{
        type: String,
        required: true,
        min: 7,
    },
    phonenumber: {
        type: Number,
        required: true,
        min: 11,  
    },
    address:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
    }
},
{ timestamps: true }
);

export const JsonPatch = model('jsonPatch', jsonPatchSchema);