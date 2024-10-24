import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Food Recipes</h1>
        <p className="lead">
          A curated list of recipes for the best homemade meal and delicacies.
        </p>
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Recipes
        </Link>
        <hr className="my-4" />
      </div>
      <div className="container secondary-color">
        <h1 className="display-4">Flowers</h1>
        <p className="lead">
          A curated list of flowers for the best colour and vibrance.
        </p>
        <Link
          to="/flowers"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Flowers
        </Link>
        <hr className="my-4" />
      </div>
    </div>
  </div>
);