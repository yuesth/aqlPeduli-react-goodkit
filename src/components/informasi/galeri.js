import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./galeri.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SkeletonGaleri(){
    return(
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function Galeri() {
    const urlGaleri = "http://167.99.72.148/informasis"
    const [galeri, setGaleri] = useState([])
    const [gambar, setGambar] = useState([])
    const [isLoadinggaleri, setIsLoadinggaleri] = useState(true)
    useEffect(() => {
        fetch(urlGaleri).then(res => res.json()).then(parsedJson => {
            setGaleri(parsedJson)
            setIsLoadinggaleri(false)
        }).then(() => {
            const itemGaleri = []
            galeri.map(data => {
                if (data.gambarGaleri !== null) {
                    var item1 = {
                        id: `${data.id}`,
                        judul: `${data.judulGaleri}`,
                        konten: `${data.kontenGaleri}`,
                        gambar: data.gambarGaleri,
                        thumb: `${data.thumbnailGaleri.formats.thumbnail.url}`,
                        link: `${data.linkGaleri}`
                    }
                    itemGaleri.push(item1)
                }
                else {
                    var item2 = {
                        id: `${data.id}`,
                        judul: `${data.judulGaleri}`,
                        konten: `${data.kontenGaleri}`,
                        thumb: `${data.thumbnailGaleri.thumbnail.url}`,
                        link: `${data.linkGaleri}`
                    }
                    itemGaleri.push(item2)
                }
            })
            setGambar(itemGaleri)
        })
    })
    // console.log(gambar[0])
    // alert(JSON.stringify(gambar[0].gambar))
    const itemgaleri = gambar.map((doc, idx) => {
        return (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 column-item-galeri">
                <Link to={`/galeri/${doc.id}`}>
                    <div className="card rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right">
                        <div className="galeri-img w-100" style={{ borderRadius: `0.5rem 0.5rem 0 0` }}>
                            <img className="img-fluid img-galeri-thumb w-100" src={doc.thumb} alt="..." />
                            <div className="galeri-img-cam">
                                <img src={`${process.env.PUBLIC_URL}/images/galeri/camera.png`} alt="" />
                            </div>
                        </div>
                        <div className="card-body p-2 py-3">
                            <div style={{ minHeight: `5rem` }}>
                                <h4 className="img-galeri-capt">
                                    {doc.judul}
                                </h4>
                            </div>
                            {/* <Link to={`/galeri/${doc.id}`}>
                                <a className="stretched-link" href="" />
                            </Link> */}
                        </div>
                    </div>
                </Link>

            </div>
        )
    })
    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <div className="border-kita">
                        <h2 className="mb-0">
                            Galeri
                    </h2>
                    </div>
                </div>
            </div>
            <div className="row mb-9">
                {isLoadinggaleri ? <SkeletonGaleri></SkeletonGaleri> : itemgaleri}
            </div>
        </>
    )
}

export default Galeri