async function eliminarSuperheroe(id) {
    const confirmacion = confirm("¿Estás seguro de que quieres eliminar este superhéroe?");
    if (!confirmacion) return; // Si el usuario cancela, no hace nada.

    try {
        const response = await fetch(`/api/heroes/eliminar/id/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Superhéroe eliminado con éxito");
            window.location.href="/api/heroes";
        }else{
            alert("Error al eliminar el superhéroe")
        }

    } catch (error) {
                
        console.error("Error:", error);
    }
}