import React from 'react'
import {NavLink} from 'react-router-dom'
import{connect} from 'react-redux'
import '../index.css'

function Notification(props) {
    const{project} = props;
    
    return (
        <div className="noti">
            <h1 style={{textAlign:'center'}}>Notifications</h1>

            {project.map((project,index)=>{
                return(
                    <div className="noti1"> 
                       <h3 key={index}>Project Created With a title {project.title}</h3>
                       <NavLink className="redirect btn" to={'/projects/' + project.title} >View</NavLink>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        // project:state.projects
        project:state.rootReducer.projects
    }
}
export default connect(mapStateToProps)(Notification)
