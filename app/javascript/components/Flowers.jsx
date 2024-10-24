import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Flowers = () => {
    const navigate = useNavigate();
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        const url = "/api/v1/flowers/index";
        fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then((res) => setFlowers(res))
        .catch(() => navigate("/"));
    }, []);

    const allFlowers = flowers.map((flower, index) => (
        <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
                <img
                    src={flower.image}
                    className="card-img-top"
                    alt={`${flower.name} image`}
                 />
                <div className="card-body">
                    <h5 className="card-title">{flower.name}</h5>
                    <Link to={`/flower/${flower.id}`} className="btn custom-button">
                        View Flower
                    </Link>
                </div>
            </div>
        </div>
    ));

    const noFlower = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
                No flowers yet. Why not <Link to="/new_flower">create one</Link>
            </h4>
        </div>
    );

    return (
        <div>
            <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Flowers for every occasion</h1>
              <p className="lead text-muted">
                We’ve pulled together our most popular flowers, our latest
                additions, and our editor’s picks, so there’s sure to be something
                tempting for you to buy.
              </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="text-end mb-3">
                <Link to="/flower" className="btn custom-button">
                  Create New Flower
                </Link>
              </div>
              <div className="row">
                {allFlowers}
              </div>
              <Link to="/" className="btn btn-link">
                Home
              </Link>
            </main>
          </div>
        </div>
    );
};

export default Flowers;