// Importa el módulo superHeroRepository, que contiene las funciones para interactuar con la base de datos.
import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

/**
 * Obtiene un superhéroe por su ID.
 * @param {string} id - ID del superhéroe a buscar.
 * @returns {Promise<Object>} - Devuelve un superhéroe si existe.
 */
export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);    
}

/**
 * Obtiene todos los superhéroes almacenados en la base de datos.
 * @returns {Promise<Array>} - Devuelve una lista con todos los superhéroes.
 */
export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();    
}

/**
 * Busca superhéroes por un atributo específico.
 * @param {string} atributo - El nombre del atributo a buscar (ejemplo: "nombre", "edad").
 * @param {string|number} valor - El valor del atributo a filtrar.
 * @returns {Promise<Array>} - Lista de superhéroes que cumplen con el criterio de búsqueda.
 */
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

/**
 * Obtiene todos los superhéroes cuya edad sea mayor de 30 años.
 * @returns {Promise<Array>} - Lista de superhéroes mayores de 30 años.
 */
export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

/**
 * Obtiene todos los superhéroes cuya edad sea menor de 30 años.
 * @returns {Promise<Array>} - Lista de superhéroes menores de 30 años.
 */
export async function obtenerSuperheroesMenoresDe30() {
    return await superHeroRepository.obtenerMenoresDe30();
}

// Sprint 3 - TP1

/**
 * Crea un nuevo superhéroe en la base de datos.
 * @param {Object} datosNuevoSuperheroe - Objeto con la información del nuevo superhéroe.
 * @returns {Promise<Object>} - Superhéroe creado.
 */
export async function crearNuevoSuperheroe(datosNuevoSuperheroe) {
    return await superHeroRepository.crearSuperheroe(datosNuevoSuperheroe);
}

/**
 * Actualiza la información de un superhéroe existente en la base de datos.
 * @param {string} id - ID del superhéroe a actualizar.
 * @param {Object} datosActualizarSuperheroe - Datos a actualizar.
 * @returns {Promise<Object>} - Superhéroe actualizado.
 */
export async function actualizarSuperheroe(id, datosActualizarSuperheroe) {
    return await superHeroRepository.actualizarHeroe(id, datosActualizarSuperheroe);
}

/**
 * Elimina un superhéroe de la base de datos usando su ID.
 * @param {string} id - ID del superhéroe a eliminar.
 * @returns {Promise<void>}
 */
export async function eliminarSuperheroePorId(id) {
    console.log('Capa Services - función eliminar por ID');
    return await superHeroRepository.eliminarPorId(id);
}

/**
 * Elimina un superhéroe de la base de datos usando su nombre.
 * @param {string} nombre - Nombre del superhéroe a eliminar.
 * @returns {Promise<void>}
 */
export async function eliminarSuperheroePorNombre(nombre) {
    console.log('Capa Services - función eliminar por Nombre');
    return await superHeroRepository.eliminarPorNombre(nombre);
}
