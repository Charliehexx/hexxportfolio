import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/p1.png";
import img2 from "./images/p2.png";
import img3 from "./images/p3.png";
import img4 from "./images/p4.png";
// import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
// import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
// import img4 from "./images/thumb-pinterest-clone-reactjs.png";
// import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
// import img6 from "./images/thumb-whatsappui-clone-nextjs.png";

export const Experience = [
  {
    id: 1,
    date: "2022 November to February 2023",
    iconsSrc: <IoCodeWorking />,
    title: "Blockchain developer Intern",
    location: "India",
    description:
      "Worked on various tech stack that include Nextjs,solidity ,ethereum,Ether.js for deploying the smart contract and integrating third party services in NFT-Marketplace for letting users to sign up using Gmail and github id ",
  },
//   {
//     id: 2,
//     date: "201 - 2016",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 3,
//     date: "2012 - 2014",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 4,
//     date: "2011 - 2012",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
//   {
//     id: 5,
//     date: "2010 - 2011",
//     iconsSrc: <IoCodeWorking />,
//     title: "Creative Director",
//     location: "Doha, Qatar",
//     description:
//       "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
//   },
];

export const Projects = [
  {
    id: 1,
    name: "Ecommerce Application",
    imageSrc: img1,
    techs: "TypeScript,Prisma,Mysql,Nextjs13,Stripe,Shadcn-ui",
    github: "https://ecommerce-frontend-store-two.vercel.app/",
  },
  {
    id: 2,
    name: "Airbnb Clone",
    imageSrc: img2,
    techs: "TypeScript,Nextjs13,Prisma,MongoDB,React",
    github: "https://airbnbhexx.vercel.app/",
  },
   {
     id: 3,
    name: "Messenger Clone",
     imageSrc: img3,
     techs: "MongoDB,Typescript,Nextjs13,Prisma,Pusher,Tailwind",
     github: "https://messenger-clone-opal-pi.vercel.app/",
   },
  {
    id: 4,
    name: "Genius AI App ",
   imageSrc: img4,
    techs: "TypeScript,Prisma,Planetscale,Mysql,Nextjs13",
    github: "https://ai-saas-iota.vercel.app/",
  },
//   {
//     id: 5,
//     name: "Own Video Blog",
//     //imageSrc: img5,
//     techs: "React Js, Chara UI, Firebase",
//     github: "#",
//   },
//   {
//     id: 6,
//     name: "Whatsapp UI Clone",
//     //imageSrc: img6,
//     techs: "NextJs, Firebase Auth",
//     github: "#",
//   },
 ];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Charliehexx",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC61aM5QQDCPzpMUHh6rNVKA",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aditya-patel-307b071b9",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/+917905834716?text=Hii%20there!%20got%20some%20intresting%20to%20discuss%20about%20blockchain",
  },
];
