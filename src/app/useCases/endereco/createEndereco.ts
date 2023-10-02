import { Request, Response } from 'express';
import { Endereco } from '../../models/Endereco';

export async function creatEndereco(req: Request, res: Response) { 
	try {
		const {name, number, complement, neighborhood, city} = req.body;
		const endereco = await Endereco.create({name, number, complement, neighborhood, city}); 
		res.status(201).json(endereco); 
	} catch (error) {
		console.log(error);
		res.sendStatus(500); 
	}
}