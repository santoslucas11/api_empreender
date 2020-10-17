import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Empreendedores from '../models/Empreendedor';


export default{

    async index(request: Request, response: Response) {
        const empreendedoresRepository = getRepository(Empreendedores);

        const empreendedores = await empreendedoresRepository.find({
            relations: ['images']
        });

        return response.json(empreendedores);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const empreendedoresRepository = getRepository(Empreendedores);

        const empreendedor = await empreendedoresRepository.findOneOrFail(id, {
            relations: ['images']
        });

        return response.json(empreendedor);
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
        
        const requestImages =request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return{ path: image.filename }
        })

        const empreendedor = empreendedoresRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });
    
        await empreendedoresRepository.save(empreendedor);

        return response.status(201).json(empreendedor);
    }    
};