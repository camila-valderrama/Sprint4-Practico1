import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
    creador: { type: String, default:'Camila Valderrama'},
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: { type: String, required: true },
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
}, { collection: 'Grupo-01' });

export default mongoose.model('superHero', superheroSchema);