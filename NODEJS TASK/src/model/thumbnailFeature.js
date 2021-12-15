import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const imageSchema = new Schema({
    imageUrl:{
        type: String,
        required: true
    },
},
{ timestamps: true }
);

export const Image = model('image', imageSchema);