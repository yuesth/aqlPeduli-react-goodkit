import React from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import CarouselLanding from "../components/landing/carousel"
import KepedulianLanding from "../components/landing/kepedulian"
import KepeduliankitaLanding from "../components/landing/kk"
import UpdateLanding from "../components/landing/update"
import BeritaLanding from "../components/landing/berita"

function Landing() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <div className="bg-dark mb-10" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/dist/assets/img/patterns/pattern-1.svg)` }}>
                <CarouselLanding></CarouselLanding>
            </div>
            <KepedulianLanding></KepedulianLanding>
            <KepeduliankitaLanding></KepeduliankitaLanding>
            <div className="bg-dark" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/dist/assets/img/patterns/pattern-1.svg)` }}>
                <UpdateLanding></UpdateLanding>
            </div>
            <BeritaLanding></BeritaLanding>
            <FooterGK></FooterGK>
        </>

    )
}

export default Landing