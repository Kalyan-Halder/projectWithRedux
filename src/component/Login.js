import React, { useState} from 'react';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
 
 
// import Cookies from 'universal-cookie';

const Login = (props) => {

    const history = useHistory();
    const [data, setData] = useState({
        name:"",
        email: "",
        password: ""
    });
    const changeEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    }

    const submitEvent = (e) => {
        const value = data.name.substring(0, 1);

        e.preventDefault()
        if(!data.name || !data.email || !data.password){
            window.alert("Insufficient input")
        }
        else{
            props.login(true);
            props.user(value);
            history.push('/');
        }
   
    }
    return (
        <>
            <div className="form_warp">
                <form action="">
                    <div className="input_inner">
                        <div className="input_holder">
                            <input type="text" name="name" placeholder="Full Name..." value={data.name} onChange={changeEvent} />
                        </div>
                        <div className="input_holder">
                            <input type="email" name="email" placeholder="Email..." value={data.email} onChange={changeEvent} />
                        </div>
                        <div className="input_holder">
                            <input type="password" name="password" placeholder="Password..." value={data.password} onChange={changeEvent} />
                        </div>
                        <input className="btn" type="submit" value="Log In" onClick={submitEvent} />
                    </div>
                </form>

            </div>
        </>
    )
}
const mapStateToProps = (state)=>{
    return{
        auth:state.authReducer,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        login : (status)=>{dispatch({type:'LOGIN', payload:true})},
        user: (value)=>{dispatch({type:'USER',payload:value})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
