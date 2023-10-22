import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import SearchBar from "../SearchButton/SearchButton.js";
import "./Recipe.css";
import { TailSpin } from "react-loader-spinner";
import { ArrowBack, Save, Visibility } from "@mui/icons-material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function RecipeReviewCard() {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const recipeList = useSelector((state) => state.recipe);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (recipe) => {
    if (favorites.includes(recipe)) {
      setFavorites(favorites.filter((fav) => fav !== recipe));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  if (activeTab === "favorites" && favorites.length < 1) {
    return (
      <div className="loading-container">
        <TailSpin color="#00BFFF" height={80} width={80} />
        <h1 className="loading-text">Save your favorite recipes</h1>
        <IconButton onClick={() => setActiveTab("all")}>
          <ArrowBack />
          Go Back to Add
        </IconButton>
      </div>
    );
  }
  if (!recipeList || recipeList.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h2>
          No information available, try finding it again. Sorry for the
          inconvenience caused. Click Here
        </h2>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <ArrowRightAltIcon />
            <HomeIcon />
          </IconButton>
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-dots">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
        <p className="loading-text">Please wait. Loading...</p>
      </div>
    );
  }

  return (
    <div>
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
            src="https://st4.depositphotos.com/18664664/22485/v/450/depositphotos_224850436-stock-illustration-recipe-icon-trendy-recipe-logo.jpg"
            alt="Logo"
            style={{
              maxWidth: "100px",
              margin: "0",
              padding: "0",
              background: "transparent",
              height: "3vh",
            }}
          />
          <h1
            style={{
              color: "white",
              margin: "0",
              padding: "0",
              fontSize: "1.2rem",
            }}
          >
            RECIPE FINDER
          </h1>
        </div>
        <div>
          <button
            onClick={() => setActiveTab("all")}
            style={{
              color: activeTab === "all" ? "red" : "white",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            style={{
              color: activeTab === "favorites" ? "red" : "white",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            SAVED
          </button>
        </div>
        <SearchBar />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          margin: "12vh",
        }}
      >
        {activeTab === "all"
          ? recipeList?.map((recipe, index) => (
              <div
                key={index}
                style={{
                  width: "17%",
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {activeTab === "all" ||
                (activeTab === "favorites" && favorites.includes(recipe)) ? (
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "#89718a",
                    }}
                  >
                    <CardHeader
                      title={recipe.recipe.label}
                      subheader={
                        Array.isArray(recipe.recipe.dishType) &&
                        recipe.recipe.dishType.length > 0
                          ? recipe.recipe.dishType[0].charAt(0).toUpperCase() +
                            recipe.recipe.dishType[0].slice(1)
                          : ""
                      }
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={recipe.recipe.image}
                      alt="Recipe Image"
                      sx={{ height: "20vh", margin: "auto", width: "70%" }}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive recipe is for{" "}
                        {recipe.recipe.mealType.join(", ")}
                      </Typography>
                    </CardContent>
                    <CardActions
                      disableSpacing
                      sx={{ justifyContent: "space-between" }}
                    >
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => toggleFavorite(recipe)}
                      >
                        {favorites.includes(recipe) ? (
                          <Save style={{ color: "skyblue" }} />
                        ) : (
                          <Save />
                        )}
                      </IconButton>
                      <IconButton
                        aria-label="view ingredients"
                        onClick={() => window.open(recipe.recipe.url, "_blank")}
                      >
                        <Visibility />
                      </IconButton>
                    </CardActions>
                  </Card>
                ) : null}
              </div>
            ))
          : activeTab === "favorites"
          ? favorites.map((recipe, index) => (
              <div
                key={index}
                style={{
                  width: "17%",
                  backgroundColor: "#f2f2f2",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {activeTab === "all" ||
                (activeTab === "favorites" && favorites.includes(recipe)) ? (
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "#89718a",
                    }}
                  >
                    <CardHeader
                      title={recipe.recipe.label}
                      subheader={
                        Array.isArray(recipe.recipe.dishType) &&
                        recipe.recipe.dishType.length > 0
                          ? recipe.recipe.dishType[0].charAt(0).toUpperCase() +
                            recipe.recipe.dishType[0].slice(1)
                          : ""
                      }
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image={recipe.recipe.image}
                      alt="Recipe Image"
                      sx={{ height: "20vh", margin: "auto", width: "70%" }}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Ingredients:
                      </Typography>
                      <ul>
                        {recipe.recipe.ingredientLines.map((ingredient, i) => (
                          <li key={i}>{ingredient}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions
                      disableSpacing
                      sx={{ justifyContent: "space-between" }}
                    >
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => toggleFavorite(recipe)}
                      >
                        {favorites.includes(recipe) ? (
                          <Save style={{ color: "skyblue" }} />
                        ) : (
                          <Save />
                        )}
                      </IconButton>
                      <IconButton
                        aria-label="view ingredients"
                        onClick={() => window.open(recipe.recipe.url, "_blank")}
                      >
                        <Visibility />
                      </IconButton>
                    </CardActions>
                  </Card>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
