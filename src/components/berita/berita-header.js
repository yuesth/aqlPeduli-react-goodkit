import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./berita-header.css"

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

function BeritaHeader() {
    const urlBerita = "https://peaceful-meadow-45867.herokuapp.com/beritas"
    const [berita, setBerita] = useState([])
    const [isLoadingberheader, setIsLoadingberheader] = useState(true);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json())
            .then(data1 => data1.map((data, idx) => {
                // console.log(data.gambarBerita.formats.small.url)
                if (data.gambarBerita !== null) {
                    if (data.gambarBerita.formats.small) {
                        return ({
                            id: `${data.id}`,
                            penulis: `${data.penulisBerita}`,
                            tanggal: `${data.tanggalBerita}`,
                            judul: `${data.judulBerita}`,
                            isi: `${data.isiBerita}`,
                            tag: `${data.tagBerita}`,
                            linkshare: `${data.linkShareBerita}`,
                            gambar: data.gambarBerita.url,
                            gambarkecil: data.gambarBerita.formats.small.url,
                            kategori: `${data.kategoriberita.namaKategori}`
                        })
                    }
                    else {
                        return ({
                            id: `${data.id}`,
                            penulis: `${data.penulisBerita}`,
                            tanggal: `${data.tanggalBerita}`,
                            judul: `${data.judulBerita}`,
                            isi: `${data.isiBerita}`,
                            tag: `${data.tagBerita}`,
                            linkshare: `${data.linkShareBerita}`,
                            gambar: data.gambarBerita.url,
                            kategori: `${data.kategoriberita.namaKategori}`
                        })
                    }
                }
                else {
                    return ({
                        id: `${data.id}`,
                        penulis: `${data.penulisBerita}`,
                        tanggal: `${data.tanggalBerita}`,
                        judul: `${data.judulBerita}`,
                        isi: `${data.isiBerita}`,
                        tag: `${data.tagBerita}`,
                        linkshare: `${data.linkShareBerita}`,
                        kategori: `${data.kategoriberita.namaKategori}`
                    })
                }
            }))
            .then(res2 => {
                setBerita(res2)
                setIsLoadingberheader(false)
            })
    }, [])
    // const itemBerita = []
    // berita.map(data => {
    //     if (data.gambarBerita !== null) {
    //         var item1 = {
    //             id: `${data.id}`,
    //             penulis: `${data.penulisBerita}`,
    //             tanggal: `${data.tanggalBerita}`,
    //             judul: `${data.judulBerita}`,
    //             isi: `${data.isiBerita}`,
    //             tag: `${data.tagBerita}`,
    //             linkshare: `${data.linkShareBerita}`,
    //             gambar: `${data.gambarBerita.url}`,
    //             gambarkecil: data.gambarBerita.formats.small.url,
    //             kategori: `${data.kategoriberita.namaKategori}`
    //         }
    //         itemBerita.push(item1)
    //     }
    //     else {
    //         var item2 = {
    //             id: `${data.id}`,
    //             penulis: `${data.penulisBerita}`,
    //             tanggal: `${data.tanggalBerita}`,
    //             judul: `${data.judulBerita}`,
    //             isi: `${data.isiBerita}`,
    //             tag: `${data.tagBerita}`,
    //             linkshare: `${data.linkShareBerita}`,
    //             kategori: `${data.kategoriberita.namaKategori}`
    //         }
    //         itemBerita.push(item2)
    //     }
    // },[])
    const sortedItemBerita = berita.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const listberitaheader = sortedItemBerita.map((doc, idx) => {
        if (idx === 0) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
                        <div className="berita-header-img">
                            <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `360px` }} />
                            {/* <div className="shadow-header"></div> */}
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
            else if (doc.kategori === "Berita Internasional") {
                return (
                    <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
                        <div className="berita-header-img">
                            <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `360px` }} />
                            {/* <div className="shadow-header"></div> */}
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
            else if (doc.kategori === "Event") {
                return (
                    <Link to={`/berita/${doc.id}?img=${doc.gambarkecil ?? doc.gambar}`}>
                        <div className="berita-header-img">
                            <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." style={{ maxHeight: `360px` }} />
                            {/* <div className="shadow-header"></div> */}
                            <div className="carousel-caption text-left capt-berita-header">
                                <span className="badge badge-berlin badge-secondary">{doc.kategori}</span>
                                <h2 className="text-white">
                                    {doc.judul}
                                </h2>
                            </div>
                        </div>
                    </Link>
                )
            }
        }
    })
    const listberitaheaderlain = sortedItemBerita.map((doc, idx) => {
        if (idx > 0 && idx < 5) {
            return (
                <Link to={`/berita/${doc.id}`}>
                    <div className="berita-headerlain-img my-4">
                        <img className="img-fluid w-100 img-berita-headerlain" src={`${doc.gambarkecil}`} alt="..." />
                        <div className="carousel-caption text-left capt-beritalain-header">
                            <span className="badge badge-berlin badge-secondary">{doc.kategori}</span>
                            <h6 style={{ color: `black` }}>
                                {doc.judul}
                            </h6>
                        </div>
                    </div>
                </Link>
            )
        }
    })
    const listberitaheaderlain1 = sortedItemBerita.map((doc, idx) => {
        if (idx > 0 && idx < 4) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 h-100">
                        <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
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
            else if (doc.kategori === "Berita Internasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 h-100">
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
    const listberitaheaderlain2 = sortedItemBerita.map((doc, idx) => {
        if (idx > 2 && idx < 5) {
            if (doc.kategori === "Berita Nasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 h-100">
                        <Link to={`/berita/${doc.linkshare}?img=${doc.gambarkecil ?? doc.gambar}`}>
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
            else if (doc.kategori === "Berita Internasional") {
                return (
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 py-1 h-100">
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
    return (
        <>
            <div className="row align-items-center justify-content-center mb-7">
                <div className="col-md-6" style={{ textAlign: `center` }}>
                    <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                        Berita <br />
                    </h2>
                </div>
            </div>
            {/* <div className="row justify-content-center mt-8">
                <div className="col-md-11 col-lg-111 text-center text-white">
                    <form>
                        <div className="input-group rounded-top-left rounded-bottom-right shadow">
                            <input type="text" className="form-control bg-white pr-2 w-60" placeholder="Cari apa yang kamu cari hari ini?" aria-label="Email address" aria-describedby="subscriptionButton" />
                            <div className="input-group-append">
                                <button className="btn btn-info ml-3" type="button" id="subscriptionButton">
                                    Cari
                                        </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
            {isLoadingberheader ? <SkeletonBeritaHeader></SkeletonBeritaHeader>
                :
                <div className="row mt-6 mb-8">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        {listberitaheader}
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6" style={{ maxHeight: `360px` }}>
                        {/* {listberitaheaderlain1} */}
                        <div className="row h-50">
                            {listberitaheaderlain1}
                        </div>
                        <div className="row h-50">
                            {listberitaheaderlain2}
                        </div>
                    </div>
                    {/* <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        {listberitaheaderlain2}
                </div> */}
                </div>
            }
        </>
    )
}

export default BeritaHeader

// rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right