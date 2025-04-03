// Función para transformar un objeto de superhéroe en un formato más estructurado y legible
export function renderizarSuperheroe(superheroe) {
    return {
        Nombre: superheroe.nombreSuperHeroe,      // Nombre del superhéroe
        "Nombre Real": superheroe.nombreReal,     // Nombre real del superhéroe
        Edad: superheroe.edad,                    // Edad del superhéroe
        "Planeta de Origen": superheroe.planetaOrigen, // Planeta de donde proviene
        Debilidad: superheroe.debilidad,          // Punto débil del superhéroe
        Poderes: superheroe.poderes,              // Lista de poderes del superhéroe
        Aliados: superheroe.aliados,              // Lista de aliados o compañeros
        Enemigos: superheroe.enemigos             // Lista de enemigos o villanos
    };
}

// Función para transformar una lista de superhéroes aplicando `renderizarSuperheroe` a cada uno
export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}
