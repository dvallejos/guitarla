import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Guitar from "./components/Guitar.jsx";
import { db } from "./data/db";

import './App.css'

function App() {

    const [data] = useState(db);

    return (
        <>
            <Header />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    { data.map( guitar => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App
