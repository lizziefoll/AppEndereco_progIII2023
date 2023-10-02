import {model, Schema } from "mongoose";

export const Neighborhood = model("Neighborhood", new Schema({ 
	name: { 
		type: String,
		required: true, 
	}
}));