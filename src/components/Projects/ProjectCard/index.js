import React from "react";

const ProjectCard = ({project, bg}) => {

    const { name, githubUrl, description } = project.node

    return (
        <>
            <div className="text-center flex flex-col relative text-lg">
                <div className="relative drop-shadow-lg bg-white relative rounded-md h-full">
                  <div className={`py-4 ${bg} rounded-t-md`}>{name}</div>
                  <div className="py-6 px-4">{description}</div>
                  <div className="py-2 bg-gray-500 rounded-b-md text-white"><a href={githubUrl}>Github Repo</a></div>
                </div>
            </div>
        </>
    )    
}

export default ProjectCard