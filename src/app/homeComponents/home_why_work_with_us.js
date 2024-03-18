import classes from './home_why_work_with_us.module.css'
const HomeWhyWorkWithUs = () => {
    return(<section id='whyWork' className={`${classes.homeWhyWorkwithUsWr}`}>
        <div className={`${classes.innerhwwwWr} ${classes.wrapper}`}>
            <div className={`${classes.h3textWr}`}>
                <h3 className={`${classes.h3text}`}>Why Work With Us</h3>
                <div className={`${classes.textCardWr}`}>
                <div className={`${classes.cardBox}`}>
                    <h4 className={`${classes.h4CardText}`}>Agile throughout our processes</h4>
                    <p className={`${classes.pCardText}`}>We are following the agile development process till the next methodological marvel drops.</p>
                </div>
                <div className={`${classes.cardBox}`}>
                    <h4 className={`${classes.h4CardText}`}>Go-live in a zap</h4>
                    <p className={`${classes.pCardText}`}>We follow the Iterative development model to facilitate effective software life cycle management that ultimately reduces the go-live timeline for MVPs to only 8-12 weeks.</p>
                </div>
                <div className={`${classes.cardBox}`}>
                    <h4 className={`${classes.h4CardText}`}>Speedy software delivery</h4>
                    <p className={`${classes.pCardText}`}>We carry out bi-weekly sprints, facilitate regular code push, and follow CI/CD model for rapid build deployment and quicker delivery.</p>
                </div>
            </div>
            </div>
            
        </div>
    </section>);
}

export default HomeWhyWorkWithUs;