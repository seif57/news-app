import React from 'react';
import "./Register.css";
import { motion } from 'framer-motion';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',


        }
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password,
                name:this.state.name
            })
        })
        .then(response=>response.json())
        .then(user=>{
            if(user.id){
             this.props.loadUser(user);
             this.props.onRouteChange('home')
            }
        })
     }

    render() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="box" >
                    <h1>Register</h1>

                    <input
                        onChange={this.onNameChange}
                        type="text"
                        name=""
                        placeholder="Name" />

                    <input
                        onChange={this.onPasswordChange}
                        type="password"
                        name=""
                        placeholder="Password" />

                    <input
                        onChange={this.onEmailChange}
                        type="email"
                        name=""
                        placeholder="E-mail" />

                    <input
                        onClick={this.onSubmitRegister}
                        type="submit"
                        name=""
                        value="Register" />
                </div>
            </motion.div>

        )
    }

}

export default Register
