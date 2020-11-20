import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Col, Row, Button } from 'react-bootstrap'
import Sticky from 'wil-react-sticky'
import "./berita-list.css"

function SkeletonBeritaEvent() {
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
function SkeletonBeritaKateg() {
    return (
        <SkeletonTheme color="e3e3e3">
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
        </SkeletonTheme>
    )
}

function BeritaList() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("item-berita");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
    }
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    const urlBerita = "http://167.99.72.148/beritas"
    const [beritalist, setBeritalist] = useState([])
    const [isLoadingberlist, setIsLoadingberlist] = useState(true);
    const [isLoadingberkateg, setIsLoadingberkateg] = useState(true);
    const [isShowevent, setIsShowevent] = useState(true)
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setBeritalist(parsedJson)
            setIsLoadingberlist(false)
        })
    })
    const itemBerita = []
    beritalist.map(data => {
        if (data.gambarBerita !== null) {
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
        else {
            var item2 = {
                id: `${data.id}`,
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
    var it = 1
    const listevent = sortedItemBerita.map((doc, idx) => {
        var kategBerita = doc.kategori
        var namaKategoriBerita = kategBerita.replace(/\s/g, "")
        if (namaKategoriBerita == "Event" && it <= 3) {
            it += 1
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
                            <span className="badge badge-success">Live Streaming</span>
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
    const listberitalain = sortedItemBerita.map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        var namaClass = "item-berita " + namaKategoriBeritaLain
        if (namaKategoriBeritaLain !== "Event") {
            if (namaKategoriBeritaLain === "BeritaNasional") {
                return (
                    <div className={`card card-lg rounded-top-left rounded-bottom-right mb-7 lift ${namaClass}`}>
                        <div className="row no-gutters">
                            <div className="col-md-6 rounded-top-left">
                                <img className="img-fluid w-100 h-100" src={`${doc.gambar}`} alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body p-5">
                                    <span className="badge badge-berlin badge-danger">Nasional</span>
                                    <span className="small text-muted mt-n1 mb-0 ml-2">
                                        <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                    </span>
                                    <h2 className="display-6 mb-4">
                                        {doc.judul}
                                    </h2>
                                    <Link to={`/berita/${doc.id}`} className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else if (namaKategoriBeritaLain === "BeritaInternasional") {
                return (
                    <div className={`card card-lg rounded-top-left rounded-bottom-right mb-7 lift ${namaClass}`}>
                        <div className="row no-gutters">
                            <div className="col-md-6 rounded-top-left">
                                <img className="img-fluid" src={`${doc.gambar}`} alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body p-5">
                                    <span className="badge badge-berlin badge-primary">Internasional</span>
                                    <span className="small text-muted mt-n1 mb-0 ml-2">
                                        <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                    </span>
                                    <h2 className="display-6 mb-4">
                                        {doc.judul}
                                    </h2>
                                    <Link to={`/berita/${doc.id}`} className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    })
    var itBerNasUt = 1
    const beritanasionalutama = sortedItemBerita.map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        if (namaKategoriBeritaLain !== "Event") {
            if (namaKategoriBeritaLain === "BeritaNasional") {
                if (itBerNasUt === 1) {
                    itBerNasUt = itBerNasUt + 1
                    return (
                        <Link to={`/berita/${doc.id}`}>
                            <div className="berita-header-img">
                                <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
                                <div className="shadow-header"></div>
                                <div className="carousel-caption text-left capt-berita-header">
                                    <span className="badge badge-berlin badge-danger">{doc.kategori}</span>
                                    <h2 className="text-white">
                                        {doc.judul}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    )
                }
            }
        }
    })
    var itBerInterUt = 1
    const beritainterutama = sortedItemBerita.map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        if (namaKategoriBeritaLain !== "Event") {
            if (namaKategoriBeritaLain === "BeritaInternasional") {
                if (itBerInterUt === 1) {
                    itBerInterUt = itBerInterUt + 1
                    return (
                        <Link to={`/berita/${doc.id}`} style={{ boxShadow: `0 -100px 20px black inset` }}>
                            <div className="berita-header-img">
                                <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
                                <div className="shadow-header"></div>
                                <div className="carousel-caption text-left capt-berita-header">
                                    <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
                                    <h2 className="text-white">
                                        {doc.judul}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    )
                }
            }
        }
    })
    var itBerNasLain = 1
    const beritanasionallain = sortedItemBerita.map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        if (namaKategoriBeritaLain !== "Event") {
            if (namaKategoriBeritaLain === "BeritaNasional") {
                if (itBerNasLain === 1) {
                    // itBerNasLain = itBerNasLain + 1
                    return (
                        <div className={`card card-lg rounded-top-left border border-gray-300 rounded-bottom-right mb-4`}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="card-body p-5">
                                        <h6 className="mb-4 judul-berlin-nas">
                                            {doc.judul}
                                        </h6>
                                        <span className="badge badge-berlin badge-danger">Nasional</span>
                                        <br />
                                        <span className="small text-muted mt-n1 mb-0 ml-2" style={{ fontSize: `0.8rem` }}>
                                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                        </span>
                                        <Link to={`/berita/${doc.id}`} className="stretched-link"></Link>
                                    </div>
                                </div>
                                <div className="col-md-6 rounded-top-left">
                                    <img className="img-fluid w-100 h-70" src={`${doc.gambar}`} alt="..." style={{ marginTop: `1rem`, marginBottom: `1rem` }} />
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }
    })
    var itBerInterLain = 1
    const beritainterlain = sortedItemBerita.map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        if (namaKategoriBeritaLain !== "Event") {
            if (namaKategoriBeritaLain === "BeritaInternasional") {
                if (itBerInterLain === 1) {
                    // itBerNasLain = itBerNasLain + 1
                    return (
                        <div className={`card card-lg rounded-top-left border border-gray-300 rounded-bottom-right mb-4`}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="card-body p-5">
                                        <h6 className="mb-4 judul-berlin-nas">
                                            {doc.judul}
                                        </h6>
                                        <span className="badge badge-berlin badge-primary">Internasional</span>
                                        <br />
                                        <span className="small text-muted mt-n1 mb-0 ml-2" style={{ fontSize: `0.8rem` }}>
                                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                        </span>
                                        <Link to={`/berita/${doc.id}`} className="stretched-link"></Link>
                                    </div>
                                </div>
                                <div className="col-md-6 rounded-top-left">
                                    <img className="img-fluid w-100 h-70 my-auto" src={`${doc.gambar}`} alt="..." style={{ marginTop: `1rem`, marginBottom: `1rem` }} />
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }
    })
    return (
        <div className="row no-gutters" id="wadahStickyBerita">
            <Col md={12}>
                <div className="container-xl px-0">
                    {isShowevent ?
                        <div className="row border border-gray-300 rounded-top-left rounded-bottom-right mb-8">
                            <div className="row pl-4 pr-0 pt-4 w-100">
                                <div className="col-md-3">
                                    <h2 className="my-auto text-airbnb">Event</h2>
                                </div>
                                <div className="col-md-4 offset-md-5 text-right">
                                    <Link className="ml-auto text-decoration-none text-stripe stretched-link" to={`/events`}>
                                        Lihat Lainnya <i className="fe fe-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            <div className="row px-4 ">
                                {isLoadingberlist ? <SkeletonBeritaEvent></SkeletonBeritaEvent>
                                    :
                                    listevent
                                }
                            </div>
                        </div>
                        : null
                    }
                    <div className="row px-4 mb-8">
                        <div className="row pl-4 pr-0 pt-4 w-100">
                            <div className="col-md-3">
                                <h2 className="my-auto">Berita Nasional</h2>
                            </div>
                            <div className="col-md-4 offset-md-5 text-right">
                                <Link className="ml-auto text-decoration-none text-stripe" to={`/beritanasional`}>
                                    Lihat Lainnya <i className="fe fe-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-4">
                                {beritanasionalutama}
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-4">
                                <h3>Berita Nasional Terbaru</h3>
                                <div className="overflow-auto mt-6 p-3 border border-gray-300" style={{ height: `18.5rem` }}>
                                    {beritanasionallain}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row px-4 mb-8">
                        <div className="row pl-4 pr-0 pt-4 w-100">
                            <div className="col-md-4">
                                <h2 className="my-auto">Berita Internasional</h2>
                            </div>
                            <div className="col-md-4 offset-md-4 text-right">
                                <Link className="ml-auto text-decoration-none text-stripe stretched-link" to={`/beritainter`}>
                                    Lihat Lainnya <i className="fe fe-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-4">
                                {beritainterutama}
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-4">
                                <h3>Berita Internasional Terbaru</h3>
                                <div className="overflow-auto mt-6 p-3 border border-gray-300" style={{height:`18.5rem`}}>
                                    {beritainterlain}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default BeritaList