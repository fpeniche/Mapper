import React,{Component} from 'react';
import Api from '../../utils/api';

class RegistrationForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        }
    }
    inputChangeHandler=(e)=>this.setState({[e.target.name]:e.target.value});

    register=()=>
    {
    //validate user enters email and pswd and is a proper email and password
    Api.register(this.state.name,this.state.email,this.state.password).then(session=>{
        debugger;
        this.props.onRegister(session.data);
    })
    }

    render()
    {
        return <div className="row">
            <div className="col-6 offset-3">
                <h1>Register</h1>
                <div className="form-group">
                    <input onChange={this.inputChangeHandler} value={this.state.name} type="text" name="name" placeholder="Enter your name" />

                </div>
                <div className="form-group">
                    <input onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="Enter your email" />

                </div>
                <div className="form-group">
                    <input onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Enter your password" />

                </div>
                <button onClick={this.register} className="btn btn-primary">Register</button>
            </div>
        </div>
    }
}

export default RegistrationForm;