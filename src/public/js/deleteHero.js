async function eliminarSuperheroe(id) {
    // Muestra un cuadro de confirmación al usuario antes de eliminar el superhéroe
    const confirmacion = confirm("¿Estás seguro de que quieres eliminar este superhéroe?");
    
    // Si el usuario cancela la eliminación, la función se detiene y no hace nada
    if (!confirmacion) return; 

    try {
        // Realiza una petición HTTP DELETE a la API para eliminar el superhéroe con el ID proporcionado
        const response = await fetch(`/api/heroes/eliminar/id/${id}`, {
            method: "DELETE" // Método HTTP DELETE para indicar eliminación de datos
        });

        // Verifica si la respuesta de la API fue exitosa (código de estado 200-299)
        if (response.ok) {
            alert("Superhéroe eliminado con éxito"); // Muestra un mensaje de éxito
            window.location.href = "/api/heroes"; // Redirige a la lista de superhéroes
        } else {
            alert("Error al eliminar el superhéroe"); // Muestra un mensaje de error si la respuesta no es exitosa
        }

    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante la ejecución de la petición
        console.error("Error:", error);
    }
}
