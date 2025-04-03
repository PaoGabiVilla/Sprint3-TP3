// Importación de validationResult desde 'express-validator'
// 'express-validator' es una biblioteca que permite validar datos en las solicitudes HTTP.
import { validationResult } from 'express-validator';

/**
 * Middleware para manejar errores de validación.
 * Este middleware se ejecuta después de las validaciones definidas en las rutas.
 */
export const handleValidationErrors = (req, res, next) => {
    // Obtiene los errores de validación de la solicitud actual
    const errors = validationResult(req);

    // Si hay errores en la validación...
    if (!errors.isEmpty()) {
        return res.status(400).json({ // Devuelve un estado HTTP 400 (Bad Request)
            status: 'error', // Indica que hubo un error
            message: 'Validation failed', // Mensaje de error general
            errors: errors.array().map(error => ({ 
                field: error.param, // Campo donde ocurrió el error
                message: error.msg, // Mensaje de error asociado
            }))
        });
    }

    // Si no hay errores, continúa con la siguiente función en la cadena de middlewares
    next();
};
