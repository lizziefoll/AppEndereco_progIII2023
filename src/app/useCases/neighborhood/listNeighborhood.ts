import { Request, Response } from 'express';
import { Neighborhood } from '../../models/Neighborhood';

export async function listNeighborhood(req: Request, res: Response) { 
	try {
		const neighborhood = await Neighborhood.find(); 

		res.json(neighborhood); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}