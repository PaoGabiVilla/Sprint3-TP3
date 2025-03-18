import superHero from '../models/SuperHero.mjs';
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
      const superheroe = superHero.create({
        nombreSuperHeroe: datosSuperheroe.nombreSuperHeroe,
            nombreReal: datosSuperheroe.nombreReal,
            edad: datosSuperheroe.edad,
            planetaOrigen:  datosSuperheroe.planetaOrigen,
            debilidad: datosSuperheroe.debilidad,
            poderes: datosSuperheroe.poderes,
            aliados: datosSuperheroe.aliados,
            enemigos: datosSuperheroe.enemigos,  
            })
        console.log('Superheroe: ${superHero}')
        return console.log('Super heroes creado for Ktta');
      }
    }

export default new SuperHeroRepository();
