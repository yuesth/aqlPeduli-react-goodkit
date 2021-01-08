import React from "react"
import "./navbar.css"
import { Link } from "react-router-dom"


function NavbarGK() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top p-2" style={{ backgroundColor: `#ffffff` }}>
            {/* <div className="container-lg"> */}
            <a className="navbar-brand d-lg-none" href="/">
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo-aql2.png`}
                    width="90"
                    height="60"
                    className="d-inline-block align-top"
                    alt="AQL logo"
                />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <a className="navbar-brand d-none d-lg-block pl-lg-6 pr-lg-2" href="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/logo-aql2.png`}
                        width="100"
                        height="60"
                        className="d-inline-block align-top"
                        alt="AQL logo"
                    />
                </a>
                {/* <ul className="navbar-nav justify-content-start w-100">
                </ul> */}
                <ul className="navbar-nav justify-content-end w-100 pr-lg-6">
                    <Link className="nav-link px-3" id="landingsDropdown" to={{
                        pathname: `/kepedulian`,
                        state:{
                            namaKateg: ""
                        }
                    }} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1">Kepedulian</h3>
                    </Link>
                    {/* <li className="nav-item"> */}
                    <Link className="nav-link px-3" id="landingsDropdown" to={`/profil`} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1">Profil</h3>
                    </Link>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                    <Link className="nav-link px-3" id="pagesDropdown" to={`/berita`} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1">Berita</h3>
                    </Link>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown lift"> */}
                    <Link className="nav-link px-3" id="accountDropdown" to={`/informasi`} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1">Informasi</h3>
                    </Link>
                    {/* </li> */}
                    {/* <li className="nav-item dropdown lift"> */}
                    <Link className="nav-link px-3" id="docsDropdown" to={`/khazanah`} role="button" aria-haspopup="true" aria-expanded="false">
                        <h3 className="mt-1">Khazanah</h3>
                    </Link>
                    {/* </li> */}
                    <Link to={`/kepedulian`}><button className="navbar-donasi lift mt-1">DONASI</button></Link>
                    <Link to={`/relawan`}><button className="navbar-relawan lift mt-1">RELAWAN</button></Link>
                </ul>
            </div>
            {/* </div> */}
        </nav>
    )
}

export default NavbarGK