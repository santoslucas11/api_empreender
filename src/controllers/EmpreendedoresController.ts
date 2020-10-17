import { Request, Response } from "express";
import { getRepository } from "typeorm";
import empreendedorView from "../views/empreendedor_view";
import * as Yup from "yup";

import Empreendedores from "../models/Empreendedor";

export default {
  async index(request: Request, response: Response) {
    const empreendedoresRepository = getRepository(Empreendedores);

    const empreendedores = await empreendedoresRepository.find({
      relations: ["images"],
    });

    return response.json(empreendedorView.renderMany(empreendedores));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const empreendedoresRepository = getRepository(Empreendedores);

    const empreendedor = await empreendedoresRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(empreendedorView.render(empreendedor));
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

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const empreendedor = empreendedoresRepository.create(data);

    await empreendedoresRepository.save(empreendedor);

    return response.status(201).json(empreendedor);
  },
};
