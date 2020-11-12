import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"

function NavbarDetailKK() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top p-3" style={{ backgroundColor: `#ffffff` }}>
            <div className="container-lg">
                {/* Brand */}
                <a className="navbar-brand d-lg-none" href="./index.html">AQL Peduli</a>
                {/* Toggler */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navigation */}
                    <ul className="navbar-nav justify-content-end w-100">
                        {/* <li className="nav-item"> */}
                        <a className="nav-link" id="landingsDropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
                            <h4>Beranda</h4>
                        </a>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                        <a className="nav-link" id="landingsDropdown" href="/profil" role="button" aria-haspopup="true" aria-expanded="false">
                            <h4>Profil</h4>
                        </a>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                        <a className="nav-link" id="pagesDropdown" href="program" role="button" aria-haspopup="true" aria-expanded="false">
                            <h4>Kepedulian</h4>
                        </a>
                        {/* </li> */}
                    </ul>
                    {/* Brand */}
                    <a className="navbar-brand d-none d-lg-block px-lg-6" href="/">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logo-aql.png`}
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="AQL logo"
                        />
                    </a>
                    <ul className="navbar-nav justify-content-start w-100">
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="accountDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h3>Berita</h3>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="docsDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h3>Informasi</h3>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" id="docsDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h3>Khazanah</h3>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function DetailKK(props) {
    const id = props.match.params.id
    const urlDetailKk = `http://167.99.72.148/kepeduliankitas/${id}`
    const [detailkk, setDetailkk] = useState([])
    return (
        <>
            <NavbarDetailKK />
        </>
    )
}

export default DetailKK