import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./berita-header.css"

function BeritaHeader() {
    const urlBerita = "http://167.99.72.148/beritas"
    const [berita, setBerita] = useState([])
    const [isLoadingberheader, setIsLoadingberheader] = useState(true);
    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => {
            setBerita(parsedJson)
            setTimeout(() => {
                setIsLoadingberheader(false)
            }, 5000)
        })
    })
    const itemBerita = []
    berita.map(data => {
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
    const listberitaheader = sortedItemBerita.map((doc, idx) => {
        if (idx === 0) {
            return (
                <Link to={`/berita/${doc.id}`}>
                    <div className="berita-header-img my-4">
                        <img className="img-fluid w-100 h-100 img-berita-header" src={`${doc.gambar}`} alt="..." />
                        <div className="carousel-caption text-left capt-berita-header">
                            <span className="badge badge-berlin badge-secondary">{doc.kategori}</span>
                            <h2>
                                {doc.judul}
                            </h2>
                        </div>
                    </div>
                </Link>
            )
        }
    })
    const listberitaheaderlain = sortedItemBerita.map((doc, idx) => {
        if (idx > 0 && idx < 5) {
            return (
                <Link to={`/berita/${doc.id}`}>
                    <div className="berita-headerlain-img my-4">
                        <img className="img-fluid w-100 img-berita-headerlain" src={`${doc.gambar}`} alt="..." />
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
    return (
        <>
            <div className="row align-items-center justify-content-center mb-7">
                <div className="col-md-6" style={{ textAlign: `center` }}>
                    <h2 className="display-4 mb-4 mb-md-0">
                        Berita <br />
                    </h2>
                </div>
            </div>
            <div className="row justify-content-center mt-8">
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
            </div>
            <div className="row mt-6 mb-5">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    {listberitaheader}
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    {listberitaheaderlain}
                </div>
            </div>
        </>
    )
}

export default BeritaHeader

// rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right