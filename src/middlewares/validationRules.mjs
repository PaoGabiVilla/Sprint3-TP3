// Importamos 'body' desde express-validator para validar los datos de entrada
import { body } from 'express-validator';

// Función que devuelve un array de validaciones para los datos de los superhéroes
export const validationDataSuperHeros = () => [

    /* Validación del campo 'nombreSuperHeroe' */
    body('nombreSuperHeroe')
        .trim() // Elimina espacios en blanco al inicio y al final
        .notEmpty().withMessage('El nombre del superhéroe es necesario') // Verifica que no esté vacío
        .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres'),

    /* Validación del campo 'nombreReal' */
    body('nombreReal')
        .trim()
        .notEmpty().withMessage('El nombre real es requerido')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres'),

    /* Validación del campo 'edad' */
    body('edad')
        .trim()
        .notEmpty().withMessage('Edad es requerida') // Verifica que la edad no esté vacía
        .isNumeric().withMessage('La edad debe ser un número') // Verifica que sea un número
        .isInt({ min: 0 }).withMessage('Edad incorrecta'), // No permite edades negativas

    /* Validación del campo 'poderes' */
    body('poderes')
        .notEmpty().withMessage('Lista de poderes requerida') // Verifica que no esté vacío
        .isArray({ min: 1 }).withMessage('Poderes no es un array o está vacío'), // Verifica que sea un array con al menos un elemento

    /* Validación de cada elemento dentro del array 'poderes' */
    body('poderes.*')
        .trim()
        .isString().withMessage('Cada poder debe ser una cadena de texto') // Cada elemento debe ser una cadena
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres') // Cada poder debe tener una longitud válida
];
