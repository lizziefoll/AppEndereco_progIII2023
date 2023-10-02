import { Request, Response } from 'express';
import { City } from '../../models/City';

export async function createCity(req: Request, res: Response) { 
	try {
		const {name, state} = req.body; 
		const city = await City.create({name, state}); 
		res.status(201).json(city); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}