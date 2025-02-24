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
    headline: "Web and Mobile App Development",
    text: "We build custom, scalable, and user-focused web and mobile solutions tailored to your business needs.",
  },
  {
    image: "mdi:bullhorn-outline",
    headline: "Digital Marketing",
    text: "Elevate your brand with strategies that drive growth and engagement at every stage.",
  },
  {
    image: "carbon:touch-interaction",
    headline: "UI/UX Design",
    text: "Create intuitive and visually stunning designs that connect with your audience and drive results.",
  },
  {
    image: "fluent:people-community-28-filled",
    headline: "Consulting & Support",
    text: "Get expert guidance, seamless digital transformation, and ongoing support to optimize your business.",
  },
  {
    image: "mdi:palette-outline",
    headline: "Graphic Design",
    text: "Bring your brand to life with stunning visuals, logos, and designs that capture attention and leave a lasting impression.",
  },
  {
    image: "mdi:account-group-outline",
    headline: "Social Media Management",
    text: "We create and manage engaging social media strategies to build your online presence, connect with your audience, and drive growth.",
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
    price: "1,999",
    label: "Basic Development Plan",
    features: [
      "Up to 5 Pages or Screens",
      "Responsive Design",
      "Basic Functionality",
      "1 Round of Revision",
      "Simple UI/UX Design",
    ],
  },
  {
    plan: "Gold",
    price: "4,999",
    label: "Standard Development Plan",
    features: [
      "Up to 10 Pages or Screens",
      "Advanced Features (APIs, Integrations)",
      "Responsive and Optimized Design",
      "2 Rounds of Revisions",
      "Custom UI/UX Design",
      "Basic Maintenance (1 Month)",
    ],
    image: assets.planImg,
  },
  {
    plan: "Platinum",
    price: "9,999+",
    label: "Premium Development Plan",
    features: [
      "Unlimited Pages or Screens",
      "Complex Features (e.g., AI, E-commerce, Real-time Systems)",
      "Scalable and High-Performance Design",
      "Unlimited Revisions",
      "Premium UI/UX Design",
      "Comprehensive Maintenance (3 Months)",
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
    title: "Graphic design",
    offers: [
      "Logo design",
      "Branding and identity",
      "Packaging design",
      "Website design",
      "Brochure design",
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
    title: "Consulting & Support",
    offers: [
      "Project management and time management",
      "Cost estimation and budgeting",
      "Technical consultation and support",
      "Business plan and strategy development",
    ],
  },
  {
    icon: assets.servicesIcon5,
    title: "Digital Marketing",
    offers: [
      "Targeted marketing campaigns for maximum ROI",
      "SEO and content strategies to boost online visibility",
      "Social media management to grow your audience",
      "Analytics-driven insights to refine marketing efforts",
    ],
  },
  {
    icon: assets.servicesIcon6,
    title: "Social Media Management",
    offers: [
      "Content creation and management",
      "Social media advertising strategies",
      "Analytics-driven insights to refine marketing efforts",
      "Email marketing to increase website traffic",
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
