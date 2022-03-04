import React, {useState} from "react";
import Modal from "react-modal";

import ModalOneBlogContent from "./modal/ModalOneBlogContent";

Modal.setAppElement("#root");

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    function toggleModalTwo() {
        setIsOpen2(!isOpen2);
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

    return (
        <>
            {/* Blog 1 Starts */}
            <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                <article className="post-container" onClick={toggleModalOne}>
                    <div className="post-thumb">
                        <div className="d-block position-relative overflow-hidden">
                            <img
                                src="img/blog/firstBlog.jpg"
                                className="img-fluid"
                                alt="Blog Post"
                            />
                        </div>
                    </div>
                    {/* End .thumb */}
                    <div className="post-content">
                        <div className="entry-header">
                            <h3>Starting point</h3>
                        </div>
                        <div className="entry-content open-sans-font">
                            <p>
                                Who am I? Where am I going? And why?
                            </p>
                        </div>
                    </div>
                    {/* End .post-content */}
                </article>

                {/* Start ModalOneBlogContent */}
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
                            <img src="img/cancel.svg" alt="close icon"/>
                        </button>
                        {/* End close icon */}

                        <div className="box_inner blog-post">
                            <ModalOneBlogContent/>
                        </div>
                    </div>
                </Modal>
                {/* End  ModalOneBlogContent */}
            </div>
            {/*  Blog 1 Ends */}

            {/*  Blog 2 Starts */}
            {/*  Blog 2 Ends */}

            {/*  Blog 3 Starts */}
            {/* Blog 3 Ends */}

            {/* Blog 4 Starts */}
            {/* Blog 4  Ends */}

            {/*  Blog 5 Starts */}
            {/*  Blog 5 Ends */}

            {/* Blog 6 Starts */}
            {/* Blog 6 Ends */}
        </>
    );
};

export default Blog;
