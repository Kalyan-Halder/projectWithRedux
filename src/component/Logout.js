import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import '../index.css'


function Logout(props) {
    const history = useHistory()

    const logout = (e)=>{
        e.preventDefault();
        props.logout(false);
        window.alert("You Have Been Logged Out");
        history.push('/');
   }
    return (
        <div className='logout'>
            <button onClick={logout} className='btn'>Logout</button>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logout : (status)=>{dispatch({type:'LOGOUT', payload:false})}
    }
}
export default connect(null,mapDispatchToProps)(Logout)
