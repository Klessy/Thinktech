import { FaLaptopCode } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
//Hero Images
import Carousel_1 from "./assets/slider1.jpg";
import Carousel_2 from "./assets/slider2.jpg";
import Carousel_3 from "./assets/slider3.jpg";
import Carousel_4 from "./assets/teencoders-coding-club-children-port-harcourt-summer-kids-slider-1.jpg";
import Carousel_5 from "./assets/teencoders-coding-club-children-port-harcourt-summer-kids-slider-2.jpg";
import Carousel_6 from "./assets/teencoders-coding-club-children-port-harcourt-summer-kids-slider-3.jpg";
//Skill Logo
import skillImg_1 from "./assets/logo/python-1-kids-children-teencoders-coding-school-kids-port-harcourt-lagos-abuja-150x100.jpg";
import skillImg_2 from "./assets/logo/html.svg";
import skillImg_3 from "./assets/logo/css3.svg";
import skillImg_4 from "./assets/logo/tailwind.svg";
import skillImg_5 from "./assets/logo/react.svg";
import skillImg_6 from "./assets/logo/javascript.svg";
import skillImg_7 from "./assets/logo/minecraft-kids-children-teencoders-coding-school-kids-port-harcourt-lagos-abuja-150x100.jpg";
import skillImg_8 from "./assets/logo/kodu-1-kids-children-teencoders-coding-school-kids-port-harcourt-lagos-abuja-150x100.jpg";
import skillImg_9 from "./assets/logo/mit-1-kids-children-teencoders-coding-school-kids-port-harcourt-lagos-abuja-150x100.jpg";
import skillImg_10 from "./assets/logo/arduino-kids-children-teencoders-coding-school-kids-port-harcourt-lagos-abuja-150x100.jpg";
import htmlImg from "./assets/logo/html.png";
import cssImg from "./assets/logo/css.png";
//Popular Courses Images
// import ThinktechStudentImg_1 from "./assets/images/thinktech-lady-sitting.jpeg";
import ThinktechStudentImg_2 from "./assets/images/img2.jpeg";
import ThinktechStudentImg_3 from "./assets/images/thinktech-mobile-dev.jpeg";
import ThinktechStudentImg_4 from "./assets/images/img6.jpeg";
import ThinktechStudentImg_5 from "./assets/images/grow-with-thinktech.jpeg";
import ThinktechStudentImg_6 from "./assets/images/view-3d-man-holding-laptop.jpg";
import ThinktechStudentImg_7 from "./assets/images/view-3d-man-using-laptop.jpg";
import ThinktechStudentImg_8 from "./assets/images/3d-portrait-high-school-teenager.jpg";
import ThinktechStudentImg_9 from "./assets/images/think-lady.jpg";
import ThinktechInstructor from "./assets/logo/working-emoji.png";
//Project Images
import Project_1 from "./assets/projects/easybank-desktop-preview.jpg";
import Project_2 from "./assets/projects/flyo-desktop-preview.jpg";
import Project_3 from "./assets/projects/thinktech-movie-search-app.png";
import Project_4 from "./assets/projects/thinktech-ecommerce-app.png";

//About Us
import AboutSlide_1 from "./assets/images/cross-sitting-to-learn.png";
import AboutSlide_2 from "./assets/img6.png";

//What we Offer images
import Shape_1 from "./assets/logo/offer-icon-01-2.png";
import Shape_2 from "./assets/logo/offer-icon-02-2.png";
import Shape_3 from "./assets/logo/offer-icon-03-2.png";
import Shape_4 from "./assets/logo/offer-icon-04-2.png";

//Course Images
import Course_1 from "./assets/images/course-1.webp";
import Course_2 from "./assets/images/course-2.webp";
import Course_3 from "./assets/images/course-3.webp";

//Course content Images
import AuthorImg from "./assets/images/Team-10.PNG";
import CourseInstructorImg from "./assets/img4.jpeg";
import ForexInstructor from "./assets/images/team-3-bg-white.png";
import DataInstructorWhiteImg from "./assets/images/mr-george-bg-white.png";
import WebInstructorImg from "./assets/images/Team-10-bg-white.png";
// import WebInstructorImg from "./assets/images/Team-9-bg-white.png";

//Team Images
import DataInstructor from "./assets/images/man-medium.jpg";
import SoftwareDeveloper from "./assets/images/team-2-filter-bg-removed.jpg";
import ForexProfessional from "./assets/images/team-3-bg-removed.jpeg";
import DataInstructor2 from "./assets/images/mr-george_processed.jpeg";

export const navLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Courses",
    path: "/courses",
  },
  {
    id: 4,
    name: "Projects",
    path: "/project",
  },
  {
    id: 5,
    name: "Team",
    path: "/team",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];

const dataSlider = [
  //   {
  //     id: 1,
  //     title: "FUN, EASY AND PROJECT-BASED",
  //     desc: "CODING CLASSES FOR KIDS",
  //     img: Carousel_1,
  //     btn: "JOIN A CLASS",
  //   },
  //   {
  //     id: 2,
  //     title: "FUN, EASY AND PROJECT-BASED",
  //     desc: "CODING CLASSES FOR KIDS",
  //     img: Carousel_2,
  //     btn: "JOIN A CLASS",
  //   },
  //   {
  //     id: 3,
  //     title: "FUN, EASY AND PROJECT-BASED",
  //     desc: "CODING CLASSES FOR KIDS",
  //     img: Carousel_3,
  //     btn: "JOIN A CLASS",
  //   },
  {
    id: 1,
    title: "Kick start your tech  \n career today",
    desc: "Learn the in-demand skills required to take you from a beginner \n to an advanced tech developer.",
    img: Carousel_5,
    btn: "JOIN A CLASS",
  },
  {
    id: 2,
    title: "CODING CLASSES FOR \n KIDS",
    desc: "Get a private coding instructor for your child, physical and online classes.",
    img: Carousel_4,
    btn: "JOIN A CLASS",
  },
  {
    id: 3,
    title: "CODING CLASSES FOR \n KIDS",
    desc: "Get a private coding instructor for your child, physical and online classes.",
    img: Carousel_6,
    btn: "JOIN A CLASS",
  },
];

const serviceData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Coding && Web Engineering",
    desc: "This Program is design to cater for individuals whose interest lies in web development the program is structures in a way such that no prior experience or knowledge is required",
    btn: "Learn More",
  },
  {
    id: 2,
    icon: <IoAnalyticsSharp />,
    title: "Data Analysis",
    desc: "In a World where data is fast evolving it is imperative to equip one's self with relevent knowledge join us today as we take you on a smooth ride into Data Analysis",
    btn: "Learn More",
  },
  {
    id: 3,
    icon: <IoGameController />,
    title: "Animation && Game development",
    desc: "Ever Wondered how Animations works!!, Build your first Gaming App with Us",
    btn: "Learn More",
  },
  {
    id: 4,
    icon: <SiMaterialdesignicons />,
    title: "Graphic Design",
    desc: "Join us today as we delve in the world of graphics. We can help you bring that idea into materialization",
    btn: "Learn More",
  },
];

const skillMarquee = [
  {
    img: skillImg_1,
  },
  {
    img: skillImg_2,
  },
  {
    img: skillImg_3,
  },
  {
    img: skillImg_4,
  },
  {
    img: skillImg_5,
  },
  {
    img: skillImg_6,
  },
  {
    img: skillImg_7,
  },
  {
    img: skillImg_8,
  },
  {
    img: skillImg_9,
  },
  {
    img: skillImg_10,
  },
];

const coursesData = [
  {
    id: 1,
    img: ThinktechStudentImg_9,
    author: "Precious Eruteya",
    authorImg: ThinktechInstructor,
    lessons: "16 Lessons",
    duration: "3 Weeks",
    desc: "The Complete HTML and CSS Bootcamp",
    feature: "Beginner",
    techImg_one: htmlImg,
    techImg_two: cssImg,
    techImg_three: "",
    techImg_four: "",
    course_title: "",
  },
  {
    id: 2,
    img: ThinktechStudentImg_7,
    author: "Precious Eruteya",
    authorImg: ThinktechInstructor,
    lessons: "16 Lessons",
    duration: "3 Weeks",
    desc: "Beginner and Advanced  Data Analytics Class",
    feature: "Beginner",
    techImg_one: htmlImg,
    techImg_two: cssImg,
    techImg_three: "",
    techImg_four: "",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/vT7WJS2K/view-3d-man-holding-laptop.jpg",
    author: "Precious Eruteya",
    authorImg: ThinktechInstructor,
    lessons: "16 Lessons",
    duration: "3 Weeks",
    desc: "The Complete HTML and CSS Bootcamp",
    feature: "Beginner",
    techImg_one: htmlImg,
    techImg_two: cssImg,
    techImg_three: "",
    techImg_four: "",
  },
  {
    id: 4,
    img: ThinktechStudentImg_8,
    author: "Precious Eruteya",
    authorImg: ThinktechInstructor,
    lessons: "16 Lessons",
    duration: "3 Weeks",
    desc: "The Complete HTML and CSS Bootcamp",
    feature: "Beginner",
    techImg_one: htmlImg,
    techImg_two: cssImg,
    techImg_three: "",
    techImg_four: "",
  },
];

const projectData = [
  {
    id: 1,
    category: "Web Development",
    image: Project_1,
    imgBox: Project_3,
    title: "Movie Gallery App",
    desc: " This is an Artificial Intelligence template with state of the art design",
    demo: "https://thinktech-cinemate.netlify.app/",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "",
    icon: "🪙",
  },
  {
    id: 2,
    category: "Data Analysis",
    image: Project_2,
    imgBox: Project_3,
    title: "Restuarant Template Good User Experience Demo",
    desc: "Responsive Restuarant Interface where users can order food from the convenience of their homes",
    demo: "https://thinktech-restuarant-temp.netlify.app",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "reversed-proj",
    icon: "🏋️",
  },
  {
    id: 3,
    category: "Forex",
    image: Project_2,
    imgBox: Project_3,
    title: "Video App Implemented with a Search Function",
    desc: "Tried of static content?, Want a graphic illustration? Welcome to my video app where users can search for video context using RestApi and Material UI",
    demo: "https://eloquent-quokka-0074eb.netlify.app",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "",
    icon: "🛒",
  },
  {
    id: 4,
    category: "Animation & Game Dev",
    image: Project_1,
    imgBox: Project_3,
    title: "Exercise Application Demo",
    desc: "Keep the body fit. Welcome to my exercise app where users can search for any exercise. Graphic illustration and description of exercise is provided using Giff",
    demo: "https://preeminent-rugelach-5ab031.netlify.app/",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "reversed-proj",
    icon: "🪙",
  },
  {
    id: 5,
    category: "Mobile Development",
    image: Project_1,
    imgBox: Project_3,
    title: "Restuarant Bootstrap Demo",
    desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure earum  ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: "https://precioustutorials.com",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "",
    icon: "🪙",
  },
  {
    id: 6,
    category: "Data Analysis",
    image: Project_2,
    imgBox: Project_3,
    title: "Projecct Title One (UIUX)",
    desc: " architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    demo: "https://precioustutorials.com",
    github: "https://github.com/klessy",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "reversed-proj",
    icon: "🪙",
  },
  {
    id: 7,
    category: "Web Development",
    image: Project_2,
    imgBox: Project_4,
    title: "WebStore",
    desc: "An Ecommerce Template made and designed by think tech",
    demo: "https://thinktech-codebook.netlify.app/",
    github: "https://github.com/klessy",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "",
    icon: "🪙",
  },
  {
    id: 8,
    category: "Web Development",
    image: Project_2,
    title: "Projecct Title One (UIUX)",
    desc: "An Ecommerce Template made and designed by think tech",
    demo: "https://thinktech-ecom-template.netlify.app",
    github: "https://github.com/klessy",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "reversed-proj",
    icon: "🪙",
  },
  {
    id: 9,
    category: "Web Development",
    image: Project_2,
    title: "Projecct Title One (UIUX)",
    desc: "An Ecommerce Template made and designed by think tech",
    demo: "https://thinktech-ecom-template.netlify.app",
    github: "https://github.com/klessy",
    tech1: "React",
    tech2: "SCSS",
    scrollY: -74,
    cName: "",
    icon: "🪙",
  },
];

const faqs = [
  {
    id: 1,
    question: "What do you need to start working on my project?",
    answer:
      "It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there.",
  },
  {
    id: 2,
    question: "How long will my project take to complete?",
    answer:
      "This depends on the complexity of the project, your available, and your payment. Once you have this sorted out, I will give you a completion date.",
  },
  {
    id: 5,
    question: "Is hosting and domain registration inclusive in your pricing?",
    answer:
      "No! Hosting and domain is taken care of seperately. You can pay for it or take care of it on your own if you know how to.",
  },
  {
    id: 4,
    question: "How much do you charge for an average website or app?",
    answer:
      "Once again, this depends. But my prices are affordable so you're good.",
  },
  {
    id: 3,
    question: "What's your payment plan?",
    answer:
      "Payment is divided into 3. An initial 30% upfront payment to get me started once all the details of the projec is set, 40% once the project is completed, and 30% once the project is delivered.",
  },
  {
    id: 6,
    question: "What if the project doesn't turn out good?",
    answer:
      "You will be a part of the process from the start. You will know how the whole project is going until the end. And I will make sure to give you the best.",
  },
];

//whyus Carousel
const aboutSlider = [
  {
    id: 1,
    img: AboutSlide_1,
  },
  {
    id: 2,
    img: AboutSlide_2,
  },
];

const weOffer = [
  {
    id: 1,
    img: Shape_1,
    title: "Remote Learning",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt tempore eaque.",
  },
  {
    id: 2,
    img: Shape_2,
    title: "Hands-On Projects",
    desc: "Build a portfolio that showcases your skills.",
  },
  {
    id: 3,
    img: Shape_3,
    title: "Affordable Plans",
    desc: "Accessible education for individuals and families.",
  },
  {
    id: 4,
    img: Shape_4,
    title: "Flexible Schedules",
    desc: "Learn at your convenience, online or in-person.",
  },
  {
    id: 5,
    img: Shape_4,
    title: "Industry-Experienced Instructors",
    desc: "Learn from tech experts who understand the field.",
  },
  {
    id: 6,
    img: Shape_4,
    title: "Personalized Learning Plans ",
    desc: "Tailored to meet your goals and learning pace.",
  },
  {
    id: 7,
    img: Shape_1,
    title: "Free Trail Class ",
    desc: "Tailored to meet your goals and learning pace.",
  },
  {
    id: 8,
    img: Shape_4,
    title: "Career Guideline ",
    desc: "Tailored to meet your goals and learning pace.",
  },
];

//Course Page
const coursePageData = [
  {
    id: 1,
    course_img: Course_1,
    course_title: "Full Stack",
    authorImg: Course_1,
    author_title: "Precious Eruteya",
    course_desc: "The Complete Guide to Web Development",
    lessons: 17,
    price: "75",
    course_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas voluptatibus nemo vitae voluptate aspernatur dolores repudiandae, doloribus, non ea iure. Accusamus repudiandae perspiciatis quis",
    overview: {
      course_complete_desc:
        "During this Course we explore how to make and materializing ideas into Web apps. This course introduces you to the basics of programming with HTML, CSS and javaScript. This course is Structured so that it engages participants in building Web applications. This course is solely project based",
      you_will_learn: [
        "Basics of Web Programming \n Build Real Life Demo Projects \n Understanding how Version Control Works \n Create your own Web Applicaton \n Deploy your Projects",
        "",
      ],
      certification:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint corrupti reiciendis quia praesentium doloremque. Itaque voluptate quam voluptatibus reiciendis quisquam quasi, veniam id autem cumque, quia perferendis minima ex.",
    },
    introduction: [
      "Structure of an HTML Page \n Introduction to HTML\n Core HTML Tags. HTML Text Formatting and decoration \n HTML Image Insertion and Embedding Videos. Absolute Vs Relative File Referencing \n Link and Tables Creation in HTML \n Forms in HTML \n Introduction to CSS. \n Adding CSS CSS Syntax \n CSS Colors and Background \n CSS Height and Width \n CSS display \n CSS Box Model \n CSS Flexbox \n CSS Animations and Transitions \n CSS Media Query \n JavaScript Introduction \n JS Output \n JS Syntax \n JS Variables and comments \n Data types \n Introduction to Methods, Conditional Statements, Loops and Arrays \n JS Objects \n JS Events \n DOM Manipulation \n Developing React Apps",
    ],
    instructor: {
      instructorImg: WebInstructorImg,
      instructorRole: "Web Engineer",
      instructorDesc:
        "James Carlson is an instructor and developer living in a suburb of Washington, DC. he has been assigned to aspen ecosystems research and has been involved in several special assignments.",
      whatsapp: "",
      twitter: "",
      linkedln: "",
      fb: "",
    },
    courseSidebar: {
      duration: "4 Weeks",
      lessons: "12 Lessons",
      skillLevel: "Beginner",
      language: "English",
      quizzes: 4,
      certificate: "Yes",
      passPercentage: 80,
      deadline: "03 March, 2025",
      instructorName: "Mr Precious",
    },
  },
  {
    id: 2,
    course_img: Course_3,
    course_title: "Data Analysis",
    authorImg: Course_1,
    author_title: "George",
    course_desc: "The Complete Guide to Data Analysis",
    lessons: 17,
    price: "75",
    course_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas voluptatibus nemo vitae voluptate aspernatur dolores repudiandae, doloribus, non ea iure. Accusamus repudiandae perspiciatis quis",
    overview: {
      course_complete_desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, a maxime! Doloremque a delectus molestias, consequatur quisquam sunt fuga, iusto quaerat mollitia ut nobis ipsum eius, laudantium adipisci ab quas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique itaque quam explicabo illum perspiciatis, quis alias, tempora ex dolor, molestias ratione voluptatibus dolorum! Sint autem dolores optio earum modi officiis?",
      you_will_learn: [
        "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor \n Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor \n Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
        "",
      ],
      certification:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint corrupti reiciendis quia praesentium doloremque. Itaque voluptate quam voluptatibus reiciendis quisquam quasi, veniam id autem cumque, quia perferendis minima ex.",
    },
    introduction: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa?",
    ],
    instructor: {
      instructorImg: DataInstructorWhiteImg,
      instructorRole: "Data Analyst",
      instructorDesc:
        "George is an instructor and developer living in a suburb of Washington, DC. he has been assigned to aspen ecosystems research and has been involved in several special assignments.",
      whatsapp: "",
      twitter: "",
      linkedln: "",
      fb: "",
    },
    courseSidebar: {
      duration: "4 Weeks",
      lessons: "12 Lessons",
      skillLevel: "Beginner",
      language: "English",
      quizzes: 4,
      certificate: "Yes",
      passPercentage: 80,
      deadline: "03 March, 2025",
      instructorName: "Mr George",
    },
  },
  {
    id: 3,
    course_img: Course_2,
    course_title: "Animation",
    authorImg: Course_1,
    author_title: "Paul",
    course_desc: "Programming with Scratch Learn 3D Animation",
    lessons: 17,
    price: "75",
    course_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas voluptatibus nemo vitae voluptate aspernatur dolores repudiandae, doloribus, non ea iure. Accusamus repudiandae perspiciatis quis",

    overview: {
      course_complete_desc:
        "This Course is designed for absolute beginners to learn how to code. This project is structured so that it engages Participants with making fun games such as Flappy Bird and Action Games Here, We teach the basics of programming where you program in a non complex web",
      you_will_learn: [
        "Create Simple Motion \n Organise Looks and Control of your Character \n Tell Stories using Scratch \n Variables \n Create Simple Animation \n Build Games",
        "",
      ],
      certification:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint corrupti reiciendis quia praesentium doloremque. Itaque voluptate quam voluptatibus reiciendis quisquam quasi, veniam id autem cumque, quia perferendis minima ex.",
    },
    introduction: [
      "Introduction to the Course \n Overview of Scratch \n Working with Motions \n Add Sounds and Control to your Charater \n Looks and Sensing in Scratch \n Variables \n Building your First Game \n Download and Animate Background \n Adding Character \n Sensing Objects \n Create a Flappy Bird Game \n Build and Animate an Action Game",
    ],
    instructor: {
      instructorImg: CourseInstructorImg,
      instructorRole: "Graphic Designer",
      instructorDesc:
        "Paul is an instructor and developer living in a suburb of Washington, DC. he has been assigned to aspen ecosystems research and has been involved in several special assignments.",
      whatsapp: "",
      twitter: "",
      linkedln: "",
      fb: "",
    },
    courseSidebar: {
      duration: "4 Weeks",
      lessons: "12 Lessons",
      skillLevel: "Beginner",
      language: "English",
      quizzes: 4,
      certificate: "Yes",
      passPercentage: 80,
      deadline: "03 March, 2025",
      instructorName: "Mr Paul",
    },
  },
  {
    id: 4,
    course_img: Course_2,
    course_title: "Forex",
    authorImg: Course_1,
    author_title: "Richmond",
    course_desc: "Master Forex Trading in One Go!",
    lessons: 17,
    price: "75",
    course_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas voluptatibus nemo vitae voluptate aspernatur dolores repudiandae, doloribus, non ea iure. Accusamus repudiandae perspiciatis quis",
    overview: {
      course_complete_desc:
        "The Goal of this Course is to Guide you on how to build your Personal Trading System that gives Frequent trading Signals and also guide you on how to become a successful Prop Firm Trader",
      you_will_learn: [
        "Learn Basic and advanced concepts \n Chart Analysis \n Fundamental news \n Supply and Demand \n Support and Resistance \n Liquidity and Imbalance",
        "",
      ],
      certification:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint corrupti reiciendis quia praesentium doloremque. Itaque voluptate quam voluptatibus reiciendis quisquam quasi, veniam id autem cumque, quia perferendis minima ex.",
    },
    introduction: [
      "What is Forex? \n What are currency pairs and trading sessions? \n Frequently used Forex terms? \n Type of Market Analysis \n Types of Chart \n Support and Resistance, Supply and demand, Liquidity and Imbalance Trendline, Channels \n Basic candle patterns \n Fibonacci \n Moving Average \n Common Chart indicator \n Chart Pattern \n Elliot wave theory \n Fundamental news \n Multiple time Frame Analysis \n Building your Trading System",
    ],
    instructor: {
      instructorImg: ForexInstructor,
      instructorRole: "Forex Expert",
      instructorDesc:
        "Richmond is an instructor and developer living in a suburb of Washington, DC. he has been assigned to aspen ecosystems research and has been involved in several special assignments.",
      whatsapp: "",
      twitter: "",
      linkedln: "",
      fb: "",
    },
    courseSidebar: {
      duration: "4 Weeks",
      lessons: "12 Lessons",
      skillLevel: "Beginner",
      language: "English",
      quizzes: 4,
      certificate: "Yes",
      passPercentage: 80,
      deadline: "03 March, 2025",
      instructorName: "Mr Richmond",
    },
  },
  {
    id: 5,
    course_img: Course_3,
    course_title: "Microsoft Suite",
    authorImg: Course_1,
    author_title: "Precious Eruteya",
    course_desc: "Guide to Mastering MS-Packages",
    lessons: 17,
    price: "75",
    course_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas voluptatibus nemo vitae voluptate aspernatur dolores repudiandae, doloribus, non ea iure. Accusamus repudiandae perspiciatis quis",
    overview: {
      course_complete_desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, a maxime! Doloremque a delectus molestias, consequatur quisquam sunt fuga, iusto quaerat mollitia ut nobis ipsum eius, laudantium adipisci ab quas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique itaque quam explicabo illum perspiciatis, quis alias, tempora ex dolor, molestias ratione voluptatibus dolorum! Sint autem dolores optio earum modi officiis?",
      you_will_learn: [
        "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor \n Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor \n Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
        "",
      ],
      certification:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint corrupti reiciendis quia praesentium doloremque. Itaque voluptate quam voluptatibus reiciendis quisquam quasi, veniam id autem cumque, quia perferendis minima ex.",
    },
    introduction: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa?",
    ],
    instructor: {
      instructorImg: CourseInstructorImg,
      instructorRole: "Software Developer",
      instructorDesc:
        "Precious is an instructor and developer living in a suburb of Washington, DC. he has been assigned to aspen ecosystems research and has been involved in several special assignments.",
      whatsapp: "",
      twitter: "",
      linkedln: "",
      fb: "",
    },
    courseSidebar: {
      duration: "4 Weeks",
      lessons: "12 Lessons",
      skillLevel: "Beginner",
      language: "English",
      quizzes: 4,
      certificate: "Yes",
      passPercentage: 80,
      deadline: "03 March, 2025",
      instructorName: "Mr Precious",
    },
  },
  {
    id: 6,
    course_img: Course_1,
    course_title: "Mobile Development",
    authorImg: Course_1,
    author_title: "Precious Eruteya",
    course_desc: "The Complete Guide to Building Mobile Apps",
    lessons: 17,
    price: "75",
    course_details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas voluptatibus nemo vitae voluptate aspernatur dolores repudiandae, doloribus, non ea iure. Accusamus repudiandae perspiciatis quis",
    overview: {
      course_complete_desc:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, a maxime! Doloremque a delectus molestias, consequatur quisquam sunt fuga, iusto quaerat mollitia ut nobis ipsum eius, laudantium adipisci ab quas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique itaque quam explicabo illum perspiciatis, quis alias, tempora ex dolor, molestias ratione voluptatibus dolorum! Sint autem dolores optio earum modi officiis?",
      you_will_learn: [
        "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor \n Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor \n Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
        "",
      ],
      certification:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sint corrupti reiciendis quia praesentium doloremque. Itaque voluptate quam voluptatibus reiciendis quisquam quasi, veniam id autem cumque, quia perferendis minima ex.",
    },
    introduction: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa? \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, culpa?",
    ],
    instructor: {
      instructorImg: CourseInstructorImg,
      instructorRole: "Software Developer",
      instructorDesc:
        "Precious is an instructor and developer living in a suburb of Washington, DC. he has been assigned to aspen ecosystems research and has been involved in several special assignments.",
      whatsapp: "",
      twitter: "",
      linkedln: "",
      fb: "",
    },
    courseSidebar: {
      duration: "4 Weeks",
      lessons: "12 Lessons",
      skillLevel: "Beginner",
      language: "English",
      quizzes: 4,
      certificate: "Yes",
      passPercentage: 80,
      deadline: "03 March, 2025",
      instructorName: "Mr Precious",
    },
  },
];

const courseContent = [
  {
    id: 1,
    title: "Overview",
    course_title: "Course Description",
    descriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ",
    ],
    hightlight: "What you' II Learn From this Course",
    course_highlight: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam mae",
      "Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac",
      "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis",
    ],
    certification:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis",
  },
  {
    id: 2,
    title: "Curriculum",
    curr_title: "Data Analysis",
    descriptions: [
      "A Beginner's introduction to Excel Functions",
      "A Quick introduction to Excel's Pivot tables",
      "Create Easily Printable Excel Documents",
      "Custom Number Formatting",
      "Data Entry Techniques in Excel",
      "Excel Formulars for Beginners",
      "How to Make Your Spreadsheets Look Professional",
      "Insert Hyperlinks into Excel's Spreadsheet",
      "Insert, Deleting and Modifying Rows & Columns",
      "The Secret to Faster Scrolling in Excel",
      "Using Absolute and Relative Cell references",
    ],
    curr_highlight: [
      "Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor",
      "Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam mae",
      "Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac",
      "Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis",
    ],
  },
  {
    id: 3,
    title: "Instructor",
    author_img: AuthorImg,
    author_name: "Precious Eruteya",
    author_role: "Designer",
    author_desc:
      "James Carlson is an instructor and developer living in a suburb of Washington, DC. She has been assigned to aspen ecosystems research and has been involved in several special assignments.",
  },
  {
    id: 4,
    title: "Reviews",
  },
];

//Team Data
const teamPageData = [
  {
    id: 1,
    teamImg: ForexProfessional,
    teamTitle: "Mr Richmond",
    designation: "Professional Forex Trader",
    btn: <i className="fas fa-times"></i>,
    fb: <i className="fab fa-facebook-f"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    wh: "",
  },
  {
    id: 2,
    teamImg: SoftwareDeveloper,
    teamTitle: "Mr George",
    designation: "Data Analyst",
    btn: <i className="fas fa-times"></i>,
    fb: <i className="fab fa-facebook-f"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    wh: "",
  },
  {
    id: 3,
    teamImg: DataInstructor2,
    teamTitle: "Mr Eruteya Precious",
    designation: "Software Developer",
    btn: <i className="fas fa-times"></i>,
    fb: <i className="fab fa-facebook-f"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    wh: "",
  },
  {
    id: 4,
    teamImg: DataInstructor,
    teamTitle: "Eruteya Precious",
    designation: "Software Developer",
    fb: <i className="fab fa-facebook-f"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    wh: "",
  },
  {
    id: 5,
    teamImg: DataInstructor,
    teamTitle: "Eruteya Precious",
    designation: "Software Developer",
    fb: <i className="fab fa-facebook-f"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    wh: "",
  },
  {
    id: 6,
    teamImg: DataInstructor,
    teamTitle: "Eruteya Precious",
    designation: "Software Developer",
    fb: <i className="fab fa-facebook-f"></i>,
    instagram: <i className="fab fa-instagram"></i>,
    twitter: <i className="fab fa-twitter"></i>,
    wh: "",
  },
];

export {
  dataSlider,
  serviceData,
  skillMarquee,
  coursesData,
  projectData,
  faqs,
  aboutSlider,
  weOffer,
  coursePageData,
  courseContent,
  teamPageData,
};
