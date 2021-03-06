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
// import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
// import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
// import img4 from "./images/thumb-pinterest-clone-reactjs.png";
// import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
// import img6 from "./images/thumb-whatsappui-clone-nextjs.png";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Working on Upgrading myself",
    location: "India",
    description:
      "Web Developer",
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
    name: "Ecommerce UI Mockup",
    imageSrc: img1,
    techs: "HTML, Responsive Web Design,Tailwind CSS",
    github: "https://github.com/Charliehexx/peace-ecom",
  },
  {
    id: 2,
    name: "React-Firebase Messenger Chat App",
    imageSrc: img2,
    techs: "React Js,Firebase",
    github: "https://github.com/Charliehexx/react-messenger",
  },
   {
     id: 3,
    name: "CRED UI Frontend Clone",
     imageSrc: img3,
     techs: "ReactJS,CSS,BrowserAPI",
     github: "https://github.com/Charliehexx/Cred-UI-Clone",
   },
//   {
//     id: 4,
//     name: "Pintrest UI Clone 2.0 ",
//    // imageSrc: img4,
//     techs: "React Js,  Material UI",
//     github: "#",
//   },
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
