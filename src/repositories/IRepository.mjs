//Definición de la clase IRepository
class IRepository {
    //Métodos abstractos
    
    //obtenerPorId(id)
    obtenerPorId(id){
        throw new Error("Método 'obtenerPorId' no implementado");
    }

    //obtenerTodos()
    obtenerTodos(){
        throw new Error("Método 'obtnerTodos()' no implementado");
    }

    //buscarPorAtributo(atributo, valor)
    buscarPorAtributo(atributo, valor){
        throw new Error("Método 'buscarPorAtributo()' no completado");
    }
    
    //obtenerMayoresDe30()
    obtenerMayoresDe30(){
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    } 
}

//Exportación de la clase
export default IRepository;