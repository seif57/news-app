import React from 'react';
import './Signin.css';
import { motion } from 'framer-motion';


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''

        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = (e) => {
        e.preventDefault();
       fetch('http://localhost:3000/signin',{
           method:'post',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify({
               email:this.state.signInEmail,
               password:this.state.signInPassword
           })
       })
       .then(response=>response.json())
       .then(user=>{
        if(user.id){ // does the user exist? Did we receive a user with a property of id?
            this.props.loadUser(user);
            this.props.onRouteChange('home');
          }
       })
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="box" >
                    <h1>SignIn</h1>

                    <input
                        onChange={this.onEmailChange}
                        type="email"
                        name=""
                        placeholder="Email" />

                    <input
                        onChange={this.onPasswordChange}
                        type="password"
                        name=""
                        placeholder="Password" />

                    <input
                        onClick={this.onSubmitSignIn}
                        type="submit"
                        name=""
                        value="SignIn" />

                    <input
                        onClick={() => onRouteChange('register')}
                        type="submit"
                        name=""
                        value="Register" />
                </div>
            </motion.div>
        );
    }



}

export default Signin
