import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHero.findById(id);
    }

    async obtenerTodos() {
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        // RESOLVER
        
                //Se declara una variable llamada filtrar que es un objeto vacío {}.
                //Este objeto servirá como filtro para la consulta en MongoDB.
        
        const filtrar = {};
        
        filtrar[atributo] = {$regex: valor,$options:'i'};
                //Búsqueda insencible a mayúsculas
        return await SuperHero.find(filtrar);

    }

    async obtenerMayoresDe30() {
        // RESOLVER
        return await SuperHero.find({ edad: { $gt: 30 } });
    }
    async obtenerMenoresDe30(){
        return await SuperHero.find({ edad: {$lt:30 }});
    }
    
    //Sprint 3 tp1
    async crearSuperheroe(datosSuperheroe){
     
        const nuevoHeroe = new SuperHero(datosSuperheroe);

        return await nuevoHeroe.save()// guarda y retorna en una sola linea
        /*await nuevoHeroe.save();
        console.log(nuevoHeroe);
        return nuevoHeroe;*/
        }

        async actualizarHeroe(id, datosActualizar) {
        /* updateOne() o updateMany() devuelven el resultado de la operación pero no el documento actualizado
        y findByIdAndUpdate() devuelve el documento actualizado */
        const heroeActualizado = await SuperHero.findByIdAndUpdate(id, datosActualizar, { new: true });
            console.log(heroeActualizado);
            return heroeActualizado;
            
        }
}
export default new SuperHeroRepository();
