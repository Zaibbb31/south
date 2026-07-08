import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
import { ProjectGallerySlider } from "@/components/project-gallery-slider";
import { DesktopFaq } from "@/components/desktop-faq";
import { MobileFaq } from "@/components/mobile-faq";
import fs from "fs";
import path from "path";

// Helper function to read project images from local folders or fallback to database gallery
function getProjectImages(slug: string, fallbackGallery: string[]): string[] {
  const folderName = 
    slug === "health" ? "Health/GRID 13" : 
    slug === "chavelle" ? "Chavelle/Grid 08" : 
    slug === "lotd" ? "LOTD/Grid 01" :
    slug === "lynx" ? "LYNX/Grid 01" :
    (slug === "mr-pronto" || slug === "mr_pronto") ? "Mr_Pronto/Grid 01" :
    slug === "rise" ? "Rise/Grid 12" :
    slug === "shiva" ? "Shiva/Grids" :
    slug === "sosha" ? "Sosha/GRID 04" :
    slug === "jwellery" ? "Jwellery" :
    (slug === "sage" || slug === "sage-perfume" || slug === "sage_perfume") ? "SAGE_Perfumes" :
    (slug === "jsv" || slug === "jsc") ? "JSV" :
    slug;
  const dirPath = path.join(process.cwd(), "public", folderName);

  if (fs.existsSync(dirPath)) {
    try {
      const files = fs.readdirSync(dirPath);
      const imageExtensions = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
      const localImages = files
        .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
        .filter((file) => 
          !file.includes("Grid 08.png") && 
          !file.includes("Grid 01.png") && 
          !file.includes("Grid 03.png") &&
          !file.includes("Grid 12.png") &&
          !file.includes("grid 0f 9 ii.png")
        ) // Exclude huge images for speed
        .map((file) => `/${folderName}/${file}`);

      if (localImages.length > 0) {
        return localImages;
      }
    } catch (error) {
      console.error("Error reading project folder:", error);
    }
  }
  return fallbackGallery;
}

// Helper function to return execution detail paragraphs for the projects
function getProjectExecutionText(slug: string, title: string, category: string): string {
  switch (slug) {
    case "health":
      return "We executed the Health project by establishing a secure and highly scalable backend infrastructure combined with an intuitive user interface. Our development lifecycle focused on clinical workflow optimization, data privacy compliance, and real-time patient-doctor telemetry. The result is a robust digital ecosystem that streamlines operations and enhances patient outcomes.";
    case "chavelle":
      return "Our execution for Chavelle focused on creating a visually immersive Shopify storefront designed to elevate the brand's luxury aesthetic. We integrated smooth micro-interactions, high-fidelity media showcases, and a streamlined, secure check-out flow. The visual branding was tailored to capture the elegance of the collection, maximizing conversion rates and customer retention.";
    case "lotd":
      return "For LOTD, we launched a comprehensive Meta Ads campaign paired with high-impact creative assets. We implemented advanced lookalike audience targeting and dynamic product ads to drive qualified traffic. Continuous A/B testing of creative angles, copy variations, and landing page designs resulted in a significantly optimized return on ad spend (ROAS) and brand authority.";
    case "lynx":
      return "We developed LYNX as a high-speed, interactive web portal showcasing their technical capabilities. Utilizing cutting-edge three-dimensional elements and optimized asset loaders, the showcase delivers a lag-free immersive experience. The visual style reflects the brand's forward-looking engineering approach through industrial palettes and structural geometry.";
    case "mr-pronto":
    case "mr_pronto":
      return "The Mr Pronto branding campaign was executed across digital and print collateral. We designed a vibrant color identity system and playful typography to appeal to their fast-paced restaurant customers. The packaging designs, website layout, and point-of-sale visual materials were aligned to present a cohesive, recognizable brand that commands customer loyalty.";
    case "rise":
      return "For Rise, we built a modern React-based interface utilizing fluid layout transitions and performance optimization. The UI highlights corporate services and case studies through interactive charts and staggered scroll indicators. The web structure is SEO-optimized and built for maximum speed to support their inbound marketing strategy.";
    case "shiva":
      return "Our team executed the Shiva photoshoot campaign by blending high-fashion editorial concepts with artistic studio lighting. We directed the visual composition and model staging to focus on the unique contours of the brand's products. Advanced post-production retouching and color grading were applied to achieve a premium, high-impact aesthetic.";
    case "sosha":
      return "For Sosha, we staged a minimal outdoor photoshoot focused on natural light and flowy fabrics. The resulting assets were integrated into a premium digital lookbook designed to tell a visual story. The layout utilizes generous whitespace and elegant typography to match the refined and premium personality of the collection.";
    case "jwellery":
      return "Executing the Jwellery campaign required specialized macro-photography techniques to capture the detailed reflections and craftsmanship of each piece. We used controlled diffuse lighting to eliminate harsh highlights and reveal the true colors of the gems. The final campaign assets present a rich, elegant narrative across web and print catalogs.";
    case "sage":
    case "sage-perfume":
    case "sage_perfume":
      return "For Sage Perfume, our execution leveraged minimalist product staging and soft shadows to capture the organic essence of the fragrances. We composed layouts using natural elements like stone, wood, and water droplets to reinforce the botanical ingredients of the scents. The final assets deliver a clean, sensory-focused visual identity.";
    case "jsv":
    case "jsc":
      return "We executed the JSV Branding project by establishing a cohesive visual language and brand system. We focused on typography pairings, color harmonies, and clean editorial compositions to design high-fidelity collateral, packaging details, and stationery. The resulting design provides a premium and modern brand presence across all public-facing media.";
    case "sexsea":
      return "The website was crafted with a clean visual hierarchy, engaging product storytelling, and intuitive navigation to highlight skincare and haircare collections. Focus was placed on mobile responsiveness, conversion-focused product pages, promotional sections, trust-building content, and a frictionless shopping journey. Every interaction was optimized to reinforce the brand's premium identity while encouraging product exploration and purchases.";
    case "bunt":
      return "The website was developed with a minimal yet sophisticated interface that emphasizes premium craftsmanship and thoughtful storytelling. Carefully structured product pages, lifestyle imagery, intuitive navigation, and responsive layouts create an engaging browsing experience while communicating the brand's focus on quality, comfort, and timeless design for modern pet owners.";
    case "the-fat-cookie":
      return "The platform was designed with vibrant product displays, intuitive category organization, and an effortless purchasing flow. Interactive product pages, bundle-building functionality, responsive layouts, and strong visual storytelling work together to create an engaging shopping experience while highlighting the freshness and uniqueness of every cookie collection.";
    case "kamal":
      return "The platform features structured vehicle listings, service information, responsive layouts, and streamlined navigation to simplify customer interactions. Strong visual hierarchy, optimized content sections, and clear calls to action ensure visitors can efficiently explore inventory, learn about services, and make inquiries with confidence.";
    case "kitchun":
      return "The website was structured with immersive visuals, organized project galleries, intuitive navigation, and responsive layouts. Clean typography, minimal aesthetics, and carefully planned user flows help visitors explore the portfolio, understand the studio's services, and connect effortlessly through strategically placed contact touchpoints.";
    case "bloom":
      return "The website was built with an inviting visual style, intuitive navigation, responsive layouts, and engaging imagery. Dedicated sections for menu highlights, brand story, locations, and contact information create a seamless browsing experience while reflecting the café's warm and contemporary identity.";
    case "ama":
      return "The platform was designed with a structured information architecture, clear service pages, responsive layouts, and conversion-focused call-to-actions. Clean typography, intuitive navigation, and trust-building elements ensure visitors can understand legal services, submit inquiries, and connect with experts effortlessly.";
    case "foire":
      return "The website emphasizes refined visuals, intuitive product categorization, responsive layouts, and streamlined purchasing flows. Carefully crafted interfaces, engaging product displays, and consistent branding help customers browse collections effortlessly while delivering a polished shopping experience across all devices.";
    case "delhi-house":
      return "The website was designed with immersive food photography, intuitive navigation, responsive layouts, and a clean content structure. Dedicated sections for the menu, brand story, gallery, and contact information create an enjoyable browsing experience while reflecting the café's vibrant atmosphere and modern identity.";
    case "honk":
      return "The platform combines elegant layouts, immersive imagery, responsive design, and intuitive navigation to present the property's offerings seamlessly. Carefully organized content, booking touchpoints, and visual storytelling create a sophisticated user experience while communicating the brand's heritage, comfort, and exclusivity.";
    default:
      return `Our team worked closely with the client to bring the ${title} ${category} project to life. We implemented best-in-class industry workflows, optimized assets for digital distribution, and delivered a cohesive presentation matching modern branding principles.`;
  }
}

// Helper function to return after effect detail paragraphs for the projects
function getProjectAfterEffectText(slug: string, title: string, category: string): string {
  switch (slug) {
    case "health":
      return "The implementation of the digital health ecosystem resulted in a 40% reduction in patient onboarding times and a 25% increase in operational efficiency. Healthcare providers reported significantly higher patient satisfaction rates due to the intuitive interface, while patients benefited from seamless, immediate access to medical consultations and health history records.";
    case "chavelle":
      return "Post-launch, Chavelle witnessed a substantial surge in organic e-commerce traffic and a 30% uplift in customer average order value (AOV). The custom-branded storefront elevated Chavelle's identity, positioning them as a top-tier luxury player and garnering praise across major design publications.";
    case "lotd":
      return "Our optimized creative testing and targeting strategy yielded a 3.5x return on ad spend (ROAS) during the peak shopping season. The unified visual campaign not only drove immediate sales but also built long-term brand equity, resulting in a 50% increase in social media brand mentions.";
    case "lynx":
      return "The high-performance technical identity and interactive portal successfully positioned LYNX as a modern, forward-thinking industry leader. The site achieved excellent engagement metrics, with visitors spending 3x more time interacting with the 3D showcase compared to their previous static website.";
    case "mr-pronto":
    case "mr_pronto":
      return "The brand refresh for Mr Pronto resulted in immediate franchise expansion interest and a 20% increase in year-over-year store sales. Customers highly praised the clean packaging and easy-to-use digital menus, validating our target audience strategy of appeal through convenience and modern visual delight.";
    case "rise":
      return "The performance-oriented web showcase enabled Rise to capture high-quality inbound leads, resulting in a 45% increase in business consultation inquiries within the first quarter. The seamless transitions and fast loading speeds significantly reduced bounce rates, boosting search engine visibility.";
    case "shiva":
      return "Our team executed the Shiva photoshoot campaign by blending high-fashion editorial concepts with artistic studio lighting. We directed the visual composition and model staging to focus on the unique contours of the brand's products. Advanced post-production retouching and color grading were applied to achieve a premium, high-impact aesthetic.";
    case "sosha":
      return "For Sosha, we staged a minimal outdoor photoshoot focused on natural light and flowy fabrics. The resulting assets were integrated into a premium digital lookbook designed to tell a visual story. The layout utilizes generous whitespace and elegant typography to match the refined and premium personality of the collection.";
    case "jwellery":
      return "The bespoke jewelry campaign was featured in premium lifestyle magazines and drove a 50% increase in custom jewelry booking appointments. The macro-detailed photography allowed customers to appreciate the meticulous design details online, driving high-trust direct sales.";
    case "sage":
    case "sage-perfume":
    case "sage_perfume":
      return "For Sage Perfume, our execution leveraged minimalist product staging and soft shadows to capture the organic essence of the fragrances. We composed layouts using natural elements like stone, wood, and water droplets to reinforce the botanical ingredients of the scents. The final assets deliver a clean, sensory-focused visual identity.";
    case "jsv":
    case "jsc":
      return "Following the launch of the JSV brand identity, the client reported a 45% increase in brand recognition and a significant uplift in corporate partner engagement. The structured style guide and professional assets successfully repositioned JSV as a market-leading authority in creative and modern presentation.";
    case "sexsea":
      return "The final experience strengthened the brand's premium positioning while making product discovery and purchasing more intuitive. A refined interface, improved navigation, and engaging presentation created a trustworthy shopping experience that encourages customer confidence and repeat visits.";
    case "bunt":
      return "The completed platform elevated the online shopping experience through premium visuals, streamlined navigation, and stronger product presentation. The refined digital presence reinforces brand credibility while helping customers confidently discover and purchase luxury pet furniture.";
    case "the-fat-cookie":
      return "The final website delivers an enjoyable shopping experience that enhances product discovery and supports online sales. A clean interface, engaging visuals, and simplified ordering process help strengthen customer trust while reinforcing the brand's fun and premium identity.";
    case "kamal":
      return "The completed website improves accessibility to inventory and dealership information while establishing a stronger digital presence. Better organization and intuitive navigation create a smoother customer journey that supports engagement and lead generation.";
    case "kitchun":
      return "The finished website strengthens the studio's online presence with a premium visual identity and seamless browsing experience. Enhanced project presentation and clear communication encourage inquiries while reinforcing credibility among prospective residential and commercial clients.";
    case "bloom":
      return "The final website strengthens the café's online presence through improved accessibility, consistent branding, and an engaging user experience. Visitors can easily explore offerings, connect with the brand, and discover locations with confidence.";
    case "ama":
      return "The redesigned experience enhances credibility, improves service discoverability, and streamlines client engagement. A modern interface combined with simplified navigation supports higher user confidence while reinforcing the firm's professional digital identity.";
    case "foire":
      return "The completed platform elevates the brand's online presence with stronger product visibility and an intuitive customer journey. Improved usability, premium aesthetics, and optimized shopping experiences contribute to greater customer trust and engagement.";
    case "delhi-house":
      return "The completed platform strengthens the café's online visibility with a refined visual experience and simplified customer journey. Improved accessibility, engaging content, and clear calls to action help increase customer engagement and reinforce the brand's premium positioning.";
    case "honk":
      return "The final website enhances the property's digital presence with stronger visual storytelling and a streamlined browsing experience. A polished interface, improved content organization, and premium branding encourage visitor inquiries while strengthening credibility and guest confidence.";
    default:
      return `The ${title} ${category} project delivered excellent metrics, strengthening the brand's position and demonstrating outstanding return on creative investment.`;
  }
}

// Make it dynamic by defining generateStaticParams
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Gather images from the local folder or fallback to the gallery array
  const galleryImages = getProjectImages(slug, project.gallery);
  const bentoImages = [...galleryImages];
  while (bentoImages.length < 7) {
    bentoImages.push(project.heroImage || project.image);
  }

  const isWebsiteOrShopify = project.category === "Website development" || project.category === "Shopify Stores";
  const websiteUrl = project.websiteUrl || (
    project.slug === "ama" ? "https://amalegalsolutions.com" :
    project.slug === "bloom" ? "https://bloomcafes.com" :
    project.slug === "delhi-house" ? "https://delhihousecafe.com" :
    project.slug === "farzi" ? "https://farzicafe.com" :
    project.slug === "foire" ? "https://foire.in" :
    project.slug === "the-fat-cookie" ? "https://thefatcookiechef.com" :
    `https://${project.slug.replace(/_/g, "-")}.com`
  );

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-40 px-6 lg:px-[90px] pb-24 max-w-[1440px] mx-auto">
        {/* Top tag: [ CATEGORY ] */}
        <div className="flex items-center gap-1 text-[11px] md:text-[13px] tracking-[0.2em] font-bold">
          <span className="text-[#ff5100] font-sans">[</span>
          <span className="text-[#30261C] uppercase font-sans">{project.category}</span>
          <span className="text-[#ff5100] font-sans">]</span>
        </div>

        {/* Horizontal Line Divider */}
        <div className="w-full h-px bg-[#30261C]/15 my-5 md:my-6" />

        {/* Title: PROJECT TITLE */}
        <h1 className="text-[54px] sm:text-[72px] md:text-[90px] lg:text-[110px] xl:text-[130px] font-extrabold leading-[1] text-[#30261C] uppercase tracking-tighter mb-6 md:mb-8">
          {project.title}
        </h1>

        {/* Services Pills */}
        <div className="flex flex-wrap gap-2.5 md:gap-3 mb-10 md:mb-12">
          {project.services.split(",").map((service) => (
            <span 
              key={service} 
              className="border border-[#ff5100] text-[#30261C] text-[13px] md:text-[15px] px-5 py-2.5 rounded-full bg-white/40 font-medium select-none"
            >
              {service.trim()}
            </span>
          ))}
        </div>

        {/* View Website Button */}
        {isWebsiteOrShopify && (
          <div className="mb-8">
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex w-[222px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
              aria-label="View Website"
            >
              {/* Inner Left Pill with right shadow */}
              <div className="absolute left-[0px] top-0 w-[157px] h-[63px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center justify-center gap-[6px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
                <div className="w-[8px] h-[8px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_8px_#00ff00] animate-pulse" />
                <span className="font-medium text-[18px] text-white tracking-tight whitespace-nowrap">
                  View Website
                </span>
              </div>
              
              {/* Right Arrow Icon */}
              <div className="absolute right-[24px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[3px] transition-transform duration-300 z-0">
                <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </a>
          </div>
        )}

        {/* Hero Image Showcase */}
        <div className="w-full aspect-[16/10] md:aspect-[14/8] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] mb-16 md:mb-20 relative group">
          <img 
            src={project.heroImage || project.image} 
            alt={`${project.title} Hero`} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        {/* About & Execution Text Rows (2-column layout) */}
        <div className="w-full flex flex-col gap-12 md:gap-16 mb-16">
          {/* ABOUT THE PROJECT Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-24 pt-10 border-t border-[#30261C]/15">
            <div className="md:col-span-4">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#30261C] leading-none uppercase tracking-tight">
                ABOUT THE <br className="hidden md:inline" />PROJECT
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.6] text-[#30261C]/80 whitespace-pre-wrap">
                {project.description}
              </p>
            </div>
          </div>

          {/* EXECUTION Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-24 pt-10 border-t border-[#30261C]/15">
            <div className="md:col-span-4">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#30261C] leading-none uppercase tracking-tight">
                EXECUTION
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.6] text-[#30261C]/80 whitespace-pre-wrap">
                {getProjectExecutionText(project.slug, project.title, project.category)}
              </p>
            </div>
          </div>

          {/* PROJECT DETAILS Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-24 pt-10 border-t border-[#30261C]/15 pb-10">
            <div className="md:col-span-4">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#30261C] leading-none uppercase tracking-tight">
                PROJECT <br className="hidden md:inline" />DETAILS
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-x-16 gap-y-6">
              <div>
                <span className="block text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1.5 font-bold">Client</span>
                <span className="text-[16px] md:text-[18px] font-medium text-[#30261C]">{project.client}</span>
              </div>
              <div>
                <span className="block text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1.5 font-bold">Duration</span>
                <span className="text-[16px] md:text-[18px] font-medium text-[#30261C]">{project.duration}</span>
              </div>
              {(project.websiteUrl || isWebsiteOrShopify) && (
                <div>
                  <span className="block text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1.5 font-bold">Website</span>
                  <a 
                    href={websiteUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[16px] md:text-[18px] font-medium text-[#ff5100] hover:underline flex items-center gap-1"
                  >
                    Visit Site ↗
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Slider (Draggable with arrows, displays other multiple images) */}
        {project.category !== "Website development" && galleryImages.length > 0 && (
          <ProjectGallerySlider images={galleryImages} />
        )}

        {/* The After Effect (2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-24 pt-10 border-t border-[#30261C]/15 mb-16">
          <div className="md:col-span-4">
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#30261C] leading-none uppercase tracking-tight">
              THE AFTER <br className="hidden md:inline" />EFFECT
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-[1.6] text-[#30261C]/80 whitespace-pre-wrap">
              {getProjectAfterEffectText(project.slug, project.title, project.category)}
            </p>
          </div>
        </div>
      </main>

      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}>
        <DesktopFaq />
        <DesktopFooter />
      </div>
      <div className="md:hidden" style={{ zoom: 0.8 }}>
        <MobileFaq />
        <MobileFooter />
      </div>
    </div>
  );
}
