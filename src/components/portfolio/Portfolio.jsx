import React, {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import Modal from "react-modal";
import SelloUz from "./modal/sello-uz";
import SelloPartners from "./modal/sello-partners";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import Telegram from "./modal/telegram";
import ModalEightContent from "./modal/ModalEightContent";
import SelloLogistics from "./modal/sello-logistics";
import ZiraatUz from "./modal/ziraat-uz";
import ZiraatAdmin from "./modal/ziraat-admin";
import ZiraatInstant from "./modal/ziraat-instant";
import TengeUz from "./modal/tenge-uz";
import TengePhysicalAdmin from "./modal/tenge-physical-admin";
import TengeJuridicAdmin from "./modal/tenge-juridic-admin";

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
                        {/* <!-- Portfolio Item Ends --> */}
                        {/* <!-- Portfolio Item Starts --> */}
                        <li
                            className="direction-reveal"
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <figure
                                className="direction-reveal__card"
                                onClick={toggleModalNine}
                            >
                                <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio"/>
                                <div className=" hover-content-wrapper">
                                    <span className="content-title"> Sello logistics</span>
                                </div>
                            </figure>

                            {/* Start SelloLogistics */}
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
                                        <SelloLogistics/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  SelloLogistics */}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}
                        {/* <!-- Portfolio Item Starts --> */}
                        {/*<li*/}
                        {/*    className="direction-reveal"*/}
                        {/*    data-aos="fade-right"*/}
                        {/*    data-aos-duration="1200"*/}
                        {/*    data-aos-delay="200"*/}
                        {/*>*/}
                        {/*  <figure*/}
                        {/*      className="direction-reveal__card"*/}
                        {/*      onClick={toggleModalSix}*/}
                        {/*  >*/}
                        {/*    <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio" />*/}
                        {/*    <div className=" hover-content-wrapper">*/}
                        {/*      <span className="content-title">Sello.uz</span>*/}
                        {/*    </div>*/}
                        {/*  </figure>*/}

                        {/* Start ModalSixContent */}
                        {/*<Modal*/}
                        {/*    isOpen={isOpen6}*/}
                        {/*    onRequestClose={toggleModalSix}*/}
                        {/*    contentLabel="My dialog"*/}
                        {/*    className="custom-modal dark"*/}
                        {/*    overlayClassName="custom-overlay dark"*/}
                        {/*    closeTimeoutMS={500}*/}
                        {/*>*/}
                        {/*  <div>*/}
                        {/*    <button className="close-modal" onClick={toggleModalSix}>*/}
                        {/*      <img src="/img/cancel.svg" alt="close icon" />*/}
                        {/*    </button>*/}
                        {/*    /!* End close icon *!/*/}

                        {/*    <div className="box_inner portfolio">*/}
                        {/*      <ModalSixContent />*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Modal>*/}
                        {/* End  ModalSixContent */}
                        {/*</li>*/}
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
                                    <button className="close-modal" onClick={toggleModalTen}>
                                        <img src="/img/cancel.svg" alt="close icon"/>
                                    </button>
                                    {/* End close icon */}

                                    <div className="box_inner portfolio">
                                        <Telegram/>
                                    </div>
                                </div>
                            </Modal>
                            {/* End  Telegram */}
                        </li>
                        {/* <!-- Portfolio Item Ends --> */}
                        {/* <!-- Portfolio Item Starts --> */}
                        {/*<li*/}
                        {/*  className="direction-reveal"*/}
                        {/*  data-aos="fade-right"*/}
                        {/*  data-aos-duration="1200"*/}
                        {/*  data-aos-delay="0"*/}
                        {/*>*/}
                        {/*  <figure*/}
                        {/*    className="direction-reveal__card"*/}
                        {/*    onClick={toggleModalFour}*/}
                        {/*  >*/}
                        {/*    <img src="https://tunis.ibthemespro.com/img/projects/project-4.jpg" alt="Portolio" />*/}
                        {/*    <div className=" hover-content-wrapper">*/}
                        {/*      <span className="content-title"> Local Video Project</span>*/}
                        {/*    </div>*/}
                        {/*  </figure>*/}

                        {/* Start ModalFourContent */}
                        {/*<Modal*/}
                        {/*  isOpen={isOpen4}*/}
                        {/*  onRequestClose={toggleModalFour}*/}
                        {/*  contentLabel="My dialog"*/}
                        {/*  className="custom-modal dark"*/}
                        {/*  overlayClassName="custom-overlay dark"*/}
                        {/*  closeTimeoutMS={500}*/}
                        {/*>*/}
                        {/*  <div>*/}
                        {/*    <button className="close-modal" onClick={toggleModalFour}>*/}
                        {/*      <img src="/img/cancel.svg" alt="close icon" />*/}
                        {/*    </button>*/}
                        {/*    /!* End close icon *!/*/}

                        {/*    <div className="box_inner portfolio">*/}
                        {/*      <ModalFourContent />*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Modal>*/}
                        {/* End  ModalFourContent */}
                        {/*</li>*/}
                        {/* <!-- Portfolio Item Ends --> */}

                        {/* <!-- Portfolio Item Starts --> */}
                        {/*<li*/}
                        {/*  className="direction-reveal"*/}
                        {/*  data-aos="fade-right"*/}
                        {/*  data-aos-duration="1200"*/}
                        {/*  data-aos-delay="100"*/}
                        {/*>*/}
                        {/*  <figure*/}
                        {/*    className="direction-reveal__card"*/}
                        {/*    onClick={toggleModalFive}*/}
                        {/*  >*/}
                        {/*    <img src="https://tunis.ibthemespro.com/img/projects/project-5.jpg" alt="Portolio" />*/}
                        {/*    <div className=" hover-content-wrapper">*/}
                        {/*      <span className="content-title"> Saas App Project</span>*/}
                        {/*    </div>*/}
                        {/*  </figure>*/}

                        {/* Start ModalFiveContent */}
                        {/*<Modal*/}
                        {/*  isOpen={isOpen5}*/}
                        {/*  onRequestClose={toggleModalFive}*/}
                        {/*  contentLabel="My dialog"*/}
                        {/*  className="custom-modal dark"*/}
                        {/*  overlayClassName="custom-overlay dark"*/}
                        {/*  closeTimeoutMS={500}*/}
                        {/*>*/}
                        {/*  <div>*/}
                        {/*    <button className="close-modal" onClick={toggleModalFive}>*/}
                        {/*      <img src="/img/cancel.svg" alt="close icon" />*/}
                        {/*    </button>*/}
                        {/*    /!* End close icon *!/*/}

                        {/*    <div className="box_inner portfolio">*/}
                        {/*      <ModalFiveContent />*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Modal>*/}
                        {/* End  ModalFiveContent */}
                        {/*</li>*/}
                        {/* <!-- Portfolio Item Ends --> */}

                        {/* <!-- Portfolio Item Starts --> */}
                        {/*<li*/}
                        {/*  className="direction-reveal"*/}
                        {/*  data-aos="fade-right"*/}
                        {/*  data-aos-duration="1200"*/}
                        {/*  data-aos-delay="200"*/}
                        {/*>*/}
                        {/*  <figure*/}
                        {/*    className="direction-reveal__card"*/}
                        {/*    onClick={toggleModalSix}*/}
                        {/*  >*/}
                        {/*    <img src="https://tunis.ibthemespro.com/img/projects/project-6.jpg" alt="Portolio" />*/}
                        {/*    <div className=" hover-content-wrapper">*/}
                        {/*      <span className="content-title">Sello.uz</span>*/}
                        {/*    </div>*/}
                        {/*  </figure>*/}

                        {/* Start ModalSixContent */}
                        {/*<Modal*/}
                        {/*  isOpen={isOpen6}*/}
                        {/*  onRequestClose={toggleModalSix}*/}
                        {/*  contentLabel="My dialog"*/}
                        {/*  className="custom-modal dark"*/}
                        {/*  overlayClassName="custom-overlay dark"*/}
                        {/*  closeTimeoutMS={500}*/}
                        {/*>*/}
                        {/*  <div>*/}
                        {/*    <button className="close-modal" onClick={toggleModalSix}>*/}
                        {/*      <img src="/img/cancel.svg" alt="close icon" />*/}
                        {/*    </button>*/}
                        {/*    /!* End close icon *!/*/}

                        {/*    <div className="box_inner portfolio">*/}
                        {/*      <ModalSixContent />*/}
                        {/*    </div>*/}
                        {/*  </div>*/}
                        {/*</Modal>*/}
                        {/* End  ModalSixContent */}
                        {/*</li>*/}
                        {/* <!-- Portfolio Item Ends --> */}
                    </ul>
                </TabPanel>
                {/* End Logo Project */}
            </div>
        </Tabs>
    );
};

export default Portfolio;
