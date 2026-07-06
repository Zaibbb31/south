import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { DesktopFooter } from "@/components/desktop-footer";
import { MobileFooter } from "@/components/mobile-footer";
import { Cta } from "@/components/cta";
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

  return (
    <div className="w-full min-h-screen bg-[#fffff0]">
      <div className="block md:hidden"><MobileNav /></div>
      <div className="hidden md:block"><DesktopNav /></div>

      <main className="w-full pt-32 lg:pt-48 px-6 lg:px-[90px] pb-24">
        {/* Massive Title */}
        <h1 className="text-[50px] lg:text-[110px] xl:text-[130px] font-medium leading-[1] text-[#30261C] uppercase tracking-tighter mb-12 lg:mb-24">
          {project.title}
        </h1>

        {/* Two-Column Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 lg:mb-32">
          {/* Left Column: Description & Links */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            <p className="text-[22px] lg:text-[28px] xl:text-[34px] leading-[1.3] text-[#30261C]/80 font-light mb-12">
              {project.description}
            </p>

            <div className="flex items-center gap-6">
              {project.websiteUrl && (
                <a 
                  href={project.websiteUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-3 bg-[#30261C]/50 hover:bg-[#30261C] text-white rounded-full transition-colors font-medium text-[14px] tracking-wide"
                >
                  VISIT WEBSITE
                </a>
              )}
              <a 
                href="#approach" 
                className="flex items-center gap-2 text-[#30261C]/60 hover:text-[#ff5100] transition-colors text-[14px] font-medium tracking-wide uppercase"
              >
                OUR APPROACH <span className="text-[18px]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Meta Info */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col pt-2 lg:pt-0">
            <div className="flex flex-col border-t border-[#30261C]/10 py-5">
              <span className="text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1">DURATION</span>
              <span className="text-[16px] text-[#30261C]">{project.duration}</span>
            </div>
            <div className="flex flex-col border-t border-[#30261C]/10 py-5">
              <span className="text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1">CLIENT</span>
              <span className="text-[16px] text-[#30261C]">{project.client}</span>
            </div>
            <div className="flex flex-col border-t border-[#30261C]/10 py-5">
              <span className="text-[11px] text-[#30261C]/40 uppercase tracking-widest mb-1">SERVICES</span>
              <span className="text-[16px] text-[#30261C]">{project.services}</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Image Gallery */}
        <div className="w-full mb-24">
          <h2 className="text-[28px] lg:text-[42px] font-medium text-[#30261C] mb-8 lg:mb-12 uppercase tracking-tight">
            Project Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {/* Slot 1: Top Full-Width Image */}
            <div className="col-span-1 md:col-span-4 h-[250px] md:h-[450px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[0]} 
                alt={`${project.title} Gallery 1`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 2: Middle Left Medium-Large (spans 2 rows) */}
            <div className="col-span-1 md:col-span-2 md:row-span-2 h-[250px] md:h-full min-h-[250px] md:min-h-[360px] lg:min-h-[464px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[1]} 
                alt={`${project.title} Gallery 2`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 3: Middle Right Small 1 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[2]} 
                alt={`${project.title} Gallery 3`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 4: Middle Right Small 2 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[3]} 
                alt={`${project.title} Gallery 4`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 5: Middle Right Small 3 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[4]} 
                alt={`${project.title} Gallery 5`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 6: Middle Right Small 4 */}
            <div className="col-span-1 md:col-span-1 h-[170px] md:h-[170px] lg:h-[330px] rounded-[24px] lg:rounded-[28px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[5]} 
                alt={`${project.title} Gallery 6`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Slot 7: Bottom Full-Width Image */}
            <div className="col-span-1 md:col-span-4 h-[250px] md:h-[450px] rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#30261C]/5 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative group">
              <img 
                src={bentoImages[6]} 
                alt={`${project.title} Gallery 7`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </main>

      <div style={{ zoom: 0.8 }}><Cta /></div>
      <div className="block md:hidden" style={{ zoom: 0.8 }}><MobileFooter /></div>
      <div className="hidden md:block" style={{ zoom: 0.8 }}><DesktopFooter /></div>
    </div>
  );
}
