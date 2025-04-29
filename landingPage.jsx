import React from "react";
import barsSolid1 from "./bars-solid-1.svg";
import blackWhiteMinimalistBusinessLogo1 from "./black-white-minimalist-business-logo-1.png";
import bookSolid1 from "./book-solid-1.svg";
import image1 from "./image-1.png";
import line1 from "./line-1.svg";
import rectangle2 from "./rectangle-2.png";
import rightFromBracketSolid1 from "./right-from-bracket-solid-1.svg";
import "./style.css";
import trophySolid1 from "./trophy-solid-1.svg";
import userSolid1 from "./user-solid-1.svg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="image" alt="Image" src={image1} />

          <img className="rectangle" alt="Rectangle" src={rectangle2} />

          <div className="div" />

          <img className="bars-solid" alt="Bars solid" src={barsSolid1} />

          <img
            className="right-from-bracket"
            alt="Right from bracket"
            src={rightFromBracketSolid1}
          />

          <div className="ellipse" />

          <img className="user-solid" alt="User solid" src={userSolid1} />

          <div className="text-wrapper">@user1083712</div>

          <div className="text-wrapper-2">HomePage</div>

          <div className="text-wrapper-3">Subject</div>

          <div className="text-wrapper-4">Study Room</div>

          <div className="text-wrapper-5">Review</div>

          <img className="trophy-solid" alt="Trophy solid" src={trophySolid1} />

          <div className="text-wrapper-6">quiz</div>

          <div className="text-wrapper-7">task</div>

          <img className="book-solid" alt="Book solid" src={bookSolid1} />

          <img
            className="black-white"
            alt="Black white"
            src={blackWhiteMinimalistBusinessLogo1}
          />

          <div className="rectangle-2" />

          <div className="text-wrapper-8">Start Your Study Journey</div>

          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis eros at mi consectetur commodo. Nam fringilla diam nisi,
            at egestas metus pellentesque non. Vivamus congue metus turpis, ac
            facilisis dui dictum et. Phasellus bibendum, massa sed maximus
            aliquam, lectus orci ultrices dolor, ac tincidunt nibh leo in dui.
            Donec dictum dictum eros, in ornare libero porttitor at. Aliquam
            erat volutpat. Pellentesque in dignissim nunc. Aenean nisi mi,
            egestas quis turpis eget, gravida suscipit augue. Pellentesque
            blandit eros diam, eu aliquet ligula tempor ut. Nulla ultricies sem
            vel enim malesuada ultricies. Aliquam efficitur nibh ultricies diam
            bibendum porttitor. Morbi vitae
          </p>

          <img className="line" alt="Line" src={line1} />

          <div className="rectangle-3" />

          <div className="text-wrapper-9">Sign up/in</div>
        </div>
      </div>
    </div>
  );
};