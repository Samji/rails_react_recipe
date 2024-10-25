import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonDetail = () => {
    const params = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => setPokemon(response))
            .catch(() => navigate("/pokemon"));
    }, [params.id]);

    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <img
                    src={pokemon.image}
                    alt={`${pokemon.name} image`}
                     className="img-fluid position-absolute"
                />
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    {pokemon.name}
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ul className="list-group">
                            <h5 className="mb-2">Stats</h5>
                            <li>HP: {pokemon.health}</li>
                            <li>Attack: {pokemon.attack}</li>
                            <li>Defense: {pokemon.defense}</li>
                            <li>Speed: {pokemon.speed}</li>
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