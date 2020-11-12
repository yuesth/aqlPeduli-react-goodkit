import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { usePromiseTracker, trackPromise } from 'react-promise-tracker'
import Carousel from "react-elastic-carousel"
import "./berita.css"

function SkeletonBerutLayout() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="card mx-3" style={{ width: `1010px`, height: `346px` }}>
                <div className="row">
                    <div className="col-6">
                        <div className="mr-2">
                            <Skeleton reactangle={true} height={330} width={500} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h2><Skeleton /></h2>
                            <br />
                            <p><Skeleton count={4}></Skeleton></p>
                            <Skeleton reactangle={true} height={10} width={50} />
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function SkeletonBerlinLayout() {
    return (
        <div style={{ display: `flex` }}>
            <div className="card mx-3" style={{ width: `370px`, height: `350px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={170} width={347} />
                    <h3><Skeleton /></h3>
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
            <div className="card mx-3" style={{ width: `370px`, height: `350px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={170} width={347} />
                    <h3><Skeleton /></h3>
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
            <div className="card mx-3" style={{ width: `370px`, height: `350px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={170} width={347} />
                    <h3><Skeleton /></h3>
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
        </div>
    )
}

function Berita() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }
    const urlBerita = "http://167.99.72.148/beritas"
    const [berita, setBerita] = useState([])
    const [isLoadingber, setIsLoadingber] = useState(true);
    useEffect(() => {
        // trackPromise(
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setBerita(parsedJson)
            setTimeout(() => {
                setIsLoadingber(false)
            }, 5000)
        })
        // )
    })
    const itemBerita = []
    berita.map(data => {
        if (data.gambarBerita !== null) {
            var item1 = {
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
        else {
            var item2 = {
                penulis: `${data.penulisBerita}`,
                tanggal: `${data.tanggalBerita}`,
                judul: `${data.judulBerita}`,
                isi: `${data.isiBerita}`,
                tag: `${data.tagBerita}`,
                kategori: `${data.kategoriberita.namaKategori}`
            }
            itemBerita.push(item2)
        }
    })
    const sortedItemBerita = itemBerita.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const beritaUtama = sortedItemBerita.map((doc, idx) => {
        if (idx == 0) {
            return (
                <div className="card card-lg rounded-top-left rounded-bottom-right lift lift-lg mb-5">
                    <div className="row no-gutters">
                        <div className="col-md-6 bg-cover rounded-top-left my-n2" style={{ backgroundImage: `url(${doc.gambar})`, backgroundPosition: 'center right', maxHeight: `340px` }}>
                            <img className="img-fluid invisible" src={`${doc.gambar}`} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body p-5">
                                <h6 className="font-family-sans-serif text-primary mb-2">
                                    {doc.kategori}
                                </h6>
                                <h2 className="display-6 mb-4">
                                    {doc.judul}
                                </h2>
                                <p className="mb-4 isi-berut">
                                    {doc.isi}
                                </p>
                                <div className="d-flex align-items-center">
                                    {/* <div className="avatar avatar-xs">
                                        <img className="avatar-img rounded-circle" src={`${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-1.jpg`} alt="..." />
                                    </div> */}
                                    <div className="ml-4 text-left">
                                        <p className="mb-0">
                                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                        </p>
                                        <p className="small text-muted mt-n1 mb-0">
                                            {doc.penulis}
                                        </p>
                                    </div>
                                </div>
                                <a className="stretched-link" href="blog-post.html" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })
    const beritalain = sortedItemBerita.map((doc, idx) => {
        if (idx !== 0 && idx < 4) {
            return (
                <div className="col-md-4">
                    <div className="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                        <img className="card-img-top rounded-top-left" src={doc.gambar} alt="..." height="170" />
                        <div className="position-relative">
                            <div className="shape shape-fluid-x shape-top text-white">
                                <div className="shape-img pb-5">
                                    <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h4 className="mb-2 judul-berlin">
                                {doc.judul}
                            </h4>
                            {/* <p className="font-size-sm mb-4 isi-berlin">
                                {doc.isi}
                            </p> */}
                            <div className="d-flex align-items-center">
                                {/* <div className="avatar avatar-xs">
                                    <img className="avatar-img rounded-circle" src="assets/img/avatars/avatar-3.jpg" alt="..." />
                                </div> */}
                                <div className="text-left">
                                    {/* <p className="small mb-0">
                                        {doc.penulis}
                                    </p> */}
                                    <p className="small text-muted mt-n1 mb-0">
                                        <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                    </p>
                                </div>
                            </div>
                            <a className="stretched-link" href="blog-post.html" />
                        </div>
                    </div>
                </div>
            )
        }
    })
    return (
        <section className="pt-9 pt-md-11">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <div style={{ textAlign: `center` }} className="mb-7">
                            <h2 className="display-4 mb-4 mb-md-0">
                                Berita
                            </h2>
                        </div>
                        <div className="position-relative">
                            <div className="position-absolute top-right text-warning mt-n11 mr-n7">
                                <svg width={185} height={186} viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="currentColor" /><circle cx={22} cy={2} r={2} fill="currentColor" /><circle cx={42} cy={2} r={2} fill="currentColor" /><circle cx={62} cy={2} r={2} fill="currentColor" /><circle cx={82} cy={2} r={2} fill="currentColor" /><circle cx={102} cy={2} r={2} fill="currentColor" /><circle cx={122} cy={2} r={2} fill="currentColor" /><circle cx={142} cy={2} r={2} fill="currentColor" /><circle cx={162} cy={2} r={2} fill="currentColor" /><circle cx={182} cy={2} r={2} fill="currentColor" /><circle cx={2} cy={22} r={2} fill="currentColor" /><circle cx={22} cy={22} r={2} fill="currentColor" /><circle cx={42} cy={22} r={2} fill="currentColor" /><circle cx={62} cy={22} r={2} fill="currentColor" /><circle cx={82} cy={22} r={2} fill="currentColor" /><circle cx={102} cy={22} r={2} fill="currentColor" /><circle cx={122} cy={22} r={2} fill="currentColor" /><circle cx={142} cy={22} r={2} fill="currentColor" /><circle cx={162} cy={22} r={2} fill="currentColor" /><circle cx={182} cy={22} r={2} fill="currentColor" /><circle cx={2} cy={42} r={2} fill="currentColor" /><circle cx={22} cy={42} r={2} fill="currentColor" /><circle cx={42} cy={42} r={2} fill="currentColor" /><circle cx={62} cy={42} r={2} fill="currentColor" /><circle cx={82} cy={42} r={2} fill="currentColor" /><circle cx={102} cy={42} r={2} fill="currentColor" /><circle cx={122} cy={42} r={2} fill="currentColor" /><circle cx={142} cy={42} r={2} fill="currentColor" /><circle cx={162} cy={42} r={2} fill="currentColor" /><circle cx={182} cy={42} r={2} fill="currentColor" /><circle cx={2} cy={62} r={2} fill="currentColor" /><circle cx={22} cy={62} r={2} fill="currentColor" /><circle cx={42} cy={62} r={2} fill="currentColor" /><circle cx={62} cy={62} r={2} fill="currentColor" /><circle cx={82} cy={62} r={2} fill="currentColor" /><circle cx={102} cy={62} r={2} fill="currentColor" /><circle cx={122} cy={62} r={2} fill="currentColor" /><circle cx={142} cy={62} r={2} fill="currentColor" /><circle cx={162} cy={62} r={2} fill="currentColor" /><circle cx={182} cy={62} r={2} fill="currentColor" /><circle cx={2} cy={82} r={2} fill="currentColor" /><circle cx={22} cy={82} r={2} fill="currentColor" /><circle cx={42} cy={82} r={2} fill="currentColor" /><circle cx={62} cy={82} r={2} fill="currentColor" /><circle cx={82} cy={82} r={2} fill="currentColor" /><circle cx={102} cy={82} r={2} fill="currentColor" /><circle cx={122} cy={82} r={2} fill="currentColor" /><circle cx={142} cy={82} r={2} fill="currentColor" /><circle cx={162} cy={82} r={2} fill="currentColor" /><circle cx={182} cy={82} r={2} fill="currentColor" /><circle cx={2} cy={102} r={2} fill="currentColor" /><circle cx={22} cy={102} r={2} fill="currentColor" /><circle cx={42} cy={102} r={2} fill="currentColor" /><circle cx={62} cy={102} r={2} fill="currentColor" /><circle cx={82} cy={102} r={2} fill="currentColor" /><circle cx={102} cy={102} r={2} fill="currentColor" /><circle cx={122} cy={102} r={2} fill="currentColor" /><circle cx={142} cy={102} r={2} fill="currentColor" /><circle cx={162} cy={102} r={2} fill="currentColor" /><circle cx={182} cy={102} r={2} fill="currentColor" /><circle cx={2} cy={122} r={2} fill="currentColor" /><circle cx={22} cy={122} r={2} fill="currentColor" /><circle cx={42} cy={122} r={2} fill="currentColor" /><circle cx={62} cy={122} r={2} fill="currentColor" /><circle cx={82} cy={122} r={2} fill="currentColor" /><circle cx={102} cy={122} r={2} fill="currentColor" /><circle cx={122} cy={122} r={2} fill="currentColor" /><circle cx={142} cy={122} r={2} fill="currentColor" /><circle cx={162} cy={122} r={2} fill="currentColor" /><circle cx={182} cy={122} r={2} fill="currentColor" /><circle cx={2} cy={142} r={2} fill="currentColor" /><circle cx={22} cy={142} r={2} fill="currentColor" /><circle cx={42} cy={142} r={2} fill="currentColor" /><circle cx={62} cy={142} r={2} fill="currentColor" /><circle cx={82} cy={142} r={2} fill="currentColor" /><circle cx={102} cy={142} r={2} fill="currentColor" /><circle cx={122} cy={142} r={2} fill="currentColor" /><circle cx={142} cy={142} r={2} fill="currentColor" /><circle cx={162} cy={142} r={2} fill="currentColor" /><circle cx={182} cy={142} r={2} fill="currentColor" /><circle cx={2} cy={162} r={2} fill="currentColor" /><circle cx={22} cy={162} r={2} fill="currentColor" /><circle cx={42} cy={162} r={2} fill="currentColor" /><circle cx={62} cy={162} r={2} fill="currentColor" /><circle cx={82} cy={162} r={2} fill="currentColor" /><circle cx={102} cy={162} r={2} fill="currentColor" /><circle cx={122} cy={162} r={2} fill="currentColor" /><circle cx={142} cy={162} r={2} fill="currentColor" /><circle cx={162} cy={162} r={2} fill="currentColor" /><circle cx={182} cy={162} r={2} fill="currentColor" /><circle cx={2} cy={182} r={2} fill="currentColor" /><circle cx={22} cy={182} r={2} fill="currentColor" /><circle cx={42} cy={182} r={2} fill="currentColor" /><circle cx={62} cy={182} r={2} fill="currentColor" /><circle cx={82} cy={182} r={2} fill="currentColor" /><circle cx={102} cy={182} r={2} fill="currentColor" /><circle cx={122} cy={182} r={2} fill="currentColor" /><circle cx={142} cy={182} r={2} fill="currentColor" /><circle cx={162} cy={182} r={2} fill="currentColor" /><circle cx={182} cy={182} r={2} fill="currentColor" /></svg>
                            </div>
                        </div>
                        {isLoadingber ? <SkeletonBerutLayout></SkeletonBerutLayout>
                            :
                            beritaUtama
                        }
                    </div>
                </div>
                <div className="row mt-2">
                    {isLoadingber ? <SkeletonBerlinLayout></SkeletonBerlinLayout>
                        :
                        beritalain
                    }
                </div>
                <div className="row align-items-center mb-8">
                    <div className="mx-auto">
                        <a className="btn btn-sm btn-primary" href="#!">
                            Lihat Semua
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Berita