import React from "react";
import { GoRepo } from 'react-icons/go'

const ProjectCard = ({project, bg}) => {

    const { name, githubUrl, description } = project.node

    return (
        <>
            <div className="text-center flex flex-col relative text-lg h-full">
                <div className="flex flex-col justify-between relative drop-shadow-lg bg-white relative rounded-md h-full ">
                  <div className={`py-4 ${bg} rounded-t-md font-bold`}>{name}</div>
                  <div className="py-6 px-4">{description}</div>
                  <div className="py-2 bg-gray-500 rounded-b-md text-white">
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="flex flex-row gap-x-4 justify-center items-center">
                        Github Repo 
                        <GoRepo className="relative" />
                    </a>
                    </div>
                </div>
            </div>
        </>
    )    
}

export default ProjectCard