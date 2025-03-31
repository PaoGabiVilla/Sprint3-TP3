//Importaciones
import express from 'express';

import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

//Ver esto - Sprint 3 parte 4:
import methodOverride from "method-override";


//Inicialización de la Aplicación
const app = express();
const PORT = process.env.PORT || 3000;

// Spring 3 - TP3 //
/* Convierte la URL del módulo en una ruta de archivo (fileURLToPath(import.meta.url))
y obtiene el directorio del archivo actual (path.dirname(...)) */


/***Configuración de Rutas y Motores de Vistas***/
const __dirname = path.dirname(fileURLToPath(import.meta.url));
/* Forma la ruta absoluta hacia views/, sin importar desde dónde se ejecute el script. */
app.set('views', path.join(__dirname, 'views'));
// Configuración de EJS como el motor de vistas en Express
app.set('view engine', 'ejs');

/***Middlewares***/
//Middleware para parsear JSON
app.use(express.json());
// Para procesar datos del formulario
app.use(express.urlencoded({ extended: true }));
// El formulario está enviando datos en formato application/x-www-form-urlencoded por defecto.
//Sprint 3 parte 4: Cuando el formulario se envía con ?_method=PUT, Express lo interpretará como una petición PUT
app.use(methodOverride("_method"));

// Configuración de method-override
app.use(methodOverride("_method"));

/***Conexión a la Base de Datos***/
//Conexión a MongoDB
connectDB();

/***Definición de Rutas***/
//Configuración de ruta
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res) =>{
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
