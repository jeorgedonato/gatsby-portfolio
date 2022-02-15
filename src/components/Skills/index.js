import React from "react";
import SkillCard from './SkillCard'
import { useStaticQuery, graphql } from "gatsby";

const Skills = () => {

    const {allSkillsJson} = useStaticQuery(
        graphql`
        query MyQuery {
          allSkillsJson {
            edges {
              node {
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 200
                      height: 200
                      quality: 100
                      placeholder: BLURRED
                    )
                  }
                }
                percentage
                title
              }
            }
          }
        }                             
        `
    )

    const skills = allSkillsJson?.edges

    const colorArr = ['bg-darkerBlue', 'bg-darkerGreen', 'bg-darkerOrange', 'bg-darkerRed']
    let currentColor = 0;

    return (
        <>
            <article className="bg-white py-6">
                <div className="py-10 text-center font-bold text-4xl mb-4">Technologies</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 container items-center justify-center">
                    {skills.sort((a,b) => { if(a.node.percentage > b.node.percentage) return -1 }).map( (skill, idx) =>
                    {
                      currentColor = currentColor === colorArr.length ? 0 : currentColor
                      const skillCard = <SkillCard skill={skill} bg={colorArr[currentColor]}  key={idx} />
                      currentColor++
                      return (skillCard)
                    }  )}
                </div>
                
            </article>
        </>
    )
}

export default Skills