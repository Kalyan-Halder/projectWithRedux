import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom' ;
import '../index.css' ;


function Navbar(props) {
   
    const{project,auth,name} = props;
    const number = project.length;

    return (
        <>
            {auth===true || auth.state===true?
                <div className="navbar navbar1">
             <div className='navlogo'>
                <NavLink className="logo" to="/"><h1>Project Creator</h1></NavLink>
             </div>
             <div className='navlinks'>
                <NavLink exact activeClassName='active' className="links" to="/">Home</NavLink>
                <NavLink exact activeClassName='active' className="links" to="/create">Create</NavLink>
                <NavLink exact activeClassName='active' className="links" to="/projects">Projects {number<=0 ? <span>({number})</span>:<span className="cart">({number})</span>}</NavLink>
                <NavLink exact activeClassName="userActive" className="links usr" to="/logout">{name.state}</NavLink>
            </div>
        </div>:
        
        <div className="navbar">
             <div className='navlogo'>
                <NavLink className="logo" to="/"><h1>Project Creator</h1></NavLink>
             </div>
            <div className='navlinks'>
                <NavLink exact activeClassName='active' className="links" to="/">Home</NavLink>
                <NavLink exact activeClassName='active' className="links" to="/login">Login</NavLink>
            </div>
        </div>}
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        // project:state.projects
        project:state.rootReducer.projects,
        auth:state.authReducer,
        name:state.userName
    }
}
 
export default connect(mapStateToProps)(Navbar)
