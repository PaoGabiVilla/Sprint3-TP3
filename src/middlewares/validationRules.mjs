import { body } from 'express-validator';

export const validationDataSuperHeros = () => [

/*nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 
3 caracteres y una longitud maxima de 60*/
    body('nombreSuperHeroe').trim().notEmpty().withMessage('El nombre del superheroe es necesario')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre del superheroe debe tener entre 3 y 60 caracteres'),

/*nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud 
minima de 3 caracteres y una longitud maxima de 60*/
    
    body('nombreReal').trim().notEmpty().withMessage('El nombre Real es requerido')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),

/*edad debe validarse que sea requerido, que sea un número, no tenga espacios en blanco(trim), 
valor minimo 0 (no admite edad negativa)*/
    body('edad').trim().notEmpty().withMessage('Edad es requerida')
    .isNumeric().withMessage("La edad debe ser un número").isInt({ min: 0 }).withMessage('Edad incorrecta'),

/*poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, 
cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres 
y una longitud maxima de 60*/

    body('poderes').notEmpty().withMessage('Lista de poderes requerida')
    .isArray({ min: 1 }).withMessage('Poderes no es un array o está vacío'),
    
    body('poderes.*').trim().isString().withMessage('Cada poder debe ser una cadena de texto')
    .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres')
    
]