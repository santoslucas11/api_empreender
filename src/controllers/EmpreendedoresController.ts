import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Empreendedores from '../models/Empreendedor';


export default{

    async index(request: Request, response: Response) {
        const empreendedoresRepository = getRepository(Empreendedores);

        const empreendedores = await empreendedoresRepository.find();

        return response.json(empreendedores);
    },


    async create(request: Request, response: Response) {
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

        return response.status(201).json(empreendedor);
    }    
};