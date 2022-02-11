import React, {useState} from "react";
import Modal from "react-modal";
import Index from "../../components/about/index";

const heroContent = {
    heroImage: "img/hero/dark.jpg",
    heroMobileImage: "img-mobile",
    heroTitleName: "nazarov asadbek",
    heroDesignation: "web designer",
    heroDescriptions: `I'm Asadbek from Uzbekistan, and I do content on Design and Development. I really enjoy learning languages and frameworks like Angular and Vue, as well as work in Javascript. I also enjoy wireframing, ui, ux, and design in general.`,
    heroBtn: "more about me",
};

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    return (<>
        <div className="row home-details-container align-items-center">
            <div
                className="col-lg-4 bg position-fixed d-none d-lg-block"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage})`,
                }}
            ></div>
            <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
                <div>
                    <img
                        src={`img/hero/${heroContent.heroMobileImage}.jpg`}
                        className="img-fluid main-img-mobile d-sm-block d-lg-none"
                        alt="hero man"
                    />
                    <h1 className="text-uppercase poppins-font">
                        I'm {heroContent.heroTitleName}
                        <span>{heroContent.heroDesignation}</span>
                    </h1>
                    <p className="open-sans-font">{heroContent.heroDescriptions}</p>
                    <button className="button" onClick={toggleModalOne}>
                        <span className="button-text">{heroContent.heroBtn}</span>
                        <span className="button-icon fa fa-arrow-right"></span>
                    </button>
                </div>
            </div>
        </div>
        {/* End home-details-container */}

        {/* Start Modal for About More */}
        <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal dark hero"
            overlayClassName="custom-overlay dark"
            closeTimeoutMS={500}
        >
            <div>
                <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon"/>
                </button>
                {/* End close icon */}

                <div className="box_inner about">
                    <div data-aos="fade-up" data-aos-duration="1200">
                        <div className="title-section text-left text-sm-center">
                            <h1>
                                ABOUT <span>ME</span>
                            </h1>
                            <span className="title-bg">Resume</span>
                        </div>
                        {/* End title */}
                        <Index/>
                    </div>
                </div>
            </div>
            {/* End modal box news */}
        </Modal>
        {/* End  Modal for About More */}
    </>);
};

export default Hero;
