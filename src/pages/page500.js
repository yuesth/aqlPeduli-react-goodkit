import React from 'react'
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from 'react-router-dom'

function Page500() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-12 pt-md-12">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-md-5 mb-4">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <img src={`${process.env.PUBLIC_URL}/images/500.png`} className="img-fluid" alt="404Image" />
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-md-5 mb-4">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="mb-2 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                Kesalahan Internal Server <br />
                            </h2>
                            <h5 className="mb-2 mb-md-0" style={{ fontSize: `1.2rem` }}>
                                Silakan coba beberapa saat lagi
                            </h5>
                        </div>
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <Link className="btn btn-sm btn-primary" to={`/kepedulian`} style={{ backgroundColor: `rgb(47,57,144)` }}>
                                Kembali Ke Halaman Donasi
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Page500