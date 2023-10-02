import { Request, Response } from 'express';
import { City } from '../../models/City';

export async function listCity(req: Request, res: Response) { 
	try {
		const cidade = await City.find(); 

		res.json(cidade); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}