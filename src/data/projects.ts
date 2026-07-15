export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  duration: string;
  services: string;
  websiteUrl?: string;
  image: string; // Used for the grid
  heroImage: string; // Used for the individual page
  gallery: string[]; // Additional images
};

export const projects: Project[] = [

  {
    id: 3,
    slug: "health",
    title: "Health",
    category: "Photography & Videography",
    description: "An advanced digital healthcare ecosystem designed for patient care and seamless health management.",
    client: "Health Labs",
    duration: "12 Weeks",
    services: "UI/UX Design, Front-End Development, Integration",
    image: "/Health/GRID 13/p17_01.png",
    heroImage: "/Health/GRID 13/p17_01.png",
    gallery: [
      "/Health/GRID 13/P9.png",
      "/Health/GRID 13/p17_02.png",
      "/Health/GRID 13/p17_03.png",
      "/Health/GRID 13/p17_04.png",
      "/Health/GRID 13/p3-carousel_01.png",
      "/Health/GRID 13/p3-carousel_02.png",
      "/Health/GRID 13/p3-carousel_03.png",
      "/Health/GRID 13/p31_01.png",
      "/Health/GRID 13/p31_02.png",
      "/Health/GRID 13/p31_03.png",
      "/Health/GRID 13/p31_04.png",
      "/Health/GRID 13/p7-carousel_01.png",
      "/Health/GRID 13/p7-carousel_02.png"
    ]
  },
  {
    id: 4,
    slug: "chavelle",
    title: "Chavelle",
    category: "Photography & Videography",
    description: "A premium e-commerce and visual branding platform crafted for Chavelle's luxury line.",
    client: "Chavelle Group",
    duration: "8 Weeks",
    services: "Branding, E-Commerce Development, Video Production",
    image: "/Chavelle/Grid 08/Grid-08_01.png",
    heroImage: "/Chavelle/Grid 08/Grid-08_01.png",
    gallery: [
      "/Chavelle/Grid 08/Grid-08_02.png",
      "/Chavelle/Grid 08/Grid-08_03.png",
      "/Chavelle/Grid 08/Grid-08_05.png",
      "/Chavelle/Grid 08/Grid-08_06.png",
      "/Chavelle/Grid 08/p3.png"
    ]
  },
  {
    id: 5,
    slug: "lotd",
    title: "LOTD",
    category: "Photography & Videography",
    description: "An immersive digital showcase and creative experience designed for LOTD.",
    client: "LOTD Group",
    duration: "6 Weeks",
    services: "Web Design, Development, Creative Direction",
    image: "/LOTD/Grid 01/Grid-01_01.png",
    heroImage: "/LOTD/Grid 01/Grid-01_01.png",
    gallery: [
      "/LOTD/Grid 01/Grid-01_02.png",
      "/LOTD/Grid 01/Grid-01_03.png",
      "/LOTD/Grid 01/Grid-01_04.png",
      "/LOTD/Grid 01/Grid-01_05.png",
      "/LOTD/Grid 01/Grid-01_06.png",
      "/LOTD/Grid 01/Grid-01_07.png",
      "/LOTD/Grid 01/Grid-01_08.png"
    ]
  },
  {
    id: 6,
    slug: "lynx",
    title: "LYNX",
    category: "Photography & Videography",
    description: "A high-performance technical identity and web showcase built for LYNX.",
    client: "LYNX Inc",
    duration: "8 Weeks",
    services: "Brand Strategy, 3D Rendering, Interactive Web",
    image: "/LYNX/Grid 01/Grid-01_01.png",
    heroImage: "/LYNX/Grid 01/Grid-01_01.png",
    gallery: [
      "/LYNX/Grid 01/Grid-01_02.png",
      "/LYNX/Grid 01/Grid-01_03.png",
      "/LYNX/Grid 01/p3.png"
    ]
  },
  {
    id: 7,
    slug: "mr-pronto",
    title: "Mr Pronto",
    category: "Photography & Videography",
    description: "A vibrant branding and digital identity design suite for Mr Pronto's quick-service restaurants.",
    client: "Mr Pronto",
    duration: "4 Weeks",
    services: "Visual Identity, Packaging Design, UI/UX",
    image: "/Mr_Pronto/Grid 01/Grid-03_01.png",
    heroImage: "/Mr_Pronto/Grid 01/Grid-03_01.png",
    gallery: [
      "/Mr_Pronto/Grid 01/Grid-03_02.png",
      "/Mr_Pronto/Grid 01/Grid-03_03.png",
      "/Mr_Pronto/Grid 01/Grid-03_04.png",
      "/Mr_Pronto/Grid 01/Grid-03_05.png",
      "/Mr_Pronto/Grid 01/Grid-03_06.png"
    ]
  },
  {
    id: 8,
    slug: "rise",
    title: "Rise",
    category: "Photography & Videography",
    description: "A creative web interface and strategy focused on brand growth and dynamic presentation.",
    client: "Rise Inc.",
    duration: "6 Weeks",
    services: "Brand Strategy, Web Design, Visual Identity",
    image: "/Rise/Grid 12/p1.png",
    heroImage: "/Rise/Grid 12/p1.png",
    gallery: [
      "/Rise/Grid 12/p2.png",
      "/Rise/Grid 12/p3.png",
      "/Rise/Grid 12/p5.png",
      "/Rise/Grid 12/p6.png",
      "/Rise/Grid 12/p7.png",
      "/Rise/Grid 12/p8.png"
    ]
  },
  {
    id: 9,
    slug: "shiva",
    title: "Shiva",
    category: "Photography & Videography",
    description: "A stunning visual branding campaign showcasing high-impact design layouts and artwork.",
    client: "Shiva Creative",
    duration: "10 Weeks",
    services: "Graphic Design, Creative Direction, Digital Art",
    image: "/Shiva/Grids/grid-03_01.png",
    heroImage: "/Shiva/Grids/grid-03_01.png",
    gallery: [
      "/Shiva/Grids/grid-03_02.png",
      "/Shiva/Grids/grid-03_03.png",
      "/Shiva/Grids/grid-03_04.png",
      "/Shiva/Grids/grid-03_05.png",
      "/Shiva/Grids/grid-03_06.png",
      "/Shiva/Grids/grid-03_07.png",
      "/Shiva/Grids/grid-03_08.png",
      "/Shiva/Grids/grid-03_09.png",
      "/Shiva/Grids/grid-03_10.png",
      "/Shiva/Grids/grid-03_11.png",
      "/Shiva/Grids/grid-03_12.png",
      "/Shiva/Grids/grid-03_13.png",
      "/Shiva/Grids/grid-03_14.png",
      "/Shiva/Grids/grid-03_15.png"
    ]
  },
  {
    id: 10,
    slug: "sosha",
    title: "Sosha",
    category: "Photography & Videography",
    description: "An elegant lookbook and e-commerce identity project designed to capture high fashion aesthetics.",
    client: "Sosha Brand",
    duration: "8 Weeks",
    services: "E-Commerce Design, Creative Direction, Styling",
    image: "/Sosha/GRID 04/grid-0f-9_01.png",
    heroImage: "/Sosha/GRID 04/grid-0f-9_01.png",
    gallery: [
      "/Sosha/GRID 04/grid-0f-9_02.png",
      "/Sosha/GRID 04/grid-0f-9_03.png",
      "/Sosha/GRID 04/grid-0f-9_04.png",
      "/Sosha/GRID 04/grid-0f-9_05.png",
      "/Sosha/GRID 04/grid-0f-9_06.png",
      "/Sosha/GRID 04/grid-0f-9_07.png",
      "/Sosha/GRID 04/grid-0f-9_08.png",
      "/Sosha/GRID 04/grid-0f-9_09.png"
    ]
  },
  {
    id: 11,
    slug: "jwellery",
    title: "Jwellery",
    category: "Photography & Videography",
    description: "A high-end editorial jewelry photoshoot capturing the elegance and fine detail of bespoke jewelry pieces.",
    client: "Bespoke Jewels",
    duration: "4 Weeks",
    services: "Editorial Photography, Art Direction, Retouching",
    image: "/Jwellery/6.jpg",
    heroImage: "/Jwellery/6.jpg",
    gallery: [
      "/Jwellery/7.jpg",
      "/Jwellery/8.jpg",
      "/Jwellery/9.jpg",
      "/Jwellery/10.jpg"
    ]
  },
  {
    id: 12,
    slug: "sage-perfume",
    title: "Sage Perfume",
    category: "Photography & Videography",
    description: "A minimalist product photography campaign designed for Sage Perfume's signature scent line.",
    client: "Sage Aromas",
    duration: "5 Weeks",
    services: "Product Photography, Prop Styling, Lighting Design",
    image: "/SAGE_Perfumes/1.jpg",
    heroImage: "/SAGE_Perfumes/1.jpg",
    gallery: [
      "/SAGE_Perfumes/2.jpg",
      "/SAGE_Perfumes/3.jpg",
      "/SAGE_Perfumes/4.jpg",
      "/SAGE_Perfumes/5.jpg"
    ]
  },
  {
    id: 13,
    slug: "ama",
    title: "AMA Legal Solutions",
    category: "Website development",
    description: "A professional legal services platform created to present legal solutions, build trust, and simplify client interactions through a modern digital experience.",
    client: "AMA Legal Solutions",
    duration: "Ongoing",
    services: "Web Development, UI/UX Design, Performance Optimization",
    websiteUrl: "https://www.amalegalsolutions.com/",
    image: "/project/AMA.svg",
    heroImage: "/project/AMA.svg",
    gallery: []
  },
  {
    id: 14,
    slug: "adorna-casa",
    title: "Adorna Casa",
    category: "Shopify Stores",
    description: "A premium, high-performance website development project designed for Adorna Casa.",
    client: "Adorna Casa Ltd.",
    duration: "8 Weeks",
    services: "E-Commerce Development, Responsive Design, Branding",
    websiteUrl: "https://adornocasa.com/?srsltid=AfmBOorvxNU5vZFcK6yysAqy3qMUvG8rAUygA7ePLBE0UOBkfeO4d8VA",
    image: "/project/Adorna_casa.svg",
    heroImage: "/project/Adorna_casa.svg",
    gallery: []
  },
  {
    id: 15,
    slug: "aerolume",
    title: "Aerolume",
    category: "Shopify Stores",
    description: "A premium, high-performance website development project designed for Aerolume.",
    client: "Aerolume Systems",
    duration: "7 Weeks",
    services: "Front-End Development, Custom Animations, Interaction Design",
    websiteUrl: "https://aerolume.in/",
    image: "/project/Aerolume.svg",
    heroImage: "/project/Aerolume.svg",
    gallery: []
  },
  {
    id: 16,
    slug: "anyadha",
    title: "Anyadha",
    category: "Shopify Stores",
    description: "A premium, high-performance website development project designed for Anyadha.",
    client: "Anyadha Brands",
    duration: "5 Weeks",
    services: "Web Development, Search Engine Optimization, UI Design",
    websiteUrl: "https://anyadha.in/",
    image: "/project/Anyadha.svg",
    heroImage: "/project/Anyadha.svg",
    gallery: []
  },
  {
    id: 17,
    slug: "bloom",
    title: "Bloom Cafes",
    category: "Shopify Stores",
    description: "A vibrant café website designed to showcase the menu, ambiance, and brand personality while encouraging online discovery and customer engagement.",
    client: "Bloom Cafes",
    duration: "4 Weeks",
    services: "Full-Stack Development, E-Commerce Integrations, UI/UX",
    websiteUrl: "https://bloomcafes.com/",
    image: "/project/Bloom.svg",
    heroImage: "/project/Bloom.svg",
    gallery: []
  },
  {
    id: 18,
    slug: "botai",
    title: "Botai",
    category: "Website development",
    description: "A premium, high-performance website development project designed for Botai.",
    client: "Botai Labs",
    duration: "6 Weeks",
    services: "Web Development, Application Interface, Interaction Design",
    websiteUrl: "https://www.bo-tai.co.in/",
    image: "/project/Botai.svg",
    heroImage: "/project/Botai.svg",
    gallery: []
  },
  {
    id: 19,
    slug: "bunt",
    title: "Bunt India",
    category: "Shopify Stores",
    description: "A luxury pet furniture eCommerce platform designed to blend modern aesthetics with functional shopping, showcasing premium products crafted for both pets and contemporary homes.",
    client: "BUNT India",
    duration: "4 Weeks",
    services: "Branding, Web Development, Responsive Layouts",
    websiteUrl: "https://buntindia.com/?srsltid=AfmBOoqNGPi3X1DoYyAnsBG5rNbWdMIWT0duzqnmeipNPmVR_86oEkg1",
    image: "/project/Bunt.svg",
    heroImage: "/project/Bunt.svg",
    gallery: []
  },
  {
    id: 20,
    slug: "credsettle",
    title: "Credsettle",
    category: "Website development",
    description: "A premium, high-performance website development project designed for Credsettle.",
    client: "Credsettle Inc.",
    duration: "10 Weeks",
    services: "Financial Web Portal, High Security Integration, UI/UX",
    websiteUrl: "https://www.credsettle.com/",
    image: "/project/Credsettle.svg",
    heroImage: "/project/Credsettle.svg",
    gallery: []
  },
  {
    id: 21,
    slug: "delhi-house",
    title: "Delhi House Cafe",
    category: "Website development",
    description: "A contemporary café and dining website designed to showcase signature offerings, elevate the brand experience, and encourage reservations through an engaging digital presence.",
    client: "Delhi House Cafe",
    duration: "4 Weeks",
    services: "Web Development, Booking Engine, Visual Strategy",
    websiteUrl: "https://www.delhihousecafe.com/",
    image: "/project/Delhi House.svg",
    heroImage: "/project/Delhi House.svg",
    gallery: []
  },
  {
    id: 22,
    slug: "farzi-cafe",
    title: "Farzi Cafe",
    category: "Website development",
    description: "A premium, high-performance website development project designed for Farzi Cafe.",
    client: "Farzi Cafe Worldwide",
    duration: "7 Weeks",
    services: "Hospitality Web Platform, Menu Interfaces, Web Development",
    websiteUrl: "https://www.farzicafe.com/",
    image: "/project/Farzi_Cafe.svg",
    heroImage: "/project/Farzi_Cafe.svg",
    gallery: []
  },
  {
    id: 23,
    slug: "foire",
    title: "Foire",
    category: "Shopify Stores",
    description: "A premium fashion and lifestyle eCommerce website developed to showcase curated collections through elegant design and a seamless online shopping journey.",
    client: "Foire",
    duration: "4 Weeks",
    services: "Web Design, Interactive Showroom, Web Development",
    websiteUrl: "https://foire.in/",
    image: "/project/Foire.svg",
    heroImage: "/project/Foire.svg",
    gallery: []
  },
  {
    id: 24,
    slug: "honk",
    title: "House of Nihalkhera",
    category: "Shopify Stores",
    description: "A premium hospitality and heritage property website developed to showcase luxury accommodations, curated experiences, and the property's distinctive architectural character.",
    client: "House of Nihalkhera",
    duration: "4 Weeks",
    services: "Product Showcase, Web Development, UI/UX Design",
    websiteUrl: "https://houseofnihalkhera.com/",
    image: "/project/HONK.svg",
    heroImage: "/project/HONK.svg",
    gallery: []
  },
  {
    id: 25,
    slug: "kamal",
    title: "Kamal Motors",
    category: "Website development",
    description: "A professional automotive dealership website developed to showcase vehicle inventory, company services, and customer-focused solutions through an intuitive and trustworthy digital experience.",
    client: "Kamal Motors",
    duration: "4 Weeks",
    services: "Corporate Web Portal, Performance Optimization, Branding",
    websiteUrl: "https://kamalmotors.in/",
    image: "/project/Kamal.svg",
    heroImage: "/project/Kamal.svg",
    gallery: []
  },
  {
    id: 26,
    slug: "kitchun",
    title: "Kichun Studio",
    category: "Shopify Stores",
    description: "A modern interior design and architecture website created to showcase residential and commercial projects while highlighting the studio's creative vision and design expertise.",
    client: "Kichun Studio",
    duration: "4 Weeks",
    services: "E-Commerce Development, Product Filters, Responsive Design",
    image: "/project/Kitchun.svg",
    heroImage: "/project/Kitchun.svg",
    gallery: []
  },
  {
    id: 27,
    slug: "mama-jama",
    title: "Mama Jama",
    category: "Shopify Stores",
    description: "A premium, high-performance website development project designed for Mama Jama.",
    client: "Mama Jama Foods",
    duration: "8 Weeks",
    services: "Interactive Web Portal, Web Development, Branding",
    websiteUrl: "https://mamajama.in/?srsltid=AfmBOoqb1zRHM1fhF7sMLNNOVNejSXenKArBn3mMjlDZbmrhmqrsVfRO",
    image: "/project/Mama_jama.svg",
    heroImage: "/project/Mama_jama.svg",
    gallery: []
  },
  {
    id: 28,
    slug: "oud",
    title: "Oud",
    category: "Shopify Stores",
    description: "A premium, high-performance website development project designed for Oud.",
    client: "Oud Aromas",
    duration: "9 Weeks",
    services: "Luxury E-Commerce, Custom Checkout, Web Design",
    websiteUrl: "https://theoudqua.com/",
    image: "/project/Oud.svg",
    heroImage: "/project/Oud.svg",
    gallery: []
  },
  {
    id: 29,
    slug: "rosete",
    title: "Rosete",
    category: "Website development",
    description: "A premium, high-performance website development project designed for Rosete.",
    client: "Rosete Studios",
    duration: "6 Weeks",
    services: "Creative Portfolio Web, Custom Animations, Interaction",
    image: "/project/Rosete.svg",
    heroImage: "/project/Rosete.svg",
    gallery: []
  },
  {
    id: 30,
    slug: "sexsea",
    title: "Sexsea",
    category: "Shopify Stores",
    description: "A premium skincare and haircare eCommerce website designed to showcase science-backed products, simplify product discovery, and deliver a seamless online shopping experience for modern consumers.",
    client: "SEXSEA",
    duration: "4 Weeks",
    services: "Web Development, Shopping Catalog, Interactive Filters",
    websiteUrl: "https://sexsea.in/?srsltid=AfmBOorfCiq6LkpthjuL1F9ZfUpaJcnnHQW1s-7tQSqdvjxQWeQ5WumR",
    image: "/project/Sexsea.svg",
    heroImage: "/project/Sexsea.svg",
    gallery: []
  },
  {
    id: 31,
    slug: "the-fat-cookie",
    title: "The Fat Cookie Chef",
    category: "Shopify Stores",
    description: "A delightful cookie brand website built to showcase handcrafted products, simplify online ordering, and create an enjoyable digital experience that reflects the brand's playful personality.",
    client: "The Fat Cookie Chef",
    duration: "4 Weeks",
    services: "E-Commerce Store, Dynamic Cart, Performance Optimization",
    websiteUrl: "https://thefatcookiechef.com/",
    image: "/project/The_fat_cookie.svg",
    heroImage: "/project/The_fat_cookie.svg",
    gallery: []
  },
  {
    id: 32,
    slug: "jsv",
    title: "JSV Branding",
    category: "Branding",
    description: "A premium corporate visual branding campaign showcasing high-impact design layouts, cohesive identity systems, and artistic brand collateral.",
    client: "JSV Group",
    duration: "6 Weeks",
    services: "Brand Strategy, Visual Identity, Art Direction, Typography",
    image: "/JSV/5.jpg",
    heroImage: "/JSV/5.jpg",
    gallery: [
      "/JSV/5.1.jpg",
      "/JSV/5,2.jpg",
      "/JSV/5.3.jpg",
      "/JSV/5.4.jpg"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
