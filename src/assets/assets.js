import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import brightMatterImg from '../assets/Brigthmatter.png'
import brightImg from '../assets/bright.png'
import profileImg from '../assets/profile.avif';
import project1Img from '../assets/project1.avif';
import project2Img from '../assets/project2.avif';
import project3Img from '../assets/project3.avif';
import project4Img from '../assets/project4.avif';
import project5Img from '../assets/project5.avif';
import project6Img from '../assets/project6.avif';
import project7Img from '../assets/project7.avif';
import { FiCpu, FiLayers, FiMonitor, FiSettings, FiSmartphone } from 'react-icons/fi';





export const assets = {
    brightMatterImg,
    brightImg,
    profileImg,
    project1Img,
    project2Img,
    project3Img,
    project4Img,
    project5Img,
    project6Img,
    project7Img,
}

export const navItems = [
    { label: "Home", href: "/" },
    { label: "Guest", href: "#guests" },
    { label: "Podcast", href: "#podcast" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Handles", href: "/handles" },
];

export const socialPlatforms = [
    { icon: FaInstagram, href: '#' },
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
];

export const projects = [
    {
        id: 1,
        title: "NeoCommerce Platform",
        description: "Next-gen e-commerce with AR product visualization",
        category: "WEB APP",
        color: "primary",
        image: project1Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 2,
        title: "Fitness AR Companion",
        description: "AI-powered workout tracking with motion capture",
        category: "MOBILE APP",
        color: "accent",
        image:project2Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 3,
        title: "Data Visualization Suite",
        description: "Real-time 3D data representation and analytics",
        category: "DASHBOARD",
        color: "secondary",
        image:project3Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 4,
        title: "NFT Marketplace",
        description: "Decentralized platform for digital collectibles",
        category: "WEB3",
        color: "primary",
        image:project4Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 5,
        title: "Agency Website",
        description: "Bright Matter Agency website, Digital innovation",
        category: "Digitial-Agency",
        color: "primary",
        image: brightImg,
        link: 'https://brightmatter.vercel.app/',
        youtube: '#'
    },
    {
        id: 6,
        title: "TechGadget Store",
        description: "Increased sales by 240% through targeted PPC campaigns",
        category: "Digitial-Agency",
        color: "primary",
        image: project5Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 7,
        title: "CloudFlow Platform",
        description: "Generated 1,200+ qualified leads through content marketing.",
        category: "Digitial-Agency",
        color: "primary",
        image: project6Img,
        link: '#',
        youtube: '#'
    },
     {
        id: 7,
        title: "Web Development",
        description: "Web Development, frontend and backend",
        category: "WEB APP",
        color: "primary",
        image: project7Img,
        link: '#',
        youtube: '#'
    },
];

export const skills = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping, interaction design",
      icon: FiMonitor,
    },
    {
      id: 2,
      title: "Frontend Dev",
      description: "React, Vue, Next.js, Tailwind, GSAP, Three.js",
      icon: FiCpu,
    },
    {
      id: 3,
      title: "Backend Dev",
      description: "Node.js, Express, MongoDB, GraphQL, Firebase",
      icon: FiLayers ,
    },
    {
      id: 4,
      title: "Mobile Dev",
      description: "React Native, Flutter, SwiftUI, Kotlin",
      icon: FiSmartphone ,
    },
    {
      id: 5,
      title: "DevOps",
      description: "Docker, AWS, CI/CD, Serverless, Microservices",
      icon: FiSettings,
    },
  ];
