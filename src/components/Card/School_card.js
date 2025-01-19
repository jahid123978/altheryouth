// 
import React, { useEffect, useState } from "react";
import school1 from "../../assets/images/school1.jpeg";
import school2 from "../../assets/images/school2.jpeg";
import school3 from "../../assets/images/school3.jpeg";
import school4 from "../../assets/images/school4.jpeg";
import school5 from "../../assets/images/school5.jpeg";
import school6 from "../../assets/images/school6.jpeg";
import school7 from "../../assets/images/school7.jpeg";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import Modal from "../Modal/Modal";

const School_card = () => {
    const [schoolInformation, setSchoolInformation] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentSchool, setCurrentSchool] = useState(null);
    const schools = [
        school1, school2, school3, school4, school5, school6, school7
    ];

    useEffect(() => { 
        axios.get('/schools.json') 
        .then(response => setSchoolInformation(response.data)) 
        .catch(error => console.error('Error fetching schools:', error)); 
    }, []);

    const handleOpenModal = (school) => {
        setCurrentSchool(school);
        setIsOpen(true);
    };

    return (
        <div className="school-main-card-container">
            <div className="school-card-container">
                {schoolInformation.map((school, index) => (
                    <div key={index} className="school-card" onClick={() => handleOpenModal(school)}>
                        <img src={schools[index]} alt={`School ${index + 1}`} />
                        <div className="school-card-body">
                            <h6 className="school-name">
                            <strong>{school?.name}</strong>
                            </h6>
                            <div className="school-card-location">
                            <span><IoLocationOutline/></span>
                            <p>{school?.location}, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    schoolImage={currentSchool && schools[schoolInformation.indexOf(currentSchool)]}
                    onClose={() => setIsOpen(false)}
                    schoolInfo={currentSchool}
                />
            )}
        </div>
    );
};

export default School_card;
