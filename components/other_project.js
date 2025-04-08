import React from "react";

const projects = [
  {
    title: "Tree Plantation Drive",
    description: "An initiative to plant 5000 trees across urban areas with help from volunteers.",
    status: "Ongoing",
    date: "Started March 2025"
  },
  {
    title: "Food Distribution Program",
    description: "Distributed over 10,000 meals to underprivileged communities during the winter.",
    status: "Completed",
    date: "Completed January 2025"
  },
  {
    title: "Waste Management Awareness Campaign",
    description: "Upcoming campaign across schools to educate children on garbage segregation.",
    status: "Upcoming",
    date: "Launching May 2025"
  },
  {
    title: "Clean River Mission",
    description: "Collaborating with local NGOs to clean riverbanks and educate nearby residents.",
    status: "Ongoing",
    date: "Started February 2025"
  }
];

const statusColor = {
  Ongoing: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
  Upcoming: "bg-blue-100 text-blue-700"
};

const ProjectsPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-semibold text-green-800">{project.title}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[project.status]}`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500">{project.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
