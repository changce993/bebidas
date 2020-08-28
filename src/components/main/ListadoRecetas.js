import React, { useContext } from 'react'
import Receta from './Receta'
import {RecetasContext} from '../../context/RecetasContext'


const ListadoRecetas = () => {
    
    const { recetas } = useContext(RecetasContext)

    return (
        <div className="flex recetas_container">
            {recetas.map(receta => {
                return <Receta key={receta.idDrink} receta={receta}/>
            })}
        </div>
    )
}

export default ListadoRecetas
