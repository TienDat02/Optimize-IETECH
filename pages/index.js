import Head from 'next/head';
import Image from 'next/image';
import AboutCompany from '../components/AboutCompany/AboutCompany';
import Hero from '../components/Hero/Hero';
import WeCarry from '../components/WeCarry/WeCarry';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Footer from '../components/Footer/Footer';
import List_user from '../components/Web_development/List_user';
import Our_clients from '../components/Web_development/Our_clients';
import Slider from '../components/Slider/Slider';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../hooks/auth';
import ChatBox from "../components/ChatBox/ChatBox";

export default function Home() {
  const { user } = useAuth({ middleware: 'guest' });

  return (
    <Layout>
      {/* main */}
      <ChatBox />
      {/* <Slider /> */}
      <div className="container mx-auto px-2 md:px-4">
        <Hero />
        <List_user />
        <AboutCompany />
        <WhyChooseUs />
        <WeCarry />
      </div>
      {/* <Our_clients /> */}
    </Layout>
  );
}
