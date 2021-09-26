let initialStore={
    candidates:[
        {name:'hasan ya',votes:0},
        {name:'ola',votes:0}
    ],
    totalVotes:0
}

let state={
    candidates:[
        {name:'omar' , votes:0}
    ],
    totalVotes:0
}

const ACTIONS={
    'INCREMENT':'increment',
    'RESET':'reset'
}

export default (statera=initialStore , action)=>{

   let {type , payload}=action;

    switch(type){

        case ACTIONS.INCREMENT:
            let totalVotes=statera.totalVotes+1;
            let candidates=statera.candidates.map(candidate=>{
                if(payload== candidate.name){
                    return{name:`${candidate.name}` , votes:candidate.votes+1}
                }
                return candidate;
            })

            return{totalVotes , candidates};

            case ACTIONS.RESET:
                return initialStore

                default:return statera
    }

}

export const increment=(name)=>({
    type:ACTIONS.INCREMENT,
    payload:name
})

export const reset=()=>({
    type:ACTIONS.RESET
})