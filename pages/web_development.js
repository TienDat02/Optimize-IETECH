import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About_service from "../components/Web_development/About_service";
import Choose_plan from "../components/Web_development/Choose_plan";
import List_user from "../components/Web_development/List_user";
import Main_header from "../components/Web_development/Main_header";
import Our_clients from "../components/Web_development/Our_clients";
import Support_serrvice from "../components/Web_development/Support_serrvice";
import Techonolody from "../components/Web_development/Techonolody";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

import { defaults } from 'autoprefixer'
import React from 'react'

export const web_development = () => {
  return (
    <>
      <Head>
        <title>IE Solution</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Navbar />

      {/* main */}
      <Main_header></Main_header>
      <About_service></About_service>
      <Support_serrvice></Support_serrvice>
      <Techonolody></Techonolody>
      <Choose_plan></Choose_plan>
      <List_user></List_user>
      <Our_clients></Our_clients>  
      {/* footer */}
    </>
  )
}
export default web_development
