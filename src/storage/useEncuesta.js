import {create} from "zustand"

export const useEncuesta = create((set) => ({
    encuesta: (enc) =>{set({ 
            encuesta_data: enc    
    })},
    llamada_seleccionada: (llamada) => {set({
        llamada_id: llamada
    })}
}));
