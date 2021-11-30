export const fetchId = async(id, setShowSpinner) => {

    if(id === ''){
        return {}
    }

    const key = '4583093621756334';
    const url = `https://www.superheroapi.com/api.php/${key}/${id}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    return resultado

}