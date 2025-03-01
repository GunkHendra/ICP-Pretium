import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from '@/components/ui/card';
import { Lock, ShieldCheck } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Blockchain Developer",
    company: "CryptoFuture Inc.",
    location: "Remote",
    type: "Full-time",
    payment: "~ Rp 5.000.000",
    description: "Join our team to develop next-generation blockchain solutions.",
    skills: ["Solidity", "Smart Contracts"]
  },
  {
    id: 2,
    title: "Frontend DApp Engineer",
    company: "BlockMatrix",
    location: "New York",
    type: "Contract",
    payment: "~ Rp 4.000.000",
    description: "Create intuitive user interfaces for decentralized applications.",
    skills: ["React", "Web3.js"]
  },
  {
    id: 3,
    title: "Blockchain Security Analyst",
    company: "SecureChain",
    location: "Remote",
    type: "Part-time",
    payment: "~ Rp 6.000.000",
    description: "Audit smart contracts and improve security protocols.",
    skills: ["Security", "Audit"]
  },
  {
    id: 4,
    title: "NFT Project Manager",
    company: "ArtChain Collective",
    location: "Berlin",
    type: "Full-time",
    payment: "~ Rp 4.000.000",
    description: "Lead our team in developing innovative NFT marketplaces.",
    skills: ["Project Management", "NFTs"]
  }
];

const jobs = 10;
const users = 5000;
const hires = 1200;
const companies = 50;

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${Math.floor(num / 1000000)}M+`;
  } else if (num >= 1000) {
    return `${Math.floor(num / 1000)}K+`;
  }
  return num.toString();
}

export default function Home() {
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
    <Layout>
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-10 pt-10 pb-25">
          <section
            className="min-h-[80vh] flex flex-col justify-center items-center"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Find Your Next Opportunity on PRETIUM
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground mb-8">
                Discover secure, transparent, and decentralized job opportunities powered by blockchain technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="sm:w-30">
                  <Button className="w-full">
                    Browse Jobs
                  </Button>
                </div>
                <div className="sm:w-30">
                  <Button variant="outline" className="w-full">
                    Post a Job
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <h2
              className="text-3xl font-bold text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
            >
              Why PRETIUM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
                <CardContent className="py-2">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center">
                    <Lock className='w-full h-full' />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Contract</h3>
                  <p className="text-muted-foreground">Smart contracts ensure all job agreements and payments are secure and transparent.</p>
                </CardContent>
              </Card>

              <Card data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
                <CardContent className="py-2">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center">
                    <ShieldCheck className='w-full h-full' />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Credentials</h3>
                  <p className="text-muted-foreground">Blockchain verification ensures all credentials and work history are authentic.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section
            className="py-12 bg-accent/30 rounded-lg p-8"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="text-3xl font-bold text-center mb-6">Find Jobs Now</h2>
            <div className="max-w-2xl mx-auto">
              <form className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Keywords or job title"
                  className='md:w-4/6'
                />
                <Select>
                  <SelectTrigger className="md:max-w-2/6">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="blockchain-development">Blockchain Development</SelectItem>
                      <SelectItem value="smart-contract">Smart Contract Development</SelectItem>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="security">Security & Auditing</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="product">Product Management</SelectItem>
                      <SelectItem value="marketing">Marketing & Growth</SelectItem>
                      <SelectItem value="research">Research & Analysis</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button>
                  Search
                </Button>
              </form>
            </div>
          </section>

          <section className="py-12">
            <div
              className="flex justify-between items-center mb-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor-placement="top-bottom"
            >
              <h2 className="text-3xl font-bold">Featured Opportunities</h2>
              <a href='' className="text-primary hover:underline font-medium">View All</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <Card
                  key={job.id}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-anchor-placement="top-bottom"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-xl mb-1">{job.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">
                          {job.company} • {job.location} • {job.type}
                        </div>
                      </div>
                      <div className="bg-primary/20 text-primary font-medium px-3 py-1 rounded-full text-sm h-fit">
                        {job.payment}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <span key={index} className="bg-accent/50 px-2 py-1 rounded-full text-xs">{skill}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            className="py-10 border-t border-b border-border my-8"
            data-aos="fade-in"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: jobs, label: "Active Jobs" },
                { value: users, label: "Users" },
                { value: hires, label: "Successful Hires" },
                { value: companies, label: "Companies" }
              ].map((item, index) => (
                <div key={index} data-aos="zoom-in" data-aos-delay={100 * index} data-aos-anchor-placement="top-bottom">
                  <div className="text-4xl font-bold mb-1">{formatNumber(item.value)}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-12 px-8 text-center" data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of professionals using blockchain for secure and rewarding job opportunities.
            </p>
            <Button>
              Create an Account
            </Button>
          </section>
        </div>
      </main>
    </Layout>
  );
}
