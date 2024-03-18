import classes from './blog_cards_sec.module.css'
import React, { useState, useEffect, useRef } from 'react';

const BlogCardsSec = () => {
 

    return (
       
    <section  id='blogCardSec' className={`${classes.mainBlogCardWr}`}>
                <div className={`${classes.wrapper}`}>
                    <div className={`${classes.innerBlogCardWr}`}>
                        <div className={`${classes.BlogHeadTextWr}`}>
                            <h3 className={`${classes.h3Text}`}>Blogs</h3>
                            <a href='/viewAll' className={`${classes.viewAllBlogBtn}`}>View All</a>
                        </div>
                        <div className={`${classes.BlogCardBoxWr}`}>
                        <div className={`${classes.BlogCard}`}>
                         <img src={"assets/images/blogs/01/blog1.png"}
                        className={`${classes.imgBlogCard}`}></img>
                        <h4 className={`${classes.h4TextBlogCard}`}>Unleashing the Power of OpenAI: How Businesses are Harnessing AI Models to Foster Innovation</h4>
                        <p className={`${classes.pTextBlogCard_Date}`}>January 1, 2024</p>
                        <a href='/readMore' className={`${classes.readMoreBtn}`}>Read More</a>
                        </div>
                        <div className={`${classes.BlogCard}`}>
                         <img src={"assets/images/blogs/01/blog2.png"}
                        className={`${classes.imgBlogCard}`}></img>
                        <h4 className={`${classes.h4TextBlogCard}`}>Top 10 UI/UX Design Tools In 2024</h4>
                        <p className={`${classes.pTextBlogCard_Date}`}>January 1, 2024</p>
                        <a href='/readMore' className={`${classes.readMoreBtn}`}>Read More</a>
                        </div>
                        <div className={`${classes.BlogCard}`}>
                         <img src={"assets/images/blogs/01/blog3.png"}
                        className={`${classes.imgBlogCard}`}></img>
                        <h4 className={`${classes.h4TextBlogCard}`}>Why Is Docker In Vogue?</h4>
                        <p className={`${classes.pTextBlogCard_Date}`}>January 1, 2024</p>
                        <a href='/readMore' className={`${classes.readMoreBtn}`}>Read More</a>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        );        
}

export default BlogCardsSec;