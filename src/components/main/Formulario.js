import React, { useContext, useState } from 'react'
import {CategoriasContext} from '../../context/CategoriasContext'
import {RecetasContext} from '../../context/RecetasContext'

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)

    const [ busqueda , setBusqueda ] = useState({})

    const obtenerDatosReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    const { setBuscarRecetas, setContulta } = useContext(RecetasContext)


    return (
        <form 
            onSubmit={ e => {
                e.preventDefault()
                setBuscarRecetas(busqueda)
                setContulta(true)
            }}
        >
            <span>Busca bebidas por categoria o ingrediente</span>

            <div className="flex form">
                <input type="text" name="nombre" placeholder="Buscar por ingrediente" onChange={obtenerDatosReceta}/>

                <select name="categoria" onChange={obtenerDatosReceta}>
                    <option value=""> -- Seleccionar categoria --</option>
                    {categorias.map( categoria => {
                        return <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >
                            {categoria.strCategory}
                        </option>
                    })}
                </select>

                <button type="submit" name="">Buscar</button>
            </div>
        </form>
    )
}

export default Formulario
