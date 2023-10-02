import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { listEndereco } from './app/useCases/endereco/listEndereco'
import { creatEndereco } from './app/useCases/endereco/createEndereco'
import { listCity } from './app/useCases/city/listCity';
import { createCity } from './app/useCases/city/createCity';
import { createNeighborhood } from './app/useCases/neighborhood/createNeighborhood';
import { listNeighborhood } from './app/useCases/neighborhood/listNeighborhood'
export const router = Router();


const upload = multer({ 
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

router.post('/endereco', creatEndereco);

router.get('/endereco', listEndereco);


router.post('/city', createCity);

router.get('/city', listCity);


router.post('/neighborhood', createNeighborhood);

router.get('/neighborhood', listNeighborhood);