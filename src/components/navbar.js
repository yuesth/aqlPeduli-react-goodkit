import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


function NavbarGK() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2" style={{ backgroundColor: `#ffffff` }}>
            {/* <div className="container-lg"> */}
            <a className="navbar-brand d-lg-none" href="/">AQL Peduli</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand d-none d-lg-block pl-lg-6 pr-lg-2" href="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo-aql.png`}
                        width="100"
                        height="60"
                        className="d-inline-block align-top"
                        alt="AQL logo"
                    />
                </a>
                <ul className="navbar-nav justify-content-start w-100">
                    <Link className="nav-link px-3" id="landingsDropdown" to={{
                        pathname: `/program`,
                    }} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="navbar-teks">Kepedulian</h3>
                    </Link>
                    {/* <li className="nav-item"> */}
                    <a className="nav-link px-3" id="landingsDropdown" href="/profil" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="navbar-teks">Profil</h3>
                    </a>
                    {/* </li> */}
                </ul>
                <ul className="navbar-nav justify-content-end w-100 pr-lg-6">
                    {/* <li className="nav-item"> */}
                    <a className="nav-link px-3" id="pagesDropdown" href="/berita" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="navbar-teks">Berita</h3>
                    </a>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown lift"> */}
                    <a className="nav-link px-3" id="accountDropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="navbar-teks">Informasi</h3>
                    </a>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown lift"> */}
                    <a className="nav-link px-3" id="docsDropdown" href="/khazanah" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="navbar-teks">Khazanah</h3>
                    </a>
                    <a href="#"><button className="navbar-donasi lift">DONASI</button></a>
                    <a href="#"><button className="navbar-relawan lift">RELAWAN</button></a>
                    {/* </li> */}
                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}

export default NavbarGK