import React, { useEffect, useState } from "react"
import picture from "../../assets/images/hero_pc.jpg";
import app_graduation from "../../assets/images/app_graduation.png";
import app_scholarship from "../../assets/images/app_scholarship.jpg";
import app_school from "../../assets/images/app_school.png";
import Form from "../../components/Form/Form";
import app_store from "../../assets/icons/appstore_small.svg";
import google_play from "../../assets/icons/playstore_small.svg";
import Mobile_card from "../../components/Card/Mobile_card";
import User_card from "../../components/Card/User_card";
import axios from "axios";
import Swapbar from "../../components/Swapbar/Swapbar";
// import School_card from "../../components/Card/School_card";
import School_card from "../../components/Card/School_card";
import Eligibility_card from "../../components/Card/Eligibility_card";
import Other_card from "../../components/Card/Other_card";
import video from "../../assets/videos/ay_explainer.mp4";
import Award_card from "../../components/Card/Award_card";
import Footer from "../../components/Footer/Footer";
const Home = () => {
    const [users, setUsers] = useState([]); 
    const [visibleCount, setVisibleCount] = useState(6);
    useEffect(() => { 
        axios.get('/leaderboard.json') 
        .then(response => setUsers(response.data)) 
        .catch(error => console.error('Error fetching users:', error)); 
    }, []);

    const handleSeeMore = () => { setVisibleCount(prevCount => prevCount + 3); };

    return (
        <div>
            <div>
                <section className="background-section">
                <img src={picture} alt="student" className="background-img"/>
                <div className="section-second-part">
                    <div className="section-text">
                        <h1>Start your <br/> scholarship</h1>
                        <h3>Directly for students in Government Primary <br/>
                        Schools throughout Bangladesh</h3>
                    </div>
                    <div className="section-form">
                        <Form/>
                    </div>
                </div>
                </section>
                <section>
                 
                    <div className="section-second-icon">
                    <div className="section-second">
                    <h1>
                    The Uber for Scholarships
                    </h1>
                    <p>A platform connecting the world with financially struggling students <br/>
                    in Government Primary Schools of Bangladesh</p>
                    </div>
                    <div className="section-second-img">
                        <img className="section-second-img1" src={app_store} alt="app store"/>
                        <img className="section-second-img2" src={google_play} alt="google play"/>
                    </div>
                    </div> 
                    <div className="card-container">
                    <Mobile_card 
                    image={app_graduation} 
                    title="Transfer directly" 
                    description="Your scholarship is transferred directly to your student's family on their mobile bank account." 
                    /> 
                    <Mobile_card image={app_scholarship} 
                    title="Get school reports" 
                    description="View attendance data and report cards from your student's school, until completion of Class 5." 
                    /> 
                    <Mobile_card image={app_school} 
                    title="Ensure a literate citizen" 
                    description="Your scholarship continues until completion of class 5, when your student achieves literacy." 
                    />
                    </div>
                </section>

                <section>
                    <div className="section-third">
                        <hastag className="section-third-hastag">
                        #alteryouthrevolution
                        </hastag>
                        <h1>
                        The Scholarship Community
                        </h1>
                        <p>
                        Despite public primary schools being free of cost in Bangladesh, <br/>
many students still <span>drop out of school</span>  to work and earn in order to support their families. <br/>
Your scholarship helps a child attend school and support their families at the same time.
                        </p>
                    </div>

                    <div className="user-section-third-card-container">
                    {users.slice(0, visibleCount).map(user => ( <User_card key={user.username} user={user} /> ))}
                    </div>
                    <div className="user-section-sec-more">
                    {visibleCount < users.length ? <span onClick={handleSeeMore} className="user-section-see-button">See more</span> : <span onClick={handleSeeMore} className="user-section-see-button">See all</span>}
                    </div>
                </section>

                <section>
                    <div>
                        <div className="section-fourth">
                          <h1>
                          Community Impact
                          </h1>
                          <p>Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
                        <br/>  using that phone, to start receiving their child's scholarships directly, every month.</p>
                        </div>
                        <div>
                            <Swapbar/>
                        </div>
                    </div>
                </section>

                <section className="section-fifth-container">
                    <div className="section-fifth">
                      <h1>Students from Government Primary Schools Nationwide</h1>
                    </div>
                    <div className="school-container">
                        <School_card/>
                    </div>
                </section>

                <section className="section-sixth">
                    <div className="section-sixth-header">
                        <h1>
                        Scholarship Eligibility
                        </h1>
                        <p>
                        Only students who are currently enrolled in Government Primary Schools and fall <br/>
                        under any of the following criteria are eligible to apply for scholarships
                        </p>
                    </div>
                    <div className="Eligibility-main-container">
                        <Eligibility_card/>
                    </div>
                </section>

                <section className="section-seventh">
                    {/* <div> */}
                        <Other_card/>
                    {/* </div> */}
                </section>

                <section className="section-eighth">
                    <div>
                    <video className="section-eight-video" width="600" height="400" controls> 
                    <source src={video} type="video/mp4" /> 
                    <source src={video} type="video/ogg" /> 
                    Your browser does not support the video tag. 
                    </video>
                    </div>
                    <div className="section-eight-contents">
                        <h2>The scholarship app</h2>
                        <p className="section-eight-contents-p">
                        In Bangladesh, while 98% of children enroll in school, 2 million children <br/>
                        drop out to work before achieving literacy in order to support their <br/> 
                        families financially. On the flipside, Bangladesh has a diaspora <br/> 
                        population of 10 million in advanced economies who wish to make an <br/> 
                        impact on their homeland. AlterYouth, imagine Uber for scholarships, is a <br/>
                         C2C scholarship app enabling users from around the world to start <br/> 
                         scholarships directly for financially struggling students in Government <br/> 
                         Primary Schools of Bangladesh, through digital banking.
                        </p>
                    </div>
                </section>

                <section>
                    <div>
                        <Award_card/>
                    </div>
                </section>

                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    )
}
export default Home
