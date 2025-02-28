"use client"
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import {
  UsersRound,
  ShieldCheck,
  Globe,
  BookOpen,
  MapPin
} from "lucide-react";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    id: 1,
    name: "Gung Hendra",
    role: "Founder & CEO",
    avatar: "/gunghen.png"
  },
  {
    id: 2,
    name: "Rama",
    role: "CTO",
    avatar: "/rama.png"
  },
  {
    id: 3,
    name: "Dwiki",
    role: "Head of Operations",
    avatar: "/dwiki.png"
  },
  {
    id: 4,
    name: "Wiprayanka",
    role: "Chief Marketing Officer",
    avatar: "/nyoman.png"
  },
  {
    id: 5,
    name: "Yoga",
    role: "Head of Design",
    avatar: "/yoga.png"
  }
];

const values = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Trust & Transparency",
    description: "We believe in creating systems where trust is built into the technology itself."
  },
  {
    icon: <UsersRound className="w-10 h-10" />,
    title: "Community First",
    description: "Our community of employers and job seekers drives everything we do."
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Global Access",
    description: "We're building a platform that works for everyone, everywhere."
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Continuous Learning",
    description: "We encourage growth and adaptation in our rapidly evolving industry."
  }
];

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      disable: isMobile,
    });
  }, [isMobile]);

  return (
    <main className="container mx-auto px-10 pt-10 pb-25">
      <section
        className="min-h-[80vh] flex flex-col justify-center items-center"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About PRETIUM</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground mb-8">
          We&apos;re building the future of work on the blockchain, connecting talent with opportunity in a transparent ecosystem.
        </p>
      </section>

      <section
        className="py-12 bg-accent/30 rounded-lg p-8 my-8"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            PRETIUM exists to democratize opportunity by creating a transparent, secure, and efficient marketplace
            for jobs and talent in the blockchain ecosystem. We believe that by leveraging decentralized technology,
            we can create more fairness, reduce friction, and open doors for professionals worldwide.
          </p>
          <p className="text-lg">
            Our platform removes traditional barriers and intermediaries, allowing direct connections between employers
            and job seekers with verified credentials and fair compensation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            >
              <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="text-primary">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 hidden lg:block">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          Meet Our Team
        </h2>
        <div className="relative w-full h-120 xl:h-170 overflow-hidden">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-3 px-6 pb-6 pt-2 text-center"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-anchor-placement="top-bottom"
          >
            <Avatar className="w-60 h-80 xl:w-80 2xl:w-90 xl:h-120 mx-auto mb-4 brightness-[90%]">
              <AvatarImage src={teamMembers[0].avatar} alt={teamMembers[0].name} className='object-cover' />
            </Avatar>
            <h3 className="text-lg xl:text-xl font-semibold mb-1">{teamMembers[0].name}</h3>
            <div className="text-xs xl:text-sm text-primary font-medium mb-3">
              {teamMembers[0].role}
            </div>
          </div>
          <div
            className="absolute top-1/2 ml-6 xl:ml-4 2xl:ml-12 translate-x-1/2 -translate-y-1/2 z-2 px-6 pb-6 pt-2 text-center"
            data-aos="fade-up-right"
            data-aos-delay="800"
            data-aos-anchor-placement="top-bottom"
          >
            <Avatar className="w-60 h-80 xl:w-75 2xl:w-85 xl:h-120 mx-auto mb-4 brightness-[90%]">
              <AvatarImage src={teamMembers[1].avatar} alt={teamMembers[1].name} className='object-cover' />
            </Avatar>
            <h3 className="text-lg xl:text-xl font-semibold mb-1">{teamMembers[1].name}</h3>
            <div className="text-xs xl:text-sm text-primary font-medium mb-3">
              {teamMembers[1].role}
            </div>
          </div>
          <div
            className="absolute px-6 pb-6 pt-2 text-center"
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-anchor-placement="center-bottom"
          >
            <Avatar className="w-60 h-80 xl:w-70 2xl:w-85 xl:h-120 mx-auto mb-4 brightness-[90%]">
              <AvatarImage src={teamMembers[2].avatar} alt={teamMembers[2].name} className='object-cover' />
            </Avatar>
            <h3 className="text-lg xl:text-xl font-semibold mb-1">{teamMembers[2].name}</h3>
            <div className="text-xs xl:text-sm text-primary font-medium mb-3">
              {teamMembers[2].role}
            </div>
          </div>
          <div
            className="absolute top-1/2 right-0 xl:mr-2 2xl:mr-10 -translate-x-1/2 -translate-y-1/2 z-2 px-6 pb-6 pt-2 text-center"
            data-aos="fade-up-left"
            data-aos-delay="800"
            data-aos-anchor-placement="top-bottom"
          >
            <Avatar className="w-60 h-80 xl:w-75 2xl:w-85 xl:h-120 mx-auto mb-4 brightness-[90%]">
              <AvatarImage src={teamMembers[3].avatar} alt={teamMembers[3].name} className='object-cover' />
            </Avatar>
            <h3 className="text-lg xl:text-xl font-semibold mb-1">{teamMembers[3].name}</h3>
            <div className="text-xs xl:text-sm text-primary font-medium mb-3">
              {teamMembers[3].role}
            </div>
          </div>
          <div
            className="absolute right-0 px-6 pb-6 pt-2 text-center"
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-anchor-placement="center-bottom"
          >
            <Avatar className="w-50 h-80 xl:w-65 2xl:w-75 xl:h-120 mx-auto mb-4 brightness-[90%]">
              <AvatarImage src={teamMembers[4].avatar} alt={teamMembers[4].name} className='object-cover' />
            </Avatar>
            <h3 className="text-lg xl:text-xl font-semibold mb-1">{teamMembers[4].name}</h3>
            <div className="text-xs xl:text-sm text-primary font-medium mb-3">
              {teamMembers[4].role}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:hidden">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className={`overflow-hidden ${member.id === 1 ? 'md:col-span-2 lg:col-span-4' : ''}`} data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
              <div className="px-6 pb-6 pt-2 text-center">
                <Avatar className="w-48 sm:w-60 h-80 mx-auto mb-4 brightness-[90%]">
                  <AvatarImage src={member.avatar} alt={member.name} className='object-cover' />
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-sm text-primary font-medium">
                  {member.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="pt-12 px-8 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-lg mb-8">
            Have questions or want to learn more about PRETIUM? We&apos;d love to hear from you!
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Jimbaran, Bali</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>contact@pretium.com</span>
            </div>
          </div>
          <a href="mailto:contact@pretium.com">
            <Button>
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
