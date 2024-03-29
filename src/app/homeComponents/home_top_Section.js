import classes from "./home_top_section.module.css";

const HomeTopSection = () => {
  return (
    <section className={`${classes.sectionHome}`}>
      <div className={`${classes.sectionWrapper} ${classes.innerSectionHomeWr}`}>
        <div className={`${classes.innerLeftRightMargin} ${classes.homesectionWr}`}>
          <div className={`${classes.sectionLeftBox}`}>
            {/* <div className={`${classes.homeTopBtnWr}`}>
              <div className={`${classes.leftHiringWr}`}>
                <span className={`${classes.hiringText}`}>We're hiring!</span>
              </div>
              <div className={`${classes.rightJoinourTeamWr}`}>
                <a className={`${classes.joinourTeamLink}`} href="/JoinOurTeam">
                  Join our team
                </a>
              </div>
            </div> */}
            <div className={`${classes.homeTextOuterWr}`}>
              <h1 className={`${classes.homeH1Text}`}>Crafting Innovation<br/>in Bits & Bytes</h1>
              <p className={`${classes.homePtext1}`}>Elevating Businesses with Digital Innovation</p>
              <div className={`${classes.homeBtnWr}`}>
                <a className={`${classes.getYourProjectLink}`} href="/getyourproject">Get Your Project Started</a>
              </div>
            </div>
          </div>
          <div className={`${classes.sectionRightBox}`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="100px" y="100px" viewBox="0 0 288 288">
    <defs>
        <pattern id="image-pattern" x="0" y="0" width="1" height="1">
            <image href="/assets/images/homepage/home_top_sec.png" x="0" y="0" width="100%" height="100%"></image>
        </pattern>
    </defs>
    <path fill={`url(#image-pattern)`}>
        <animate repeatCount="indefinite" attributeName="d" dur="5s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"></animate>
    </path>
</svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopSection;
