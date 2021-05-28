import React, { useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import BeritaHeader from "../components/berita/berita-header"
import BeritaList from "../components/berita/berita-list"
import ReactGA from 'react-ga'


function Berita() {
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, [])
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                <div className="container-xl">
                    <BeritaHeader></BeritaHeader>
                    <BeritaList></BeritaList>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Berita