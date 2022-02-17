import React, {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Modal from "react-modal";
import SelloUz from "./modal/Sello-uz";
import SelloPartners from "./modal/Sello-partners";
import Telegram from "./modal/Telegram";
import SelloLogistics from "./modal/Sello-logistics";
import ZiraatUz from "./modal/Ziraat-uz";
import ZiraatAdmin from "./modal/Ziraat-admin";
import ZiraatInstant from "./modal/Ziraat-instant";
import TengeUz from "./modal/Tenge-uz";
import TengePhysicalAdmin from "./modal/Tenge-physical-admin";
import TengeJuridicAdmin from "./modal/Tenge-juridic-admin";
import TuneConsultingUz from "./modal/Tune-consulting-uz";
import AwesomeCssElements from "./modal/Awesome-css-elements";
import FoodTruck from "./modal/Food-truck";
import OctaviaAdminTemplate from "./modal/Octavia-admin-template";
import BonikTemplate from "./modal/Bonik-template";
import XaminTemplate from "./modal/Xamin-template";

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setisOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);
    const [isOpen10, setIsOpen10] = useState(false);
    const [isOpen11, setIsOpen11] = useState(false);
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen13, setIsOpen13] = useState(false);
    const [isOpen14, setIsOpen14] = useState(false);
    const [isOpen15, setIsOpen15] = useState(false);
    const [isOpen16, setIsOpen16] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    function toggleModalTwo() {
        setisOpen2(!isOpen2);
    }

    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }

    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }

    function toggleModalFive() {
        setIsOpen5(!isOpen5);
    }

    function toggleModalSix() {
        setIsOpen6(!isOpen6);
    }

    function toggleModalSeven() {
        setIsOpen7(!isOpen7);
    }

    function toggleModalEight() {
        setIsOpen8(!isOpen8);
    }

    function toggleModalNine() {
        setIsOpen9(!isOpen9);
    }

    function toggleModalTen() {
        setIsOpen10(!isOpen10);
    }

    function toggleModalEleven() {
        setIsOpen11(!isOpen11);
    }

    function toggleModalTwelve() {
        setIsOpen12(!isOpen12);
    }

    function toggleModalThirteen() {
        setIsOpen13(!isOpen13);
    }

    function toggleModalFourteen() {
        setIsOpen14(!isOpen14);
    }

    function toggleModalFiveteen() {
        setIsOpen15(!isOpen15);
    }

    function toggleModalSixteen() {
        setIsOpen16(!isOpen16);
    }

    return (
        <Tabs>
            <TabList className="portfolio-tab-list">
                <Tab>ALL</Tab>
                <Tab>СOMMERCIAL PROJECTS</Tab>
                <Tab>AWESOME PROJECTS</Tab>
                {/*<Tab>SOCIAL MEDIA</Tab>*/}
                {/*<Tab>VIDEO</Tab>*/}
                {/*<Tab>GRAPHIC DESIGN</Tab>*/}
            </TabList>

            <div className="portfolio-tab-content">
                <TabPanel>
                    <ul className="row grid justify-content-center">
                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure onClick={toggleModalOne}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title">Sello.uz</span>
                                </div>
                            </figure>

                            {/* Start SelloUz */}
                            <Modal
                                isOpen={isOpen}
                                onRequestClose={toggleModalOne}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalOne}>
                                        &#10060;
                                        {/*<img src="/img/cancel.svg" alt="close icon"/>*/}
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <SelloUz/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloUz */}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalTwo}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Sello logistics</span>
                                </div>
                            </figure>

                            {/* Start SelloLogistics */}
                            <Modal
                                isOpen={isOpen2}
                                onRequestClose={toggleModalTwo}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalTwo}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <SelloLogistics/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloLogistics */}
                        </li>

                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <figure onClick={toggleModalThree}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Sello partners</span>
                                </div>
                            </figure>

                            {/*Start SelloPartners*/}
                            <Modal
                                isOpen={isOpen3}
                                onRequestClose={toggleModalThree}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalThree}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <SelloPartners/>
                                    </div>
                                </div>
                            </Modal>
                            {/*End  SelloPartners*/}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}


                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure onClick={toggleModalFour}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title">Ziraat bank Uzbekistan</span>
                                </div>
                            </figure>

                            <Modal
                                isOpen={isOpen4}
                                onRequestClose={toggleModalFour}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFour}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <ZiraatUz/>
                                    </div>
                                </div>
                            </Modal>
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalFive}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Ziraat bank admin panel</span>
                                </div>
                            </figure>

                            {/* Start SelloLogistics */}
                            <Modal
                                isOpen={isOpen5}
                                onRequestClose={toggleModalFive}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFive}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <ZiraatAdmin/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloLogistics */}
                        </li>


                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <figure onClick={toggleModalSix}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Ziraat Bank Instant Payments</span>
                                </div>
                            </figure>

                            <Modal
                                isOpen={isOpen6}
                                onRequestClose={toggleModalSix}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSix}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <ZiraatInstant/>
                                    </div>
                                </div>
                            </Modal>
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}


                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure onClick={toggleModalSeven}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title">Tenge Bank website for legal entities</span>
                                </div>
                            </figure>

                            {/* Start SelloUz */}
                            <Modal
                                isOpen={isOpen7}
                                onRequestClose={toggleModalSeven}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSeven}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <TengeUz/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloUz */}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalEight}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Tenge Bank Physical admin</span>
                                </div>
                            </figure>
                            <Modal
                                isOpen={isOpen8}
                                onRequestClose={toggleModalEight}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalEight}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>

                                    <div className="box_inner portfolio">
                                        <TengePhysicalAdmin/>
                                    </div>
                                </div>
                            </Modal>
                        </li>

                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <figure onClick={toggleModalNine}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Tenge Bank Juridic Admin</span>
                                </div>
                            </figure>

                            {/*Start SelloPartners*/}
                            <Modal
                                isOpen={isOpen9}
                                onRequestClose={toggleModalNine}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalNine}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <TengeJuridicAdmin/>
                                    </div>
                                </div>
                            </Modal>
                            {/*End  SelloPartners*/}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}

                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalTen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-9.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Telegram Profile</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen10}
                                onRequestClose={toggleModalTen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSeven}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <Telegram/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalEleven}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-5.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> TUNE CONSULTING</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen11}
                                onRequestClose={toggleModalEleven}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalEleven}>
                                        toggleModalEleven
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <TuneConsultingUz/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalTwelve}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> AWESOME CSS ELEMENTS</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen12}
                                onRequestClose={toggleModalTwelve}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalTwelve}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <AwesomeCssElements/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalThirteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Food truck</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen13}
                                onRequestClose={toggleModalThirteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalThirteen}>
                                        toggleModalThirteen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <FoodTruck/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalFourteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-4.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> OCTAVIA VUE ADMIN TEMPLATE</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen14}
                                onRequestClose={toggleModalFourteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFourteen}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <OctaviaAdminTemplate/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalFiveteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-5.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> BONIK</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen15}
                                onRequestClose={toggleModalFiveteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFiveteen}>
                                        toggleModalFiveteen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <BonikTemplate/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalSixteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> XAMIN TEMPLATE</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen16}
                                onRequestClose={toggleModalSixteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSixteen}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <XaminTemplate/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}
                    </ul>
                </TabPanel>
                {/* End All Project */}

                <TabPanel>
                    <ul className="row grid justify-content-center">
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure onClick={toggleModalOne}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title">Sello.uz</span>
                                </div>
                            </figure>

                            {/* Start SelloUz */}
                            <Modal
                                isOpen={isOpen}
                                onRequestClose={toggleModalOne}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalOne}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <SelloUz/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloUz */}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalTwo}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Sello logistics</span>
                                </div>
                            </figure>

                            {/* Start SelloLogistics */}
                            <Modal
                                isOpen={isOpen2}
                                onRequestClose={toggleModalTwo}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalTwo}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <SelloLogistics/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloLogistics */}
                        </li>

                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <figure onClick={toggleModalThree}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Sello partners</span>
                                </div>
                            </figure>

                            {/*Start SelloPartners*/}
                            <Modal
                                isOpen={isOpen3}
                                onRequestClose={toggleModalThree}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalThree}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <SelloPartners/>
                                    </div>
                                </div>
                            </Modal>
                            {/*End  SelloPartners*/}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}


                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure onClick={toggleModalFour}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title">Ziraat bank Uzbekistan</span>
                                </div>
                            </figure>

                            <Modal
                                isOpen={isOpen4}
                                onRequestClose={toggleModalFour}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFour}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <ZiraatUz/>
                                    </div>
                                </div>
                            </Modal>
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalFive}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Ziraat bank admin panel</span>
                                </div>
                            </figure>

                            {/* Start SelloLogistics */}
                            <Modal
                                isOpen={isOpen5}
                                onRequestClose={toggleModalFive}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFive}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <ZiraatAdmin/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloLogistics */}
                        </li>


                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <figure onClick={toggleModalSix}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Ziraat Bank Instant Payments</span>
                                </div>
                            </figure>

                            <Modal
                                isOpen={isOpen6}
                                onRequestClose={toggleModalSix}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSix}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <ZiraatInstant/>
                                    </div>
                                </div>
                            </Modal>
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}


                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure onClick={toggleModalSeven}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title">Tenge Bank website for legal entities</span>
                                </div>
                            </figure>

                            {/* Start SelloUz */}
                            <Modal
                                isOpen={isOpen7}
                                onRequestClose={toggleModalSeven}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSeven}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <TengeUz/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloUz */}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalEight}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Tenge Bank Physical admin</span>
                                </div>
                            </figure>
                            <Modal
                                isOpen={isOpen8}
                                onRequestClose={toggleModalEight}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalEight}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>

                                    <div className="box_inner portfolio">
                                        <TengePhysicalAdmin/>
                                    </div>
                                </div>
                            </Modal>
                        </li>

                        <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                        >
                            <figure onClick={toggleModalNine}>
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Tenge Bank Juridic Admin</span>
                                </div>
                            </figure>

                            {/*Start SelloPartners*/}
                            <Modal
                                isOpen={isOpen9}
                                onRequestClose={toggleModalNine}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalNine}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <TengeJuridicAdmin/>
                                    </div>
                                </div>
                            </Modal>
                            {/*End  SelloPartners*/}
                        </li>

                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalEleven}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-5.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> TUNE CONSULTING</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen11}
                                onRequestClose={toggleModalEleven}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalEleven}>
                                        toggleModalEleven
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <TuneConsultingUz/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}
                    </ul>
                </TabPanel>
                {/* EndSello.uz */}

                <TabPanel>
                    <ul className="row grid justify-content-center">
                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalTen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-9.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Telegram Profile</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen10}
                                onRequestClose={toggleModalTen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSeven}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <Telegram/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalTwelve}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-1.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> AWESOME CSS ELEMENTS</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen12}
                                onRequestClose={toggleModalTwelve}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalTwelve}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <AwesomeCssElements/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalThirteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-2.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Food truck</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen13}
                                onRequestClose={toggleModalThirteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalThirteen}>
                                        toggleModalThirteen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <FoodTruck/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalFourteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-4.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> OCTAVIA VUE ADMIN TEMPLATE</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen14}
                                onRequestClose={toggleModalFourteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFourteen}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <OctaviaAdminTemplate/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalFiveteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-5.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> BONIK</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen15}
                                onRequestClose={toggleModalFiveteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalFiveteen}>
                                        toggleModalFiveteen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <BonikTemplate/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>


                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalSixteen}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> XAMIN TEMPLATE</span>
                                </div>
                            </figure>

                            {/* Start Telegram */}
                            <Modal
                                isOpen={isOpen16}
                                onRequestClose={toggleModalSixteen}
                                contentLabel="My dialog"
                                className="custom-modal dark"
                                overlayClassName="custom-overlay dark"
                                closeTimeoutMS={500}
                            >
                                <div>
                                    <button className="close-modal" onClick={toggleModalSixteen}>
                                        toggleModalTen
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <XaminTemplate/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>

                        {/* <!-- Portfolio Item Ends --> */}
                    </ul>
                </TabPanel>
                {/* End Logo Project */}
            </div>
        </Tabs>
    );
};

export default Portfolio;
