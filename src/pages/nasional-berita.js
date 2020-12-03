import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Col, Breadcrumb } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
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
                        {/* <div className="shadow-header"></div> */}
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
    const listberitaheaderlain1 = props.data.map((doc, idx) => {
        if (idx > 0 && idx < 3) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1 h-100">
                        <Link to={`/berita/${doc.id}`}>
                            <div className="berita-headerlain-img h-100">
                                <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
                                {/* <div className="shadow-header"></div> */}
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
            }
        }
    })
    const listberitaheaderlain2 = props.data.map((doc, idx) => {
        if (idx > 2 && idx < 5) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1 h-100">
                        <Link to={`/berita/${doc.id}`}>
                            <div className="berita-headerlain-img h-100">
                                <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
                                {/* <div className="shadow-header"></div> */}
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
            }
        }
    })
    return (
        <>
            <div className="row align-items-center justify-content-center mb-7">
                <div className="col-md-6" style={{ textAlign: `center` }}>
                    <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                        Berita Nasional<br />
                    </h2>
                </div>
            </div>
            {/* <Sticky containerSelectorFocus="#wadahStickyBerNas" offsetTop={70} stickyEnableRange={[768, Infinity]}> */}
            <div className="row mb-2">
                <Col md={12} lg={12} className="px-auto">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/berita" style={{ textDecoration: `none`, color: `#E92998` }}>Berita</Breadcrumb.Item>
                        <Breadcrumb.Item active>Berita Nasional</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </div>
            {/* </Sticky> */}
            {props.isloadingberheadernas ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
                :
                <div className="row mt-6 mb-5">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ maxHeight: `360px` }}>
                        {listberitaheadernas}
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: `360px` }}>
                        {/* {listberitaheaderlainnas} */}
                        <div className="row h-50">
                            {listberitaheaderlain1}
                        </div>
                        <div className="row h-50">
                            {listberitaheaderlain2}
                        </div>
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
                    <div className="col-12 col-md-12 mb-5 mt-5">
                        <div className={`card rounded-top-left rounded-bottom-right ${namaClass}`}>
                            <div className="row">
                                <div className="col-6 col-md-6 rounded-top-left w-auto" style={{ maxWidth: `20rem` }}>
                                    <img className="img-fluid w-100" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `15rem`, maxWidth: `20rem` }} />
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="card-body p-5">
                                        <span className="badge badge-berlin badge-danger">Nasional</span>
                                        <br />
                                        <span className="small text-muted mb-0 span-tanggal-ber-list-nas">
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
            <div className="row mt-6 mb-5">
                <InfiniteScroll initialLoad={false} loadMore={props.loadData} hasMore>
                    {listberitanas}
                </InfiniteScroll>
            </div>
        </>
    )
}

function BeritaNasional() {
    const urlBerita = "http://167.99.72.148/beritas?_where[kategoriberita.namaKategori]=Berita%20Nasional"
    // const urlBerita2 = "http://167.99.72.148/beritas?_where[kategoriberita.namaKategori]=Berita%20Nasional&_start=0&_limit=4"
    const [beritanas, setBeritanas] = useState([])
    const [beritanasinf, setBeritanasinf] = useState([])
    // const [beritanas2, setBeritanas2] = useState([])
    const [banyakberita, setBanyakberita] = useState(0)
    const [start, setStart] = useState(4)
    const [visible, setVisible] = useState(4)
    const [isLoadingberheadernas, setIsLoadingberheadernas] = useState(true);
    const [isall, setIsall] = useState(0);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setBeritanas(parsedJson)
            setIsLoadingberheadernas(false)
        })

        // fetch(urlBerita2).then(res => res.json()).then(parsedJson => {
        //     setBeritanas2(parsedJson)
        // })

        // fetch(`http://167.99.72.148/beritas/count`)
        //     .then((cnt) => setBanyakberita(cnt))
    })

    const moreData = (val) => {
        // generateDataBernas(start)
        // const newData = beritanas.concat(beritanasinf)
        // setTimeout(()=>{
        //     setBeritanas(newData)
        // },3000)


        // if (beritanas2.length > banyakberita) {
        //     setHasMore(false);
        //     return;
        // }
        // const url = `http://167.99.72.148/beritas?_where[kategoriberita.namaKategori]=Berita%20Nasional&_start=${start}&_limit=4`
        // fetch(url).then(res => res.json()).then(parsedJson => {
        //     setTimeout(() => setBeritanas2([...beritanas2, parsedJson]), 500)
        // }).then(() => setStart(prevstart => prevstart + 4))

        setVisible(prev => prev + 4)
    }

    const incIsAll = (val) => {
    }

    const generateDataBernas = () => {
        // if (beritanas.length > banyakberita) {
        //     setHasMore(false)
        //     return
        // }
        // fetch(`http://167.99.72.148/beritas?_where[kategoriberita.namaKategori]=Berita%20Nasional&_start=${start}&_limit=4`)
        //     .then((res) => res.json()).then((res) => {
        //         res.map((doc) => ({
        //             id: `${doc.id}`,
        //             penulis: `${doc.penulisBerita}`,
        //             tanggal: `${doc.tanggalBerita}`,
        //             judul: `${doc.judulBerita}`,
        //             isi: `${doc.isiBerita}`,
        //             tag: `${doc.tagBerita}`,
        //             gambar: `${doc.gambarBerita.url}`,
        //             kategori: `${doc.kategoriberita.namaKategori}`
        //         }))
        //     })
        //     .then((items) => {
        //         setBeritanasinf(items)
        //         setStart((prevStart) => prevStart + 4)
        //     })
    }

    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }

    const loader = () => {
        return (
            <h2>Loading....</h2>
        )
    }

    function ItemBeritasNas(props) {
        const itemBerita = []
        props.berita.map(data => {
            // if (data.kategoriberita.namaKategori === "Berita Nasional") {
            var item1 = {
                id: `${data.id}`,
                penulis: `${data.penulisBerita}`,
                tanggal: `${data.tanggalBerita}`,
                judul: `${data.judulBerita}`,
                isi: `${data.isiBerita}`,
                tag: `${data.tagBerita}`,
                gambar: `${data.gambarBerita.url}`,
                kategori: `${data.kategoriberita.namaKategori}`
            }
            itemBerita.push(item1)
            // }
        })
        const sortedItemBerita = itemBerita.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
        const listberitanas = sortedItemBerita.map((doc, idx) => {
            var kategBeritaLain = doc.kategori
            var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
            var namaClass = "item-berita " + namaKategoriBeritaLain
            // if (namaKategoriBeritaLain !== "Event") {
            //     if (namaKategoriBeritaLain === "BeritaNasional") {
            //         if (idx < 4) {
            return (
                <div className="col-12 col-md-12 mb-5 mt-5">
                    <div className={`card rounded-top-left rounded-bottom-right ${namaClass}`}>
                        <div className="row">
                            <div className="col-6 col-md-6 rounded-top-left w-auto" style={{ maxWidth: `20rem` }}>
                                <img className="img-fluid w-100" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `15rem`, maxWidth: `20rem` }} />
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="card-body p-5">
                                    <span className="badge badge-berlin badge-danger">Nasional</span>
                                    <br />
                                    <span className="small text-muted mb-0 span-tanggal-ber-list-nas">
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
            //         }
            //     }
            // }
        })
        return (
            <>
                {listberitanas}
            </>
        )
    }

    const itemBerita = []
    // const itemBerita2 = []
    beritanas.map(data => {
        if (data.kategoriberita.namaKategori === "Berita Nasional") {
            var item1 = {
                id: `${data.id}`,
                penulis: `${data.penulisBerita}`,
                tanggal: `${data.tanggalBerita}`,
                judul: `${data.judulBerita}`,
                isi: `${data.isiBerita}`,
                tag: `${data.tagBerita}`,
                gambar: `${data.gambarBerita.url}`,
                kategori: `${data.kategoriberita.namaKategori}`
            }
            itemBerita.push(item1)
        }
    })
    // beritanas2.map(data => {
    //     var item1 = {
    //         id: `${data.id}`,
    //         penulis: `${data.penulisBerita}`,
    //         tanggal: `${data.tanggalBerita}`,
    //         judul: `${data.judulBerita}`,
    //         isi: `${data.isiBerita}`,
    //         tag: `${data.tagBerita}`,
    //         gambar: `${data.gambarBerita.url}`,
    //         kategori: `${data.kategoriberita.namaKategori}`
    //     }
    //     itemBerita2.push(item1)
    // })
    const sortedItemBerita = itemBerita.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    // const sortedItemBerita2 = itemBerita2.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const listberitanas = sortedItemBerita.slice(0, visible).map((doc, idx) => {
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        var namaClass = "item-berita " + namaKategoriBeritaLain
        // if (idx ===  sortedItemBerita.length-1) {
        //     setIsall(true)
        // }
        // if (namaKategoriBeritaLain !== "Event") {
        // if (namaKategoriBeritaLain === "BeritaNasional") {
        return (
            <div className="col-12 col-md-12 mb-5 mt-5 fade-in" key={idx}>
                <div className={`card rounded-top-left rounded-bottom-right ${namaClass}`}>
                    <div className="row">
                        <div className="col-6 col-md-6 rounded-top-left w-auto" style={{ maxWidth: `20rem` }}>
                            <img className="img-fluid w-100" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `15rem`, maxWidth: `20rem` }} />
                        </div>
                        <div className="col-6 col-md-6">
                            <div className="card-body p-5">
                                <span className="badge badge-berlin badge-danger">Nasional</span>
                                <br />
                                <span className="small text-muted mb-0 span-tanggal-ber-list-nas">
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
        // }
        // }
    })

    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-11">
                <div className="container-xl" id="wadahStickyBerNas">
                    <BeritaHeaderNas data={sortedItemBerita} isloadingberheadernas={isLoadingberheadernas}></BeritaHeaderNas>
                    <div className="row mt-6 mb-5">
                        {/* <InfiniteScroll initialLoad={false} loadMore={moreData} hasMore={()=>beritanas.length === banyakberita ? false : true} loader={loader}> */}
                        {/* <ItemBeritasNas berita={beritanas}></ItemBeritasNas> */}
                        {listberitanas}
                        {/* </InfiniteScroll> */}
                    </div>
                    {visible >= sortedItemBerita.length ? <></> :
                        <div className="row align-items-center mb-7">
                            <div className="mx-auto">
                                <button className="btn btn-sm btn-primary" onClick={moreData}>
                                    Lihat Lainnya
                            </button>
                            </div>
                        </div>
                    }
                    {/* <BeritaListNas data={sortedItemBerita} loadData={generateDataBernas} banyakberita={banyakberita}></BeritaListNas> */}
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default BeritaNasional