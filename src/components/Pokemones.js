import React from 'react'
// useDispatch = llama a la accion / para consumir nuestra accion
// useSelector = leer el state principal
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokeminAccion } from '../redux/pokeDucks'

const Pokemones = () => {
    const dispatch = useDispatch() // llama a la accion
    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            lita de pokemones
            <button onClick={()=> dispatch(obtenerPokemonesAccion())}>get pokemones</button>
            <button onClick={()=> dispatch(siguientePokeminAccion(20))}>siguiente pokemones</button>
            <ul>
                {pokemones.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemones
