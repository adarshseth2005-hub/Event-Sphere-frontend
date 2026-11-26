import { createSlice } from "@reduxjs/toolkit";
import { isExists } from "date-fns";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        items : JSON.parse(localStorage.getItem("eventSphere-favorites")) || [],
    },
    reducers: {
        toggleFavorites(state, action){
            const event = action.payload;
            const existingEvent = state.items.find((e)=>(e.id || e._id) === (event.id || event._id ))

            if(existingEvent){
                state.items = state.items.filter((e)=>(e.id || e._id) !== (event.id || event._id ))
            }
            else{
                state.items.push(event);
                
            }
            localStorage.setItem("eventSphere-favorites", JSON.stringify(state.items))

        },
        
        removeFavorites(state){},

        clearFavorites(state){
            state.items = [];
            localStorage.clear("eventSphere-favorites")
        }
    }
})

export const {toggleFavorites, removeFavorites, clearFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer