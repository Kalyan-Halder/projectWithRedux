const initial = {
    projects:[
      
    ]
}
export const rootReducer = (state=initial,action)=>{
      if(action.type === 'CREATE_POST'){
          return({
              projects:[...state.projects , action.payload]
          })
      }
      else if(action.type === 'DELATE_POST'){
           let newPost = state.projects.filter((post)=>{
               return action.payload !== post.title
           });
           return{
               ...state,
               projects:newPost
           }
      }
      else
      return state;
}