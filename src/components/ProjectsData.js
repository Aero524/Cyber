import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "PDFChat",
    image: "./portfolio2.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "PDFChat is an AI tool that revolutionizes document management by allowing users to interact, extract, and understand PDF documents through simple chat conversations.This AI assistant eliminates the manual hours spent on researching and analyzing documents by providing instant answers and solutions.",
    // github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://pdf-charts.com/",
  },
  {
    id: "2",
    name: "AI Image Gen",
    image: "./portfolio1.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "MaxArt AI is an AI Image Generator that enables users to easily create and edit images using the power of AI.With MaxArt AI, you can generate images with text, edit photos with words, and expand pictures beyond borders. Additionally, you can train custom AI models to suit your specific needs.Whether you're looking to create AI art, anime art, stock images, headshots, AI avatars, wallpapers, blog images, product photography, character designs, logo ideas, fashion designs, interior designs, social media assets, 2D game assets, or marketing content, AI Image Generator Free has you covered.",
    // github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    demo: "https://mixart.ai/",
  },
  {
    id: "3",
    name: "ChatBot",
    image: "./portfolio0.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "Zbots is a custom multilingual conversational AI chatbot designed for businesses looking to enhance their online presence. Unlike generic chat assistants, Zbots can be trained using company data, becoming an extension of your brand and understanding your products and services.",
    // github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://zfiremedia.com/",
  },
  // {
  //   id: "4",
  //   name: "Expense Tracker",
  //   image: "./expense-tracker.png",
  //   icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
  //   description: "This application provides an interface for users to track their expenses .",
  //   github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
  //   demo: "https://vtrack-expense.vercel.app",
  // },
  // {
  //   id: "5",
  //   name: "Car Rental Website",
  //   image: "./car-rental-app.png",
  //   icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
  //   description: "This is an online platform that allows users to rent cars for personal or business use.",
  //   github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
  //   demo: "https://car-rental-application.vercel.app",
  // },
  // {
  //   id: "8",
  //   name: "Blog Application",
  //   image: "./blog-app.png",
  //   icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
  //   description: "This application allows users to express their thoughts and experiences through blogs.",
  //   github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
  //   demo: "https://write-ur-blog.vercel.app",
  // },
];

export default ProjectsData;
