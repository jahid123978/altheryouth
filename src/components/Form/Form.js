import React, { useEffect, useRef, useState } from "react";
import "../../styles/style.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
  const [scholarships, setScholarships] = useState(1);
  const [phone, setPhone] = useState("");
  const [decrement, setDecrement] = useState("decrement-button");
  const [increment, setIncrement] = useState("increment-button");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  //   const phoneInputRef = useRef(null);
  //   useEffect(() => {
  //     if (phoneInputRef.current)
  //       {
  //         phoneInputRef.current.placeholder = 'Your Number';
  // } }, []);
  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    const country = countries.find(
      (country) => country.name.common === countryName
    );
    setSelectedCountry(country);
  };

  const handleIncrement = () => {
    if(scholarships == 3) 
      setIncrement("decrement-button");
    if(scholarships < 3){
      setScholarships(scholarships + 1);
      setDecrement("increment-button");
    }
   else 
   toast("Scholarship limit reached for current scholarship session");
  };

  const handleDecrement = () => {
    if(scholarships == 1)
      setDecrement("decrement-button");
    if (scholarships > 1) {
      setScholarships(scholarships - 1);
      setDecrement("increment-button")
      setIncrement("increment-button");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      scholarships,
      countryCode: selectedCountry ? selectedCountry.cca2 : "",
    };

    axios
      .post("https://your-api-endpoint.com/submit", formData)
      .then((response) => {
        setMessage("Form submitted successfully!");
      })
      .catch((error) => {
        setMessage("Error submitting form.");
      });
  };

  return (
    <div className="form-container">
      <h6>
        Join the <span className="hashtag">#alteryouthrevolution</span>
      </h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {selectedCountry && (
          <div>
            <img src={selectedCountry.flags[0]} alt={selectedCountry.name.common} />
            <span>{selectedCountry.cca2}</span>
          </div>
        )}
        <PhoneInput
         className="phone-input"
          country={'bd'}
          value={phone}
          onChange={setPhone}
          inputStyle={{ width: '100%' }}
        /> */}
        <div className="phone-input-container">
          {selectedCountry && (
            <div className="country-display">
              <img
                className="country-flag"
                src={selectedCountry.flags[0]}
                alt={selectedCountry.name.common}
              />
              <span className="country-code">{selectedCountry.cca2}</span>
            </div>
          )}
          <PhoneInput
            country={"bd"}
            value={phone}
            onChange={setPhone}
            inputStyle={{
              marginBottom: "10px",
              width: "100%",
              height: "50px",
              border: "1px solid rgb(213, 206, 206)",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="scholarships">
          <label className="scholarships-label">Number of Scholarships</label>
          <div className="scholarships-container">
          <div className="scholarship-control">
            <button
              className={`${decrement} common-button`}
              type="button"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="in-de-value common-button">{scholarships}</span>
            <button
              className={`${increment} common-button`}
              type="button"
              onClick={handleIncrement}
            >
              +
            </button>
            <ToastContainer />
          </div>
          <div className="cost">BDT {scholarships*parseInt(1650)}/month</div>
          </div>
        </div>
        <button type="submit" className="start-button">
          START NOW
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Form;
