import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import {Col, Breadcrumb} from 'react-bootstrap'
import "./nasional-berita.css"

function SkeletonBeritaHeader() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row mt-6 mb-5">
                <div className="col-6">
                    <Skeleton reactangle={true} height={360} width={548} />
                </div>
                <div className="col-3">
                    <Skeleton reactangle={true} height={160} width={242} />
                    <br />
                    <Skeleton reactangle={true} height={160} width={242} />
                </div>
                <div className="col-3">
                    <Skeleton reactangle={true} height={160} width={242} />
                    <br />
                    <Skeleton reactangle={true} height={160} width={242} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

function BeritaHeaderNas(props) {
    const listberitaheadernas = props.data.map((doc, idx) => {
        if (idx === 0) {
            return (
                <Link to={`/berita/${doc.id}`}>
                    <div className="berita-header-img">
                        <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
                        <div className="shadow-header"></div>
                        <div className="carousel-caption text-left capt-berita-header">
                            <span className="badge badge-berlin badge-danger">{doc.kategori}</span>
                            <h2 className="text-white judul-berita-lain">
                                {doc.judul}
                            </h2>
                        </div>
                    </div>
                </Link>
            )
        }
    })
    const listberitaheaderlainnas = props.data.map((doc, idx) => {
        if (idx > 0 && idx < 5) {
            // if(doc.kategori === "Berita Nasional"){
            return (
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1">
                    <Link to={`/berita/${doc.id}`}>
                        <div className="berita-headerlain-img h-100">
                            <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
                            <div className="shadow-header"></div>
                            <div className="carousel-caption text-left capt-beritalain-header">
                                <span className="badge badge-berlin badge-danger">{doc.kategori}</span>
                                <h6 style={{ color: `white` }} className="judul-berita-lain">
                                    {doc.judul}
                                </h6>
                            </div>
                        </div>
                    </Link>
                </div>
            )
            // }
        }
    })
    return (
        <>
            <div className="row align-items-center justify-content-center mb-7">
                <div className="col-md-6" style={{ textAlign: `center` }}>
                    <h2 className="display-4 mb-4 mb-md-0">
                        Berita Nasional<br />
                    </h2>
                </div>
            </div>
            <div className="row mb-2">
                <Col md={12} lg={12} className="px-auto">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/berita" style={{ textDecoration: `none`, color: `#E92998` }}>Berita</Breadcrumb.Item>
                        <Breadcrumb.Item active>Berita Nasional</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </div>
            {props.isloadingberheadernas ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
                :
                <div className="row mt-6 mb-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        {listberitaheadernas}
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex no-gutters" style={{ flexFlow: `row wrap` }}>
                        {listberitaheaderlainnas}
                    </div>
                </div>
            }
        </>
    )
}

function BeritaListNas(props) {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }
    const listberitanas = props.data.map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        var namaClass = "item-berita " + namaKategoriBeritaLain
        if (namaKategoriBeritaLain !== "Event") {
            if (namaKategoriBeritaLain === "BeritaNasional") {
                return (
                    <div className="col-12 col-md-8 mb-5 mt-4">
                        <div className={`card rounded-top-left rounded-bottom-right ${namaClass}`}>
                            <div className="row">
                                <div className="col-4 col-md-4 rounded-top-left py-auto">
                                    <img className="img-fluid h-100" src={`${doc.gambar}`} alt="..." width="250" height="200"/>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="card-body p-5">
                                        <span className="badge badge-berlin badge-danger">Nasional</span>
                                        <span className="small text-muted mt-n1 mb-0 ml-2">
                                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                        </span>
                                        <h2 className="display-6 judul-ber-list-nas">
                                            {doc.judul}
                                        </h2>
                                        <Link to={`/berita/${doc.id}`} className="stretched-link"></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    })
    return (
        <>
            <div className="row mt-6 mb-5 justify-content-center">
                {/* <div className="col-10-col-md-10"> */}
                {listberitanas}
                {/* </div> */}
            </div>
        </>
    )
}

function BeritaNasional() {
    const urlBerita = "http://167.99.72.148/beritas"
    const [beritanas, setBeritanas] = useState([])
    const [isLoadingberheadernas, setIsLoadingberheadernas] = useState(true);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setBeritanas(parsedJson)
            setIsLoadingberheadernas(false)
        })
    })
    const itemBerita = []
    beritanas.map(data => {
        if (data.kategoriberita.namaKategori === "Berita Nasional") {
            var item1 = {
                id: `${data.id}`,
                penulis: `${data.penulisBerita}`,
                tanggal: `${data.tanggalBerita}`,
                judul: `${data.judulBerita}`,
                isi: `${data.isiBerita}`,
                tag: `${data.tagBerita}`,
                gambar: `http://167.99.72.148${data.gambarBerita.url}`,
                kategori: `${data.kategoriberita.namaKategori}`
            }
            itemBerita.push(item1)
        }
    })
    const sortedItemBerita = itemBerita.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-11">
                <div className="container-xl">
                    <BeritaHeaderNas data={sortedItemBerita} isloadingberheadernas={isLoadingberheadernas}></BeritaHeaderNas>
                    <BeritaListNas data={sortedItemBerita}></BeritaListNas>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default BeritaNasional