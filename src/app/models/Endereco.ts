import {model, Schema } from "mongoose";

export const Endereco = model("Endereco", new Schema({ 
	name: { 
		type: String,
		required: true, 
	},
	number: { 
		type: String,
		required: true,
	},
    complement: {
        type: String,
        required: false,
    },
    neighborhood: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    city: {
        type: Schema.Types.ObjectId,
        required: true
    }
}));