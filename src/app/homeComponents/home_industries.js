import classes from './home_industries.module.css';

const HomeIndustries = () => {
    return (
        <section className={`${classes.mainIndustriesSec}`}>
            <div className={`${classes.industriesSecWr}`}>
                <div className={`${classes.innerIndustriesSec}`}>
                    <h3 className={`${classes.h3TextIndustriesSec}`}>Industries we’ve created solutions for</h3>
                    <p className={`${classes.pTextIndustriesSec}`}>Lorem Ipsum is products through advanced updates to make theme regular code push, and follow CI/CD model for rapid build deployment and quicker delivery.</p>
                </div>
                <div className={`${classes.domainWr}`}>
                  <div className={`${classes.iconRow}`}>
                    <div className={`${classes.iconCol}`}>
                      <div className={`${classes.domainBox} ${classes.fr_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Food & Restaurant Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.fh_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Fitness & Health Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.ee_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Education & eLearning Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.ent_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Entertainment Apps</p>
                      </div>
                    </div>
                    <div className={`${classes.iconCol}`}>
                      <div className={`${classes.domainBox} ${classes.ecm_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Ecommerce Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.sm_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Social Media Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.emb_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Embedded Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.bn_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Business Networking Apps</p>
                      </div>
                    </div>
                    <div className={`${classes.iconCol}`}>
                      <div className={`${classes.domainBox} ${classes.fin_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Fintech Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.th_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Travel & Hospitality Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.leg_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Legal Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.fas_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Fashion Apps</p>
                      </div>
                    </div>
                    <div className={`${classes.iconCol}`}>
                      <div className={`${classes.domainBox} ${classes.tt_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Transportation & Taxi Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.jr_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Job & Recruitment Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.ins_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Insurance Apps</p>
                      </div>
                      <div className={`${classes.domainBox} ${classes.cus_apps}`}>
                        <span className={`${classes.domainImg}`}></span><p className={`${classes.domainText}`}>Custom Apps</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    );
}

export default HomeIndustries;