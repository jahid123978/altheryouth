import React from "react";
import "../../styles/style.css"; // Import the CSS file
import { IoMan, IoWoman, IoPeople } from "react-icons/io5"; // Importing icons
import SingleMother from "../../assets/icons/SingleMother";
import DisableFather from "../../assets/icons/DisabledFather";
import Orphan from "../../assets/icons/Orphan";
const Eligibility_card = () => {
    const cards = [
        {
            title: "Disabled Father",
            description: "Student's father is physically unable to work",
            icon: <DisableFather />,
        },
        {
            title: "Single Mother",
            description: "Student's father is deceased or has abandoned the family",
            icon: <SingleMother />,
        },
        {
            title: "Orphan",
            description: "Both parents are deceased or have abandoned the child",
            icon: <Orphan />,
        },
    ];

    return (
        <div className="eligibility-card-container">
            {cards.map((card, index) => (
                <div key={index} className="eligibility-card">
                    <div className="eligibility-card-icon">{card.icon}</div>
                    <div className="eligibility-card-content">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Eligibility_card;
