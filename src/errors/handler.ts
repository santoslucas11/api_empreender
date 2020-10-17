import {ErrorRequestHandler} from 'express';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error(error);

    return response.status(500).json({message: 'Oops!, parece que estamos com um probleminha interno'});
};

export default errorHandler;