import { useState } from "react";

const intialState={
    //it should contains all items detailes
    selectedItems:[],
    totalitems:0,
  
}



const ACTIONS={
    'INCREACE_QUNTY':'increse',
    'DECREASE_QUNTITY':'decrese',
    'REMOVE':'remove',
    'ADD':'add',
    'ACTIVE_CART':'active-cart'
}



export default (state=intialState , action)=>{

   
   
   let {type , payload}=action;

    switch(type){

        case ACTIONS.ACTIVE_CART:
            console.log('CART ACTIVATED' , 'state//: ' , state)
            return {...state}

           

        case ACTIONS.ADD:
             let totalitems=state.totalitems+1;
             let duplicate=true;
            console.log("Active" , state)
            state.selectedItems.map(item=>{
                if(item.id==payload._id)
                    duplicate=false
            })
            if(duplicate)
            return {selectedItems:[...state.selectedItems , {id:payload._id , name:payload.name , category:payload.category , price:payload.price , image:payload.image}],totalitems:totalitems} 

            return {selectedItems:[...state.selectedItems],totalitems:state.totalitems}

            
            

            // newItem.cart="cart"
            
           

        case ACTIONS.REMOVE:console.log("payload//delete item; ",payload)
        let remove= state.selectedItems.filter(e=>payload!==e.id)
        return{selectedItems:remove,totalitems:state.totalitems-1}


        case ACTIONS.INCREACE_QUNTY:
           
        case ACTIONS.DECREASE_QUNTITY:
            console.log("increase quntity//\\")
        default:return state 
    }
}


export const addToCart=(payload)=>{
    
  
  return { type:ACTIONS.ADD,
    payload:payload}
   
}

export const activateCart=()=>{
    
   
    return { type:ACTIONS.ACTIVE_CART
    
}
     
  }

export const removeFromCart=(payload)=>({
    type:ACTIONS.REMOVE,
    payload:payload
})

export const decrese=()=>{
   return {type:ACTIONS.DECREASE_QUNTITY};
}
