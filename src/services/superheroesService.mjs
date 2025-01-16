import superHeroRepository from "../repositories/superHeroRepository.mjs";

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

export async function agregarSuperheroe(nuevoSuperheroe) {
    return await superHeroRepository.agregarSuperheroeNuevo(nuevoSuperheroe);
}

export async function actualizarSuperheroe(id, datosActualizados) {
   return await superHeroRepository.actualizarSuperheroe(id, datosActualizados);
}

export async function eliminarSuperheroePorId(id) {
    return await superHeroRepository.eliminarSuperheroePorId(id);
}

export async function eliminarSuperheroePorNombre(nombreSuperheroe) {
    return await superHeroRepository.eliminarSuperheroePorNombre(nombreSuperheroe);
}