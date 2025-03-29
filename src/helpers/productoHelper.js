


export const extraerPrimeraImagen = (imagenesTxt)=>{

    const imagenesArray= JSON.parse(imagenesTxt)

    return imagenesArray[0] || '';

}

export const extractoTexto= (texto,longitud= 50 ) =>{

    if(!texto) return '';

    return texto.substring(0,longitud) + '...';

}

