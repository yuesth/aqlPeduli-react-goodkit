import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


function NavbarGK() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2" style={{ backgroundColor: `#ffffff` }}>
            <div className="container-lg">
                <a className="navbar-brand d-lg-none" href="/">AQL Peduli</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        <a className="nav-link lift" id="landingsDropdown" href="/program" role="button" aria-haspopup="true" aria-expanded="false">
                            <h3>Kepedulian</h3>
                        </a>
                        {/* <li className="nav-item"> */}
                        <a className="nav-link lift" id="landingsDropdown" href="/profil" role="button" aria-haspopup="true" aria-expanded="false">
                            <h3>Profil</h3>
                        </a>
                        {/* </li> */}
                        {/* <li className="nav-item"> */}
                        <a className="nav-link lift" id="pagesDropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <h3>Berita</h3>
                        </a>
                        {/* </li> */}
                        {/* <li className="nav-item dropdown lift"> */}
                        <a className="nav-link lift" id="accountDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <h3>Informasi</h3>
                        </a>
                        {/* </li> */}
                        {/* <li className="nav-item dropdown lift"> */}
                        <a className="nav-link lift" id="docsDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <h3>Khazanah</h3>
                        </a>
                        <a href="#"><button className="navbar-donasi lift">DONASI</button></a>
                        <a href="#"><button className="navbar-relawan lift">RELAWAN</button></a> 
                        {/* </li> */}
                        {/* <li className="nav-item dropdown lift"> *h3
                        {/* </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarGK