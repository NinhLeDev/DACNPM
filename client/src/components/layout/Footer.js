import React from 'react';

export default () => {
  return (
          <div>
            <footer className="iw-footer iw-footer-default">
              <div className="iw-footer-middle" style={{paddingTop: '25px', paddingBottom: '0px'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                      <div className="footer-left">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-sx-12">
                            <div className="inwave-contact-info-2 widget widget_inwave-contact-info">
                              <div className="widget-info-footer no-title">
                                <a className="iw-widget-about-us" href="/"> <img src={process.env.PUBLIC_URL + "assets/img/logo_public_new.png"} alt="JobBoard" /> </a>
                                <p>Áp lực tìm việc làm của người lao động và tuyển dụng nhân sự của các doanh nghiệp trong ngành ngày càng tăng trong khi chưa có một kênh thông tin tuyển dụng nào tập trung hiệu quả tại Đà Nẵng...</p> <a className="link_page_about_us" href="">Xem thêm </a>
                                <ul className="iw-social-footer-all" style={{padding: 0, border: '0px'}}>
                                  <li><a className="facebook" href="http://facebook.com" title="Facebook"><i className="fa iwj-icon-facebook" /></a></li>
                                  <li><a className="twitter" href="http://twitter.com" title="Twitter"><i className="fa iwj-icon-twitter" /></a></li>
                                  <li><a className="google-plus" href="http://google-plus.com" title="Google Plush"><i className="fa iwj-icon-gplus" /></a></li>
                                  <li><a className="linkedin" href="http://linkedin.com" title="Linkedin"><i className="fa iwj-icon-linkedin" /></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-sx-12">
                            <div className="nav_menu-2 widget widget_nav_menu">
                              <h3 className="widget-title h3-nomargin">Người tìm việc</h3>
                              <div className="subtitle">
                                <div className="line1" />
                                <div className="line2" />
                                <div className="clearfix" />
                              </div>
                              <div className="menu-for-candidates-container">
                                <ul id="menu-for-candidates" className="menu">
                                  <li id="menu-item-1385" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1385"><a href="">Công việc</a></li>
                                  <li id="menu-item-1387" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1387"><a href="">Danh mục</a></li>
                                  <li id="menu-item-1389" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1389"><a href="">Công ty</a></li>
                                  <li id="menu-item-1386" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1386"><a href="">Tài khoản</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
                      <div className="footer-right">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-sx-12">
                            <div className="nav_menu-3 widget widget_nav_menu">
                              <h3 className="widget-title h3-nomargin">Nhà tuyển dụng</h3>
                              <div className="subtitle">
                                <div className="line1" />
                                <div className="line2" />
                                <div className="clearfix" />
                              </div>
                              <div className="menu-for-employers-container">
                                <ul id="menu-for-employers" className="menu">
                                  <li id="menu-item-1390" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1390"><a href="">Tóm tắt</a></li>
                                  <li id="menu-item-1392" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1392"><a href="">Danh mục</a></li>
                                  <li id="menu-item-594" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-594"><a href="">Công việc</a></li>
                                  <li id="menu-item-1391" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1391"><a href="">Tài khoản</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-sx-12">
                            <div className="inwave-subscribe-2 widget widget_inwave-subscribe">
                              <h3 className="widget-title h3-nomargin">Đăng kí theo dõi</h3>
                              <div className="subtitle">
                                <div className="line1" />
                                <div className="line2" />
                                <div className="clearfix" />
                              </div>
                              <div className="iw-mailchimp-form ">
                                <form className="iw-email-notifications" action="//joomultra.us12.list-manage.com/subscribe/post?u=fbd801b2d75b67e540b5e0c53&id=e3e3a45110" data-response="{&quot;submit&quot;:&quot;Submitting...&quot;,&quot;0&quot;:&quot;We have sent you a confirmation email&quot;,&quot;1&quot;:&quot;Please enter a value&quot;,&quot;2&quot;:&quot;An email address must contain a single @&quot;,&quot;3&quot;:&quot;The domain portion of the email address is invalid (the portion after the @: )&quot;,&quot;4&quot;:&quot;The username portion of the email address is invalid (the portion before the @: )&quot;,&quot;5&quot;:&quot;This email address looks fake or invalid. Please enter a real email address&quot;}">
                                  <div className="malchimp-desc">Đăng ký và chúng tôi sẽ tự động gửi cho bạn thông báo về công việc phù hợp với bạn.</div>
                                  <div className="ajax-overlay"><span className="ajax-loading"><i className="fa fa-spinner fa-spin fa-2x" /></span></div>
                                  <input className="mc-email" type="email" placeholder="Email của bạn " required="required" />
                                  <button type="submit">Đăng ký</button><span className="response"><label /></span></form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iw-copy-right">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <p>© <a href=  "">Tìm Việc Làm Nhanh Tuyển Dụng Uy Tín Tại Đà Nẵng</a></p><a href=  "">
                      </a></div><a href=  "">
                    </a></div><a href=  "">
                  </a></div><a href=  "">
                </a></div><a href=  "">
              </a></footer><a href=  "">
              <div id="iwj-job-alert-popup" className="modal-popup modal fade">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Đang ký tài khoản</h4>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                      <form action="http://jobboard.inwavethemes.com/login/" method="post" className="iwj-form-2 iwj-alert-submit-form iwj-alert-submit-form-popup">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-email-wrapper  required">
                              <div className="iwjmb-label">
                                <label htmlFor="email">Địa chỉ email *</label>
                              </div>
                              <div className="iwjmb-input">
                                <input placeholder="Nhập vào địa chỉ email" type="email" required="required" id="email" className="iwjmb-email " name="email" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-text-wrapper  required">
                              <div className="iwjmb-label">
                                <label htmlFor="name">Tên đăng nhập *</label>
                              </div>
                              <div className="iwjmb-input">
                                <input size={30} placeholder="Nhạp vào tên đăng nhập " type="text" required="required" id="name" className="iwjmb-text " name="name" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-text-wrapper  required">
                              <div className="iwjmb-label">
                                <label htmlFor="position">Tiêu đề *</label>
                              </div>
                              <div className="iwjmb-input">
                                <input size={30} placeholder="Enter title" type="text" required="required" id="position" className="iwjmb-text " name="position" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-text-wrapper">
                              <div className="iwjmb-label">
                                <label htmlFor="salary_from">Salary From</label>
                              </div>
                              <div className="iwjmb-input">
                                <input size={30} placeholder="Enter salary from" type="text" id="salary_from" className="iwjmb-text " name="salary_from" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-taxonomy2-wrapper">
                              <div className="iwjmb-label">
                                <label htmlFor="categories">Categories</label>
                              </div>
                              <div className="iwjmb-input">
                                <select data-options="{&quot;enableFiltering&quot;:true,&quot;enableCaseInsensitiveFiltering&quot;:true,&quot;numberDisplayed&quot;:3,&quot;placeholder&quot;:&quot;Select Categories&quot;}" id="categories" className="iwjmb-taxonomy2 " name="categories[]" multiple="multiple">
                                  <option value={203}>Accounting Assistant</option>
                                  <option value={28}>Arts, Design, Media</option>
                                  <option value={199}>Automotive</option>
                                  <option value={198}>Banking</option>
                                  <option value={43}>Charity &amp; Voluntary</option>
                                  <option value={310}>Data Center</option>
                                  <option value={42}>Education &amp; Coachs</option>
                                  <option value={30}>Engineering</option>
                                  <option value={200}>Finance And Business</option>
                                  <option value={41}>Financial Services</option>
                                  <option value={197}>Human Resources</option>
                                  <option value={29}>IT &amp; Computer</option>
                                  <option value={201}>Restaurant</option>
                                  <option value={32}>Sales &amp; Marketing</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-taxonomy2-wrapper">
                              <div className="iwjmb-label">
                                <label htmlFor="types">Types</label>
                              </div>
                              <div className="iwjmb-input">
                                <select data-options="{&quot;enableFiltering&quot;:true,&quot;enableCaseInsensitiveFiltering&quot;:true,&quot;numberDisplayed&quot;:3,&quot;placeholder&quot;:&quot;Select Types&quot;}" id="types" className="iwjmb-taxonomy2 " name="types[]" multiple="multiple">
                                  <option value={26}>Contract</option>
                                  <option value={24}>Full-Time</option>
                                  <option value={27}>Part-time</option>
                                  <option value={25}>Temporary</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-taxonomy2-wrapper">
                              <div className="iwjmb-label">
                                <label htmlFor="levels">Levels</label>
                              </div>
                              <div className="iwjmb-input">
                                <select data-options="{&quot;enableFiltering&quot;:true,&quot;enableCaseInsensitiveFiltering&quot;:true,&quot;numberDisplayed&quot;:3,&quot;placeholder&quot;:&quot;Select Levels&quot;}" id="levels" className="iwjmb-taxonomy2 " name="levels[]" multiple="multiple">
                                  <option value={38}>Junior</option>
                                  <option value={40}>Manager</option>
                                  <option value={39}>Senior</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-taxonomy2-wrapper">
                              <div className="iwjmb-label">
                                <label htmlFor="locations">Locations</label>
                              </div>
                              <div className="iwjmb-input">
                                <select data-options="{&quot;enableFiltering&quot;:true,&quot;enableCaseInsensitiveFiltering&quot;:true,&quot;numberDisplayed&quot;:2,&quot;placeholder&quot;:&quot;Select Locations&quot;}" id="locations" className="iwjmb-taxonomy2 " name="locations[]" multiple="multiple">
                                  <option value={16} data-level={1}>United States</option>
                                  <option value={18} data-level={2}>San Diego</option>
                                  <option value={19} data-level={2}>San Francisco</option>
                                  <option value={20} data-level={2}>Los Angeles</option>
                                  <option value={255} data-level={2}>New York</option>
                                  <option value={334} data-level={3}>Kings County</option>
                                  <option value={337} data-level={3}>New York County</option>
                                  <option value={256} data-level={2}>Arizona</option>
                                  <option value={257} data-level={3}>Maricopa County</option>
                                  <option value={258} data-level={2}>West Virginia</option>
                                  <option value={259} data-level={2}>Montana</option>
                                  <option value={260} data-level={2}>Georgia</option>
                                  <option value={261} data-level={3}>Bibb County</option>
                                  <option value={262} data-level={2}>Iowa</option>
                                  <option value={263} data-level={2}>Oklahoma</option>
                                  <option value={264} data-level={3}>Oklahoma County</option>
                                  <option value={276} data-level={3}>Delaware County</option>
                                  <option value={265} data-level={2}>California</option>
                                  <option value={266} data-level={3}>San Bernardino County</option>
                                  <option value={335} data-level={3}>San Diego County</option>
                                  <option value={267} data-level={2}>Missouri</option>
                                  <option value={268} data-level={3}>Jasper County</option>
                                  <option value={269} data-level={4}>Galena Township</option>
                                  <option value={274} data-level={3}>Jackson County</option>
                                  <option value={275} data-level={4}>Kaw Township</option>
                                  <option value={270} data-level={2}>Tennessee</option>
                                  <option value={271} data-level={3}>Grundy County</option>
                                  <option value={272} data-level={2}>North Dakota</option>
                                  <option value={273} data-level={3}>Cass County</option>
                                  <option value={277} data-level={2}>Colorado</option>
                                  <option value={278} data-level={3}>Kit Carson County</option>
                                  <option value={279} data-level={2}>New Mexico</option>
                                  <option value={280} data-level={2}>South Dakota</option>
                                  <option value={281} data-level={3}>Pennington County</option>
                                  <option value={282} data-level={2}>South Carolina</option>
                                  <option value={17} data-level={1}>Japan</option>
                                  <option value={21} data-level={2}>Tokyo</option>
                                  <option value={22} data-level={2}>Okinawa</option>
                                  <option value={23} data-level={2}>Hokkaido</option>
                                  <option value={336} data-level={2}>Tōkyō-to</option>
                                  <option value={72} data-level={1}>United Kingdom</option>
                                  <option value={83} data-level={2}>Brooklyn</option>
                                  <option value={84} data-level={2}>London</option>
                                  <option value={244} data-level={2}>England</option>
                                  <option value={245} data-level={3}>Greater London</option>
                                  <option value={221} data-level={1}>Việt Nam</option>
                                  <option value={224} data-level={2}>Hà Nội</option>
                                  <option value={225} data-level={3}>Hà Đông</option>
                                  <option value={229} data-level={3}>Hai Bà Trưng</option>
                                  <option value={241} data-level={3}>Hoàn Kiếm</option>
                                  <option value={317} data-level={2}>Nam Định</option>
                                  <option value={248} data-level={1}>Mexico</option>
                                  <option value={249} data-level={2}>Ciudad de México</option>
                                  <option value={250} data-level={1}>Vietnam</option>
                                  <option value={251} data-level={2}>Hanoi</option>
                                  <option value={320} data-level={3}>Thanh Xuân</option>
                                  <option value={321} data-level={2}>Thanh Hóa</option>
                                  <option value={322} data-level={2}>Hồ Chí Minh</option>
                                  <option value={332} data-level={2}>Thai Nguyen</option>
                                  <option value={252} data-level={1}>India</option>
                                  <option value={253} data-level={2}>Haryana</option>
                                  <option value={308} data-level={2}>Delhi</option>
                                  <option value={254} data-level={1}>Ấn Độ</option>
                                  <option value={283} data-level={1}>Australia</option>
                                  <option value={284} data-level={2}>Australian Capital Territory</option>
                                  <option value={285} data-level={2}>New South Wales</option>
                                  <option value={286} data-level={2}>Victoria</option>
                                  <option value={287} data-level={3}>Brimbank City</option>
                                  <option value={289} data-level={1}>Germany</option>
                                  <option value={290} data-level={2}>Nordrhein-Westfalen</option>
                                  <option value={291} data-level={3}>Düsseldorf</option>
                                  <option value={292} data-level={1}>Canada</option>
                                  <option value={293} data-level={2}>British Columbia</option>
                                  <option value={294} data-level={1}>Italy</option>
                                  <option value={295} data-level={2}>Veneto</option>
                                  <option value={296} data-level={3}>Metropolitan City of Venice</option>
                                  <option value={297} data-level={4}>Venice</option>
                                  <option value={298} data-level={1}>United Arab Emirates</option>
                                  <option value={299} data-level={2}>Dubai</option>
                                  <option value={302} data-level={1}>Spain</option>
                                  <option value={303} data-level={2}>Valencian Community</option>
                                  <option value={304} data-level={3}>Valencia</option>
                                  <option value={305} data-level={1}>Argentina</option>
                                  <option value={306} data-level={2}>Buenos Aires</option>
                                  <option value={307} data-level={3}>Comuna 1</option>
                                  <option value={315} data-level={1}>Hoa Kỳ</option>
                                  <option value={316} data-level={2}>Tiểu bang New York</option>
                                  <option value={323} data-level={1}>Chile</option>
                                  <option value={324} data-level={2}>Región Metropolitana</option>
                                  <option value={325} data-level={3}>Santiago</option>
                                  <option value={326} data-level={4}>Cerro Navia</option>
                                  <option value={338} data-level={1}>France</option>
                                  <option value={339} data-level={2}>Île-de-France</option>
                                  <option value={340} data-level={3}>Paris</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-taxonomy2-wrapper">
                              <div className="iwjmb-label">
                                <label htmlFor="skills">Skills</label>
                              </div>
                              <div className="iwjmb-input">
                                <select data-options="{&quot;enableFiltering&quot;:true,&quot;enableCaseInsensitiveFiltering&quot;:true,&quot;numberDisplayed&quot;:3,&quot;placeholder&quot;:&quot;Select Skills&quot;}" id="skills" className="iwjmb-taxonomy2 " name="skills[]" multiple="multiple">
                                  <option value={130}>.NET</option>
                                  <option value={394}>ability to work under preshure</option>
                                  <option value={104}>Account Manager</option>
                                  <option value={390}>accounts</option>
                                  <option value={398}>Adaptability</option>
                                  <option value={179}>Administrative</option>
                                  <option value={138}>Ai</option>
                                  <option value={172}>AJAX</option>
                                  <option value={79}>android</option>
                                  <option value={171}>Angular JS</option>
                                  <option value={173}>Apache</option>
                                  <option value={143}>app</option>
                                  <option value={373}>as</option>
                                  <option value={131}>ASP.NET</option>
                                  <option value={125}>Automotive</option>
                                  <option value={156}>Banners</option>
                                  <option value={176}>Beauty</option>
                                  <option value={105}>Bonuses</option>
                                  <option value={98}>BPSS</option>
                                  <option value={121}>Business Development</option>
                                  <option value={118}>Buy To Let</option>
                                  <option value={132}>C#</option>
                                  <option value={193}>Cake PHP</option>
                                  <option value={161}>Campaigns</option>
                                  <option value={151}>coding</option>
                                  <option value={115}>Collections</option>
                                  <option value={119}>Commercial Mortgage</option>
                                  <option value={122}>Commission</option>
                                  <option value={91}>Communications</option>
                                  <option value={417}>Computer basic</option>
                                  <option value={180}>Contracts</option>
                                  <option value={92}>Creative</option>
                                  <option value={116}>Credit Risk</option>
                                  <option value={74}>CSS</option>
                                  <option value={87}>CSS3</option>
                                  <option value={386}>Cutting skills</option>
                                  <option value={365}>d</option>
                                  <option value={136}>Data</option>
                                  <option value={168}>Developer</option>
                                  <option value={148}>digital</option>
                                  <option value={149}>digital design</option>
                                  <option value={100}>Digital Marketing</option>
                                  <option value={177}>Email Marketing</option>
                                  <option value={196}>esp</option>
                                  <option value={47}>Excel</option>
                                  <option value={163}>Experiential Events</option>
                                  <option value={112}>Face to Face</option>
                                  <option value={374}>FDf</option>
                                  <option value={181}>Finance</option>
                                  <option value={123}>Foreign Exchange</option>
                                  <option value={170}>Front End Developer</option>
                                  <option value={418}>fucking</option>
                                  <option value={77}>git</option>
                                  <option value={419}>good looking</option>
                                  <option value={81}>google ads words</option>
                                  <option value={82}>google seo</option>
                                  <option value={88}>Grunt</option>
                                  <option value={387}>Gupit Skills</option>
                                  <option value={359}>half</option>
                                  <option value={158}>Healthcare</option>
                                  <option value={360}>hlfkuc</option>
                                  <option value={195}>HR Management</option>
                                  <option value={35}>HTML CSS</option>
                                  <option value={86}>HTML5</option>
                                  <option value={414}>ihoihoho</option>
                                  <option value={152}>Illustrator</option>
                                  <option value={110}>Inbound</option>
                                  <option value={153}>InDesign</option>
                                  <option value={95}>Integrated Marketing</option>
                                  <option value={159}>Internal Communications</option>
                                  <option value={78}>ios</option>
                                  <option value={76}>Java</option>
                                  <option value={34}>Javascript</option>
                                  <option value={37}>Joomla</option>
                                  <option value={145}>jQuery</option>
                                  <option value={73}>JS</option>
                                  <option value={388}>Kulot SKills</option>
                                  <option value={174}>LAMP</option>
                                  <option value={397}>leardership</option>
                                  <option value={135}>Linux</option>
                                  <option value={106}>Loan</option>
                                  <option value={129}>Main Car Dealership</option>
                                  <option value={97}>Manager</option>
                                  <option value={120}>Mandate</option>
                                  <option value={93}>Marketing</option>
                                  <option value={101}>Marketing Assistant</option>
                                  <option value={94}>Marketing Communications</option>
                                  <option value={160}>Media</option>
                                  <option value={243}>mobile</option>
                                  <option value={139}>Moblie</option>
                                  <option value={113}>Mortgage Sales</option>
                                  <option value={126}>Motor Trade</option>
                                  <option value={363}>mtv</option>
                                  <option value={133}>MVC</option>
                                  <option value={75}>Mysql</option>
                                  <option value={128}>New &amp; Used Car Sales Executive</option>
                                  <option value={124}>New Clients</option>
                                  <option value={114}>Newport</option>
                                  <option value={89}>NodeJS</option>
                                  <option value={140}>objective-c</option>
                                  <option value={141}>oop</option>
                                  <option value={85}>OOP PHP</option>
                                  <option value={111}>Outbound</option>
                                  <option value={162}>Partnerships</option>
                                  <option value={154}>Photoshop</option>
                                  <option value={33}>PHP</option>
                                  <option value={175}>PHP Developer</option>
                                  <option value={56}>PHP1</option>
                                  <option value={157}>PR</option>
                                  <option value={155}>Print</option>
                                  <option value={109}>Progression</option>
                                  <option value={137}>Python</option>
                                  <option value={183}>Quote Preparation</option>
                                  <option value={90}>responsive design</option>
                                  <option value={80}>sale</option>
                                  <option value={99}>sales</option>
                                  <option value={107}>Sales Executive</option>
                                  <option value={178}>Sales Management</option>
                                  <option value={375}>sda</option>
                                  <option value={96}>Security</option>
                                  <option value={396}>self motivation</option>
                                  <option value={150}>senior digital designer</option>
                                  <option value={102}>Social Media</option>
                                  <option value={103}>Social Media Marketing</option>
                                  <option value={165}>Software Development</option>
                                  <option value={134}>SQL</option>
                                  <option value={182}>Staff Management</option>
                                  <option value={424}>sureball</option>
                                  <option value={142}>swift</option>
                                  <option value={399}>Team work</option>
                                  <option value={108}>Telephone</option>
                                  <option value={395}>Time M anagement</option>
                                  <option value={117}>Underwriting</option>
                                  <option value={242}>Unity</option>
                                  <option value={147}>User Experience</option>
                                  <option value={127}>Vehicle Sales</option>
                                  <option value={412}>video editing</option>
                                  <option value={376}>vzcvcx</option>
                                  <option value={144}>watchos</option>
                                  <option value={146}>Web Design</option>
                                  <option value={169}>Web Developer</option>
                                  <option value={167}>Web Developers</option>
                                  <option value={166}>Web Development</option>
                                  <option value={46}>Word</option>
                                  <option value={36}>Wordpress</option>
                                  <option value={164}>Youth Marketing</option>
                                  <option value={384}>zehlenie</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="iwjmb-field iwjmb-select_advanced-wrapper  required">
                              <div className="iwjmb-label">
                                <label htmlFor="frequency">Frequency</label>
                              </div>
                              <div className="iwjmb-input">
                                <select data-options="{&quot;allowClear&quot;:false,&quot;width&quot;:&quot;none&quot;,&quot;placeholder&quot;:&quot;&quot;,&quot;multiple&quot;:false,&quot;minimumResultsForSearch&quot;:-1}" size={0} required id="frequency" className="iwjmb-select_advanced " name="frequency">
                                  <option value="daily" selected="selected">Daily</option>
                                  <option value="weekly">Weekly</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="iwj-respon-msg iwj-hide" />
                        <div className="iwj-submit-btn">
                          <div className="iwj-button-loader">
                            <button type="submit" className="iwj-btn iwj-btn-icon iwj-btn-primary iwj-submit-alert-btn" value="submit"><i className="fa fa-envelope-o" /> Register now</button>
                            <button type="button" className="iwj-btn" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </a></div>
      








  );
};
