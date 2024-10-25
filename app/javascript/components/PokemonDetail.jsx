import React from "react";
import { Link } from "react-router-dom";

const PokemonDetail = () => {
    return (
        <div>
            <div>
                <img />
                <div>
                    <h1>Pokemon Name</h1>
                </div>
                <div>
                    <div>
                        <div>
                            <ul>
                                <h5>Stats</h5>
                            </ul>
                        </div>
                        <div>
                            <h5>Description</h5>
                            <div>Content</div>
                            <div>
                                <button>Delete Pokemon</button>
                            </div>
                        </div>
                        <Link>
                            List all Pokemon
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;