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
    name: "Michael Johnson",
    address: "Tech Lead, DataFlow Inc., New York",
    date: "January 15, 2024",
    image: assets.client1,
    testimony:
      "VidiTech delivered our AI analytics platform in record time. Exceptional quality and communication throughout the project.",
  },
  {
    name: "Amara Okafor",
    address: "CEO, FinTech Solutions, Lagos",
    date: "January 10, 2024",
    image: assets.client2,
    testimony:
      "Their team transformed our banking app into a modern solution that our customers love. Best tech partner we've worked with.",
  },
  {
    name: "John Williams",
    address: "CTO, CloudServe, Texas",
    date: "January 20, 2024",
    image: assets.client3,
    testimony:
      "Outstanding cloud expertise and implementation. They helped us scale our SaaS platform seamlessly.",
  },
  {
    name: "Grace Mutua",
    address: "Founder, EduTech Kenya, Nairobi",
    date: "January 5, 2024",
    image: assets.client1,
    testimony:
      "VidiTech built our learning platform from scratch. Their work has impacted thousands of students across East Africa.",
  },
  {
    name: "Sarah Chen",
    address: "Product Lead, WebFlow, San Francisco",
    date: "December 30, 2023",
    image: assets.client2,
    testimony:
      "Fast, reliable, and innovative. They turned our concept into a powerful web application in just 8 weeks.",
  },
  {
    name: "Kwame Mensah",
    address: "Director, PayNow, Accra",
    date: "January 18, 2024",
    image: assets.client3,
    testimony:
      "Their expertise in payment systems helped us become a leading fintech provider in West Africa.",
  }
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

interface PricingPlan {
  plan: string;
  price: string;
  label: string;
  features: string[];
  image?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    plan: "Silver",
    price: "29",
    label: "Silver Plan",
    features: [
      "Start free Trial today",
      "Text-to-video",
      "Automated translations",
      "100 Creative Units",
      "All Basic Features",
      "20+ Remove background/mo",
    ],
  },
  {
    plan: "Gold",
    price: "59",
    label: "Gold Plan",
    features: [
      "Start free Trial today",
      "Text-to-video",
      "Automated translations",
      "1500 Creative Units",
      "All Basic Features",
      "50+ Remove background/mo",
    ],
    image: assets.planImg,
  },
  {
    plan: "Platinum",
    price: "199",
    label: "Platinum Plan",
    features: [
      "Start free Trial today",
      "Text-to-video",
      "Automated translations",
      "Unlimited Avatars",
      "All Basic Features",
      "Unlimited Remove background/mo",
      "16x Factor Upscaling",
    ],
  },
];

export const ourValues = [
  {
    img: assets.valueIcon1,
    title: "Transparency",
    text: "We foster trust through clear communication and transparency, ensuring both businesses and freelancers can collaborate with confidence.",
  },

  {
    img: assets.valueIcon2,
    title: "Excellence",
    text: "We are committed to delivering top-tier talent and high-quality solutions, meeting the unique needs of each project with expertise and precision.",
  },

  {
    img: assets.valueIcon3,
    title: "Innovation",
    text: "We stay ahead of industry trends, connecting businesses with cutting-edge skills and embracing the latest technologies and business strategies.",
  },
  {
    img: assets.valueIcon4,
    title: "Empowerment",
    text: "We empower freelancers by providing them opportunities to grow and succeed, while helping businesses access the best global talent.",
  },
  {
    img: assets.valueIcon5,
    title: "Inclusion",
    text: "We believe in fostering a diverse and inclusive platform where talent from all backgrounds can thrive and contribute to innovative solutions.",
  },
  {
    img: assets.valueIcon6,
    title: "Client-Centric",
    text: "We put our clients' needs at the forefront, ensuring customized solutions that align with their business goals and deliver meaningful results.",
  },
];

export const achievments = [
  {
    img: assets.achievementImg1,
    title: "Successful Client Projects",
    text: "Completed numerous high-quality projects for businesses, delivering measurable results in technology and business services.",
  },
  {
    img: assets.achievementImg2,
    title: "Innovative Solutions & Impact",
    text: "Pioneered innovative solutions for businesses by matching them with cutting-edge skills, helping them stay ahead in the competitive market.",
  },
  {
    img: assets.achievementImg3,
    title: "Global Network Expansion",
    text: "Built a diverse, global network of talented freelancers, providing businesses access to top expertise across industries and regions.",
  },
  {
    img: assets.achievementImg4,
    title: "Growth & Empowerment",
    text: "Helped freelancers develop their careers by connecting them with meaningful work opportunities and providing skill-building resources.",
  },
];

export const teamsData = [
  {
    img: assets.teamImg1,
    name: "Victor",
    postition: "CEO, Backend Engineer",
  },
  {
    img: assets.teamImg2,
    name: "Divine",
    postition: "CEO, Frontend Engineer",
  },
];

export const servicesData = [
  {
    icon: assets.servicesIcon1,
    title: "Software development",
    offers: [
      "Custom application development",
      "Mobile app development (iOS/Android)",
      "Web application development",
      "API integration and development",
    ],
  },
  {
    icon: assets.servicesIcon2,
    title: "Cybersecurity",
    offers: [
      "Data protection and encryption",
      "Mobile app development (iOS/Android)",
      "Vulnerability assessment and testing",
      "Risk management",
      "Network security solutions",
    ],
  },
  {
    icon: assets.servicesIcon3,
    title: "UI/UX Design",
    offers: [
      "Prototyping and wireframing",
      "User experience (UX) optimization",
      "Vulnerability assessment and testing",
      "Design System.",
      "User interface (UI) design",
    ],
  },
  {
    icon: assets.servicesIcon4,
    title: "Brand Identity",
    offers: [
      "Custom application development",
      "Mobile app development (iOS/Android)",
      "Web application development",
      "API integration and development",
    ],
  },
  {
    icon: assets.servicesIcon5,
    title: "Digital Marketing",
    offers: [
      "Custom application development",
      "Mobile app development (iOS/Android)",
      "Web application development",
      "API integration and development",
    ],
  },
  {
    icon: assets.servicesIcon6,
    title: "Data Analysis",
    offers: [
      "Data analysis and reporting",
      "Data visualization",
      "Database management",
      "Business intelligence (BI) solutions",
    ],
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A sleek and modern online shopping platform with advanced features.",
    image: "https://via.placeholder.com/400x300",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Crafted a cohesive brand identity for a startup business.",
    image: "https://via.placeholder.com/400x300",
    category: "Branding",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Improved organic search rankings for a tech blog.",
    image: "https://via.placeholder.com/400x300",
    category: "SEO",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Designed and developed a responsive personal portfolio.",
    image: "https://via.placeholder.com/400x300",
    category: "Web Development",
  },
];

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "Exploring the Future of Web Development",
    excerpt:
      "Learn about the latest trends shaping the future of web development, from AI tools to new frameworks.",
    image: "https://via.placeholder.com/400x300",
    category: "Web Development",
    date: "January 5, 2025",
  },
  {
    id: 2,
    title: "Design Systems for Better UX",
    excerpt:
      "Discover how design systems can improve consistency and usability across your projects.",
    image: "https://via.placeholder.com/400x300",
    category: "UI/UX Design",
    date: "January 2, 2025",
  },
  {
    id: 3,
    title: "SEO Strategies for 2025",
    excerpt:
      "Stay ahead with these top SEO strategies to improve your website's search engine ranking.",
    image: "https://via.placeholder.com/400x300",
    category: "SEO",
    date: "December 29, 2024",
  },
  {
    id: 4,
    title: "The Rise of No-Code Platforms",
    excerpt:
      "No-code platforms are transforming development. Here’s what you need to know.",
    image: "https://via.placeholder.com/400x300",
    category: "Tech Trends",
    date: "December 25, 2024",
  },
];

export interface ContactFormData {
  name: string;
  email: string;
  interest: string;
  budget: string;
  message: string;
}
