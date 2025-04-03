// Importación de funciones de servicio que gestionan la lógica de negocio de los superhéroes
import { 
    obtenerSuperheroePorId, 
    obtenerTodosLosSuperheroes, 
    buscarSuperheroesPorAtributo, 
    obtenerSuperheroesMayoresDe30, 
    obtenerSuperheroesMenoresDe30, 
    crearNuevoSuperheroe, 
    actualizarSuperheroe, 
    eliminarSuperheroePorId, 
    eliminarSuperheroePorNombre 
} from "../services/superheroesService.mjs";

// Importación de funciones de vista para renderizar las respuestas
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

/**
 * Controlador para obtener un superhéroe por su ID.
 */
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params; // Extrae el ID de los parámetros de la solicitud
        const superheroe = await obtenerSuperheroePorId(id); // Busca el superhéroe en la base de datos

        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        res.render("editSuperhero", { superheroe }); // Renderiza la vista de edición del superhéroe
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

/**
 * Controlador para obtener todos los superhéroes.
 */
export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes(); // Obtiene la lista de superhéroes
        res.render('dashboard', { superheroes }); // Renderiza la vista del dashboard con los superhéroes
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

/**
 * Controlador para buscar superhéroes por un atributo específico.
 */
export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params; // Extrae el atributo y valor de la solicitud
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados); // Devuelve los datos en formato JSON
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}

/**
 * Controlador para obtener superhéroes mayores de 30 años.
 */
export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30' });
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });
    }
}

/**
 * Controlador para obtener superhéroes menores de 30 años.
 */
export async function obtenerSuperheroesMenoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMenoresDe30();

        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes menores de 30' });
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superhéroes menores de 30', error: error.message });
    }
}

/**
 * Controlador para crear un nuevo superhéroe.
 */
export async function crearNuevoSuperheroeController(req, res) {
    try {
        const datos = req.body; // Obtiene los datos del cuerpo de la solicitud
        const superheroeCreado = await crearNuevoSuperheroe(datos);

        if (!superheroeCreado) {
            return res.status(404).send({ mensaje: 'Error al crear superhéroe' });
        }

        const superheroesActualizados = await obtenerTodosLosSuperheroes();
        res.render('dashboard', { superheroes: superheroesActualizados, successMessage: '¡Superhéroe creado exitosamente!' });
    } catch (error) {
        res.render('dashboard', {
            errorMessage: 'Hubo un error al crear el superhéroe. Asegúrate de completar todos los campos correctamente.'
        });
    }
}

/**
 * Controlador para actualizar un superhéroe por su ID.
 */
export async function actualizarSuperheroeController(req, res) {
    try {
        const { id } = req.params;
        const datosActualizar = req.body;

        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizar);
        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superhéroe a actualizar no encontrado.' });
        }

        const superheroesActualizados = await obtenerTodosLosSuperheroes();
        res.render('dashboard', { superheroes: superheroesActualizados, successMessage: '¡Superhéroe editado exitosamente!' });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}

/**
 * Controlador para eliminar un superhéroe por su ID.
 */
export async function eliminarSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorId(id);

        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar no encontrado.' });
        }

        const superheroesActualizados = await obtenerTodosLosSuperheroes();
        res.render('dashboard', { superheroes: superheroesActualizados, successMessage: '¡Superhéroe eliminado exitosamente!' });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }
}

/**
 * Controlador para eliminar un superhéroe por su nombre.
 */
export async function eliminarSuperheroePorNombreController(req, res) {
    try {
        const { nombre } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorNombre(nombre);

        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }
}
