import React from "react";

const ModalOneBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          <span>Starting point</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Nazarov Asadbek
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 4 March 2022
        </span>
        <span>
          <i className="fa fa-tags"></i> self-instruction
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Who am I? Where am I going? And why?</h1>
      <img src="img/blog/firstBlog.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="quotebox">
          <div className="icon">
            {/*<img src="img/blog/quote.svg" alt="blog quote" />*/}
          </div>
          <p>
          </p>
        </div>
        <p>
        </p>
        <p>
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
