import React, { useState } from "react";
import "./Body.css";
import image from "../image/Image2.png";

const Body = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const tabLinks = document.querySelectorAll(".tab-container .tabs li");
    tabLinks.forEach((tab) => {
      tab.classList.remove("active");
    });
    document.querySelector(`li[data-tab='${tab}']`).classList.add("active");
  };

  return (
    <>
      <div className="body-container">
        <div className="left-column">
          <h2>How you can contribute to protect Earth</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="tab-container">
          <div className="tabs">
            <li className="active" onClick={() => handleTabClick("overview")}>
              Overview
            </li>

            <li data-tab="impact" onClick={() => handleTabClick("impact")}>
              Impact
            </li>
            <li
              data-tab="whatyouget"
              onClick={() => handleTabClick("whatyouget")}
            >
              What You Get
            </li>
          </div>
          <div>
            {activeTab === "overview" && (
              <>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <p>
                  {" "}
                  Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </>
            )}
            {activeTab === "impact" && <p>This is Impact section Text</p>}
            {activeTab === "whatyouget" && (
              <p>This is What You get section text</p>
            )}
          </div>
        </div>
      </div>
      <div className="lower-body">
        <h2 className="lower-h2">How we use your donation</h2>
        <p className="upper-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Nunc ut sem vitae risus tristique posuere.
        </p>
        <p className="lower-p">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo
          cursus id rutrum lorem imperdiet.
        </p>
      </div>
      <div className="image-container">
        <img
          className="Image"
          src={image}
          alt="windmill"
          width={1670}
          height={384}
        />
        <div className="overlay"></div>
        <div className="center">
          <h2 className="center-text">
            You can contribute to make the environment greener!
          </h2>
          <div className="button-container">
            <button className="green-btn">Join as a volunteer</button>
            <button className="white-btn">Donate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
