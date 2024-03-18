import classes from './home_featured_projects.module.css'

const HomeFeaturedProjects = () => {
    return (
        <section className={`${classes.mainFeaturedProjectsSec}`}>
            <div className={`${classes.FeaturedProjectsSecWr}`}>
                <div className={`${classes.innerWeDeliverSec}`}>
                    <h3 className={`${classes.h3TextWeDeliverSec}`}>Featured Projects</h3>
                    <p className={`${classes.pTextWeDeliverSec}`}>We define business processes through ideation, creation, and optimization with a team of exceptional strategists.</p>
                    <div className={`${classes.innerSlideupCardSec}`}>
                    <ul className={`${classes.cards}`}>
  <li>
    <a href="#wbs_icon" className={`${classes.card}`}>
      <img
        src="assets/images/homepage/wbs_img.png"
        className={`${classes.card__image}`}
        alt=""
      />
      <div className={`${classes.card__overlay}`} >
        <div className={`${classes.card__header}`}>
          <svg className= {`${classes.card__arc}`} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            className={`${classes.card__thumb}`}
            src="assets/images/homepage/wbs_icon.png"
            alt=""
          />
          <div className={`${classes.card__header_text}`}>
            <h3 className={`${classes.card__title}`}>Web Baby <br></br>Shower</h3>
            {/* <span className={`${classes.card__status}`}>1 hour ago</span> */}
          </div>
        </div>
        <p className={`${classes.card__description}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  </li>
  <li>
    <a href="#qods" className={`${classes.card}`}>
      <img
        src="assets/images/homepage/qods_img.png"
        className={`${classes.card__image}`}
        alt=""
      />
      <div className={`${classes.card__overlay}`} >
        <div className={`${classes.card__header}`}>
          <svg className= {`${classes.card__arc}`} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            className={`${classes.card__thumb}`}
            src="assets/images/homepage/qods_icon.png"
            alt=""
          />
          <div className={`${classes.card__header_text}`}>
            <h3 className={`${classes.card__title}`}>Quick On <br></br>Demand Services</h3>
            {/* <span className={`${classes.card__status}`}>1 hour ago</span> */}
          </div>
        </div>
        <p className={`${classes.card__description}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  </li>
  <li>
    <a href="#wa" className={`${classes.card}`}>
      <img
        src="assets/images/homepage/wa_img.png"
        className={`${classes.card__image}`}
        alt=""
      />
      <div className={`${classes.card__overlay}`} >
        <div className={`${classes.card__header}`}>
          <svg className= {`${classes.card__arc}`} xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <img
            className={`${classes.card__thumb}`}
            src="assets/images/homepage/wa_icon.png"
            alt=""
          />
          <div className={`${classes.card__header_text}`}>
            <h3 className={`${classes.card__title}`}>Work <br></br>Automation</h3>
            {/* <span className={`${classes.card__status}`}>1 hour ago</span> */}
          </div>
        </div>
        <p className={`${classes.card__description}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  </li>

</ul>
<div className={`${classes.view_all_featured_projects_wr}`}><a href="#view_all_featured_projects" className={`${classes.view_all_featured_projects}`}>View All</a></div>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default HomeFeaturedProjects;