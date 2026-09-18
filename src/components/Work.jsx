 import integrated from "../assets/integrated.png";
 import marketplace from "../assets/marketplace.png";
import investment from "../assets/investment.png";
import learntech from "../assets/learntech.png";
import smartbusiness from "../assets/safe.png";
// import crossborder from "../assets/crossborder.png";

const projects = [
  {
    title: "Integrated Protein Agroallied Platform",
     image: integrated,
    link: "https://integratedprotein.com",
    description:
      "A complete agroallied platform for managing poultry, fishery, livestock and agricultural operations.",
  },

  {
    title: "Multi Vendor Marketplace",
     image: marketplace,
    link: "https://crossboardermarketplace.com/",
    description:
      "An e-commerce marketplace where multiple vendors can register, upload products and manage sales.",
  },

  {
    title: "Investment Platform",
     image: investment,
    link: "https://shelteredinvest.com",
    description:
      "A secure investment management system with user dashboards, plans and payment integration.",
  },

  {
    title: "LearnTech Solution Website",
    image: learntech,
    link: "https://learntechsolution.com",
    description:
      "An educational technology platform connecting learners with digital resources.",
  },

  {
  title: "Smart House Rental Management System",
  image: smartbusiness,
  link: "https://app.safelease.org/",
  description:
    "A smart house rental management platform that connects landlords and tenants, simplifies property listings, rental applications, lease agreements, and rent-related transactions."
},

  {
    title: "Cross Border Marketplace",
    // image: crossborder,
    link: "#",
    description:
      "A marketplace solution designed for international product trading.",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold">Work</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition duration-300 block"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h3 className="text-cyan-400 font-bold text-xl">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">
                  Visit Website →
                </span>

                <span className="text-xs text-gray-500">
                  Click to Open
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}