import React from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import BeritaHeader from "../components/berita/berita-header"
import BeritaList from "../components/berita/berita-list"

function Berita(){
    return(
        <>
        <NavbarGK></NavbarGK>
        <section className="pt-8 pt-md-12">
            <div className="container-lg">
                <BeritaHeader></BeritaHeader>
                <BeritaList></BeritaList>
            </div>
        </section>
        <FooterGK></FooterGK>
        </>
    )
}

export default Berita