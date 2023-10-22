import React from "react";
import SearchBar from "../SearchButton/SearchButton";
import "../RecipePage/Recipe.css"; // Assuming Recipe.css is in the same directory as this file
import homePageImage from "../Images/HomePage.jpg";
import RecipeLogo from '../Images/RecipeLogo.jpg';

const NewPage = () => {
  return (
    <div style={{ height: "98vh", padding: "0", margin: "0" }}>
      <div
        style={{
          height: "10vh",
          background: "black",
          position: "fixed",
          padding: "0",
          margin: "0",
          top: "0",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={RecipeLogo}
            alt="Logo"
            style={{
              maxWidth: "100px",
              margin: "0",
              padding: "0",
              background: "transparent",
              height: "4vh",
            }}
          />
          <h2
            style={{
              color: "white",
              margin: "0",
              padding: "0",
              fontSize: "1.2rem",
            }}
          >
            RECIPE FINDER
          </h2>
        </div>
        <SearchBar />
      </div>
      <div className="container">
        <div className="image-container">
          <img
            src={homePageImage}
            alt="Food Image"
          />
        </div>
        <div className="text-container">
          <h4 className="animated-text">
            "If you are a chef, no matter how good a chef you are, it's not good
            cooking for yourself; the joy is in cooking for others."
          </h4>
          <h4 style={{ color: "gray" }}>SEARCH YOUR RECIPES FROM ABOVE</h4>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
