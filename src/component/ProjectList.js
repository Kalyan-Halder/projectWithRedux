import React from 'react'
import {NavLink} from 'react-router-dom'
import '../index.css'
import{connect} from 'react-redux'
 

function ProjectList(props) {
    const{project,auth} = props

    const delate = ()=>{
        props.delateProj(project.title)  
    }
    return (
       <>
           {auth === true || auth.state === true ?
            <div className="projectlist">
             <div className="list">      
                    <h1>{project.name}</h1>
                    <h3>{project.title}</h3>
                    <button className="btn" onClick={delate}>Delate</button>
                    <NavLink className="redirect btn" to={'/projects/' + project.title} >View</NavLink>

             </div>
        </div>:
        <div className="projectlist">
             <div className="list">      
                     <h1>You are not Logged In</h1>
             </div>
        </div>}
       </>
    )
}

const mapStateToProps = (state)=>{
    return{
        // project:state.projects
        auth:state.authReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        delateProj : (title)=>{dispatch({type:'DELATE_POST', payload:title})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectList)
