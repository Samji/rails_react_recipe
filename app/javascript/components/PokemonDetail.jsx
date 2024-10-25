import React from "react";
import { Link } from "react-router-dom";

const PokemonDetail = () => {
    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <img
                     className="img-fluid position-absolute"
                />
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    Pokemon Name
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ul className="list-group">
                            <h5 className="mb-2">Stats</h5>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <h5 className="mb-2">Description</h5>
                        <div>Content</div>
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                        >
                            Delete Pokemon
                        </button>
                    </div>
                </div>
                <Link to="/pokemon" className="btn btn-link">
                    List all Pokemon
                </Link>
            </div>
        </div>
    );
};

export default PokemonDetail;