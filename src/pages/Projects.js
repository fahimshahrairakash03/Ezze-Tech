import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: "https://www.etl.com.bd/assets/images/portfolio/ezze/mujib100.png",
      title: "PARLIAMENT MUJIB100",
      type: "Web Application",
    },
    {
      id: 2,
      img: "https://www.etl.com.bd/assets/images/portfolio/ezze/bloodbank.png",
      title: "BLOODBANK LIVE",
      type: "Mobile Application",
    },
    {
      id: 3,
      img: "https://www.etl.com.bd/assets/images/portfolio/ezze/startup.png",
      title: "STARTUP BANGLADESH",
      type: "Mobile Application",
    },
    {
      id: 4,
      img: "https://www.etl.com.bd/assets/images/portfolio/ezze/eed.png",
      title: "EDUCATION BUILDING",
      type: "Web Application",
    },
  ];

  return (
    <div className="m-10">
      <h1 className="font-semibold my-10 text-4xl ">Recent Works</h1>
      <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={project.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p className="text-xl font-semibold">{project.title}</p>
              <p className="">{project.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
