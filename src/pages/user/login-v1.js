import React from 'react';
import {useState} from "react";


import login from "../../service/login";
import { AppSettings } from '../../config/app-settings';

class LoginV1 extends React.Component {
	static contextType = AppSettings;

	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemember = this.handleRemember.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.state = {email: '', password: '', remember: true};
	}

	// const [state, setState] = useState({email: null, password: null, remember: true});


	componentDidMount() {
		this.context.handleSetAppSidebarNone(true);
		this.context.handleSetAppHeaderNone(true);
		this.context.handleSetAppContentClass('p-0');
	}

	componentWillUnmount() {
		this.context.handleSetAppSidebarNone(false);
		this.context.handleSetAppHeaderNone(false);
		this.context.handleSetAppContentClass('');
	}


	handleRemember(event){
		this.setState(state => ({
			...state,
			remember: !this.state.remember
		}));
	}

	handleEmail(event){
		this.setState(state => ({
			...state,
			email: event.target.value
		}));
	}

	handlePassword(event){
		this.setState(state => ({
			...state,
			password: event.target.value
		}));
	}
	
	handleSubmit(event) {
		event.preventDefault();

		login(this.state)
		// this.setState(state => ({
		// 	redirect: true
		// }));
  }
  
	render() {
		// if (this.state.redirect) {
		// 	return <Navigate to='/dashboard/v3'/>;
	 	// }
		return (
			<div className="login login-v1">
				<div className="login-container">
					<div className="login-header">
						<div className="brand">
							<div className="d-flex align-items-center">
								<span className="logo"></span> <b>Build</b> Fast
							</div>
							<small>Build anything and anywhere</small>
						</div>
						<div className="icon">
							<i className="fa fa-lock"></i>
						</div>
					</div>
					<div className="login-body">
						<div className="login-content fs-13px">
							<form onSubmit={this.handleSubmit}>
								<div className="form-floating mb-20px">
									<input onChange={this.handleEmail} value={this.state.email} type="email" className="form-control fs-13px h-45px" id="emailAddress" placeholder="Email Address" />
									<label htmlFor="emailAddress" className="d-flex align-items-center py-0">Email Address</label>
								</div>
								<div className="form-floating mb-20px">
									<input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control fs-13px h-45px" id="password" placeholder="Password" />
									<label htmlFor="password" className="d-flex align-items-center py-0">Password</label>
								</div>
								{/*<div className="form-check mb-20px">*/}
								{/*	<input className="form-check-input" type="checkbox"*/}
								{/*		   onChange={this.handleRemember}*/}
								{/*		   checked={this.state.remember}*/}
								{/*		   id="rememberMe" />*/}
								{/*	<label className="form-check-label" htmlFor="rememberMe">*/}
								{/*		Remember Me*/}
								{/*	</label>*/}
								{/*</div>*/}
								<div className="login-buttons">
									<button type="submit" className="btn h-45px btn-success d-block w-100 btn-lg">Sign me in</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LoginV1;