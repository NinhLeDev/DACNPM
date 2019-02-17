import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "../../assets/css/custom_style.css";
import "../../assets/css/ads.css";
import Navbar from "./Navbar";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="iw-overlay" />
        <div className="iw-header-version3 iw-header-version6 ">
          <div className="header header-default header-style-default v3 v6 header-sticky no-header-sticky-mobile ">
            <Navbar />

          </div>
        </div>

        <div className="slide-container slider-2">
          <link
            href="http://fonts.googleapis.com/css?family=Montserrat:600%7COpen+Sans:300"
            rel="stylesheet"
            property="stylesheet"
            type="text/css"
            media="all"
          />
          <div
            id="rev_slider_2_1_wrapper"
            className="rev_slider_wrapper fullwidthbanner-container"
            data-source="gallery"
            style={{
              margin: "0px auto",
              background: "transparent",
              padding: "0px",
              marginTop: "0px",
              marginBottom: "0px",
              height: "800px !important"
            }}
          >
            <div
              id="rev_slider_2_1"
              className="rev_slider fullwidthabanner"
              style={{ height: "800px !important" }}
              data-version="5.4.8"
            >
              <ul>
                <img
                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/slide-02.jpg"
                  alt=""
                  title="slide-02"
                  data-bgrepeat="no-repeat"
                  className=""
                  data-no-retina
                  style={{ width: "100% important" }}
                />
              </ul>
              <div
                className="tp-bannertimer tp-bottom"
                style={{ visibility: "hidden !important" }}
              />
            </div>
          </div>
        </div>
        <div className="contents-main" id="contents-main">
          <article
            id="post-4049"
            className="post-4049 page type-page status-publish hentry"
          >
            <div className="entry-content">
              <div className="vc_row wpb_row vc_row-fluid row-in-revo-slider vc_custom_1528171150774">
                <div className="container">
                  <div className="row">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1528167861332">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner ">
                                <div className="wpb_wrapper">
                                  <div className="iwj-find-jobs style3 style3-3">
                                    <form
                                      action="http://jobboard.inwavethemes.com/jobs/"
                                      method="get"
                                      className="iw-job-advanced_search style3"
                                      style={{
                                        background: "rgba(0, 0, 0, )",
                                        marginTop: "40px"
                                      }}
                                    >
                                      <div className="fields">
                                        <div className="field-item key-word">
                                          <div className="input-select">
                                            <input
                                              placeholder="Enter keywords"
                                              name="keyword"
                                              type="text"
                                            />
                                          </div>
                                        </div>
                                        <div className="field-item location">
                                          <div className="input-select">
                                            <select
                                              className="iwj-find-jobs-select style3"
                                              name="iwj_location"
                                            >
                                              <option value selected="selected">
                                                Location
                                              </option>
                                              <option value="an-do">
                                                Ấn Độ
                                              </option>
                                              <option value="argentina">
                                                Argentina
                                              </option>
                                              <option value="buenos-aires">
                                                - Buenos Aires
                                              </option>
                                              <option value="comuna-1">
                                                - - Comuna 1
                                              </option>
                                              <option value="australia">
                                                Australia
                                              </option>
                                              <option value="new-south-wales">
                                                - New South Wales
                                              </option>
                                              <option value="victoria">
                                                - Victoria
                                              </option>
                                              <option value="brimbank-city">
                                                - - Brimbank City
                                              </option>
                                              <option value="france">
                                                France
                                              </option>
                                              <option value="ile-de-france">
                                                - Île-de-France
                                              </option>
                                              <option value="paris">
                                                - - Paris
                                              </option>
                                              <option value="india">
                                                India
                                              </option>
                                              <option value="japan">
                                                Japan
                                              </option>
                                              <option value="hokkaido">
                                                - Hokkaido
                                              </option>
                                              <option value="okinawa">
                                                - Okinawa
                                              </option>
                                              <option value="tokyo">
                                                - Tokyo
                                              </option>
                                              <option value="tokyo-to">
                                                - Tōkyō-to
                                              </option>
                                              <option value="united-kingdom">
                                                United Kingdom
                                              </option>
                                              <option value="england">
                                                - England
                                              </option>
                                              <option value="greater-london">
                                                - - Greater London
                                              </option>
                                              <option value="london">
                                                - London
                                              </option>
                                              <option value="united-states">
                                                United States
                                              </option>
                                              <option value="california">
                                                - California
                                              </option>
                                              <option value="san-bernardino-county">
                                                - - San Bernardino County
                                              </option>
                                              <option value="san-diego-county">
                                                - - San Diego County
                                              </option>
                                              <option value="colorado">
                                                - Colorado
                                              </option>
                                              <option value="kit-carson-county">
                                                - - Kit Carson County
                                              </option>
                                              <option value="iowa">
                                                - Iowa
                                              </option>
                                              <option value="los-angeles">
                                                - Los Angeles
                                              </option>
                                              <option value="missouri">
                                                - Missouri
                                              </option>
                                              <option value="jasper-county">
                                                - - Jasper County
                                              </option>
                                              <option value="galena-township">
                                                - - - Galena Township
                                              </option>
                                              <option value="montana">
                                                - Montana
                                              </option>
                                              <option value="new-mexico">
                                                - New Mexico
                                              </option>
                                              <option value="new-york">
                                                - New York
                                              </option>
                                              <option value="kings-county">
                                                - - Kings County
                                              </option>
                                              <option value="new-york-county">
                                                - - New York County
                                              </option>
                                              <option value="north-dakota">
                                                - North Dakota
                                              </option>
                                              <option value="cass-county">
                                                - - Cass County
                                              </option>
                                              <option value="oklahoma">
                                                - Oklahoma
                                              </option>
                                              <option value="oklahoma-county">
                                                - - Oklahoma County
                                              </option>
                                              <option value="san-diego">
                                                - San Diego
                                              </option>
                                              <option value="san-francisco">
                                                - San Francisco
                                              </option>
                                              <option value="south-dakota">
                                                - South Dakota
                                              </option>
                                              <option value="pennington-county">
                                                - - Pennington County
                                              </option>
                                              <option value="tennessee">
                                                - Tennessee
                                              </option>
                                              <option value="grundy-county">
                                                - - Grundy County
                                              </option>
                                              <option value="west-virginia">
                                                - West Virginia
                                              </option>
                                              <option value="vietnam">
                                                Vietnam
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="field-item categories">
                                          <div className="input-select">
                                            <select
                                              className="iwj-find-jobs-select style3"
                                              name="iwj_cat"
                                            >
                                              <option value selected="selected">
                                                Categories
                                              </option>
                                              <option value="accounting-ssistant">
                                                Accounting Assistant
                                              </option>
                                              <option value="arts-design-media">
                                                Arts, Design, Media
                                              </option>
                                              <option value="automotive">
                                                Automotive
                                              </option>
                                              <option value="banking">
                                                Banking
                                              </option>
                                              <option value="charity-voluntary">
                                                Charity &amp; Voluntary
                                              </option>
                                              <option value="education-coachs">
                                                Education &amp; Coachs
                                              </option>
                                              <option value="engineering">
                                                Engineering
                                              </option>
                                              <option value="finance-and-business">
                                                Finance And Business
                                              </option>
                                              <option value="financial-services">
                                                Financial Services
                                              </option>
                                              <option value="web-developer">
                                                IT &amp; Computer
                                              </option>
                                              <option value="restaurant">
                                                Restaurant
                                              </option>
                                              <option value="sales-marketing">
                                                Sales &amp; Marketing
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="field-item submit">
                                          <button>
                                            <i className="ion-search" />
                                            <h6>Search Job</h6>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="trending-advance">
                                        <div className="section-filter filter-advance hide">
                                          <div className="title-form">
                                            Filter by
                                          </div>
                                          <div className="filter-item">
                                            <select
                                              className="default-sorting iwj-select-2-advance form-control"
                                              name="iwj_type"
                                            >
                                              <option value selected="selected">
                                                Choose job type
                                              </option>
                                              <option value="contract">
                                                Contract
                                              </option>
                                              <option value="full-time">
                                                Full-Time
                                              </option>
                                              <option value="part-time">
                                                Part-time
                                              </option>
                                              <option value="temporary">
                                                Temporary
                                              </option>{" "}
                                            </select>
                                          </div>
                                          <div className="filter-item">
                                            <select
                                              className="default-sorting iwj-select-2-advance form-control"
                                              name="iwj_skill"
                                            >
                                              <option value selected="selected">
                                                Choose Skill
                                              </option>
                                              <option value="lll">
                                                ;l'l'l;'
                                              </option>
                                              <option value="net">.NET</option>
                                              <option value="ability-to-work-under-preshure">
                                                ability to work under preshure
                                              </option>
                                              <option value="account-manager">
                                                Account Manager
                                              </option>
                                              <option value="accounts">
                                                accounts
                                              </option>
                                              <option value="adaptability">
                                                Adaptability
                                              </option>
                                              <option value="administration">
                                                Administration
                                              </option>
                                              <option value="administrative">
                                                Administrative
                                              </option>
                                              <option value="ai">Ai</option>
                                              <option value="ajax">AJAX</option>
                                              <option value="android">
                                                android
                                              </option>
                                              <option value="angular-js">
                                                Angular JS
                                              </option>
                                              <option value="apache">
                                                Apache
                                              </option>
                                              <option value="app">app</option>
                                              <option value="as">as</option>
                                              <option value="asp-net">
                                                ASP.NET
                                              </option>
                                              <option value="automotive">
                                                Automotive
                                              </option>
                                              <option value="banners">
                                                Banners
                                              </option>
                                              <option value="beauty">
                                                Beauty
                                              </option>
                                              <option value="benefits-rewards">
                                                Benefits &amp; Rewards
                                              </option>
                                              <option value="benefits-and-rewards">
                                                Benefits and Rewards
                                              </option>
                                              <option value="bonuses">
                                                Bonuses
                                              </option>
                                              <option value="bpss">BPSS</option>
                                              <option value="business-development">
                                                Business Development
                                              </option>
                                              <option value="buy-to-let">
                                                Buy To Let
                                              </option>
                                              <option value="c">C#</option>
                                              <option value="cake-php">
                                                Cake PHP
                                              </option>
                                              <option value="campaigns">
                                                Campaigns
                                              </option>
                                              <option value="campus-hiring">
                                                Campus Hiring
                                              </option>
                                              <option value="campus-recruitment">
                                                Campus Recruitment
                                              </option>
                                              <option value="change-management">
                                                Change Management
                                              </option>
                                              <option value="coding">
                                                coding
                                              </option>
                                              <option value="collections">
                                                Collections
                                              </option>
                                              <option value="commercial-mortgage">
                                                Commercial Mortgage
                                              </option>
                                              <option value="commission">
                                                Commission
                                              </option>
                                              <option value="communications">
                                                Communications
                                              </option>
                                              <option value="compensation-and-benefit">
                                                Compensation and Benefit
                                              </option>
                                              <option value="compensation-and-benefits">
                                                Compensation and Benefits
                                              </option>
                                              <option value="compensation-and-rewards">
                                                Compensation and Rewards
                                              </option>
                                              <option value="competency-mapping">
                                                Competency Mapping
                                              </option>
                                              <option value="comptabilite">
                                                Comptabilité
                                              </option>
                                              <option value="computer-basic">
                                                Computer basic
                                              </option>
                                              <option value="contracts">
                                                Contracts
                                              </option>
                                              <option value="core-php">
                                                core php
                                              </option>
                                              <option value="corporate-communication">
                                                Corporate Communication
                                              </option>
                                              <option value="creative">
                                                Creative
                                              </option>
                                              <option value="credit-risk">
                                                Credit Risk
                                              </option>
                                              <option value="css">CSS</option>
                                              <option value="css3">CSS3</option>
                                              <option value="cutting-skills">
                                                Cutting skills
                                              </option>
                                              <option value="d">d</option>
                                              <option value="dad">DAd</option>
                                              <option value="data">Data</option>
                                              <option value="design">
                                                Design
                                              </option>
                                              <option value="developer">
                                                Developer
                                              </option>
                                              <option value="dfgfdgdfgdf">
                                                dfgfdgdfgdf
                                              </option>
                                              <option value="digital">
                                                digital
                                              </option>
                                              <option value="digital-design">
                                                digital design
                                              </option>
                                              <option value="digital-marketing">
                                                Digital Marketing
                                              </option>
                                              <option value="diversity-inclusion">
                                                Diversity &amp; Inclusion
                                              </option>
                                              <option value="django">
                                                django
                                              </option>
                                              <option value="email-marketing">
                                                Email Marketing
                                              </option>
                                              <option value="employee-engagement">
                                                Employee Engagement
                                              </option>
                                              <option value="employee-relations">
                                                Employee Relations
                                              </option>
                                              <option value="employer-branding">
                                                Employer Branding
                                              </option>
                                              <option value="esp">esp</option>
                                              <option value="excel">
                                                Excel
                                              </option>
                                              <option value="expat-management">
                                                Expat Management
                                              </option>
                                              <option value="experiential-events">
                                                Experiential Events
                                              </option>
                                              <option value="face-to-face">
                                                Face to Face
                                              </option>
                                              <option value="facilities-management">
                                                Facilities Management
                                              </option>
                                              <option value="fdf">FDf</option>
                                              <option value="fghfghghjhjhgjhgjhgjhg">
                                                fghfghghjhjhgjhgjhgjhg
                                              </option>
                                              <option value="finance">
                                                Finance
                                              </option>
                                              <option value="foreign-exchange">
                                                Foreign Exchange
                                              </option>
                                              <option value="forklift-driver">
                                                forklift driver
                                              </option>
                                              <option value="front-end-developer">
                                                Front End Developer
                                              </option>
                                              <option value="fucking">
                                                fucking
                                              </option>
                                              <option value="fwd">fwd</option>
                                              <option value="gage">Gage</option>
                                              <option value="general-management">
                                                General Management
                                              </option>
                                              <option value="ghjghjghjghjgh">
                                                ghjghjghjghjgh
                                              </option>
                                              <option value="git">git</option>
                                              <option value="global-mobility">
                                                Global Mobility
                                              </option>
                                              <option value="good-looking">
                                                good looking
                                              </option>
                                              <option value="google-ads-words">
                                                google ads words
                                              </option>
                                              <option value="google-seo">
                                                google seo
                                              </option>
                                              <option value="grievance-handling">
                                                Grievance Handling
                                              </option>
                                              <option value="grunt">
                                                Grunt
                                              </option>
                                              <option value="gupit-skills">
                                                Gupit Skills
                                              </option>
                                              <option value="half">half</option>
                                              <option value="healthcare">
                                                Healthcare
                                              </option>
                                              <option value="hiring">
                                                Hiring
                                              </option>
                                              <option value="hlfkuc">
                                                hlfkuc
                                              </option>
                                              <option value="hr-analytics">
                                                HR Analytics
                                              </option>
                                              <option value="hr-audit">
                                                HR Audit
                                              </option>
                                              <option value="hr-compliance">
                                                HR Compliance
                                              </option>
                                              <option value="hr-management">
                                                HR Management
                                              </option>
                                              <option value="hr-operation">
                                                HR Operation
                                              </option>
                                              <option value="hr-operations">
                                                HR Operations
                                              </option>
                                              <option value="hr-process">
                                                HR Process
                                              </option>
                                              <option value="hr-strategy">
                                                HR Strategy
                                              </option>
                                              <option value="hris">HRIS</option>
                                              <option value="hrms">HRMS</option>
                                              <option value="html">HTML</option>
                                              <option value="html-css">
                                                HTML CSS
                                              </option>
                                              <option value="html5">
                                                HTML5
                                              </option>
                                              <option value="ihoihoho">
                                                ihoihoho
                                              </option>
                                              <option value="illustrator">
                                                Illustrator
                                              </option>
                                              <option value="inbound">
                                                Inbound
                                              </option>
                                              <option value="indesign">
                                                InDesign
                                              </option>
                                              <option value="industrial-relation">
                                                Industrial Relation
                                              </option>
                                              <option value="industrial-relations">
                                                Industrial Relations
                                              </option>
                                              <option value="industrial-safety">
                                                Industrial Safety
                                              </option>
                                              <option value="informatica">
                                                informatica
                                              </option>
                                              <option value="ingles">
                                                ingles
                                              </option>
                                              <option value="integrated-marketing">
                                                Integrated Marketing
                                              </option>
                                              <option value="internal-communication">
                                                Internal Communication
                                              </option>
                                              <option value="internal-communications">
                                                Internal Communications
                                              </option>
                                              <option value="inventory">
                                                INVENTORY
                                              </option>
                                              <option value="ios">ios</option>
                                              <option value="java">Java</option>
                                              <option value="javascript">
                                                Javascript
                                              </option>
                                              <option value="joomla">
                                                Joomla
                                              </option>
                                              <option value="jquery">
                                                jQuery
                                              </option>
                                              <option value="js">JS</option>
                                              <option value="kulot-skills">
                                                Kulot SKills
                                              </option>
                                              <option value="labor-relations">
                                                Labor Relations
                                              </option>
                                              <option value="labour-relations">
                                                Labour Relations
                                              </option>
                                              <option value="lamp">LAMP</option>
                                              <option value="laravel">
                                                laravel
                                              </option>
                                              <option value="leadership-development">
                                                Leadership Development
                                              </option>
                                              <option value="leadership-hiring">
                                                Leadership Hiring
                                              </option>
                                              <option value="leardership">
                                                leardership
                                              </option>
                                              <option value="learning-development">
                                                Learning &amp; Development
                                              </option>
                                              <option value="learning-and-development">
                                                Learning and Development
                                              </option>
                                              <option value="linux">
                                                Linux
                                              </option>
                                              <option value="loan">Loan</option>
                                              <option value="logistics">
                                                LOGISTICS
                                              </option>
                                              <option value="main-car-dealership">
                                                Main Car Dealership
                                              </option>
                                              <option value="manager">
                                                Manager
                                              </option>
                                              <option value="mandate">
                                                Mandate
                                              </option>
                                              <option value="manpower-planning">
                                                Manpower Planning
                                              </option>
                                              <option value="marketing">
                                                Marketing
                                              </option>
                                              <option value="marketing-assistant">
                                                Marketing Assistant
                                              </option>
                                              <option value="marketing-communications">
                                                Marketing Communications
                                              </option>
                                              <option value="material-management">
                                                MATERIAL MANAGEMENT
                                              </option>
                                              <option value="media">
                                                Media
                                              </option>
                                              <option value="mobile">
                                                mobile
                                              </option>
                                              <option value="mobility">
                                                Mobility
                                              </option>
                                              <option value="moblie">
                                                Moblie
                                              </option>
                                              <option value="mortgage-sales">
                                                Mortgage Sales
                                              </option>
                                              <option value="motor-trade">
                                                Motor Trade
                                              </option>
                                              <option value="mtv">mtv</option>
                                              <option value="mvc">MVC</option>
                                              <option value="mysql">
                                                Mysql
                                              </option>
                                              <option value="n-a">N/A</option>
                                              <option value="new-used-car-sales-executive">
                                                New &amp; Used Car Sales
                                                Executive
                                              </option>
                                              <option value="new-clients">
                                                New Clients
                                              </option>
                                              <option value="newport">
                                                Newport
                                              </option>
                                              <option value="nodejs">
                                                NodeJS
                                              </option>
                                              <option value="objective-c">
                                                objective-c
                                              </option>
                                              <option value="od-interventions">
                                                OD Interventions
                                              </option>
                                              <option value="oop">oop</option>
                                              <option value="oop-php">
                                                OOP PHP
                                              </option>
                                              <option value="organization-development">
                                                Organization Development
                                              </option>
                                              <option value="organizational-design">
                                                Organizational Design
                                              </option>
                                              <option value="organizational-development">
                                                Organizational Development
                                              </option>
                                              <option value="outbound">
                                                Outbound
                                              </option>
                                              <option value="page">Page</option>
                                              <option value="partnerships">
                                                Partnerships
                                              </option>
                                              <option value="payroll">
                                                Payroll
                                              </option>
                                              <option value="payroll-processing">
                                                Payroll processing
                                              </option>
                                              <option value="people-strategy">
                                                People Strategy
                                              </option>
                                              <option value="performance-management">
                                                Performance Management
                                              </option>
                                              <option value="photoshop">
                                                Photoshop
                                              </option>
                                              <option value="php">PHP</option>
                                              <option value="php-developer">
                                                PHP Developer
                                              </option>
                                              <option value="php1">PHP1</option>
                                              <option value="plant-hr">
                                                Plant HR
                                              </option>
                                              <option value="pms">PMS</option>
                                              <option value="pr">PR</option>
                                              <option value="print">
                                                Print
                                              </option>
                                              <option value="progression">
                                                Progression
                                              </option>
                                              <option value="public-relations">
                                                Public Relations
                                              </option>
                                              <option value="python">
                                                Python
                                              </option>
                                              <option value="quote-preparation">
                                                Quote Preparation
                                              </option>
                                              <option value="reconciliation">
                                                Reconciliation
                                              </option>
                                              <option value="recruitment">
                                                Recruitment
                                              </option>
                                              <option value="recruitments">
                                                Recruitments
                                              </option>
                                              <option value="responsive-design">
                                                responsive design
                                              </option>
                                              <option value="retention-management">
                                                Retention Management
                                              </option>
                                              <option value="rewards-and-benefits">
                                                Rewards and Benefits
                                              </option>
                                              <option value="safety-management">
                                                Safety Management
                                              </option>
                                              <option value="sage">Sage</option>
                                              <option value="sale">sale</option>
                                              <option value="sales">
                                                sales
                                              </option>
                                              <option value="sales-executive">
                                                Sales Executive
                                              </option>
                                              <option value="sales-management">
                                                Sales Management
                                              </option>
                                              <option value="sda">sda</option>
                                              <option value="sdsdsdsd">
                                                sdsdsdsd
                                              </option>
                                              <option value="security">
                                                Security
                                              </option>
                                              <option value="security-management">
                                                Security Management
                                              </option>
                                              <option value="self-motivation">
                                                self motivation
                                              </option>
                                              <option value="senior-digital-designer">
                                                senior digital designer
                                              </option>
                                              <option value="social-media">
                                                Social Media
                                              </option>
                                              <option value="social-media-marketing">
                                                Social Media Marketing
                                              </option>
                                              <option value="social-work">
                                                Social Work
                                              </option>
                                              <option value="software-development">
                                                Software Development
                                              </option>
                                              <option value="sql">SQL</option>
                                              <option value="staff-management">
                                                Staff Management
                                              </option>
                                              <option value="staffing">
                                                Staffing
                                              </option>
                                              <option value="statutory-compliance">
                                                Statutory Compliance
                                              </option>
                                              <option value="stores">
                                                STORES
                                              </option>
                                              <option value="strategic-hr">
                                                Strategic HR
                                              </option>
                                              <option value="succession-planning">
                                                Succession Planning
                                              </option>
                                              <option value="sureball">
                                                sureball
                                              </option>
                                              <option value="swift">
                                                swift
                                              </option>
                                              <option value="talent-acquisition">
                                                Talent Acquisition
                                              </option>
                                              <option value="talent-assessment">
                                                Talent Assessment
                                              </option>
                                              <option value="talent-development">
                                                Talent Development
                                              </option>
                                              <option value="talent-management">
                                                Talent Management
                                              </option>
                                              <option value="team-work">
                                                Team work
                                              </option>
                                              <option value="telephone">
                                                Telephone
                                              </option>
                                              <option value="time-m-anagement">
                                                Time M anagement
                                              </option>
                                              <option value="tow-truck">
                                                tow truck
                                              </option>
                                              <option value="training">
                                                Training
                                              </option>
                                              <option value="training-development">
                                                Training &amp; Development
                                              </option>
                                              <option value="training-and-development">
                                                Training and Development
                                              </option>
                                              <option value="transition-management">
                                                Transition Management
                                              </option>
                                              <option value="underwriting">
                                                Underwriting
                                              </option>
                                              <option value="unity">
                                                Unity
                                              </option>
                                              <option value="user-experience">
                                                User Experience
                                              </option>
                                              <option value="vehicle-sales">
                                                Vehicle Sales
                                              </option>
                                              <option value="video-editing">
                                                video editing
                                              </option>
                                              <option value="vzcvcx">
                                                vzcvcx
                                              </option>
                                              <option value="wage">Wage</option>
                                              <option value="watchos">
                                                watchos
                                              </option>
                                              <option value="web-design">
                                                Web Design
                                              </option>
                                              <option value="web-developer">
                                                Web Developer
                                              </option>
                                              <option value="web-developers">
                                                Web Developers
                                              </option>
                                              <option value="web-development">
                                                Web Development
                                              </option>
                                              <option value="word">Word</option>
                                              <option value="wordpress">
                                                Wordpress
                                              </option>
                                              <option value="workforce-management">
                                                Workforce Management
                                              </option>
                                              <option value="workforce-planning">
                                                Workforce Planning
                                              </option>
                                              <option value="youth-marketing">
                                                Youth Marketing
                                              </option>
                                              <option value="zehlenie">
                                                zehlenie
                                              </option>
                                              <option value="%d8%b3%d9%84%d8%a7%d9%84%d8%a7%d9%84%d8%a7%d9%84%d8%a7%d9%84%d8%a7%d9%84%d8%a7%d9%84%d8%a7%d9%84">
                                                سلالالالالالالال
                                              </option>{" "}
                                            </select>
                                          </div>
                                          <div className="filter-item">
                                            <select
                                              className="default-sorting iwj-select-2-advance form-control"
                                              name="iwj_level"
                                            >
                                              <option value selected="selected">
                                                Choose level
                                              </option>
                                              <option value="junior">
                                                Junior
                                              </option>
                                              <option value="manager">
                                                Manager
                                              </option>
                                              <option value="senior">
                                                Senior
                                              </option>{" "}
                                            </select>
                                          </div>
                                          <div className="filter-item">
                                            <select
                                              className="default-sorting iwj-select-2-advance form-control"
                                              name="iwj_salary"
                                            >
                                              <option value selected="selected">
                                                Choose salary
                                              </option>
                                              <option value={1500}>
                                                &gt;1500
                                              </option>
                                              <option value={900}>
                                                &gt;900
                                              </option>
                                              <option value={500}>
                                                &lt;500
                                              </option>
                                              <option value="500-700">
                                                500-700
                                              </option>
                                              <option value="700-900">
                                                700-900
                                              </option>
                                              <option value="compatible">
                                                Compatible
                                              </option>
                                              <option value="negotiable">
                                                Negotiable
                                              </option>{" "}
                                            </select>
                                          </div>
                                        </div>
                                        <div className="trending-keywords">
                                          <div className="keywords">
                                            <span className="title">
                                              Trending Keywords:
                                            </span>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=designer">
                                              designer
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=php">
                                              php
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=developer">
                                              developer
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=ios+developer">
                                              ios developer
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=web">
                                              web
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=West+London">
                                              West London
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=senior">
                                              senior
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=linux">
                                              linux
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=engineer">
                                              engineer
                                            </a>
                                            <a href="http://jobboard.inwavethemes.com/jobs/?keyword=ios">
                                              ios
                                            </a>
                                          </div>
                                          <div className="iw-search-add-advanced">
                                            <i className="ion-android-settings" />{" "}
                                            Advance search
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="iwj-categories style9 categories-in-revo-slider">
                            <div className="iwj-isotope-main">
                              <div className="row">
                                <div className="col-md-2 col-sm-3 col-xs-12 element-item">
                                  <div className="item-category">
                                    <span className="category-icon">
                                      <a href="http://jobboard.inwavethemes.com/cat/sales-marketing/">
                                        <i className="icon-injob-sale-marketing" />
                                      </a>
                                    </span>
                                    <div className="content">
                                      <h3 className="category-title">
                                        <a href="http://jobboard.inwavethemes.com/cat/sales-marketing/">
                                          Sales &amp; Marketing
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-12 element-item">
                                  <div className="item-category">
                                    <span className="category-icon">
                                      <a href="http://jobboard.inwavethemes.com/cat/restaurant/">
                                        <i className="icon-injob-restaurant" />
                                      </a>
                                    </span>
                                    <div className="content">
                                      <h3 className="category-title">
                                        <a href="http://jobboard.inwavethemes.com/cat/restaurant/">
                                          Restaurant
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-12 element-item">
                                  <div className="item-category">
                                    <span className="category-icon">
                                      <a href="http://jobboard.inwavethemes.com/cat/web-developer/">
                                        <i className="icon-injob-it-developers" />
                                      </a>
                                    </span>
                                    <div className="content">
                                      <h3 className="category-title">
                                        <a href="http://jobboard.inwavethemes.com/cat/web-developer/">
                                          IT &amp; Computer
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-12 element-item">
                                  <div className="item-category">
                                    <span className="category-icon">
                                      <a href="http://jobboard.inwavethemes.com/cat/financial-services/">
                                        <i className="icon-injob-newspaper" />
                                      </a>
                                    </span>
                                    <div className="content">
                                      <h3 className="category-title">
                                        <a href="http://jobboard.inwavethemes.com/cat/financial-services/">
                                          Financial Services
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-12 element-item">
                                  <div className="item-category">
                                    <span className="category-icon">
                                      <a href="http://jobboard.inwavethemes.com/cat/finance-and-business/">
                                        <i className="icon-injob-business-financial" />
                                      </a>
                                    </span>
                                    <div className="content">
                                      <h3 className="category-title">
                                        <a href="http://jobboard.inwavethemes.com/cat/finance-and-business/">
                                          Finance And Business
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-12 element-item">
                                  <div className="item-category">
                                    <span className="category-icon">
                                      <a href="http://jobboard.inwavethemes.com/cat/engineering/">
                                        <i className="icon-injob-manufacturing" />
                                      </a>
                                    </span>
                                    <div className="content">
                                      <h3 className="category-title">
                                        <a href="http://jobboard.inwavethemes.com/cat/engineering/">
                                          Engineering
                                        </a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_row-fluid vc_custom_1528171120962">
                <div className="container">
                  <div className="row">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                      <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                          <div
                            className="iw-tabs  layout4  bg-theme-color"
                            data-type="tab"
                            style={{ marginTop: "50px" }}
                          >
                            <div className="iw-tab-items iwj-magic-line-wrap">
                              <div className="iw-tab-items-bg iwj-magic-line layout4">
                                <div className="iw-tab-item iwj-toggle active">
                                  <div className="iw-tab-title">
                                    Featured jobs
                                  </div>
                                </div>
                                <div className="iw-tab-item iwj-toggle ">
                                  <div className="iw-tab-title">
                                    Recommended jobs
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="iw-tab-content">
                              <div className="iw-tab-content-inner">
                                <div className="iw-tab-item-content active ">
                                  <div className="iwj-content-inner">
                                    <div id="iwajax-load">
                                      <div className="iwj-jobs iwj-style-match-height iwj-listing iwj-jobs-listing-term iwj-jobs-listing-term1">
                                        <div className="iwj-job-items style1">
                                          <div
                                            className="grid-content"
                                            data-id={976}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Canware"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoCanware-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoCanware-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/digital-designer/?preview=true">
                                                    Digital Designer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/canware/">
                                                      Canware
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          New South Wales
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          New South Wales
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          New South Wales
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          New South Wales
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Australia
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Australia
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Australia
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Australia
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    1 year ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1346}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="AOEVN"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoAoe-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoAoe-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/uxui-designer/">
                                                    UX/UI DESIGNER
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/aoevn/">
                                                      AOEVN
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Tōkyō-to
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Tōkyō-to
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Tōkyō-to
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Tōkyō-to
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Japan
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Japan
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Japan
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Japan
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1355}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Vsmarttech"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVsmarttech-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVsmarttech-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/php-web-software-developer-zend-mvc-html-css-javascript/">
                                                    Senior PHP Web Developer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/vsmarttech/">
                                                      Vsmarttech
                                                    </a>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={908}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Graveholdings"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoGraveholdings-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoGraveholdings-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/javascript-developer/">
                                                    JavaScript Developer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/graveholdings/">
                                                      Graveholdings
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Oklahoma County
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Oklahoma County
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Oklahoma County
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Oklahoma County
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Oklahoma
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Oklahoma
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Oklahoma
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Oklahoma
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type part-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/part-time/"
                                                    style={{
                                                      color: "#81d742",
                                                      borderColor: "#81d742",
                                                      backgroundColor: "#81d742"
                                                    }}
                                                  >
                                                    Part-time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1019}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Unodoncity"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoUnodoncity-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoUnodoncity-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/maths-teacher-second-in-department-ks3-ks4/?preview=true">
                                                    Maths Teacher – Second
                                                    Department
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/unodoncity/">
                                                      Unodoncity
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          San Diego
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Diego
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Diego
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Diego
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type temporary">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/temporary/"
                                                    style={{
                                                      color: "#8224e3",
                                                      borderColor: "#8224e3",
                                                      backgroundColor: "#8224e3"
                                                    }}
                                                  >
                                                    Temporary
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={997}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Vivatam"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVivatam-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVivatam-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/student-marketing-manager-fashion-lifestyle-brand/">
                                                    Student Marketing Manager
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    Vivatam
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          West Virginia
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          West Virginia
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          West Virginia
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          West Virginia
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={911}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Graveholdings"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoGraveholdings-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoGraveholdings-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/front-end-web-developer/?preview=true">
                                                    Front-End Web Developer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/graveholdings/">
                                                      Graveholdings
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          San Francisco
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Francisco
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Francisco
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Francisco
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type contract">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/contract/"
                                                    style={{
                                                      color: "#dd3333",
                                                      borderColor: "#dd3333",
                                                      backgroundColor: "#dd3333"
                                                    }}
                                                  >
                                                    Contract
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div className="clearfix" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="iw-tab-item-content next ">
                                  <div className="iwj-content-inner">
                                    <div id="iwajax-load">
                                      <div className="iwj-jobs iwj-style-match-height iwj-listing iwj-jobs-listing-term iwj-jobs-listing-term1">
                                        <div className="iwj-job-items style1">
                                          <div
                                            className="grid-content"
                                            data-id={6449}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                {/* <img
                                                  src="https://lh6.googleusercontent.com/-FdAQakVdYaU/AAAAAAAAAAI/AAAAAAAAAKo/BzpePd1UqP0/photo.jpg"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                /> */}
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/laravel-developer/?preview=true">
                                                    laravel developer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    AjSquere
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    4 months ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={6406}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Test"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/10/unnamed-file-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/10/unnamed-file-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/test-3/?preview=true">
                                                    Test
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    Test
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Kit Carson County
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Kit Carson County
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Kit Carson County
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Kit Carson County
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Colorado
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Colorado
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Colorado
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Colorado
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    4 months ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={6291}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                {/* <img
                                                  src="https://lh3.googleusercontent.com/-K5j3poslfqg/AAAAAAAAAAI/AAAAAAAAIEw/bYxm6W26wbo/photo.jpg"
                                                  srcSet="https://lh3.googleusercontent.com/-K5j3poslfqg/AAAAAAAAAAI/AAAAAAAAIEw/bYxm6W26wbo/photo.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                /> */}
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/test-feature/">
                                                    test feature
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    Công ty TNHH CÔng Nghệ Số
                                                    Nex
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    4 months ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={4943}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Plantthemes"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2017/07/logo4-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2017/07/logo4-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/02-front-end-developers/">
                                                    02 Front end Developers
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/3docean/">
                                                      Plantthemes
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Ấn Độ
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Ấn Độ
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Ấn Độ
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Ấn Độ
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    8 months ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={4643}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Plantthemes"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2017/07/logo4-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2017/07/logo4-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/senior-process-analyst/">
                                                    Senior Process Analyst
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/3docean/">
                                                      Plantthemes
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Paris
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Paris
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Paris
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Paris
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Île-de-France
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Île-de-France
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Île-de-France
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Île-de-France
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          France
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          France
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          France
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          France
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    8 months ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={3571}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Vsmarttech"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVsmarttech-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVsmarttech-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/php-web-software-developer-zend-mvc-html-css-javascript-2/?preview=true">
                                                    PHP Web developer html, css
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/vsmarttech/">
                                                      Vsmarttech
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Comuna 1
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Comuna 1
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Comuna 1
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Comuna 1
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Buenos Aires
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Buenos Aires
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Buenos Aires
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Buenos Aires
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Argentina
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Argentina
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Argentina
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Argentina
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    1 year ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={976}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Canware"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoCanware-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoCanware-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/digital-designer/?preview=true">
                                                    Digital Designer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/canware/">
                                                      Canware
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          New South Wales
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          New South Wales
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          New South Wales
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          New South Wales
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Australia
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Australia
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Australia
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Australia
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    1 year ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1002}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Techzenbam"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoTechzenbam-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoTechzenbam-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/web-developer-php-html-css-javascript-joomla-wordpress/?preview=true">
                                                    Web Developer – PHP, HTML,
                                                    CSS, JavaScript
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/techzenbam/">
                                                      Techzenbam
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Kit Carson County
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Kit Carson County
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Kit Carson County
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Kit Carson County
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Colorado
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Colorado
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Colorado
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Colorado
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    1 year ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1212}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Evolable Asia"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoEvolableAsia-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoEvolableAsia-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/german-speaking-team-leader/?preview=true">
                                                    German Speaking Team Leader
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/evolable-asia/">
                                                      Evolable Asia
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          San Bernardino County
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Bernardino County
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Bernardino County
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          San Bernardino County
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          California
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          California
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          California
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          California
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    1 year ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1228}
                                          >
                                            <div className="job-item ">
                                              <div className="job-image">
                                                <img
                                                  alt="Unodoncity"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoUnodoncity-60x60.png"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoUnodoncity-120x120.png 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/heathens-by-twenty-one-pilots-fingerstyle-cover/?preview=true">
                                                    Restaurant Manager – General
                                                    Manager
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/unodoncity/">
                                                      Unodoncity
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Montana
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Montana
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Montana
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Montana
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          United States
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type contract">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/contract/"
                                                    style={{
                                                      color: "#dd3333",
                                                      borderColor: "#dd3333",
                                                      backgroundColor: "#dd3333"
                                                    }}
                                                  >
                                                    Contract
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1346}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="AOEVN"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoAoe-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoAoe-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/uxui-designer/">
                                                    UX/UI DESIGNER
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/aoevn/">
                                                      AOEVN
                                                    </a>
                                                  </div>
                                                  <div className="address">
                                                    <i className="ion-android-pin" />
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Tōkyō-to
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Tōkyō-to
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Tōkyō-to
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Tōkyō-to
                                                        </span>
                                                      </span>
                                                    </span>
                                                    ,{" "}
                                                    <span
                                                      itemProp="jobLocation"
                                                      itemScope
                                                      itemType="http://schema.org/Place"
                                                    >
                                                      <span
                                                        itemProp="address"
                                                        itemScope
                                                        itemType="http://schema.org/PostalAddress"
                                                      >
                                                        <span itemProp="addressLocality">
                                                          Japan
                                                        </span>
                                                        <span
                                                          itemProp="addressRegion"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Japan
                                                        </span>
                                                        <span
                                                          itemProp="postalCode"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Japan
                                                        </span>
                                                        <span
                                                          itemProp="streetAddress"
                                                          style={{
                                                            display: "none"
                                                          }}
                                                        >
                                                          Japan
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div
                                            className="grid-content"
                                            data-id={1355}
                                          >
                                            <div className="job-item featured-item">
                                              <div className="job-image">
                                                <img
                                                  alt="Vsmarttech"
                                                  src="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVsmarttech-60x60.jpg"
                                                  srcSet="http://static-jobboard.inwavethemes.com/wp-content/uploads/2018/05/LogoVsmarttech-120x120.jpg 2x"
                                                  className="avatar avatar-60 photo"
                                                  height={60}
                                                  width={60}
                                                />
                                              </div>
                                              <div className="job-info yes-logo">
                                                <h3 className="job-title">
                                                  <a href="http://jobboard.inwavethemes.com/job/php-web-software-developer-zend-mvc-html-css-javascript/">
                                                    Senior PHP Web Developer
                                                  </a>
                                                </h3>
                                                <div />
                                                <div className="info-company">
                                                  <div className="company">
                                                    <i className="fa fa-suitcase" />
                                                    <a href="http://jobboard.inwavethemes.com/employer/vsmarttech/">
                                                      Vsmarttech
                                                    </a>
                                                  </div>
                                                  <div className="time-ago">
                                                    <i className="fa fa-calendar theme-color" />
                                                    2 years ago
                                                  </div>
                                                </div>
                                                <div className="job-type full-time">
                                                  <a
                                                    className="type-name"
                                                    href="http://jobboard.inwavethemes.com/type/full-time/"
                                                    style={{
                                                      color: "#dd9933",
                                                      borderColor: "#dd9933",
                                                      backgroundColor: "#dd9933"
                                                    }}
                                                  >
                                                    Full-Time
                                                  </a>
                                                  <button
                                                    className="save-job"
                                                    data-toggle="modal"
                                                    data-target="#iwj-login-popup"
                                                  >
                                                    <i className="fa fa-heart" />
                                                  </button>
                                                </div>
                                              </div>
                                              <div className="iwj-featured" />
                                            </div>
                                          </div>
                                          <div className="clearfix" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="iw-button  button3  center-text">
                            <a className="width-auto" href="" style={{}}>
                              <span className="button-text">
                                browse all jobs
                                <i className="fa fa-arrow-circle-right" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </article>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
