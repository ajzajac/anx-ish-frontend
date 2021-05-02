import React, { Component } from 'react';
import SignUpModal from './SignUpModal';

class Signup extends Component {
    state = {
        username: "",
        password: "",
        passwordConfirmation: "",
        email: "",
        showModal: true,
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()

        if(this.state.password === this.state.passwordConfirmation){
          fetch(`http://localhost:3000/signup`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Accept': "application/json"
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.passwordConfirmation,
              email: this.state.email,
            })
          })
            .then(res => res.json())
            .then(response => {
              if (response.errors){
                alert(response.errors)
                this.setState({username: ''})
              } else {
                this.props.setUser(response.user)
                localStorage.token = response.token
                this.props.history.push('/')
              }
            })
        } else {
          alert('Please Try Again.')
        }
      }

      sendUserBack = () => {
        window.history.go(-1)
      }

    render() {
        return (
            <div>
                 <div className="signupInput">
                    {this.state.showModal ? 
                    <SignUpModal show={this.state.showModal} history={this.props.history} setUser={this.props.setUser} onHide={() => this.sendUserBack()}/> 
                    :
                     null}
                </div>   
            </div>
        )
    }
}

export default Signup;