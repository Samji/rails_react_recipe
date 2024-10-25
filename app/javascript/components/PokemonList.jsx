import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemon =() => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const url = "/api/v1/pokemon/index";
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((res) => setPokemon(res))
            .catch((error) => console.log(error.message));
    }, []);

    const allPokemon = pokemon.map((pokemon, index) => (
        <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <img
                    src={pokemon.image}
                    className="card-img-top"
                 />
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <Link to="/" className="btn custom-button">
                        View Pokemon
                    </Link>
                </div>
            </div>
        </div>
    ));

    const noPokemon = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                There's no Pokemon! go get em!!
            </h4>
        </div>
    );

    return (
        <>
            <section className="jumbotron jumbotron-fluid text-center">
                <div className="container py-5">
                    <h1 className="display-4">Pokemon</h1>
                    <p className="lead text-muted">Gotta Catch Em Allll!!!!</p>
                </div>
            </section>
            <div className="py-5">
                <main className="container">
                    <div className="text-end mb-3">
                        <Link to="/" className="btn custom-button">
                            Add a Pokemon
                        </Link>
                    </div>
                    <div className="row">
                        {pokemon.length > 0 ? allPokemon : noPokemon}
                    </div>
                    <Link to="/" className="btn btn-link">
                        Home
                    </Link>
                </main>
            </div>
        </>
    );
};

export default Pokemon;