import React from 'react'
import {NavLink} from 'react-router-dom'
import ProjectList from './ProjectList'
import {connect} from 'react-redux';
import '../index.css'

function Projects(props) {
    const {project,auth} = props;
    
    return (
        <>
            {auth === true || auth.state === true?
                <div className="projects">
                    
                    {project.length === 0 ?   
                         <div className="noProject">
                         <h1>No Project Created</h1> 
                         <NavLink className="redirect" to="/create">Create One</NavLink>      
 
                      </div>  
                      :
                      
                      <div className="show_project">
                      {project.map((project,index)=>{
                          return(
                              <ProjectList project={project} key={index}
                              />
                          );
                      })}
                    </div>}
            
         </div>:
         <div className="projects">
                 
                        <div className="noProject">
                        <h1>Yo Are Not Logged In </h1> 
                        <NavLink className="redirect" to="/login">Login</NavLink>      

                     </div>  
                   
        </div>}
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
 

export default connect(mapStateToProps)(Projects)
