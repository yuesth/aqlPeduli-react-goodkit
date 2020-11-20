import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import BeritaHeader from "../components/berita/berita-header"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import BeritaList from "../components/berita/berita-list"
import "./event-berita.css"
import { Col, Breadcrumb } from "react-bootstrap"
import { Link } from 'react-router-dom'

function SkeletonEvent() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `246px`, height: `367px` }}>
                        {/* <SkeletonTheme color="#e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={290} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                        {/* </SkeletonTheme> */}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `246px`, height: `367px` }}>
                        {/* <SkeletonTheme color="e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={290} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                        {/* </SkeletonTheme> */}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `246px`, height: `367px` }}>
                        {/* <SkeletonTheme color="e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={290} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                        {/* </SkeletonTheme> */}

                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function EventBerita() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }

    function ListEvent(props) {
        const listevent = props.data.map((doc, idx) => {
            if (idx < 3) {
                return (
                    <div className={`col-md-4 col-lg-4 col-sm-6 mt-0 mb-3 mt-2`}>
                        <div className={`card card-sm rounded-top-left rounded-bottom-right lift lift-lg`}>
                            <div>
                                <img className="card-img-top rounded-top-left img-fluid img-berita" src={doc.gambar} alt="..." />
                            </div>
                            <div className="position-relative">
                                <div className="shape shape-fluid-x shape-top text-white">
                                    <div className="shape-img pb-5">
                                        <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-2 pb-3">
                                <span className={`badge badge-${props.warna}`}>{props.status}</span>
                                <div style={{ minHeight: `7rem` }}>
                                    <h3>
                                        {doc.judul}
                                    </h3>
                                </div>
                                <span className="small text-muted mt-n1 mb-0">
                                    <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                </span>
                                <Link to={`/berita/${doc.id}`}>
                                    <a className="stretched-link" href="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return (
            <>
                {listevent}
            </>
        )
    }
    const urlBerita = "http://167.99.72.148/beritas"
    const [event, setEvent] = useState([])
    const [isLoadingevent, setIsLoadingevent] = useState(true);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setEvent(parsedJson)
            setIsLoadingevent(false)

        })
    })
    const itemBerita = []
    event.map(data => {
        if (data.kategoriberita.namaKategori === "Event") {
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
            <section className="pt-8 pt-md-12">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Events <br />
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <Col md={12} lg={12} className="px-auto">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/berita" style={{ textDecoration: `none`, color: `#E92998` }}>Berita</Breadcrumb.Item>
                                <Breadcrumb.Item active>Events</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </div>


                    <div className="row mb-4">
                        <div className="col-12 col-md-12">
                            <h2>
                                Akan Berlangsung
                                <div className="border-event-akan"></div>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        {isLoadingevent ? <SkeletonEvent></SkeletonEvent>
                            :
                            <ListEvent data={sortedItemBerita} warna={`success`} status={`Komunitas`}></ListEvent>
                        }
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <Link className="btn btn-sm btn-primary" to={`/berita`}>
                                Lihat Lainnya
                        </Link>
                        </div>
                    </div>


                    <div className="row mb-4">
                        <div className="col-12 col-md-12">
                            <h2>
                                Sedang Berlangsung
                                <div className="border-event-akan"></div>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        {isLoadingevent ? <SkeletonEvent></SkeletonEvent>
                            :
                            <ListEvent data={sortedItemBerita} warna={`info`} status={`Live Streaming`}></ListEvent>
                        }
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <Link className="btn btn-sm btn-primary" to={`/berita`}>
                                Lihat Lainnya
                        </Link>
                        </div>
                    </div>


                    <div className="row mb-4">
                        <div className="col-12 col-md-12">
                            <h2>
                                Akan Berlangsung
                                <div className="border-event-akan"></div>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        {isLoadingevent ? <SkeletonEvent></SkeletonEvent>
                            :
                            <ListEvent data={sortedItemBerita} warna={`info`} status={`Live Streaming`}></ListEvent>
                        }
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <Link className="btn btn-sm btn-primary" to={`/berita`}>
                                Lihat Lainnya
                        </Link>
                        </div>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default EventBerita