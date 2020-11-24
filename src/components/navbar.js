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
                    <Link className="nav-link" id="landingsDropdown" to={{
                        pathname: `/program`,
                    }} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1" style={{fontWeight:`bold`}}>Kepedulian</h3>
                    </Link>
                    {/* <li className="nav-item"> */}
                    <a className="nav-link" id="landingsDropdown" href="/profil" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1" style={{fontWeight:`bold`}}>Profil</h3>
                    </a>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                    <a className="nav-link" id="pagesDropdown" href="/berita" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1" style={{fontWeight:`bold`}}>Berita</h3>
                    </a>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown lift"> */}
                    <a className="nav-link" id="accountDropdown" href="/informasi" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1" style={{fontWeight:`bold`}}>Informasi</h3>
                    </a>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown lift"> */}
                    <a className="nav-link" id="docsDropdown" href="/khazanah" role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1" style={{fontWeight:`bold`}}>Khazanah</h3>
                    </a>
                    {/* </li> */}
                </ul>
                <ul className="navbar-nav justify-content-end w-100 pr-lg-6">

                    <a href="#"><button className="navbar-donasi lift mt-1">DONASI</button></a>
                    <a href="#"><button className="navbar-relawan lift mt-1">RELAWAN</button></a>
                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}

export default NavbarGK