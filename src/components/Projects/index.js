import Work from "./work";
import { projects } from "../../constants";
import { FolderOpen } from "@mui/icons-material"; // Import the icon

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-[#111828] flex flex-col items-center text-gray-100 text-lg font-normal p-5 sm:ml-[25%]">
      {/* Header */}
      <div className="text-4xl md:text-5xl font-bold mt-12 text-center text-white-500 flex items-center justify-center" data-aos="slide-down">
  Projects
  <FolderOpen className="ml-3" /> {/* Icon with margin on the left */}
</div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl mt-10 bg-[#1E293B] p-8 rounded-lg shadow-lg">
        
        {/* Left: Projects Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
          {projects.map((project, ind) => (
            <Work key={ind} {...project} />
          ))}
        </div>

       
     
      </div>
    </div>
  );
}
