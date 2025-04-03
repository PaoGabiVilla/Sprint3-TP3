// Importación del módulo Express
import express from 'express';

// Importación de los controladores que manejan las operaciones de los superhéroes
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    obtenerSuperheroesMenoresDe30Controller,
    crearNuevoSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

// Importación de middlewares para validaciones y manejo de datos
import { validationDataSuperHeros } from '../middlewares/validationRules.mjs';
import { handleValidationErrors } from '../middlewares/errorMiddleware.mjs';
import { parseSuperheroData } from '../middlewares/parseData.mjs';

// Creación del enrutador de Express
const router = express.Router();

/* Definición de las rutas para manejar las peticiones HTTP relacionadas con los superhéroes */

// Ruta para obtener superhéroes menores de 30 años
router.get('/heroes/menores-30', obtenerSuperheroesMenoresDe30Controller);

// Ruta para obtener superhéroes mayores de 30 años
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);

// Ruta para obtener todos los superhéroes
router.get('/heroes', obtenerTodosLosSuperheroesController);

// Ruta para buscar superhéroes por un atributo específico (nombre, edad, etc.)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);

// Ruta para obtener un superhéroe por su ID con validaciones
router.get('/heroes/:id', validationDataSuperHeros, handleValidationErrors, obtenerSuperheroePorIdController);

/* Sprint 3 - TP1 */ // Rutas agregadas
/* Sprint 3 - TP2 */ // Se agregaron validaciones a las rutas para actualizar y eliminar superhéroes
/* Sprint 3 - TP3 */ // Se agregó el parseo de datos antes de las validaciones

// Ruta para agregar un nuevo superhéroe, con middleware de parseo y validaciones
router.post('/heroes/agregar', parseSuperheroData, validationDataSuperHeros(), handleValidationErrors, crearNuevoSuperheroeController);

// Ruta para actualizar un superhéroe existente por su ID, con validaciones
router.put('/heroes/editar/:id', parseSuperheroData, validationDataSuperHeros(), handleValidationErrors, actualizarSuperheroeController);

// Ruta para eliminar un superhéroe por su ID
router.delete('/heroes/eliminar/id/:id', eliminarSuperheroePorIdController);

// Ruta para eliminar un superhéroe por su nombre
router.delete('/heroes/eliminar/nombre/:nombre', eliminarSuperheroePorNombreController);

/* Sprint 3 - TP3 */
// Ruta para la vista de agregar un superhéroe
router.get("/view/agregar", (req, res) => {
    res.render("addSuperhero"); // Renderiza la vista addSuperhero.ejs
});

// Ruta para la vista de edición de un superhéroe
router.get("/view/editar/:id", obtenerSuperheroePorIdController);

// Exporta el router para ser utilizado en la aplicación principal
export default router;
