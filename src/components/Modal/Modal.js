// import React from "react";
// import "../../styles/style.css"; // Make sure to create a Modal.css file for styling

// const Modal = ({ isOpen, onClose, schoolInfo, schoolImage}) => {
//     if (!isOpen) return null;

//     return (
//         <div className="modal-backdrop">
//             <div className="modal">
//                 <img src={schoolImage} alt="School" className="modal-image" />
//                 <div className="modal-content">
//                     <h2>{schoolInfo.name}</h2>
//                     <p>{schoolInfo.ht_quote}</p>
//                     <p>Location: {schoolInfo.location}</p>
//                     <p>Established: {schoolInfo.year_established}</p>
//                     <p>Students: {schoolInfo.total_students}</p>
//                     <p>Teachers: {schoolInfo.total_teachers}</p>
//                     <p>Scholarship Applicants: {schoolInfo.total_applicants}</p>
//                     <p>Class Teacher: {schoolInfo.ht_name}</p>
//                 </div>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default Modal;

import React from "react";
import "../../styles/style.css"; // Make sure your CSS is linked correctly
import { IoClose } from "react-icons/io5"; // Import the close icon
import { IoLocationOutline } from "react-icons/io5";
const Modal = ({ isOpen, onClose, schoolInfo, schoolImage }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-image-container">
                    <IoClose className="modal-close-icon" onClick={onClose} />
                    <img src={schoolImage} alt="School" className="modal-image" />
                </div>
                <div className="modal-content">
                    <h2 className="model-school-name">{schoolInfo.name}</h2>
                    <span className="model-school-applicants">{schoolInfo.total_applicants} Scholarship Applicants</span>
                     <div className="model-school-location school-card-location">
                     <span><IoLocationOutline/></span>
                     <p>{schoolInfo.location}, Bangladesh</p>
                     </div>
                    <p className="model-school-quote">Established in {schoolInfo.year_established} in {schoolInfo.location}, Bangladesh. It now hosts {schoolInfo.total_students} Students toughts by {schoolInfo.total_teachers} Teachers</p>  
                     <hr className="modal-hr-tag"/>
                     <div className="modal-teacher-information">
                        <img className="modal-teacher-img" src={schoolInfo.teacher_img} alt="teacher image"/>
                        <div className="modal-teacher-info">
                        <span className="modal-teacher-name">{schoolInfo.ht_name}</span>
                        <p className="modal-teacher-deg">Class Teacher</p>
                        </div>
                     </div>
                </div>
                {/* <button onClick={onClose}>Close</button> */}
            </div>
        </div>
    );
};

export default Modal;

