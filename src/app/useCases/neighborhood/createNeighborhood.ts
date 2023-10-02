import { Request, Response } from 'express';
import { Neighborhood } from '../../models/Neighborhood';

export async function createNeighborhood(req: Request, res: Response) { 
	try {
		const {name} = req.body; 
		const neighborhood = await Neighborhood.create({name}); 
		res.status(201).json(neighborhood); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}