import React from 'react'
import Formulario from './Formulario'
import ListadoRecetas from './ListadoRecetas'

import './main.css'

const Main = () => {

    return (
        <main>
            <div className="container flex main_container">
                <div className="left">
                    <Formulario />
                </div>


                <div className="right">
                    <ListadoRecetas />
                </div>
            </div>
        </main>
    )
}

export default Main
