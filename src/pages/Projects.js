import React, { useState } from 'react';
import { FaBars, FaChevronRight, FaChevronDown } from 'react-icons/fa'; // Importing hamburger and arrow icons

function Projects() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null); // Track which project is expanded

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to toggle project expansion
  const toggleProjectExpansion = (projectName) => {
    if (expandedProject === projectName) {
      setExpandedProject(null); // Collapse if the same project is clicked again
    } else {
      setExpandedProject(projectName); // Expand the clicked project
    }
  };

  const projects = [
    { name: 'Vishal Mega Mart' },
    { name: 'Daikin' },
    { name: 'Somany' }
  ];

  const subHeadings = ['BBP', 'TestScript', 'Configbase', 'Test1', 'Test2'];

  return (
    <div className="dark:bg-gray-900">
      {/* Hamburger Menu */}
      <div className="p-4 z-50 rounded-md">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed left-0 w-64 h-full  p-4 z-40 transition-transform duration-300 ease-in-out">
          <h2 className="text-lg font-bold mb-4">Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.name} className="mb-2">
                {/* Project heading with arrow icon */}
                <div
                  className="flex justify-between items-center  p-2 rounded cursor-pointer"
                  onClick={() => toggleProjectExpansion(project.name)}
                >
                  <span>{project.name}</span>
                  {/* Display the arrow icon based on expansion state */}
                  {expandedProject === project.name ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </div>
                
                {/* Sub-headings */}
                {expandedProject === project.name && (
                  <ul className="ml-4 mt-2">
                    {subHeadings.map((subHeading, index) => (
                      <li key={index} className="mb-1 hover:bg-gray-600 p-2 rounded">
                        {subHeading}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 p-6 bg-gray-100 ${isSidebarOpen ? 'ml-64' : ''}`}>
        <h1 className="text-2xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Project Tile 1</h3>
            <p>Description of project 1.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Project Tile 2</h3>
            <p>Description of project 2.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Project Tile 3</h3>
            <p>Description of project 3.</p>
          </div>
          {/* Add more tiles as needed */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
