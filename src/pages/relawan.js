import React, { useState, useEffect } from 'react'
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Container, Row, Col } from "react-bootstrap"
// import "./relawan.css"

function Relawan() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-11">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Relawan AQL Peduli<br />
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Relawan