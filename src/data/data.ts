import assets from "../../public/assets/images";

export interface nav {
  title: string;
  route: string;
}

export const navData: nav[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Services",
    route: "/services",
  },
  {
    title: "Projects",
    route: "/projects",
  },
  {
    title: "Blogs",
    route: "/blog",
  },
];

export interface projectCount {
  nom: string;
  desc: string;
}

export const projectCountData: projectCount[] = [
  {
    nom: "70+",
    desc: "Projects Done",
  },
  {
    nom: "50+",
    desc: "Happy Clients",
  },
  {
    nom: "98%",
    desc: "Client Satisfaction Done",
  },
];

export interface serviceOffer {
  image: string;
  headline: string;
  text: string;
}

export const serviceOfferData: serviceOffer[] = [
  {
    image: "eos-icons:software-outlined",
    headline: "Software Development",
    text: "The development of reliable and scalable software solutions for any OS, browser, and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
  },
  {
    image: "mdi:bullhorn-outline",
    headline: "Digital Marketing",
    text: "Our team of experts are equipped to propel your brand to new heights. Partner with us, and let's guide you through every step.",
  },
  {
    image: "carbon:touch-interaction",
    headline: "UI/UX Design",
    text: "Our dedicated team develops UX/UI designs for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
  },
  {
    image: "fluent:people-community-28-filled",
    headline: "Consulting, Support & Maintenance",
    text: "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration, and advise on improvements to your digital customer experience.",
  },
  {
    image: "tabler:device-desktop-code",
    headline: "Cross-Platform",
    text: "Our designs are built to thrive and adapt across multiple devices, providing optimized accessibility and reach.",
  },
  {
    image: "ri:line-chart-line",
    headline: "Business Strategy",
    text: "At Jodna, we deliver actionable strategies that capitalize on opportunities and navigate challenges for business growth.",
  },
];

export interface whatWeveDone {
  img: string;
  title: string;
  subtitle: string;
  frameWork: string;
}

export const whatWeveDoneData = [
  {
    img: assets.project1,
    title: "Custom CRM Development",
    subTitle: "Web Development",
    frameWork: ["MySQL", "Laraval", "Node.js"],
  },
  {
    img: assets.project2,
    title: "Mobile App for FitTrack",
    subTitle: "Mobile Development",
    frameWork: ["React Native", "Firebase", "Redux"],
  },
  {
    img: assets.project3,
    title: "Brand Identity for Google",
    subTitle: "Branding",
    frameWork: ["Adobe Creative Suite", "Figma", "Photoshop"],
  },
];

export interface clientSay {
  name: string;
  testimony: string;
  address: string;
  date: string;
  image: string;
}

export const clientSayData: clientSay[] = [
  {
    name: "Adewale Austin",
    address: "Abuja, Nigeria",
    date: "30 October 2024",
    image: assets.client1,
    testimony:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
  },
  {
    name: "Sarah Abraham",
    address: "Ontario, Canada",
    date: "30 October 2024",
    image: assets.client2,
    testimony:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
  },
  {
    name: "Henry Hampthon",
    address: "Ontario, Kenya",
    date: "30 October 2024",
    image: assets.client3,
    testimony:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
  },
  {
    name: "Henry Hampthon",
    address: "Ontario, Kenya",
    date: "30 October 2024",
    image: assets.client3,
    testimony:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
  },
  {
    name: "Henry Hampthon",
    address: "Ontario, Kenya",
    date: "30 October 2024",
    image: assets.client3,
    testimony:
      "Our team of expert are equipped to propel your brand to new heights. Partner with us let's guide you through every step.",
  },
];

export interface footerItem {
  label: string;
  icon?: string;
  link: string;
}

export interface footerData {
  title: string;
  items: footerItem[];
}

export const footerItems: footerData[] = [
  {
    title: "Company",
    items: [
      { label: "About", link: "/about" },
      { label: "Services", link: "/services" },
      { label: "Projects", link: "/projects" },
      { label: "Blogs", link: "/blog" },
    ],
  },

  {
    title: "Support",
    items: [
      { label: "Contact", link: "/contact-us" },
      { label: "Faqs", link: "" },
      { label: "Contact", link: "/contact-us" },
    ],
  },

  {
    title: "Follow Us",
    items: [
      { label: "Facebook", link: "", icon: "ic:outline-facebook" },
      { label: "Twitter", link: "", icon: "prime:twitter" },
      { label: "LinkedIn", link: "", icon: "devicon-plain:linkedin" },
    ],
  },
];
