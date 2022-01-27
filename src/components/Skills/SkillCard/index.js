import React, {useRef, useState} from "react";
import VisibilitySensor from 'react-visibility-sensor';
import {useSpring, animated ,config} from 'react-spring'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const SkillCard = ({props}) => {

    const { title, percentage, image } = props.node
    const imageData = getImage(image)

    const curCard = useRef(null);
    const [inView, setInView] = useState(false);

    const onChange = isVisible => {
        setInView( isVisible ? true : false);
    }

   

    const springProps = useSpring({ width: inView ? `${percentage}` : '0%', config : config.stiff })
    return (
        <>
            <div className="text-center flex flex-col relative ">
                <div className="relative drop-shadow-lg shadow-lg bg-white py-6 relative rounded-md">
                    <GatsbyImage image={imageData} alt={title} />
                    <VisibilitySensor onChange={onChange} partialVisibility delayedCall>
                        <div 
                            ref={curCard} 
                            className="rounded-full mx-6 mt-4 bg-gray-600 text-white font-bold group transition relative"
                        >
                            <div className="skill-percent py-4 z-30 relative">{percentage}%</div>
                            <animated.span style={springProps} className="bg-darkOrange absolute top-0 left-0 h-full rounded-full overflow-hidden" />
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </>
    )
}

export default SkillCard