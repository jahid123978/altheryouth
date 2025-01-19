import React from "react";
import "../../styles/style.css"; // Import the CSS file
import headteacher from "../../assets/images/headteacher.jpg";
import person from "../../assets/images/person.jpg";
import applicant from "../../assets/images/applicant.jpg";

const Other_card = () => {
    const cards = [
        {
            text: "Are you a teacher Get your students listed on the platform",
            footer: "Only for Government Primary Schools in Bangladesh.",
            background: headteacher, // Update with actual background path
            link: "Download the school app"
        },
        {
            text: "You can be anywhere in the world",
            background: person, // Update with actual background path
            link: "See all scholarships"
        },
        {
            text: "While students get closer to their dreams.",
            background: applicant, // Update with actual background path
            link: "See all gradutes"
        },
    ];

    return (
        <div className="other-main-conatianer">
        <div className="other-card-container">
            {cards.map((card, index) => (
                <div key={index} className="other-card" style={{ backgroundImage: `url(${card.background})` }}>
                    <div className="other-card-text">
                        {card.text}
                        <div className="other-card-link-container">
                        <div className="other-card-link">
                            {card.link} 
                        </div>
                        <span>→</span>
                        </div>
                        
                    </div>
                    {card.footer && <div className="other-card-footer">{card.footer}</div>}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Other_card;
