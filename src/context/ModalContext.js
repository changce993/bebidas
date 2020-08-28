import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

// crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null)
    const [infoReceta, setReceta] = useState({})

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idReceta) return 

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

            const respuesta = await axios(url)

            setReceta(respuesta.data.drinks[0])
        }
        obtenerReceta()

    }, [idReceta])



    


    return ( 
        <ModalContext.Provider
            value={{
                infoReceta,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;