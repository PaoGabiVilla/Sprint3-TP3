//Importaciones
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

//Definición de la clase SuperHeroRepository
class SuperHeroRepository extends IRepository {
   
    /***Métodos de la clase***/

    //Obtener un superhéroe por ID
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    //Obtener todos los superhéroes
    async obtenerTodos() {
        return await SuperHero.find({});
    }

    //Buscar superhéroes por atributo y valor
    async buscarPorAtributo(atributo, valor) {
        // RESOLVER
        
                //Se declara una variable llamada filtrar que es un objeto vacío {}.
                //Este objeto servirá como filtro para la consulta en MongoDB.
        
        const filtrar = {};
        
        filtrar[atributo] = {$regex: valor,$options:'i'};
                //Búsqueda insencible a mayúsculas
        return await SuperHero.find(filtrar);

    }

    //Obtener superhéroes menores de 30 años
    async obtenerMayoresDe30() {
        // RESOLVER
        return await SuperHero.find({ edad: { $gt: 30 } });
    }

    //Obtener superhéroes menores de 30 años
    async obtenerMenoresDe30(){
        return await SuperHero.find({ edad: {$lt:30 }});
    }
    
    //Sprint 3 tp1
    
    //Crear un nuevo superhéroe
    async crearSuperheroe(datosSuperheroe){
        const nuevoHeroe = new SuperHero(datosSuperheroe);
        return await nuevoHeroe.save()// guarda y retorna en una sola linea
        /*await nuevoHeroe.save();
        console.log(nuevoHeroe);
        return nuevoHeroe;*/
        }

        //Actualizar un superhéroe por ID
        async actualizarHeroe(id, datosActualizar) {
        /* updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado
        y findByIdAndUpdate() devuelve el documento actualizado */
            const heroeActualizado = await SuperHero.findByIdAndUpdate(id, datosActualizar, { new: true });
            console.log(heroeActualizado);
            return heroeActualizado;
        }

        //Eliminar un superhéroe por ID
        async eliminarPorId(id){
            console.log('Capa Repository - función eliminar por Id');
            const heroeEliminado = await SuperHero.findByIdAndDelete(id);
            console.log(heroeEliminado);
            return heroeEliminado;
        }
        
        //Eliminar un superhéroe por nombre
        async eliminarPorNombre(nombre){
            console.log('Capa Repository - función eliminar por Nombre');
            const heroeEliminado = await SuperHero.findOneAndDelete({nombreSuperHeroe: nombre});
            console.log(heroeEliminado);
            return heroeEliminado;
        }
      
}

//Exportación de la instancia del repositorio
export default new SuperHeroRepository();
