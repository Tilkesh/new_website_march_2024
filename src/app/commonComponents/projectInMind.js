import classes from './projectInMind.module.css'
const ProjectInMind = () => {
    return(
        <section className={`${classes.projectInMindWr}`}>
            <div className={`${classes.wrapper}`}>
                <div className={`${classes.innerProInMind}`}>
                <p>Have a project in mind? Schedule a free consultation today.</p>
                <a href="/contactSales" className={`${classes.contactSalesBtn}`}>Contact Sales</a>
                </div>
            </div>
        </section>
    );
}
export default ProjectInMind;