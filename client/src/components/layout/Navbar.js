import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <img
          className="rounded-circle"
          src={user.avatar}
          alt={user.name}
          style={{ width: "25px", marginRight: "5px" }}
          title="You must have a Gravatar connected to your email to display an image"
        />
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="register active"
          >
            Logout
          </a>
      </div>
    );

    const guestLinks = (
      <div className="">
          <Link className="register active" style={{ marginRight: "15px"}} to="/login">
            Login
          </Link>
          <Link className="register active" to="/register">
            Sign Up
          </Link>
      </div>
    );

    return (
      <div>
      <div className="iw-top-bar-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-8 col-xs-9">
              <div className="top-bar-left">
                <div className="contact">
                  <span>
                    <i className="ion-android-call" />
                    <span>+84 -3535- 43 - 125</span>
                  </span>
                  <span>
                    <i className="fa fa-map-marker" />
                    <span>Đại học Bách Khoa Đà Nẵng</span>
                  </span>
                  <span>
                    <i className="ion-clock" />
                    <span>danangjob.com.vn</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-4 col-xs-3">
              <div className="top-bar-right">
                <div className="social-header">
                  <div>
                    <ul className="iw-social-all">
                      <li>
                        <a
                          className="facebook"
                          href="http://facebook.com"
                          title="Facebook"
                        >
                          <i className="fa iwj-icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          href="http://twitter.com"
                          title="Twitter"
                        >
                          <i className="fa iwj-icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="google-plus"
                          href="http://google-plus.com"
                          title="Google Plush"
                        >
                          <i className="fa iwj-icon-gplus" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="linkedin"
                          href="http://linkedin.com"
                          title="Linkedin"
                        >
                          <i className="fa iwj-icon-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="notification">
                  <a
                    href=""
                    className="iwj_link_notice notice_active off-notification"
                    data-user_id={0}
                  >
                    <i className="ion-android-globe" />
                    <span id="notification-count" className="badge hidden">
                      2
                    </span>
                  </a>
                  <div className="iwj-notification-menu" data-user_id>
                    <ul>
                      <li>
                        <a
                          href="http://jobboard.inwavethemes.com/register/"
                          data-notice_item="iwj_notice_register"
                        >
                          <i className="ion-gear-a" />
                          <span>
                            <b className="highlight">Register now</b> to reach
                            dream jobs easier.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://jobboard.inwavethemes.com/job-suggestion/"
                          className="iwj_notification_link"
                          data-notice_item="iwj_notify_suggest_job"
                        >
                          <i className="ion-android-list" />
                          <span>
                            <b className="highlight">Job suggestion</b> you
                            might be interested based on your profile.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="register-login ">
                 {isAuthenticated ? authLinks : guestLinks}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="navbar navbar-default iw-header">
              <div className="container">
                <div className="navbar-default-inner">
                  <h1 className="iw-logo float-left">
                    <a
                      href="http://jobboard.inwavethemes.com/home-default/"
                      title="JobBoard"
                    >
                      <img
                        className="main-logo"
                        src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/logo-v6.png"
                        alt="JobBoard"
                      />
                      <img
                        className="sticky-logo"
                        src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/logo-v6.png"
                        alt="JobBoard"
                      />
                      <img
                        className="logo-mobile"
                        src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/06/logo-job-sticky.png"
                        alt="JobBoard"
                      />
                    </a>
                  </h1>
                  <div className="header-btn-action">
                    <div className="btn-action-wrap">
                      <span className="off-canvas-btn">
                        <i className="fa fa-bars" />
                      </span>
                      <div className="iwj-action-button float-right">
                        <div className="iw-post-a-job">
                          <a
                            className="action-button"
                            href="http://jobboard.inwavethemes.com/dashboard/?iwj_tab=new-job"
                          >
                            <i className="ion-android-add-circle" />
                            <span data-hover="Post a job">Post a job </span>
                          </a>
                        </div>
                      </div>
                      <div className="iwj-author-mobile float-right">
                        <span className="login-mobile">
                          <a
                            className="login action-button"
                            href="http://jobboard.inwavethemes.com/login/"
                          >
                            <i className="fa fa-user" />
                          </a>
                        </span>
                        <span className="register-mobile">
                          <a
                            className="login action-button"
                            href="http://jobboard.inwavethemes.com/register/"
                          >
                            <i className="fa fa-user-plus" />
                          </a>
                        </span>
                      </div>
                      <div className="notification">
                        <a
                          href=""
                          className="iwj_link_notice notice_active off-notification"
                          data-user_id={0}
                        >
                          <i className="ion-android-globe" />
                          <span
                            id="notification-count"
                            className="badge hidden"
                          >
                            2
                          </span>
                        </a>
                        <div className="iwj-notification-menu" data-user_id>
                          <ul>
                            <li>
                              <a
                                href="http://jobboard.inwavethemes.com/register/"
                                data-notice_item="iwj_notice_register"
                              >
                                <i className="ion-gear-a" />
                                <span>
                                  <b className="highlight">Register now</b> to
                                  reach dream jobs easier.
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://jobboard.inwavethemes.com/job-suggestion/"
                                className="iwj_notification_link"
                                data-notice_item="iwj_notify_suggest_job"
                              >
                                <i className="ion-android-list" />
                                <span>
                                  <b className="highlight">Job suggestion</b>{" "}
                                  you might be interested based on your profile.
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iw-menu-header-default float-right">
                    <nav className="main-menu iw-menu-main nav-collapse">
                      <div className="iw-main-menu">
                        <ul
                          id="menu-main-menu-1"
                          className="iw-nav-menu  nav-menu nav navbar-nav"
                        >
                          <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4049 current_page_item menu-item-has-children menu-item-4497 selected active ">
                            <Link className="external-link" to="/" >
                              Trang chủ
                            </Link>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-783">
                            <a className="external-link" href="" >
                              Việc làm
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-569">
                            <a className="external-link" href="" >
                              Giới thiệu
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-568">
                            <a className="external-link" href="" >
                              Tuyển dụng
                            </a>
                            <ul className="sub-menu child-nav dropdown-nav">
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2064">
                                <a className="external-link" href="" >
                                  Danh sách nhà tuyển dụng
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2232">
                            <a className="external-link" href="" >
                              Báo giá
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-286">
                            <a className="external-link" href="" >
                              Liên hệ
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-286">
                            <a className="external-link" href="" >
                              CV
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
