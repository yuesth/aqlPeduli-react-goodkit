import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import InfiniteScroll from 'react-infinite-scroller'
import "./inter-berita.css"


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

// function BeritaHeaderInter(props) {
//     const listberitaheaderinter = props.data.map((doc, idx) => {
//         if (idx === 0) {
//             return (
//                 <Link to={`/berita/${doc.linkshare}`}>
//                     <div className="berita-header-img">
//                         <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
//                         {/* <div className="shadow-header"></div> */}
//                         <div className="carousel-caption text-left capt-berita-header">
//                             <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
//                             <h2 className="text-white judul-berita-lain">
//                                 {doc.judul}
//                             </h2>
//                         </div>
//                     </div>
//                 </Link>
//             )
//         }
//     })
//     const listberitaheaderlaininter1 = props.data.map((doc, idx) => {
//         if (idx > 0 && idx < 3) {
//             if (doc.kategori === "Berita Internasional") {
//                 return (
//                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1">
//                         <Link to={`/berita/${doc.linkshare}`}>
//                             <div className="berita-headerlain-img h-100">
//                                 <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
//                                 {/* <div className="shadow-header"></div> */}
//                                 <div className="carousel-caption text-left capt-beritalain-header">
//                                     <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
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
//     const listberitaheaderlaininter2 = props.data.map((doc, idx) => {
//         if (idx > 2 && idx < 5) {
//             if (doc.kategori === "Berita Internasional") {
//                 return (
//                     <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1">
//                         <Link to={`/berita/${doc.linkshare}`}>
//                             <div className="berita-headerlain-img h-100">
//                                 <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
//                                 {/* <div className="shadow-header"></div> */}
//                                 <div className="carousel-caption text-left capt-beritalain-header">
//                                     <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
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
//                         Berita Internasional<br />
//                     </h2>
//                 </div>
//             </div>
//             {/* <Sticky containerSelectorFocus="#wadahStickyBerInter" offsetTop={70} stickyEnableRange={[768, Infinity]}> */}
//             <div className="row mb-2">
//                 <div md={12} lg={12} className="col-md-12 col-lg-12 px-auto">
//                     <nav aria-label="breadcrumb">
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item">
//                                 <Link to={`/berita`}>
//                                     Berita
//                                 </Link>
//                             </li>
//                             <li className="breadcrumb-item active" aria-current="page">Berita Internasional</li>
//                         </ol>
//                     </nav>
//                 </div>
//             </div>
//             {/* </Sticky> */}
//             {props.isloadingberheadernas ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
//                 :
//                 <div className="row mt-6 mb-5">
//                     <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ maxHeight: `360px` }}>
//                         {listberitaheaderinter}
//                     </div>
//                     <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: `360px` }}>
//                         <div className="row h-50">
//                             {listberitaheaderlaininter1}
//                         </div>
//                         <div className="row h-50">
//                             {listberitaheaderlaininter2}
//                         </div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// function BeritaListInter(props) {
//     function DariTanggal(props) {
//         var dariTanggal = new Date(props.tanggal)
//         var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
//         return (
//             <>{string}</>
//         )
//     }
//     const listberitainter = props.data.map((doc, idx) => {
//         var kategBeritaLain = doc.kategori
//         var namaKategoriBeritaLain = kategBeritaLain.replace(/\s/g, "")
//         var namaClass = "item-berita " + namaKategoriBeritaLain
//         if (namaKategoriBeritaLain !== "Event") {
//             if (namaKategoriBeritaLain === "BeritaInternasional") {
//                 return (
//                     <div className="col-12 col-md-12 mb-5 mt-5">
//                         <div className={`card rounded-top-left rounded-bottom-right ${namaClass}`}>
//                             <div className="row">
//                                 <div className="col-6 col-md-6 rounded-top-left " style={{ maxWidth: `20rem` }}>
//                                     <img className="img-fluid w-100" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `15rem`, maxWidth: `20rem` }} />
//                                 </div>
//                                 <div className="col-6 col-md-6">
//                                     <div className="card-body">
//                                         <span className="badge badge-berlin badge-primary">Internasional</span>
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
//             <div className="row mt-6 mb-5 justify-content-center">
//                 {/* <div className="col-10-col-md-10"> */}
//                 {listberitainter}
//                 {/* </div> */}
//             </div>
//         </>
//     )
// }

function BeritaInternasional() {
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
    const urlBerita = "https://peaceful-meadow-45867.herokuapp.com/beritas"
    const urlBerita2 = "https://peaceful-meadow-45867.herokuapp.com/beritas?_where[kategoriberita.namaKategori]=Berita%20Internasional&_sort=tanggalBerita:DESC&&_start=0&_limit=5"
    const [beritainter, setBeritainter] = useState([])
    const [beritainterinf, setBeritainterinf] = useState([])
    const [start, setStart] = useState(4)
    const [hasmore, setHasmore] = useState(true);
    const [isLoadingberheadernas, setIsLoadingberheadernas] = useState(true);
    useEffect(() => {
        fetch(urlBerita2).then(res => res.json()).then(parsedjson => parsedjson.map((doc) => {
            if (doc.gambarBerita.formats.small) {
                return ({
                    id: `${doc.id}`,
                    penulis: `${doc.penulisBerita}`,
                    tanggal: `${doc.tanggalBerita}`,
                    judul: `${doc.judulBerita}`,
                    isi: `${doc.isiBerita}`,
                    tag: `${doc.tagBerita}`,
                    linkshare: `${doc.linkShareBerita}`,
                    gambar: `${doc.gambarBerita.url}`,
                    gambarkecil: doc.gambarBerita.formats.small.url,
                    kategori: `${doc.kategoriberita.namaKategori}`
                })
            }
            else {
                return ({
                    id: `${doc.id}`,
                    penulis: `${doc.penulisBerita}`,
                    tanggal: `${doc.tanggalBerita}`,
                    judul: `${doc.judulBerita}`,
                    isi: `${doc.isiBerita}`,
                    tag: `${doc.tagBerita}`,
                    linkshare: `${doc.linkShareBerita}`,
                    gambar: `${doc.gambarBerita.url}`,
                    kategori: `${doc.kategoriberita.namaKategori}`
                })
            }
        }))
            .then(items => {
                setBeritainter(items)
                setBeritainterinf(items)
                setIsLoadingberheadernas(false)
            })
    }, [])
    const generateDataBerinter = () => {
        setTimeout(() => {
            fetch(`https://peaceful-meadow-45867.herokuapp.com/beritas?_where[kategoriberita.namaKategori]=Berita%20Internasional&_sort=tanggalBerita:DESC&_start=${start}&_limit=4`)
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
                        gambarkecil: doc.gambarBerita.formats.small.url,
                        kategori: `${doc.kategoriberita.namaKategori}`
                    }))
                )
                .then((items) => {
                    const newberita = beritainter.concat(items)
                    setBeritainterinf(newberita)
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
    // const sortedItemBerita = beritainter.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const sortedItemBerita2 = beritainterinf.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const listberitaheaderinter = sortedItemBerita2.map((doc, idx) => {
        if (idx === 0) {
            return (
                <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
                    <div className="berita-header-img">
                        <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
                        {/* <div className="shadow-header"></div> */}
                        <div className="carousel-caption text-left capt-berita-header">
                            <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
                            <h2 className="text-white judul-berita-lain">
                                {doc.judul}
                            </h2>
                        </div>
                    </div>
                </Link>
            )
        }
    })
    const listberitaheaderlaininter1 = sortedItemBerita2.map((doc, idx) => {
        if (idx > 0 && idx < 3) {
            if (doc.kategori === "Berita Internasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1">
                        <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
                            <div className="berita-headerlain-img h-100">
                                <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
                                {/* <div className="shadow-header"></div> */}
                                <div className="carousel-caption text-left capt-beritalain-header">
                                    <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
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
    const listberitaheaderlaininter2 = sortedItemBerita2.map((doc, idx) => {
        if (idx > 2 && idx < 5) {
            if (doc.kategori === "Berita Internasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 px-1">
                        <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
                            <div className="berita-headerlain-img h-100">
                                <img className="img-fluid w-100 h-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
                                {/* <div className="shadow-header"></div> */}
                                <div className="carousel-caption text-left capt-beritalain-header">
                                    <span className="badge badge-berlin badge-primary">{doc.kategori}</span>
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
    const listberitainter = sortedItemBerita2.map((doc, idx) => {
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
                                <span className="badge badge-berlin badge-primary">Internasional</span>
                                <br />
                                <span className="small text-muted mb-0 span-tanggal-ber-list-nas">
                                    <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                </span>
                                <h2 className="display-6 judul-ber-list-nas">
                                    {doc.judul}
                                </h2>
                                <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`} className="stretched-link"></Link>
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
                <div className="container-xl" id="wadahStickyBerInter">
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                Berita Internasional<br />
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div md={12} lg={12} className="col-md-12 col-lg-12 px-auto">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={`/berita`} style={{ color: `rgb(47, 57, 144)` }}>
                                            Berita
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Berita Internasional</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {isLoadingberheadernas ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
                        :
                        <div className="row mt-6 mb-5">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ maxHeight: `360px` }}>
                                {listberitaheaderinter}
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: `360px` }}>
                                <div className="row h-50">
                                    {listberitaheaderlaininter1}
                                </div>
                                <div className="row h-50">
                                    {listberitaheaderlaininter2}
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row mt-6 mb-5">
                        <InfiniteScroll initialLoad={false} loadMore={generateDataBerinter} hasMore={hasmore} loader={loader}>
                            {listberitainter}
                        </InfiniteScroll>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default BeritaInternasional