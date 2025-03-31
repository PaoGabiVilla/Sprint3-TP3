import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, obtenerSuperheroesMenoresDe30, crearNuevoSuperheroe, actualizarSuperheroe, eliminarSuperheroePorId, eliminarSuperheroePorNombre } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
    try {

        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }

        res.render("editSuperhero", { superheroe });

        //const superheroeFormateado = renderizarSuperheroe(superheroe);
        //res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {

        const superheroes = await obtenerTodosLosSuperheroes();
        
        res.render('dashboard', { superheroes });
        //const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        //res.status(200).json(superheroesFormateados);
    } catch (error) {
                res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    try {

        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron Superhéroe con ese atributo' });
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
    try {
        const superheroes = await obtenerSuperheroesMenoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontró superheroes menores de 30' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superhéroes menores de 30', error: error.message });

    }
}

//Sprint 3 tp1
export async function crearNuevoSuperheroeController(req, res) {

    try {
        const datos = req.body;

        const superheroeCreado = await crearNuevoSuperheroe(datos);
        if (!superheroeCreado) {
            return res.status(404).send({ mensaje: 'Error al crear superheroe' })
        }
       
        //const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        //res.status(200).json(superheroeFormateado);
        res.render('addSuperhero', { successMessage: '¡Superhéroe creado exitosamente!' });
    } catch (error) {
        //res.status(500).send({ mensaje: 'error al crear nuevo superheroe' })
       
        res.render('addSuperhero', {
            errorMessage: 'Hubo un error al crear el superhéroe. Asegúrate de completar todos los campos correctamente.'
        }); 
    }
}

//modificar

export async function actualizarSuperheroeController(req, res) {

    try {
        const { id } = req.params;
        const datosActualizar = req.body;
        console.log(id);
        console.log(typeof (id));

        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizar);
        if (!superheroeActualizado) {
            return res.status(404).send({ mensaje: 'Superhéroe a actualizar no encontrado.' });
        }
        res.render('editSuperhero', { superheroe: superheroeActualizado, successMessage: '¡Superhéroe editado exitosamente!' });
        //const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
        //res.status(200).json(superheroeFormateado);


    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar el superhéroe', error: error.message });
    }
}

export async function eliminarSuperheroePorIdController(req, res) {
    try{
        console.log('Capa controller - función eliminar por Id');
        const{ id }= req.params;
        const superheroeEliminado = await eliminarSuperheroePorId(id);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminar no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }
}

export async function eliminarSuperheroePorNombreController(req, res){

    try{
        console.log('Capa controller - función eliminar por Nombre');
        const { nombre } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorNombre(nombre);
        if (!superheroeEliminado) {
            return res.status(404).send({ mensaje: 'Superhéroe a eliminado no encontrado.' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroeEliminado);
        res.status(200).json(superheroeFormateado);

    } catch (error) {
       
        res.status(500).send({ mensaje: 'Error al eliminar el superhéroe', error: error.message });
    }
}

