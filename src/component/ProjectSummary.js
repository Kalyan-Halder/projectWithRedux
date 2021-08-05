import React from 'react'
import {useHistory,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import '../index.css';

function ProjectSummary(props) {
    const history = useHistory();
    const title = props.match.params.id;
    const {project,auth} = props;

    const specificProject = project.find((user)=>{
        return(user.title===title);
    })
    
    const delate = ()=>{
        props.delateProj(specificProject.title)  
    }
    return (
       <>
           {auth === true || auth.state === true?
            <>
            {!specificProject ? 
                <div className="projectlist">
                  <div className="list">      
                    <h1>Project Delated</h1>
                  </div>
                </div>
        :
           <div className="projectlist">
             <div className="list">      
                    <h1>{specificProject.name}</h1>
                    <h3>{specificProject.title}</h3>
                    <p>{specificProject.description}</p>
                    <button className="btn" onClick={delate}>Delete</button>
                    <button className="btn" onClick={()=>history.push('/projects')}>Back</button>
             </div>
           </div>
            }
        </>:
        <> <div className="creates">
             <h1>You Are Not Logged In 😢</h1>
             <NavLink className="btn lists" to="/login">Login</NavLink>
        </div>
        </>}
       </>
    )
}

const mapStateToProps = (state)=>{
    return{
        // project:state.projects
           project:state.rootReducer.projects,
           auth:state.authReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        delateProj : (title)=>{dispatch({type:'DELATE_POST', payload:title})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProjectSummary)
