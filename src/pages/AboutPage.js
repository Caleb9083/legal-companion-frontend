import React from "react";
import "./styles/AboutPage.css";
import Card from "react-bootstrap/Card";
import caleb from "../images/caleb_profile.jpg";
import eric from "../images/eric_profile.jpg";
import enoch from "../images/book-library-with-open-textbook-long.jpg";
import Banner from "../components/Banner";

const AboutPage = () => {
    return (
        <div>
            <div className="about-section_top">
                <div className="about-section_top_contents">
                    <h1>About Us</h1>
                    <p>About who we are and what we do.</p>
                    <p>
                        We are a team of final year undergraduate students pursuing computer
                        science motivated to solve world problems. We work together to
                        design, create and produce work that we are proud of for folks that
                        we believe in. We are available for hire in a wide range of creative
                        disciplines for a variety of jobs, projects and gigs.
                    </p>
                </div>
            </div>
            <div className="about_our_team">Our Team</div>
            <div className="about_card_container">
                <Card style={{ width: "16rem" }}>
                    <Card.Img style={{ height: "13rem" }} variant="top" src={caleb} />
                    <Card.Body style={{ color: "#034078" }}>
                        <Card.Title>Caleb Osam</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "16rem" }}>
                    <Card.Img variant="top" style={{ height: "13rem" }} src={eric} />
                    <Card.Body style={{ color: "#034078" }}>
                        <Card.Title>Eric Atsu</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "16rem" }}>
                    <Card.Img style={{ height: "13rem" }} variant="top" src={enoch} />
                    <Card.Body style={{ color: "#034078" }}>
                        <Card.Title>Enoch Amarteifio</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Banner />
        </div>
    );
};
export default AboutPage;
