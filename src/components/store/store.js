const initialeState={
    items:[
        {name:'tvs' , displayName:'TV' , description:"Samsung , LG"},
        {name:'books' ,displayName:'Books' , description:"History , Mathmatics" }
    ], 
    activatedCategory: '',
}

const ACTIONS={
    'ACTIVE':'active',
    'INACTIVE':'inactive'
}

export default (state=initialeState , action)=>{
   let {type , payload}=action;
   
   switch(type){

    case ACTIONS.ACTIVE:
      return { ...state, activatedCategory: payload, activatedDescription: payload.description }
      

            

            case ACTIONS.INACTIVE:
              return initialeState;
         
  

    default: 
    return state
   }
}


export const active=(name)=>{
  return  {type:ACTIONS.ACTIVE , payload:name};
}

export const inactive=()=>{
    return {type:ACTIONS.INACTIVE}
}