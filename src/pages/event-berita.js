import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./event-berita.css"
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
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('id-ID', { month: 'short' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }
    function DariTanggalSamping(props) {
        var dariTanggal = new Date(props.tanggal)
        var tanggal = dariTanggal.getDate().toString()
        var bulan = dariTanggal.toLocaleString('id-ID', { month: 'short' })
        var tahun = dariTanggal.getFullYear()
        return (
            <>
                <p style={{ fontWeight: `600`, fontSize: `24px` }} className="m-0">
                    {tanggal}
                </p>
                <p style={{ fontWeight: `500`, fontSize: `14px` }} className="m-0">
                    {bulan}
                </p>
            </>
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
                        <div className="row no-gutters">
                            <div className="col-3">
                                <div className="text-white text-center rounded-top-left h-100 py-2" style={{ backgroundColor: `rgb(47, 57, 144)` }}>
                                    <DariTanggalSamping tanggal={doc.mulai}></DariTanggalSamping>
                                    <span style={{ fontSize: `12px` }}>
                                        s/d
                                </span>
                                    <DariTanggalSamping tanggal={doc.selesai}></DariTanggalSamping>
                                </div>
                            </div>
                            <div className="col-9">
                                <div>
                                    <img className="card-img-top img-fluid img-berita" src={doc.gambar} alt="imageEvent" />
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
                            <Link to={`/events/${doc.linkshare}`}>
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
    const urlBerita = "https://peaceful-meadow-45867.herokuapp.com/events"
    const [event, setEvent] = useState([])
    const [visibleAB, setVisibleAB] = useState(3)
    const [visibleSB, setVisibleSB] = useState(3)
    const [visibleSUB, setVisibleSUB] = useState(3)
    const [lenAB, setLenAB] = useState(0)
    const [lenSB, setLenSB] = useState(0)
    const [lenSUB, setLenSUB] = useState(0)
    const [isLoadingevent, setIsLoadingevent] = useState(true);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setEvent(parsedJson)
            setIsLoadingevent(false)
        })
    }, [])
    useEffect(() => {
        setLenSB(sedangevent.length)
        setLenAB(akanevent.length)
        setLenSUB(sudahevent.length)
    }, [])
    const itemEvent = []
    event.map(data => {
        var item1 = {
            id: `${data.id}`,
            mulai: `${data.tanggalmulaiEvent}`,
            selesai: `${data.tanggalselesaiEvent}`,
            judul: `${data.judulEvent}`,
            isi: `${data.isiEvent}`,
            gambar: data.gambarEvent[0].url,
            linkshare: `${data.linkShareEvent}`
        }
        itemEvent.push(item1)
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
                        <div className="col-md-10 col-lg-9 px-auto">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={`/berita`} style={{color:`rgb(47, 57, 144)`}}>
                                            Berita
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Events</li>
                                </ol>
                            </nav>
                            {/* <Breadcrumb>
                                <LinkContainer to="/berita">
                                    <Breadcrumb.Item style={{ textDecoration: `none`, color: `#E92998` }}>Berita</Breadcrumb.Item>
                                </LinkContainer>
                                <Breadcrumb.Item active>Events</Breadcrumb.Item>
                            </Breadcrumb> */}
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
                            <ListEvent data={akanevent} warna={`success`} status={`Komunitas`} vis={visibleAB}></ListEvent>
                        }
                    </div>
                    {
                        visibleAB >= lenAB ? <></>
                            :
                            <div className="row align-items-center mb-7">
                                <div className="mx-auto">
                                    <buton className="btn btn-sm btn-primary" onClick={moreDataAB}>
                                        Lihat Lainnya
                                    </buton>
                                </div>
                            </div>
                    }

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
                    {visibleSB >= lenSB ? <></>
                        :
                        <div className="row align-items-center mb-7">
                            <div className="mx-auto">
                                <button className="btn btn-sm btn-primary" onClick={moreDataSB}>
                                    Lihat Lainnya
                        </button>
                            </div>
                        </div>
                    }

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
                            <ListEvent data={sudahevent} warna={`primary`} status={`Sukses`} vis={visibleSUB} loadmore={moreDataSUB}></ListEvent>
                        }
                    </div>
                    {visibleSUB >= lenSUB ? <></>
                        :
                        <div className="row align-items-center mb-7">
                            <div className="mx-auto">
                                <button className="btn btn-sm btn-primary" onClick={moreDataSUB}>
                                    Lihat Lainnya
                        </button>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default EventBerita