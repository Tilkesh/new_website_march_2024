import React, { useState } from 'react';
import classes from './mobile_menu.module.css';

const Mobile_menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenServices, setIsOpenServices] = useState(false);

  const toggleDropdownServices = () => {
    setIsOpenServices(!isOpenServices);
  };
  const [isOpenSer1, setIsOpenSer1] = useState(false);

  const toggleDropdownSer1 = () => {
    setIsOpenSer1(!isOpenSer1);
  };

  const [isOpenTech1, setIsOpenTech1] = useState(false);

  const toggleDropdownTech1 = () => {
    setIsOpenTech1(!isOpenTech1);
  };
  const [isOpenTech2, setIsOpenTech2] = useState(false);

  const toggleDropdownTech2 = () => {
    setIsOpenTech2(!isOpenTech2);
  };

    return (
        <nav className={`${classes.nav_menu} ${classes.active}`}>
          <div className={`${classes.menu_data}`}>
            <ul className={`${classes.nav_menu_items}`}>
              
            <li className={classes.li}>
                <div>
                  <a href="/home">Home</a>
                </div>
              </li>
              <li>
                <div className={`${classes.accordion}`}>
                  <div>
                    <button type="button" className={`${classes.btn} ${classes.btn_link} ${isOpen ? classes.rotate_r : ''}`} onClick={toggleDropdown}>
                      Technologies
                    </button>
                    <div className={`${classes.collapse} ${isOpen ? classes.show : ''}`}>

                      <div className={`${classes.card_body}`}>

                        <div className={`${classes.accordion}`}>
                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link} ${isOpenTech1 ? classes.rotate_r : ''}`}onClick={toggleDropdownTech1}>
                              Mobile App
                            </button>
                            <div className={`${classes.collapse}${isOpenTech1 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>

                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon android"></div>Android App
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon ios"></div>
                                      iOS App
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon flutter"></div>Flutter App
                                    </a>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link} ${isOpenTech2 ? classes.rotate_r : ''}`}onClick={toggleDropdownTech2}>
                              Web App
                            </button>
                            <div className={`${classes.collapse} ${isOpenTech2 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>

                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon full-stack"></div>
                                      PHP
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon react"></div>
                                      ReactJS
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon nodejs"></div>
                                      NodeJS
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon laravel"></div>
                                      Laravel
                                    </a>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div>
                    <button type="button" className={`${classes.btn} ${classes.btn_link} ${isOpenServices ? classes.rotate_r : ''}`} onClick={toggleDropdownServices}>
                      Services
                    </button>
                    <div className={`${classes.collapse} ${isOpenServices ? classes.show : ''}`}>

                      <div className={`${classes.card_body}`}>

                        <div className={`${classes.accordion}`}>
                          <div>
                            <button type="button" className={`${classes.btn} ${classes.btn_link} ${isOpenSer1 ? classes.rotate_r : ''}`}onClick={toggleDropdownSer1}>
                              All Services
                            </button>
                            <div className={`${classes.collapse}${isOpenSer1 ? classes.show : ''}`}>
                              <div className={`${classes.card_body}`}>
                                <div style={{paddingLeft : '6px'}}>

                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon mobile_app_development"></div>Mobile App Development
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon web_development"></div>
                                      Web Development
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon saas_applications"></div>SAAS Applications
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon custom_software_development"></div>Custom Software Development
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon it_consulting"></div>IT Consulting
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon ecommerce_development"></div>Ecommerce Development
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon marketplace_development"></div>Marketplace Development
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon mvp_development"></div>MVP Development
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      className={`${classes.dropdown_item}`}
                                      href="/technologies"
                                    >
                                      <div className="header-icon ai_ml_development"></div>AI / ML Development
                                    </a>
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
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/feature-project">Portfolio</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/about-us">About Us</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/career">Career</a>
                </div>
              </li>

              <li className={classes.li}>
                <div>
                  <a href="/contact-us" style={{borderBottom:'solid 0px', marginBottom: '120px'}}>Contact</a>
                </div>
              </li>

            </ul>
            
          </div>
        </nav>
    );

}

export default Mobile_menu;