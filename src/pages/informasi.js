import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import Galeri from "../components/informasi/galeri"
import Emagz from "../components/informasi/emagz"
import { Link } from "react-router-dom"
import "./informasi.css"

function Informasi() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-9">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Informasi <br />
                            </h2>
                        </div>
                    </div>
                    <Galeri></Galeri>
                    <Emagz></Emagz>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Informasi