// Importación de Mongoose, una biblioteca para manejar bases de datos MongoDB en Node.js
import mongoose from 'mongoose';

// Definición del esquema (superheroSchema) utilizando mongoose.Schema
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true }, // Nombre del superhéroe (obligatorio)
    nombreReal: { type: String, required: true }, // Nombre real del superhéroe (obligatorio)
    edad: { type: Number, min: 0 }, // Edad del superhéroe (mínimo 0, no puede ser negativa)
    planetaOrigen: { type: String, default: 'Desconocido' }, // Origen del superhéroe (por defecto "Desconocido")
    debilidad: String, // Debilidad del superhéroe
    poderes: [String], // Lista de poderes (array de strings)
    aliados: [String], // Lista de aliados (array de strings)
    enemigos: [String], // Lista de enemigos (array de strings)
    creador: String, // Creador del superhéroe (nombre del creador)
    createdAt: { type: Date, default: Date.now } // Fecha de creación del documento (por defecto, la fecha actual)
});

// Creación del modelo 'SuperHero' basado en el esquema definido.
// Se almacena en la colección 'Grupo-06' dentro de MongoDB.
const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-06');

// Exportación del modelo para ser utilizado en otras partes de la aplicación
export default superHero;
