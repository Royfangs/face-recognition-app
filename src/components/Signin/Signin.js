import React, { Component } from 'react';

class Signin extends Component {
  state = {
    signInEmail: '',
    signInPassword: ''
  }

  onEmailChange = (event) => {
    this.setState({
      signInEmail: event.target.value
    });
  }

  onPasswordChange = (event) => {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onSubmitSignIn = () => {
    fetch('https://fathomless-crag-78503.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  }
  
  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">信箱</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" 
                onChange={this.onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">密碼</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password" 
              onChange={this.onPasswordChange}/>
            </div>
          </fieldset>
          <div className="">
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="登入"
              onClick={this.onSubmitSignIn} />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db" onClick={() => onRouteChange('register')}>註冊</a>
          </div>
        </div>
      </main>
    </article>  
    );
  }
}

export default Signin;