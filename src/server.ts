import express from 'express';
import { getRepository } from 'typeorm';
import Empreendedores from './models/Empreendedor';

import './database/connection';

const app = express();

app.use(express.json());

app.post('/empreendedores', async(request, response) =>{
    const {
        name,
	    latitude,
	    longitude,
	    about,
	    instructions,
	    opening_hours,
	    open_on_weekends,
    } = request.body;

    const empreendedoresRepository = getRepository(Empreendedores);
    
    const empreendedor = empreendedoresRepository.create({
        name,
	    latitude,
	    longitude,
	    about,
	    instructions,
	    opening_hours,
	    open_on_weekends,
    });

    await empreendedoresRepository.save(empreendedor);

    return response.json({message: "Hello World"});
})

app.listen(3333);
