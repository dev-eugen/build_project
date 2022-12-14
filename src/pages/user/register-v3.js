import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';

class RegisterV3 extends React.Component {
	static contextType = AppSettings;
	
	constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    	redirect: false
    }
  }

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
	
	handleSubmit(event) {
		event.preventDefault();
		
		this.setState(state => ({
			redirect: true
		}));
  }
  
	render() {
		if (this.state.redirect) {
			return <Navigate to='/dashboard/v3'/>;
	 	}
		
		return (
			<div className="register register-with-news-feed">
				<div className="news-feed">
					<div className="news-image" style={{ backgroundImage: 'url(/assets/img/login-bg/login-bg-9.jpg)' }}></div>
					<div className="news-caption">
						<h4 className="caption-title"><b>Color</b> Admin App</h4>
						<p>
							As a Color Admin app administrator, you use the Color Admin console to manage your organization’s account, such as add new users, manage security settings, and turn on the services you want your team to access.
						</p>
					</div>
				</div>
				<div className="register-container">
					<div className="register-header mb-25px h1">
						<div className="mb-1">Sign Up</div>
						<small className="d-block fs-15px lh-16">Create your Color Admin Account. It’s free and always will be.</small>
					</div>
					<div className="register-content">
						<form onSubmit={this.handleSubmit} className="fs-13px">
							<div className="mb-3">
								<label className="mb-2">Name <span className="text-danger">*</span></label>
								<div className="row gx-3">
									<div className="col-md-6 mb-2 mb-md-0">
										<input type="text" className="form-control fs-13px" placeholder="First name" />
									</div>
									<div className="col-md-6">
										<input type="text" className="form-control fs-13px" placeholder="Last name" />
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label className="mb-2">Email <span className="text-danger">*</span></label>
								<input type="text" className="form-control fs-13px" placeholder="Email address" />
							</div>
							<div className="mb-3">
								<label className="mb-2">Re-enter Email <span className="text-danger">*</span></label>
								<input type="text" className="form-control fs-13px" placeholder="Re-enter email address" />
							</div>
							<div className="mb-4">
								<label className="mb-2">Password <span className="text-danger">*</span></label>
								<input type="password" className="form-control fs-13px" placeholder="Password" />
							</div>
							<div className="form-check mb-4">
								<input className="form-check-input" type="checkbox" value="" id="agreementCheckbox" />
								<label className="form-check-label" htmlFor="agreementCheckbox">
									By clicking Sign Up, you agree to our <Link to="/user/register-v3">Terms</Link> and that you have read our <Link to="/user/register-v3">Data Policy</Link>, including our <Link to="/user/register-v3">Cookie Use</Link>.
								</label>
							</div>
							<div className="mb-4">
								<button type="submit" className="btn btn-primary d-block w-100 btn-lg h-45px fs-13px">Sign Up</button>
							</div>
							<div className="mb-4 pb-5">
								Already a member? Click <Link to="/user/login-v3">here</Link> to login.
							</div>
							<hr className="bg-gray-600 opacity-2" />
							<p className="text-center text-gray-600">
								&copy; Color Admin All Right Reserved 2022
							</p>
						</form>
					</div>
				</div>
			</div>	
		)
	}
}

export default RegisterV3;