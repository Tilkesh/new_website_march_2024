"use client"
import React from "react";
import Header from "./commonComponents/header";
import Image from "next/image";
import styles from "./page.module.css";
import HomeTopSection from "./homeComponents/home_top_Section";
import HomeFeaturedProjects from "./homeComponents/home_featured_projects";
import HomeOurOfferings from "./homeComponents/home_our_offerings";
import HomeWhyWorkWithUs from "./homeComponents/home_why_work_with_us";
import HomeIndustries from "./homeComponents/home_industries";
import HomeFewOfOurClients from "./homeComponents/home_a_few_of_our_clients";
import BlogCardsSec from "./commonComponents/blog_cards_sec";
import ProjectInMind from "./commonComponents/projectInMind";
import Footer from "./commonComponents/footer";

 


export default function Home() {
  return (
    <React.Fragment>
     <Header/>
     <HomeTopSection/>
     <HomeFeaturedProjects/>
     <HomeOurOfferings/>
     <HomeWhyWorkWithUs/>
     <HomeIndustries/>
     <HomeFewOfOurClients/>
     <BlogCardsSec/>
     <ProjectInMind/>
     <Footer></Footer>
     
    </React.Fragment>
  );
}
