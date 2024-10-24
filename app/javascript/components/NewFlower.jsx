import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewFlower = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [colour, setColour] = useState("");
    const [description, setDescription] = useState("");

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
        const url = "api/v1/flowers/create"

        if (name.length == 0 || colour.length == 0 || description.length == 0)
            return;

        const body = {
            name,
            colour,
            description: stripHtmlEntities(description),
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
        .then((response) => navigate(`/flower/${response.id}`))
        .catch((error) => console.log(error.message));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-normal mb-5">
                        Add a new flower to our amazing flower collection
                    </h1>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="flowerName">Flower Name</label>
                            <input
                                type="text"
                                name="name"
                                id="flowerName"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setName)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="flowerColour">Colour</label>
                            <input
                                type="text"
                                name="colour"
                                id="flowerColour"
                                className="form-control"
                                required
                                onChange={(event) => onChange(event, setColour)}
                            />
                            <small id="colourHelp" className="form-text text-muted">
                                Seperate each colour with a comma.
                            </small>
                        </div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="5"
                            required
                            onChange={(event) => onChange(event, setDescription)}
                        />
                        <button type="submit" className="btn custom-button mt-3">
                            Create Flower
                        </button>
                        <Link to="/flowers" className="btn btn-link mt-3">
                            Back to flowers
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewFlower;