import React, {useContext, useState} from 'react'
import {ModalContext} from '../../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block',
        borderRadius:'.3rem',
        "&::-webkit-scrollbar":{
            appearance:'none'
        }
    }
}));

const Receta = ({ receta }) => {
    
    
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    
    const classes = useStyles()
    
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setIdReceta(null)
        setReceta({})
    }

    const {setReceta, infoReceta, setIdReceta} = useContext(ModalContext)

    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(var i = 0; i < 16; i++){
            if(informacion[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{informacion[`strIngredient${i}`]}  {informacion[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        <div className="receta_body_containerr flex">
            <img alt="foto bebida" src={receta.strDrinkThumb} />
            <p>{receta.strDrink}</p>
            <button
                onClick={() => {
                    setIdReceta(receta.idDrink)
                    handleOpen()
                }}
                type="submit"
            >Ver receta</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className="modal_container">
                        <h2>{infoReceta.strDrink}</h2>
                        <h3>Instrucciones</h3>
                        <p>{infoReceta.strInstructions}</p>
                        <img alt="foto bebida" className="modal_img" src={infoReceta.strDrinkThumb} />
                        <h3>Ingredientes</h3>
                        {mostrarIngredientes(infoReceta)}
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Receta
