import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PokemonNew = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [health, setHealth] = useState("");
    const [attack, setAttack] = useState("");
    const [defense, setDefense] = useState("");
    const [speed, setSpeed] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImageURL] = useState("");

    const stripHtmlEntities = (str) => {
        return String(str)
          .replace(/\n/g, "<br> <br>")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
    };

    const onChange = (event, setFunction) => {
        setFunction(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const url = "/api/v1/pokemon/create";

        if (name.length == 0 || health.length == 0 || attack.length == 0 || defense.length == 0 || speed.length == 0 || description.length == 0 || image.length == 0)
            return;
        const body = {
            name,
            health,
            attack,
            defense,
            speed,
            description: stripHtmlEntities(description),
            image
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => navigate(`/pokemon/${response.id}`))
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new Pokemon to your Pokedex!
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="pokemonName">Pokemon Name</label>
                            <input
                                type="text"
                                name="Name"
                                id="pokemonName"
                                 className="form-control"
                                 required
                                 onChange={(event) => onChange(event, setName)}
                             />
                        </div>
                        <h3 className="mt-2">Stats</h3>
                        <div className="mb-3 mt-3 row">
                            <label htmlFor="pokemonHP" className="col-sm-1 col-form-label">HP</label>
                            <div className="col-sm-11">
                                <input
                                    type="text"
                                    name="HP"
                                    id="pokemonHP"
                                    className="form-control"
                                    required
                                 onChange={(event) => onChange(event, setHealth)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="pokemonAttack" className="col-sm-1 col-form-label">ATK</label>
                            <div className="col-sm-11">
                                <input
                                    type="text"
                                    name="ATK"
                                    id="pokemonAttack"
                                    className="form-control"
                                    required
                                    onChange={(event) => onChange(event, setAttack)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="pokemonDefense" className="col-sm-1 col-form-label">DEF</label>
                            <div className="col-sm-11">
                                <input
                                    type="text"
                                    name="Defense"
                                    id="pokemonDefense"
                                    className="form-control"
                                    required
                                    onChange={(event) => onChange(event, setDefense)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="pokemonSpeed" className="col-sm-1 col-form-label">SPD</label>
                            <div className="col-sm-11">
                                <input
                                    type="text"
                                    name="Speed"
                                    id="pokemonSpeed"
                                    className="form-control"
                                    required
                                    onChange={(event) => onChange(event, setSpeed)}
                                />
                            </div>
                        </div>
                        <label htmlFor="pokemonDescription">Description</label>
                        <textarea
                            className="form-control"
                            id="PokemonDescription"
                            name="Description"
                            rows="5"
                            required
                            onChange={(event) => onChange(event, setDescription)}
                         />
                        <label htmlFor="pokemonImageUrl">Image URL</label>
                        <input
                            type="url"
                            name="URL"
                            id="pokemonImageURL"
                            className="form-control"
                            required
                            onChange={(event) => onChange(event, setImageURL)}
                         />
                        <button type="submit" className="btn custom-button mt-3">
                            Add Pokemon
                        </button>
                        <Link to="/pokemon" className="btn btn-link mt-3">
                            Back to Pokedex
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PokemonNew;