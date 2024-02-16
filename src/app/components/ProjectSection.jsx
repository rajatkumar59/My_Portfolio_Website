"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCards";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "This is my portfolio website. It is built using Next.js and Tailwind CSS. It is fully responsive and has a dark mode. .",
    image: "/images/projects/1.png",
    tag: ["All", "Next.js", "React"],
    gitUrl: "https://github.com/rajatkumar59/Portfolio_Website",
    previewUrl: "https://rajatkumar.in/",
  },
  {
    id: 2,
    title: "YouTube Backend",
    description: "it is a backend for a YouTube clone.I am building it using Node.js, Express, and MongoDB. It has features like user authentication, video upload, like, dislike, and comment on videos. It also will a feature to subscribe to other users.",
    image: "/images/projects/2.jpg",
    tag: ["All", "React"],
    gitUrl: "https://github.com/rajatkumar59/YouTube_Backend",
    previewUrl: "https://github.com/rajatkumar59/YouTube_Backend",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "this is an e-commerce application. It is built using React and Tailwind CSS. It has features like user authentication, product search and its a marketplace for students to buy and sell essential items.",
    image: "/images/projects/3.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/rajatkumar59/E-commerce_Student_Bazaar",
    previewUrl: "https://studentbazaar.in/",
  },
  {
    id: 4,
    title: "Node.js + OpenAI",
    description: "This is a project that I built using Node.js and OpenAI's GPT-3. It is a application that can answer your questions using the openAI API. It is built using Node.js and Express.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/rajatkumar59/Node.js-openAI",
    previewUrl: "https://github.com/rajatkumar59/Node.js-openAI",
  },
  {
    id: 5,
    title: "React Projects",
    description: "these are some of the projects that I have built using React. These projects are built using React.",
    image: "/images/projects/5.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/rajatkumar59/React-Projects",
    previewUrl: "https://github.com/rajatkumar59/React-Projects",
  },
  {
    id: 6,
    title: "Parallax Website",
    description: "This is a parallax website that I built using HTML, CSS. It is a fully responsive website. It has a parallax effect.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rajatkumar59/Parallax_Website",
    previewUrl: "https://parallax-website-sand.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}

            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;