// Middleware para parsear datos del superhéroe en la solicitud
export const parseSuperheroData = (req, res, next) => {

    // Muestra en consola los datos recibidos en la solicitud
    console.log("Datos recibidos:", req.body);

    // Si la propiedad "poderes" es una cadena de texto, la convierte en un array
    if (typeof req.body.poderes == 'string') {
        req.body.poderes = req.body.poderes.trim().split(',').map(poder => poder.trim());
        
        // Verifica si algún poder contiene números
        const contieneNumero = req.body.poderes.some(poder => /\d/.test(poder));

        if (contieneNumero) {
            // Si encuentra números, devuelve un error con código 400 (Bad Request)
            return res.status(400).json({ error: "Los poderes no deben contener números." });
        }
        
        //console.log(req.body.poderes); // Línea comentada que serviría para depuración
    }
    
    // Si la propiedad "aliados" es una cadena de texto, la convierte en un array
    if (typeof req.body.aliados == 'string') {
        req.body.aliados = req.body.aliados.trim().split(',').map(aliado => aliado.trim());
        //console.log(req.body.aliados);
    }
    
    // Si la propiedad "enemigos" es una cadena de texto, la convierte en un array
    if (typeof req.body.enemigos == 'string') {
        req.body.enemigos = req.body.enemigos.trim().split(',').map(enemigo => enemigo.trim());
        //console.log(req.body.enemigos);
    }

    // Llama a `next()` para pasar el control al siguiente middleware o controlador
    next();
}
