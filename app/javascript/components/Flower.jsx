import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Flower = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [flower, setFlower] = useState([]);

    useEffect(() => {
        const url = `/api/v1/show/${params.id}`;
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then((response) => setFlower(response))
            .catch(() => navigate("/flowers"));
    }, [params.id]);

    const addHtmlEntities = (str) => {
        return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    };

    const deleteFlower = () => {
        const url = `/api/v1/destroy/${params.id}`;
        const token = document.querySelector('meta[name="csrf-token"]').content;

        fetch(url, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(() => navigate("/flowers"))
        .catch((error) => console.log(error.message));
    };

    return (
        <div className="">
            <div className="hero position-relative d-flex align-items-center justify-content-center">
                <img
                    src={flower.image}
                    alt={`${flower.name} image`}
                    className="img-fluid position-absolute"
                 />
                <div className="overlay bg-dark position-absolute" />
                <h1 className="display-4 position-relative text-white">
                    {flower.name}
                </h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ul className="list-group">
                            <h5 className="mb-2">Colour</h5>
                            {flower.colour}
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <h5 className="mb-2">Description</h5>
                        {flower.description}
                        <div />
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <button
                         type="button"
                         className="btn btn-danger"
                         onClick={deleteFlower}
                        >
                            Delete Flower
                        </button>
                    </div>
                </div>
                <Link to="/flowers" className="btn btn-link">
                    Back to flowers
                </Link>
            </div>
        </div>
    );
};

export default Flower;