import Layout from '@/components/layout';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Briefcase,
  MapPin,
  Calendar,
  Building,
  Award,
  Users,
  CheckCircle2,
  ChevronLeft,
  Bookmark
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock job data
const jobDetail = {
  id: 1,
  title: "Senior Blockchain Developer",
  company: "CryptoFuture Inc.",
  companyLogo: "/company-logo.png", // Replace with actual logo path
  location: "Remote",
  type: "Full-time",
  salary: "Rp 5.000.000 - Rp 8.000.000 / month",
  postedDate: "2 weeks ago",
  applicationDeadline: "June 30, 2024",
  experience: "3+ years",
  description: `
    <p>CryptoFuture Inc. is seeking a talented Senior Blockchain Developer to join our growing team. You will be responsible for developing and implementing blockchain solutions for our enterprise clients.</p>
    
    <p>As a Senior Blockchain Developer, you will work closely with our product and design teams to build robust, scalable blockchain applications that solve real-world problems.</p>
  `,
  responsibilities: [
    "Design and develop blockchain solutions using Solidity, Web3.js, and other related technologies",
    "Architect smart contracts that are secure, efficient, and follow best practices",
    "Collaborate with front-end developers to integrate blockchain functionality into user interfaces",
    "Conduct code reviews and provide technical guidance to junior developers",
    "Stay up-to-date with emerging blockchain technologies and industry trends",
    "Troubleshoot and debug issues in existing blockchain applications"
  ],
  requirements: [
    "Bachelor's degree in Computer Science, Engineering, or related field",
    "3+ years of experience in blockchain development",
    "Strong proficiency in Solidity and smart contract development",
    "Experience with Ethereum, Hyperledger, or other blockchain platforms",
    "Knowledge of cryptography and security best practices",
    "Excellent problem-solving and analytical skills"
  ],
  benefits: [
    "Competitive salary with performance bonuses",
    "Flexible remote work policy",
    "Health insurance coverage",
    "Professional development opportunities",
    "Paid time off and holidays"
  ],
  skills: ["Solidity", "Smart Contracts", "Ethereum", "Web3.js", "DApps", "Blockchain Architecture"],
  companyDescription: "CryptoFuture Inc. is a leading blockchain development company specializing in enterprise solutions. We work with businesses across various industries to implement blockchain technology that enhances security, transparency, and efficiency.",
};

// Similar job recommendations
const similarJobs = [
  {
    id: 2,
    title: "Blockchain Engineer",
    company: "BlockMatrix",
    location: "New York",
    type: "Contract",
    payment: "~ Rp 4.500.000",
    skills: ["Solidity", "DeFi"]
  },
  {
    id: 3,
    title: "Senior Smart Contract Developer",
    company: "ChainLink Technologies",
    location: "Remote",
    type: "Full-time",
    payment: "~ Rp 5.200.000",
    skills: ["Solidity", "Security"]
  },
  {
    id: 4,
    title: "Full Stack Blockchain Developer",
    company: "Web3 Solutions",
    location: "Singapore",
    type: "Full-time",
    payment: "~ Rp 5.800.000",
    skills: ["React", "Solidity"]
  }
];

export default function JobDetail() {
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
      <main className="container mx-auto px-4 md:px-10 py-10">
        {/* Breadcrumb navigation */}
        <div className="flex items-center mb-6" data-aos="fade-right">
          <a href="/jobs" className="flex items-center text-primary-bright">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Jobs
          </a>
        </div>

        {/* Job header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-2" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{jobDetail.title}</h1>

            <div className="flex items-center mb-4 flex-wrap gap-2">
              <div className="flex items-center mr-4 text-muted-foreground">
                <Building className="h-4 w-4 mr-2" />
                <span>{jobDetail.company}</span>
              </div>
              <div className="flex items-center mr-4 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{jobDetail.location}</span>
              </div>
              <div className="flex items-center mr-4 text-muted-foreground">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>{jobDetail.type}</span>
              </div>
              <div className="flex items-center mr-4 text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Posted {jobDetail.postedDate}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {jobDetail.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary/20 text-primary font-medium px-4 py-2 rounded-md flex items-center mb-2">
              <span>{jobDetail.salary}</span>
            </div>
            <div className='flex gap-3'>
              <Button className="w-full">Apply Now</Button>
              <Button variant="outline" className="w-10">
                <Bookmark />
              </Button>

            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Job details */}
          <div className="md:col-span-2">
            {/* Job description */}
            <Card className="mb-6" data-aos="fade-up">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <div className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: jobDetail.description }}></div>

                <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
                <ul className="list-disc pl-5 mb-6 text-muted-foreground">
                  {jobDetail.responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-1">{responsibility}</li>
                  ))}
                </ul>

                <h3 className="font-semibold mb-2">Requirements & Qualifications:</h3>
                <ul className="list-disc pl-5 mb-6 text-muted-foreground">
                  {jobDetail.requirements.map((requirement, index) => (
                    <li key={index} className="mb-1">{requirement}</li>
                  ))}
                </ul>

                <h3 className="font-semibold mb-2">Benefits:</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  {jobDetail.benefits.map((benefit, index) => (
                    <li key={index} className="mb-1">{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Application section */}
            <Card className="mb-6" data-aos="fade-up" data-aos-delay="100">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
                <p className="text-muted-foreground mb-4">
                  Submit your application through our secure blockchain-based application system.
                  Your credentials will be verified using our decentralized identity verification process.
                </p>

                <div className="bg-accent/30 p-6 rounded-md mb-4 flex justify-between items-center">
                  <p className="text-sm">
                    <Calendar className="inline mr-2" />
                    Application deadline: <strong>{jobDetail.applicationDeadline}</strong>
                  </p>
                  <Button className="w-full md:w-auto">Apply for this Position</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Company info & similar jobs */}
          <div>
            {/* Company info */}
            <Card className="mb-6" data-aos="fade-up" data-aos-delay="200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={jobDetail.companyLogo} alt={jobDetail.company} />
                    <AvatarFallback>{jobDetail.company.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{jobDetail.company}</h3>
                    <p className="text-sm text-muted-foreground">Technology • 50-200 employees</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {jobDetail.companyDescription}
                </p>

                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>50-200 employees</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Verified Blockchain Employer</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Top Rated Employer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar jobs */}
            <Card data-aos="fade-up" data-aos-delay="300">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Similar Jobs</h3>

                <div className="flex flex-col gap-4">
                  {similarJobs.map(job => (
                    <div key={job.id}>
                      <a href={`/job/${job.id}`} className="block hover:bg-accent/10 rounded-md -mx-2 p-2 transition-colors">
                        <h4 className="font-semibold text-primary-bright">{job.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{job.company} • {job.location}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {job.skills.slice(0, 2).map((skill, index) => (
                            <span key={index} className="bg-accent/30 px-2 py-0.5 rounded-full text-xs">{skill}</span>
                          ))}
                        </div>
                      </a>
                      {job.id !== similarJobs[similarJobs.length - 1].id && <Separator className="my-2" />}
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <a href="/jobs" className="text-primary-bright text-sm hover:underline">View all similar jobs</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
}
