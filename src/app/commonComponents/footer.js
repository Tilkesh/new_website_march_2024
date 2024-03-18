import classes from "./footer.module.css";

const Footer = () => {
return (
    <section className={`${classes.mainfooterWr}`}>
        <div className={`${classes.wrapper}`}>
            <div className={`${classes.innerfooterWr}`}>
                <div className={`${classes.imageWr}`}>
                <img
                  src={"assets/images/header/whiteFooterLogo.svg"}
                  className={`${classes.imgLogoFooter}`}
                ></img>
                </div>
                <div className={`${classes.linkWr}`}>
                    <h6 className={`${classes.h6text}`}>COMPANY</h6>
                    <a href="/">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/career">Career</a>
                    <a href="/blog">Blogs</a>
                    <a href="/contact-us">Contact</a>
                </div>
                <div className={`${classes.linkWr}`}>
                <h6 className={`${classes.h6text}`}>MOBILE APP</h6>
                    <a href="/">iOS App</a>
                    <a href="/androidapp">Android App</a>
                    <a href="/flutterapp">Flutter App</a>
                </div>
                <div className={`${classes.linkWr}`}>
                <h6 className={`${classes.h6text}`}>WEB APP</h6>
                    <a href="/">Full Stack</a>
                    <a href="/laravel">Laravel</a>
                    <a href="/reactjs">ReactJS</a>
                    <a href="/nodejs">NodeJS</a>
                    <a href="/php">PHP</a>
                </div>
                <div className={`${classes.contactWr}`}>
                <h6 className={`${classes.h6text}`}>CONTACT</h6>
                <p className={`${classes.pText}`}>1-B, Agra Bombay Road, Press Complex, Indore 452001</p>
                <p className={`${classes.pText}`}>Support : support@dexbytes.com</p>
                <p className={`${classes.pText}`}>Skype : dexbytes_in</p>
                <div className={`${classes.socialIconWr}`}><a href="/linkedin"><img
                  src={"assets/images/social/social_linkedin_white.svg"}
                  className={`${classes.socialIcon}`}
                ></img></a>
                <a href="/facebook"><img
                  src={"assets/images/social/social_facebook_white.svg"}
                  className={`${classes.socialIcon}`}
                ></img></a>
                <a href="/instagram"><img
                  src={"assets/images/social/social_instagram_white.svg"}
                  className={`${classes.socialIcon}`}
                ></img></a>
                <a href="/youtube"><img
                  src={"assets/images/social/social_youtube_white.svg"}
                  className={`${classes.socialIcon}`}
                ></img></a>
                </div>

                </div>
            </div>
        </div>
        <div className={`${classes.outerBottomTextWr}`}>
            <div className={`${classes.wrapper}`}>
            <div className={`${classes.innerBottomTextWr}`}>
                <p>© 2024 DexBytes. All right reserved.</p>
                </div>
            </div>
        </div>

    </section>
);
}

export default Footer;