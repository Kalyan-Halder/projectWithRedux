export const userName = (state='K',action)=>{
    if(action.type === 'USER'){
        return{
            state:action.payload
        }
   }
    return state
}