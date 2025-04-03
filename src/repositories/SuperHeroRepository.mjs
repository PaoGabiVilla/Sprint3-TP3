// Importaciones necesarias
import SuperHero from '../models/SuperHero.mjs'; // Importa el modelo de superhéroes para interactuar con la base de datos
import IRepository from './IRepository.mjs'; // Importa una interfaz o clase base que define los métodos genéricos del repositorio

// Definición de la clase SuperHeroRepository que extiende de IRepository
class SuperHeroRepository extends IRepository {
   
    /*** Métodos de la clase ***/

    // Obtener un superhéroe por su ID
    async obtenerPorId(id) {
        return await SuperHero.findById(id); // Busca el héroe por su ID en la base de datos
    }

    // Obtener todos los superhéroes registrados en la base de datos
    async obtenerTodos() {
        return await SuperHero.find({}); // Devuelve todos los documentos de la colección SuperHero
    }

    // Buscar superhéroes por un atributo y su valor
    async buscarPorAtributo(atributo, valor) {
        // Se declara un objeto `filtrar` vacío que servirá como criterio de búsqueda
        const filtrar = {};
        
        // Se asigna la condición de búsqueda, utilizando expresiones regulares para que la búsqueda sea insensible a mayúsculas/minúsculas
        filtrar[atributo] = { $regex: valor, $options: 'i' };
        
        return await SuperHero.find(filtrar); // Retorna los superhéroes que coincidan con la búsqueda
    }

    // Obtener superhéroes con edad mayor a 30 años
    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 } }); // Busca todos los héroes cuya edad sea mayor a 30
    }

    // Obtener superhéroes con edad menor a 30 años
    async obtenerMenoresDe30() {
        return await SuperHero.find({ edad: { $lt: 30 } }); // Busca todos los héroes cuya edad sea menor a 30
    }
    
    /* Sprint 3 - TP1 */

    // Crear un nuevo superhéroe en la base de datos
    async crearSuperheroe(datosSuperheroe) {
        const nuevoHeroe = new SuperHero(datosSuperheroe); // Crea una instancia del modelo con los datos proporcionados
        return await nuevoHeroe.save(); // Guarda el nuevo superhéroe en la base de datos y lo retorna

        /* Alternativa con logs:
        await nuevoHeroe.save();
        console.log(nuevoHeroe);
        return nuevoHeroe;
        */
    }

    // Actualizar un superhéroe por su ID
    async actualizarHeroe(id, datosActualizar) {
        /* 
        - updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado.
        - findByIdAndUpdate() devuelve el documento actualizado si se pasa la opción `{ new: true }`.
        */
        const heroeActualizado = await SuperHero.findByIdAndUpdate(id, datosActualizar, { new: true });
        console.log(heroeActualizado); // Se imprime en consola el héroe actualizado
        return heroeActualizado;
    }

    // Eliminar un superhéroe por su ID
    async eliminarPorId(id) {
        console.log('Capa Repository - función eliminar por Id');
        const heroeEliminado = await SuperHero.findByIdAndDelete(id); // Elimina el héroe por su ID
        console.log(heroeEliminado); // Muestra el héroe eliminado en la consola
        return heroeEliminado;
    }
        
    // Eliminar un superhéroe por su nombre
    async eliminarPorNombre(nombre) {
        console.log('Capa Repository - función eliminar por Nombre');
        const heroeEliminado = await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombre }); // Busca y elimina por nombre
        console.log(heroeEliminado); // Muestra el héroe eliminado en la consola
        return heroeEliminado;
    }
}

// Exportación de la instancia del repositorio para ser utilizada en otros módulos
export default new SuperHeroRepository();
