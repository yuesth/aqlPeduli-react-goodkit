import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InfiniteScroll from 'react-infinite-scroller'
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

// function BeritaHeaderNas(props) {
//     const listberitaheadernas = props.data.map((doc, idx) => {
//         if (idx === 0) {
//             return (
//                 <Link to={`/berita/${doc.linkshare}`}>
//                     <div className="berita-header-img">
//                         <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
//                         {/* <div className="shadow-header"></div> */}
//                         <div className="carousel-caption text-left capt-berita-header">
//                             <span className="badge badge-berlin badge-danger">{doc.kategori}</span>
//                             <h2 className="text-white judul-berita-lain">
//                                 {doc.judul}
//                             </h2>
//                         </div>
//                     </div>
//                 </Link>
//             )
//         }
//     })
//     const listberitaheaderlain1 = props.data.map((doc, idx) => {
//         if (idx > 0 && idx < 3) {
//             if (doc.kategori === "Berita Nasional") {
//                 return (
//                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1 h-100">
//                         <Link to={`/berita/${doc.linkshare}`}>
//                             <div className="berita-headerlain-img h-100">
//                                 <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
//                                 {/* <div className="shadow-header"></div> */}
//                                 <div className="carousel-caption text-left capt-beritalain-header">
//                                     <span className="badge badge-berlin badge-danger">{doc.kategori}</span>
//                                     <h6 style={{ color: `white` }} className="judul-berita-lain">
//                                         {doc.judul}
//                                     </h6>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 )
//             }
//         }
//     })
//     const listberitaheaderlain2 = props.data.map((doc, idx) => {
//         if (idx > 2 && idx < 5) {
//             if (doc.kategori === "Berita Nasional") {
//                 return (
//                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1 h-100">
//                         <Link to={`/berita/${doc.linkshare}`}>
//                             <div className="berita-headerlain-img h-100">
//                                 <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
//                                 {/* <div className="shadow-header"></div> */}
//                                 <div className="carousel-caption text-left capt-beritalain-header">
//                                     <span className="badge badge-berlin badge-danger">{doc.kategori}</span>
//                                     <h6 style={{ color: `white` }} className="judul-berita-lain">
//                                         {doc.judul}
//                                     </h6>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 )
//             }
//         }
//     })
//     return (
//         <>
//             <div className="row align-items-center justify-content-center mb-7">
//                 <div className="col-md-6" style={{ textAlign: `center` }}>
//                     <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
//                         Berita Nasional<br />
//                     </h2>
//                 </div>
//             </div>
//             <div className="row mb-2">
//                 <div md={12} lg={12} className="col-md-12 col-lg-12 px-auto">
//                     <nav aria-label="breadcrumb">
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item">
//                                 <Link to={`/berita`}>
//                                     Berita
//                                 </Link>
//                             </li>
//                             <li className="breadcrumb-item active" aria-current="page">Berita Nasional</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>
//             {props.isloadingberheadernas ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
//                 :
//                 <div className="row mt-6 mb-5">
//                     <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ maxHeight: `360px` }}>
//                         {listberitaheadernas}
//                     </div>
//                     <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: `360px` }}>
//                         <div className="row h-50">
//                             {listberitaheaderlain1}
//                         </div>
//                         <div className="row h-50">
//                             {listberitaheaderlain2}
//                         </div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// function BeritaListNas(props) {
//     function DariTanggal(props) {
//         var dariTanggal = new Date(props.tanggal)
//         var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
//         return (
//             <>{string}</>
//         )
//     }
//     const listberitanas = props.data.map((doc, idx) => {
//         var kategBeritaLain = doc.kategori
//         var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
//         var namaClass = "item-berita " + namaKategoriBeritaLain
//         if (namaKategoriBeritaLain !== "Event") {
//             if (namaKategoriBeritaLain === "BeritaNasional") {
//                 return (
//                     <div className="col-12 col-md-12 mb-5 mt-5">
//                         <div className={`card rounded-top-left rounded-bottom-right ${namaClass}`}>
//                             <div className="row">
//                                 <div className="col-6 col-md-6 rounded-top-left w-auto" style={{ maxWidth: `20rem` }}>
//                                     <img className="img-fluid w-100" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `15rem`, maxWidth: `20rem` }} />
//                                 </div>
//                                 <div className="col-6 col-md-6">
//                                     <div className="card-body p-5">
//                                         <span className="badge badge-berlin badge-danger">Nasional</span>
//                                         <br />
//                                         <span className="small text-muted mb-0 span-tanggal-ber-list-nas">
//                                             <DariTanggal tanggal={doc.tanggal}></DariTanggal>
//                                         </span>
//                                         <h2 className="display-6 judul-ber-list-nas">
//                                             {doc.judul}
//                                         </h2>
//                                         <Link to={`/berita/${doc.id}`} className="stretched-link"></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         }
//     })
//     return (
//         <>
//             <div className="row mt-6 mb-5">
//                 {/* <InfiniteScroll initialLoad={false} loadMore={props.loadData} hasMore> */}
//                 {listberitanas}
//                 {/* </InfiniteScroll> */}
//             </div>
//         </>
//     )
// }

function BeritaNasional() {
    const urlBerita = "https://peaceful-meadow-45867.herokuapp.com/beritas"
    const urlBerita2 = "https://peaceful-meadow-45867.herokuapp.com/beritas?_where[kategoriberita.namaKategori]=Berita%20Nasional&_sort=tanggalBerita:DESC&_start=0&_limit=4"
    const [beritanas, setBeritanas] = useState([])
    const [beritanasinf, setBeritanasinf] = useState([])
    const [banyakberita, setBanyakberita] = useState(0)
    const [start, setStart] = useState(4)
    const [visible, setVisible] = useState(4)
    const [isLoadingberheadernas, setIsLoadingberheadernas] = useState(true);
    const [hasmore, setHasmore] = useState(true);
    useEffect(() => {
        fetch(urlBerita2).then(res => res.json()).then(parsedJson =>
            parsedJson.map((doc) => ({
                id: `${doc.id}`,
                penulis: `${doc.penulisBerita}`,
                tanggal: `${doc.tanggalBerita}`,
                judul: `${doc.judulBerita}`,
                isi: `${doc.isiBerita}`,
                tag: `${doc.tagBerita}`,
                linkshare: `${doc.linkShareBerita}`,
                gambar: `${doc.gambarBerita.url}`,
                kategori: `${doc.kategoriberita.namaKategori}`
            }))
        ).then((itemss) => {
            setBeritanas(itemss)
            setBeritanasinf(itemss)
            setIsLoadingberheadernas(false)
        })

    }, [])
    // const moreData = (val) => {
    //     setVisible(prev => prev + 4)
    // }

    const generateDataBernas = () => {
        setTimeout(() => {
            fetch(`https://peaceful-meadow-45867.herokuapp.com/beritas?_where[kategoriberita.namaKategori]=Berita%20Nasional&_sort=tanggalBerita:DESC&_start=${start}&_limit=4`)
                .then((res) => res.json()).then((res) =>
                    res.map((doc) => ({
                        id: `${doc.id}`,
                        penulis: `${doc.penulisBerita}`,
                        tanggal: `${doc.tanggalBerita}`,
                        judul: `${doc.judulBerita}`,
                        isi: `${doc.isiBerita}`,
                        tag: `${doc.tagBerita}`,
                        linkshare: `${doc.linkShareBerita}`,
                        gambar: `${doc.gambarBerita.url}`,
                        kategori: `${doc.kategoriberita.namaKategori}`
                    }))
                )
                .then((items) => {
                    const newberita = beritanas.concat(items)
                    setBeritanasinf(newberita)
                    setStart((prevStart) => prevStart + 4)
                    if (items.length === 0) {
                        setHasmore(false)
                    }
                    else {
                        setHasmore(true)
                    }
                })
        }, 1500)
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

    // const sortedItemBerita = beritanas.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const sortedItemBerita2 = beritanasinf.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const headerberitanas = sortedItemBerita2.map((doc, idx) => {
        if (idx === 0) {
            return (
                <Link to={`/berita/${doc.linkshare}`}>
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
    const headerberitanas1 = sortedItemBerita2.map((doc, idx) => {
        if (idx > 0 && idx < 3) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1 h-100">
                        <Link to={`/berita/${doc.linkshare}`}>
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
    const headerberitanas2 = sortedItemBerita2.map((doc, idx) => {
        if (idx > 2 && idx < 5) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1 h-100">
                        <Link to={`/berita/${doc.linkshare}`}>
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
    const listberitanas = sortedItemBerita2.map((doc, idx) => {
        // var kategBeritaLain = doc.kategori
        var kategBeritaLain = doc.kategori
        var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
        var namaClass = "item-berita " + namaKategoriBeritaLain
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
                                <Link to={`/berita/${doc.linkshare}`} className="stretched-link"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-11">
                <div className="container-xl" id="wadahStickyBerNas">
                    {/* <BeritaHeaderNas data={sortedItemBerita2} isloadingberheadernas={isLoadingberheadernas}></BeritaHeaderNas> */}
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                Berita Nasional<br />
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div md={12} lg={12} className="col-md-12 col-lg-12 px-auto">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={`/berita`}>
                                            Berita
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Berita Nasional</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {isLoadingberheadernas ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
                        :
                        <div className="row mt-6 mb-5">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ maxHeight: `360px` }}>
                                {headerberitanas}
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: `360px` }}>
                                <div className="row h-50">
                                    {headerberitanas1}
                                </div>
                                <div className="row h-50">
                                    {headerberitanas2}
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row mt-6 mb-5">
                        <InfiniteScroll initialLoad={false} loadMore={generateDataBernas} hasMore={hasmore} loader={loader}>
                            {/* <ItemBeritasNas berita={beritanas}></ItemBeritasNas> */}
                            {listberitanas}
                        </InfiniteScroll>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default BeritaNasional