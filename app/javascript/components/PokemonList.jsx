import React from "react";
import { Link } from "react-router-dom";

const Pokemon =() => {
    return (
        <>
            <section>
                <div>
                    <h1>Pokemon</h1>
                    <p>Gotta Catch Em Allll!!!!</p>
                </div>
            </section>
            <div>
                <main>
                    <div>
                        <Link to="/">
                            Add a Pokemon
                        </Link>
                    </div>
                    <div>
                        Content
                    </div>
                    <Link to="/">
                        Home
                    </Link>
                </main>
            </div>
        </>
    );
};

export default Pokemon;