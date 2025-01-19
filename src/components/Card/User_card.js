// import React, { useEffect, useState } from 'react';
// import "../../styles/style.css";
// import axios from 'axios';

// const UserCard = ({ user }) => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState({});
//   const [container, setContainer] = useState("user-container");
//   useEffect(()=>{
//       if(user.count == 1){
//         setContainer("user-container1");
//       }
//   },[])
//   const fetchCountries = async () => {
//     try {
//       const response = await axios.get("https://restcountries.com/v3.1/all");
//       setCountries(response.data);
//     } catch (error) {
//       console.error("Error fetching countries:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCountries();
//   },[]);
//   useEffect(()=>{
//     const country = countries.find((country)=>country?.cca2 === user?.contry_code)
//     console.log(country);
//   },[countries, user?.contry_code])

//   return ( 
//   <>
//     <div className={`${container}`}>
//       <div className='user-card-top-part'>
//       <div className="user-username"> 
//         @<span className='user-username-code'>{user?.invite_code}</span> 
//        {
//         <img src={countries.find((country)=>country?.cca2 === user?.contry_code)?.flags[0]} alt="flag" />} 
//       </div>
//       <div className="user-joined-date">Joined today</div>
//       </div>
//       <div className="user-scholarship">{user?.count} Scholarships</div>
//       {user?.student_imgs.map((img, index) => (
//         <div key={index} className="user-card">
//           <img src={img} alt={`Student ${index + 1}`} />
//           <div className="user-card-body">
//             <div className='user-student-information'>
//             <div className="user-student-name">{user?.names[index]},</div>
//             <div className="user-student-class">{user?.classNumber[index]}</div>
//             </div>
//             <div className="user-student-school">{user?.schools[index]}</div>
//           </div>
//         </div>
//       ))}
//     </div>


//     </>
//   );
// };

// export default UserCard;

import React, { useEffect, useState } from 'react';
import "../../styles/style.css";
import axios from 'axios';

const UserCard = ({ user }) => {
  // const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState({});
  const [container, setContainer] = useState("user-container");
  useEffect(() => {
    if (user.count === 1) {
      setContainer("user-container1");
    }
  }, []);


  // const fetchCountries = async () => {
  //   try {
  //     const response = await axios.get("https://restcountries.com/v3.1/all");
  //     setCountries(response.data);
  //   } catch (error) {
  //     console.error("Error fetching countries:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCountries();
  // }, []);

  // useEffect(() => {
  //   if (countries.length > 0) {
  //     const country = countries.find((country) => country?.cca2 === user?.country_code);
  //     setSelectedCountry(country);
  //   }
  // }, [countries, user?.country_code]);

  return (
    <>
      <div className={`${container}`}>
        <div className='user-card-top-part'>
          <div className="user-username"> 
            @<span className='user-username-code'>{user?.invite_code}</span> 
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/800px-Flag_of_Bangladesh.svg.png" alt="flag" />
             
          </div>
          <div className="user-joined-date">Joined today</div>
        </div>
        <div className="user-scholarship">{user?.count} Scholarships</div>
        {user?.student_imgs.map((img, index) => (
          <div key={index} className="user-card">
            <img src={img} alt={`Student ${index + 1}`} />
            <div className="user-card-body">
              <div className='user-student-information'>
                <div className="user-student-name">{user?.names[index]},</div>
                <div className="user-student-class">{user?.classNumber[index]}</div>
              </div>
              <div className="user-student-school">{user?.schools[index]}</div>
            </div>
          </div>
        ))}
      
      </div>
      
    </>
  );
};

export default UserCard;

