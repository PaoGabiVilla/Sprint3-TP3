// Importaciones necesarias
import express from 'express'; // Framework para construir aplicaciones web en Node.js
import { connectDB } from './config/dbConfig.mjs'; // Importa la función para conectar a la base de datos
import superHeroRoutes from './routes/superHeroRoutes.mjs'; // Importa las rutas relacionadas con los superhéroes
import path from 'path'; // Módulo para manejar rutas de archivos y directorios
import { fileURLToPath } from 'url'; // Convierte URL de módulos en rutas de archivos

// Importación de method-override (Sprint 3 parte 4)
// Permite que los formularios HTML realicen solicitudes PUT o DELETE mediante query params (_method)
import methodOverride from "method-override";

// Inicialización de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor (3000 por defecto)

// **Configuración de rutas y motores de vistas**
// Convierte la URL del módulo en una ruta de archivo y obtiene el directorio del archivo actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configura la carpeta donde estarán las vistas (templates) de la aplicación
app.set('views', path.join(__dirname, 'views'));

// Configura Express para usar EJS como motor de vistas
app.set('view engine', 'ejs');

// **Middlewares**

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Middleware para procesar datos enviados desde formularios HTML
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname,"public")));

// Middleware para permitir métodos HTTP PUT y DELETE en formularios HTML (Sprint 3 parte 4)
app.use(methodOverride("_method"));

// **Conexión a la Base de Datos**
// Llamada a la función para conectar con MongoDB
connectDB();

// **Definición de Rutas**
// Configura las rutas relacionadas con los superhéroes bajo el prefijo '/api'
app.use('/api', superHeroRoutes);

// Middleware para manejar rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// **Iniciar el servidor**
// Pone el servidor en marcha y escucha peticiones en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
