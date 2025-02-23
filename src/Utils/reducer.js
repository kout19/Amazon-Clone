import { useRadioGroup } from "@mui/material";
import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user:null,
};


export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
    const existingItem=state.basket.find((item)=>item.id===action.item.id); 
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        }
      }
      else {
        const updatedBasket = state.basket.map((item) => {
          
         return item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
        });
   
        return {
          ...state,
          basket: updatedBasket,
        }
      }
      case Type.REMOVE_FROM_BASKET:
      const existingItemIndex=state.basket.findIndex(item=>item.id===action.id);
      let newBasket=[...state.basket];
      if(existingItemIndex>=0){
        if(newBasket[existingItemIndex].amount===1){
          newBasket.splice(existingItemIndex,1);
        }
        else{
          newBasket[existingItemIndex]={...newBasket[existingItemIndex],amount:newBasket[existingItemIndex].amount-1};
        }
      }
      return{
        ...state,
        basket:newBasket
      }
    case Type.EMPTY_BASKET:
    return {
     ...state,
     basket:[]
     }

    case Type.SET_USER:
      return{
        ...state,
        user:action.user
      }
  

    default:
      return state;
  }
}
