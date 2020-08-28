import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [recetas , setReceta] = useState([])
    const [buscarRecetas, setBuscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })

    const [consulta, setContulta] = useState(false)

    const {nombre, categoria} = buscarRecetas

    useEffect( () => { 

        if(consulta){
            const obtenerRecetas = async () => {
                const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const respuesta = await axios(url)
                setReceta(respuesta.data.drinks)
            }
            obtenerRecetas()
        } 
        setContulta(false)

        // eslint-disable-next-line
    }, [setContulta, categoria, consulta, nombre])

    return (
        <RecetasContext.Provider value={{
            recetas,
            setBuscarRecetas,
            setContulta
        }}>
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider
