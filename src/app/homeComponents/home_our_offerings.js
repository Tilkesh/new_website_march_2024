'use client'
import Slider from "react-slick";
import classes from './home_our_offerings.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeOurOfferings = () => {
    // const cssHOO = `.slick-slide > div {
    //     margin: 0 10px;
    // }`
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <section className={`${classes.mainOurOfferingsSec}`}>
            <div className={`${classes.OurOfferingsSecWr}`}>
                <div className={`${classes.innerOurOfferingsSec}`}>
                    <h3 className={`${classes.h3TextOurOfferingsSec}`}>Our Offerings</h3>
                    <p className={`${classes.pTextOurOfferingsSec}`}>Lorem Ipsum We define business processes through ideation, creation, and optimization with a team of exceptional strategists.</p>
                   
                </div>
            </div>
            {/* slider start */}
            <div className={`${classes.sliderWrOut}`}>
                <div className={`${classes.sliderWr} card23`}>
                    {/* <style>{cssHOO}</style> */}
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className={`${classes.sliderCard}`} key={d.key}>
                            <div className={`${classes.cardIcon}`}>
                                <img src={d.icon} alt=''/>
                            </div>
                            <div className={`${classes.cardText}`}>
                                <p className={`${classes.cardTitle}`}>{d.title1}<br/>{d.title2}</p>
                                <p className={`${classes.cardDetail}`}>{d.detail}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>

        </section>
    );
}

// slider data
const data = [
    {
        key: 'err3454533',
        icon: `assets/images/homepage/saas_applications.svg`,
        title1: `SAAS`,
        title2: `Applications`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454534',
        icon: `assets/images/homepage/mobile_app_development.svg`,
        title1: `Mobile App`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454535',
        icon: `assets/images/homepage/web_development.svg`,
        title1: `Web`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454536',
        icon: `assets/images/homepage/custom_software_development.svg`,
        title1: `Custom Software`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454537',
        icon: `assets/images/homepage/ecommerce_development.svg`,
        title1: `Ecommerce`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454538',
        icon: `assets/images/homepage/market_place_development.svg`,
        title1: `Market Place`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454539',
        icon: `assets/images/homepage/mvp_development.svg`,
        title1: `MVP`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454540',
        icon: `assets/images/homepage/it_consulting.svg`,
        title1: `IT`,
        title2: `Consulting`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    },
    {
        key: 'err3454541',
        icon: `assets/images/homepage/ai_ml_development.svg`,
        title1: `AI / ML`,
        title2: `Development`,
        detail: `Lorem Ipsum is develop unique software solutions to help businesses meet.`

    }

]

export default HomeOurOfferings;