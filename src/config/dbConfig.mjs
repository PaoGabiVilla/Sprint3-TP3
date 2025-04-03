import mongoose from 'mongoose';  // Importa el módulo Mongoose para interactuar con MongoDB.

export async function connectDB() { // Define una función asíncrona para conectar a la base de datos.
    try {
        await mongoose.connect('mongodb+srv://Grupo-06:grupo06@cursadanodejs.ls9ii.mongodb.net/Node-js'); 
        // Intenta establecer la conexión con MongoDB usando la cadena de conexión proporcionada.
        console.log('Conexión exitosa a MongoDB'); // Mensaje de confirmación en la consola si la conexión es exitosa.
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error); // Captura y muestra en la consola cualquier error que ocurra.
        process.exit(1); // Finaliza el proceso con un código de error en caso de fallo.
    }
}
