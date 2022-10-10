import React from 'react'
import "./styles/SectionCard.css"

const SectionCard = (props) => {
    return (
        <div className="constitution_chapter_section_container">
            <div className="constitution_chapter_section_title">{props.title}</div>
            <div className="constitution_chapter_section_content">
                {props.content}
            </div>
        </div>
    )
}

export default SectionCard