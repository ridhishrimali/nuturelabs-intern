import React from "react";
import "../css/ExpertInfo.css";
import Avatar from "../Images/avatar3.jpg";

function ExpertInfo() {
  return (
    <div className="expertinfo">
      <div className="expertinfo__image__container">
        <img src={Avatar} className="expertinfo__image" />
        <p>
          Price:{" "}
          <span style={{ color: "#088c84", fontSize: "1.1em" }}>FREE</span>{" "}
        </p>
        <p>
          <i class="fa fa-star" aria-hidden="true"></i>
          4.9 (120)
        </p>
      </div>
      <div className="expertinfo__desc">
        <div className="expertinfo__desc__head">
          <h4 style={{ fontWeight: "bolder" }}>David Melvik</h4>
          <div className="expertinfo__desc__head__right">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <button>View Profile</button>
          </div>
        </div>
        <p>Founder @ The Millennials & CEO @ABC</p>
        <div className="expertinfo__linebar">
          <span>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            02 Free Sessions Available
          </span>
          <span>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            Tampa, FL, USA
          </span>
          <span>
            <i class="fa fa-language" aria-hidden="true"></i>
            Greek, English, French
          </span>
        </div>
        <div className="expertinfo__about">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            elementum arcu et elit congue, at porta eros mollis. Donec id mauris
            eget odio dapibus pretium sit amet et ante. Nullam rutrum nisl eu
            lacus accumsan rutrum.
          </span>
        </div>
        <div className="expertinfo__tags">
          <span>Marketing</span>
          <span>SEO</span>
          <span>Content Marketing</span>
          <span>Marketing Automation</span>
        </div>
      </div>
    </div>
  );
}

export default ExpertInfo;
