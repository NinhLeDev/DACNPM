import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import Navbar from "../layout/Navbar";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="wrapper">
        <div className="iw-overlay" />
        <div className="iw-header-version3 iw-header-version6">
          <div className="header header-default header-style-default v3 v6 header-sticky no-header-sticky-mobile ">
            <Navbar />
          </div>
        </div>
        <div className="page-heading default">
          <div className="container-inner">
            <div className="container">
              <div className="page-title">
                <div className="iw-heading-title">
                  <h1>Đăng nhập</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contents-main" id="contents-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <article
                  id="post-143"
                  className="post-143 page type-page status-publish hentry"
                >
                  <div className="entry-content">
                    <div className="iwj-login">
                      <form
                        onSubmit={this.onSubmit}
                        method="post"
                        className="iwj-form iwj-login-form"
                      >
                        <div className="iwj-field">
                          <label>Email</label>
                          <div className="iwj-input">
                            <i className="fa fa-user" />
                            <TextFieldGroup
                              placeholder="Email Address"
                              name="email"
                              type="email"
                              value={this.state.email}
                              onChange={this.onChange}
                              error={errors.email}
                            />
                          </div>
                        </div>
                        <div className="iwj-field">
                          <label>Mật khẩu</label>
                          <div className="iwj-input">
                            <i className="fa fa-keyboard-o" />
                            <TextFieldGroup
                              placeholder="Password"
                              name="password"
                              type="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              error={errors.password}
                            />
                          </div>
                        </div>
                        <div>
                          <label>
                            <input
                              name="remember"
                              id="remember"
                              type="checkbox"
                            />
                            Nhớ mật khẩu
                          </label>
                        </div>
                        <div className="iwj-button-loader">
                          <button
                            type="submit"
                            name="btn_submit"
                            className="iwj-btn iwj-btn-primary iwj-btn-full iwj-btn-large iwj-login-btn"
                          >
                            Đăng nhập
                          </button>
                        </div>
                        <div className="text-center lost-password">
                          <a href="">Quên mật khẩu ?</a>
                        </div>
                        <div className="text-center register-account">
                          {" "}
                          Bạn chưa có tài khoản? <a href="">Đăng ký</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </article>
              </div>
              <div className="clearfix" />
              <footer className="entry-footer " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
