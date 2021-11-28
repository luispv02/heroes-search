export const fetchNames = async (name = '') => {
    if(name.trim() === ''){
        return []
    }

    console.log(name)

    const key = '4583093621756334';
    const url = `https://www.superheroapi.com/api.php/${key}/search/${name}`;

    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    
    return results;
    

    
}