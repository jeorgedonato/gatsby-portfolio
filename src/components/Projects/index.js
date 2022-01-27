import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import ProjectCard from "./ProjectCard";

const Portfolio = () => {

    const { allProjectsJson } = useStaticQuery(
        graphql`
        query Projects {
            allProjectsJson {
              edges {
                node {
                  githubUrl
                  description
                  name
                }
              }
            }
          }          
        `
    )

    const projects = allProjectsJson?.edges

    const colorArr = ['bg-darkOrange', 'bg-lightOrange', 'bg-lighterBlue']
    let currentColor = 0;
    return (
        <>
            <article className="bg-white py-6">
                <div className="py-10 text-center font-bold text-4xl mb-4">Projects</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-fr auto-rows-fr gap-y-10 gap-x-4 container items-center justify-center">
                    {
                        projects.map((project, idx) => {
                            const projectCard = <ProjectCard project={project} bg={colorArr[currentColor]}  key={idx} />
                            currentColor = currentColor === colorArr.length - 1 ? 0 : currentColor
                            currentColor++
                            return (projectCard)
                        })
                    }
                </div>
            </article>
        </>
    )
}

export default Portfolio