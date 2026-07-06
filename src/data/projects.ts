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
    category: "Website development",
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
    category: "Shopify stores",
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
    category: "Meta Ads",
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
    category: "Website development",
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
    category: "Branding",
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
    category: "Website development",
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
    category: "Photoshoot",
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
    category: "Photoshoot",
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
    category: "Photoshoot",
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
    category: "Photoshoot",
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
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
