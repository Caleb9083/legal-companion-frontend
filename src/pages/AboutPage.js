import React from "react";
import "./styles/AboutPage.css";
import Card from "react-bootstrap/Card";
import p1 from "../images/book-library-with-open-textbook-long.jpg";
import Banner from "../components/Banner";

const AboutPage = () => {
    return (
        <div>
            <div className="about-section_top">
                <div className="about-section_top_contents">
                    <h1>About Us</h1>
                    <p>Some text about who we are and what we do.</p>
                    <p>
                        Nostrud ullamco aliquip minim cupidatat qui enim nostrud anim. Ex
                        officia culpa enim occaecat ullamco minim commodo sit nisi id in
                        veniam commodo irure. Sint exercitation laborum ut elit aute.
                        Laboris aliquip eu consequat ad ad aliqua. Veniam ea incididunt
                        commodo minim elit cillum enim aliquip aliqua veniam culpa.
                    </p>
                </div>
            </div>
            <div className="about_our_team">Our Team</div>
            <div className="about_card_container">
                <Card style={{ width: "16rem" }}>
                    <Card.Img style={{ height: "12rem" }} variant="top" src={p1} />
                    <Card.Body style={{ color: "#034078" }}>
                        <Card.Title>Caleb Osam</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "16rem" }}>
                    <Card.Img variant="top" style={{ height: "12rem" }} src={p1} />
                    <Card.Body style={{ color: "#034078" }}>
                        <Card.Title>Eric Atsu</Card.Title>
                        <Card.Text >
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: "16rem" }}>
                    <Card.Img style={{ height: "12rem" }} variant="top" src={p1} />
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
