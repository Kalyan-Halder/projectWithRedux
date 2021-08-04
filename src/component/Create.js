import React,{useState} from 'react'
import '../index.css'
import {connect} from 'react-redux'
import {useHistory,NavLink} from 'react-router-dom'

function Create(props) {
   
    const{auth} = props
    const history = useHistory();
    const[data,setData] = useState({
        name:"",
        title:"",
        description:""
    });

    const changeProject =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name]:value
        });
    }



    const submitEvent = (e)=>{
        e.preventDefault();

        if(!data.name || !data.title || !data.description){
            window.alert("Insufficient Input");
            props.history.push('/create');
        }
        else{
            props.createProj(data);
            window.alert("Project Created");
            history.push("/projects");
        }
        setData({
            name:"",
            title:"",
            description:""
        });
        
    }

    return (
        <>
            {auth === true || auth.state ===true?
                <div className="creates">
                <h1>Create Project</h1>
            <div className="form">
                <form>
                    <input type="text" name="name" value={data.name} placeholder="Project Name..." onChange={changeProject}/>
                    <input type="text" name="title" value={data.title} placeholder="Title..."  onChange={changeProject}/>
                    <textarea type="text" className="text_area" value={data.description} name="description" rows="20" placeholder="Description..." onChange={changeProject} ></textarea>
                    <input className="btn" type="submit" value="Create Project" onClick={submitEvent}/>
                </form>
            </div>
        </div>:
        <div className="creates">
             <h1>You Are Not Logged In 😢</h1>
             <NavLink className="btn" to="/login">Login</NavLink>
        </div>
        }
        </>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createProj : (data)=>{dispatch({type:'CREATE_POST', payload:data})}
    }
}
const mapStateToProps = (state)=>{
    return{
        auth:state.authReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Create);
