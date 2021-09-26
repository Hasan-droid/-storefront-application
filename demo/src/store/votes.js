let initialStore={
    candidates:[
        {name:'Noor' , votes:0},
        {name:'ibrahem',votes:0},
        {name:'nedal',votes:0},
        {name:'ahmad',votes:0}
    ],
    totalVotes:0
}

const ACTIONS={
    'INCREMENT':'increment',
    'RESET':'reset',
    "CONSOLER":'consoler'

}
//reducer
export default (state=initialStore , action)=>{
    let {type , payload}=action;
    console.log("action: ",action);
    switch(type){

        case ACTIONS.INCREMENT:
             let totalVotes=state.totalVotes+1;
             let candidates=state.candidates.map(candidate=>{

                if(candidate.name==payload){
                    //the key such name and vote to use some where else
                   return {name:candidate.name , votes:candidate.votes+1}
                }
                  return candidate;
             })

    
                return {candidates,totalVotes};
            //why are we doing this???
            

            case ACTIONS.RESET:
                return initialStore;


            case ACTIONS.CONSOLE:
                return console.log("hello from console")

                default:
                    return state;
    }

   


}
//actions
export const increment=(name)=>{
       return{
           type:ACTIONS.INCREMENT,
           payload:name
       }
}

export const reset=()=>{
    return{
        type:ACTIONS.RESET
    }
}

export const consoleer=()=>{
    return{
        type:ACTIONS.CONSOLER
    }
}