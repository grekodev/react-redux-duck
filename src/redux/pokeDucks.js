import axios from 'axios';

// constantes
const dataInicial = {
    array: [],
    offset: 0
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO';
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO';



// reducer
export default function pokeReducer(state = dataInicial, action){
    switch (action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, array: action.payload}

        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default:
            return state    
    }
}




// acciones
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {
    // console.log('getState',getState().pokemones.offset)
    // const offset = getState().pokemones.offset;
    const {offset} = getState().pokemones;
    try{
        const res = await axios(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    }catch(err){
        console.log(err)
    }
}

export const siguientePokeminAccion = (cantidad) => async (dispatch, getState) => {
    const {offset} = getState().pokemones;
    const siguiente = offset + cantidad
    try{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: {
                array: res.data.results,
                offset: siguiente
            }
        })
    }catch(err){
        console.log(err)
    }
}