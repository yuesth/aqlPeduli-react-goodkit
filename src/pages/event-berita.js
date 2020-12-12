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
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `386px`, height: `359px` }}>
                        {/* <SkeletonTheme color="#e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={360} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        {/* </SkeletonTheme> */}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `386px`, height: `359px` }}>
                        {/* <SkeletonTheme color="e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={360} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        {/* </SkeletonTheme> */}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `386px`, height: `359px` }}>
                        {/* <SkeletonTheme color="e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={360} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
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

    const moreDataAB = (val) => {
        setVisibleAB(prev => prev + 3)
    }
    const moreDataSB = (val) => {
        setVisibleSB(prev => prev + 3)
    }
    const moreDataSUB = (val) => {
        setVisibleSUB(prev => prev + 3)
    }

    function ListEvent(props) {
        const listevent = props.data.slice(0, props.vis).map((doc, idx) => {
            // if (idx < 3) {
            return (
                <div className={`col-md-4 col-lg-4 col-sm-6 mt-0 mb-3 mt-2 fade-in`}>
                    <div className={`card card-sm rounded-top-left rounded-bottom-right lift lift-lg`}>
                        <div>
                            <img className="card-img-top rounded-top-left img-fluid img-berita" src={doc.gambar} alt="imageEvent" />
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
                            <div style={{ minHeight: `4rem` }}>
                                <h3>
                                    {doc.judul}
                                </h3>
                            </div>
                            <span className="small text-muted mt-n1 mb-0">
                                <DariTanggal tanggal={doc.mulai}></DariTanggal> - <DariTanggal tanggal={doc.selesai}></DariTanggal>
                            </span>
                            <Link to={`/berita/${doc.id}`}>
                                <a className="stretched-link" href="" />
                            </Link>
                        </div>
                    </div>
                </div>
            )
            // }
        })
        return (
            <>
                {listevent}
            </>
        )
    }
    const urlBerita = "http://167.99.72.148/events"
    const [event, setEvent] = useState([])
    const [visibleAB, setVisibleAB] = useState(3)
    const [visibleSB, setVisibleSB] = useState(3)
    const [visibleSUB, setVisibleSUB] = useState(3)
    const [isLoadingevent, setIsLoadingevent] = useState(true);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setEvent(parsedJson)
            setIsLoadingevent(false)

        })
    }, [])
    const itemEvent = []
    event.map(data => {
        // if (data.kategoriberita.namaKategori === "Event") {
        var item1 = {
            id: `${data.id}`,
            mulai: `${data.tanggalmulaiEvent}`,
            selesai: `${data.tanggalselesaiEvent}`,
            judul: `${data.judulEvent}`,
            isi: `${data.isiEvent}`,
            gambar: data.gambarEvent[0].url,
        }
        itemEvent.push(item1)
        // }
    })

    const sortedItemEvent = itemEvent.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const sedangevent = sortedItemEvent.filter((doc, idx) => {
        return (new Date(doc.mulai) < Date.now() && new Date(doc.selesai) > Date.now())
    })
    const akanevent = sortedItemEvent.filter((doc, idx) => {
        return (new Date(doc.mulai) > Date.now() && new Date(doc.selesai) > Date.now())
    })
    const sudahevent = sortedItemEvent.filter((doc, idx) => {
        return (new Date(doc.mulai) < Date.now() && new Date(doc.selesai) < Date.now())
    })
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-8 pt-md-12">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
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
                            <ListEvent data={akanevent} warna={`success`} status={`Komunitas`} vis={visibleAB} loadmore={moreDataAB}></ListEvent>
                        }
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <buton className="btn btn-sm btn-primary" onClick={moreDataAB}>
                                Lihat Lainnya
                            </buton>
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
                            <ListEvent data={sedangevent} warna={`info`} status={`Live Streaming`} vis={visibleSB} loadmore={moreDataSB}></ListEvent>
                        }
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <button className="btn btn-sm btn-primary" onClick={moreDataSB}>
                                Lihat Lainnya
                        </button>
                        </div>
                    </div>


                    <div className="row mb-4">
                        <div className="col-12 col-md-12">
                            <h2>
                                Sudah Berlangsung
                                <div className="border-event-akan"></div>
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-4">
                        {isLoadingevent ? <SkeletonEvent></SkeletonEvent>
                            :
                            <ListEvent data={sudahevent} warna={`primary`} status={`Success`} vis={visibleSUB} loadmore={moreDataSUB}></ListEvent>
                        }
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto">
                            <button className="btn btn-sm btn-primary" onClick={moreDataSUB}>
                                Lihat Lainnya
                        </button>
                        </div>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default EventBerita