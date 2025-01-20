import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import data from '../data';

const orderDetails=createSlice(
    {
    name:'pendingorders',
    initialState:{orders:data},
    reducers:{
        getPendingOrders(state,action){
            state.orders=action.payload; 
        },
        deleteOrders(state,action){
            console.log(action.payload);
            console.log(state.orders[0].items);
            
            const selected=[...action.payload];
            state.orders[0].items=state.orders[0].items.filter((item)=>{
                let res= action.payload.find(i=>i==item.itemNo);
                console.log(item,action.payload);
                
                console.log(action.payload.includes(item.itemNo));
                
                console.log(res);
                return !action.payload.includes(item.itemNo);
                
            })
        }
    }

    }
)

 const store =configureStore({reducer:{pendingorders:orderDetails.reducer}});
export default store;
export const orderDetailsActions=orderDetails.actions;