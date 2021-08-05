import React from 'react'
import {connect} from 'react-redux'
import Notification from './Notification'
import {NavLink} from 'react-router-dom'
import '../index.css'

function Home(props) {
    const{project,auth} = props;
    return (
         <>
          {project.length > 0 ?  
         <>
             {auth.state===true?
          <div className="home home1">
            <div className="greet">
                <h1>Create Your Dream Project</h1>
                <p>By Kalyan with care</p>
            </div>
            <div className="notification">
                <Notification/>
           </div>
        </div>:
        <div className="home">
             <div className="greet">
             <h1>Welcome to Project Creator</h1>
             <p>By Kalyan with care</p>
             </div>
            {auth===true || auth.state === true ?
            <NavLink className="redirect" to="/create">Create your First Project</NavLink>:
            <NavLink className="redirect btn" to="/login">Login Now</NavLink>      
            }
        </div>
        }
         </>
        :
        <div className="home">
             <div className="greet">
             <h1>Welcome to Project Creator</h1>
             <p>By Kalyan with care</p>
             </div>
            {auth===true || auth.state === true ?
            <NavLink className="redirect" to="/create">Create your First Project</NavLink>:
            <NavLink className="redirect btn" to="/login">Login Now</NavLink>      
            }
        </div>
        }
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

export default connect(mapStateToProps)(Home)
