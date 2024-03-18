import classes from './home_a_few_of_our_clients.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeFewOfOurClients = () => {
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
        <section className={`${classes.mainOurClientsSec}`}>
        <div className={`${classes.OurClientsSecWr}`}>
            <div className={`${classes.innerOurClientSec}`}>
            <h3 className={`${classes.h3TextOurClientSec}`}>A few of our clients</h3>
            {/* slider start */}
            <div className='logoSlider'>
            <Slider {...settings}>
                    {data.map((d) => (
                        <div className={`${classes.imgWr}`}>
                            <img style={{margin: "0 auto"}} src={d.img} alt=''/>
                        </div>
                    ))}
            </Slider>
            </div>
            {/* slider end */}
            <div className={`${classes.letsJoinTogetherBtnWr}`}>
                <a className={`${classes.letsJoinTogetherBtn}`} href="/letsjointogether">Let's join together</a>
            </div>
            </div>
        </div>
        </section>
    );

}

// slider data
const data = [
    {
        key: 'img4454533',
        img: `assets/images/homepage/finstack.png`

    },
    {
        key: 'img4454534',
        img: `assets/images/homepage/food_tech.png`

    },
    {
        key: 'img4454535',
        img: `assets/images/homepage/accountearth.png`

    },
    {
        key: 'img4454536',
        img: `assets/images/homepage/accountearth.png`

    }

]

export default HomeFewOfOurClients;