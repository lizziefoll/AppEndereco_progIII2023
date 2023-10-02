import {model, Schema } from "mongoose";
 
export const City = model("City", new Schema({ 
	name: { 
		type: String,
		required: true, 
	},
    state:{
        type: String,
		required: true, 
    }
}));