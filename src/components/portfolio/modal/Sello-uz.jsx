import React from "react";

const SelloUz = () => {
  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>About Project</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">Website</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">OOO SELLO MARKETPLACE</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Langages </span>:{" "}
              <span className="ft-wt-600 uppercase">NuxtJS, Bootstrap, Java</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href="https://sello.uz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  sello.uz
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src="https://data.terabox.com/thumbnail/0d606a51798af268916917a537df369f?fid=436486862-250528-77446328789670&time=1645023600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-wJa0OexyjAhyUBfC01l5Ik1SCnI%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=9159835433514516843&dp-callid=0&size=c1600_u1600&quality=100&vuk=-&ft=video" alt="Portolio" />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default SelloUz;
