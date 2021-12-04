const inistalstate ={
    task :[
        {
            id :'123456' ,
            descripition : 'decrp1:',
            isdone : false,
        }
        
    ]
}

    function rootreducer (state = inistalstate , action){
        switch (action.type){
            case 'add' :
                return { ...state,task:[...state.task , action.payload]}
                default:
                    return state;

        }
    }
export default rootreducer