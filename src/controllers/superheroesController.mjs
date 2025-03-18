import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, obtenerSuperheroesMenoresDe30, crearNuevoSuperheroe} from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try {
        
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado'});
        }
        
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
        } catch (error) {
            res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
        }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        
        const superheroes = await obtenerTodosLosSuperheroes();
        
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
        } catch (error) {
            res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
        }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron Superhéroe con ese atributo'});
        }
        
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
        } catch (error) {
            res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
        }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (!superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron Superhéroes mayores de 30' });
        }
        
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
        } catch (error) {
            res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });
        }
}
export async function obtenerSuperheroesMenoresDe30Controller(req, res) {
    try{
        const superheroes = await obtenerSuperheroesMenoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje:'No se encontró superheroes menores de 30'});
        }
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
    }catch(error){
        res.status(500).send({ mensaje: 'Error al obtener superhéroes menores de 30', error: error.menssage });

    }
}

//Sprint 3 tp1
export async function crearNuevoSuperheroeController(req, res) {
    
    try{
    const datos = req.body;

    const superheroeNuevo = crearNuevoSuperheroe(datos);
    if(!superheroeNuevo){
        return res.status(404).send({mensaje:'Superheroe nuevo no encontrado'})}
        const superheroeFormateado = renderizarSuperheroe(superheroeNuevo);
        res.status(200).json(superheroeFormateado);

    } catch (error){
        res.status(500).send({ mensaje: 'error al crear nuevo superheroe' })
    }
}
