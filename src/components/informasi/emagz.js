import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


function SkeletonEmagz() {
    return (
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

function Emagz() {
    const urlEmagz = "http://167.99.72.148/emagzs"
    const [emagz, setEmagz] = useState([])
    const [isLoadingemagz, setIsLoadingemagz] = useState(true)
    useEffect(() => {
        fetch(urlEmagz).then(res => res.json()).then(parsedJson => {
            setEmagz(parsedJson)
            setIsLoadingemagz(false)
        })

    })
    const itemEmagz = []
    emagz.map(data => {
        var item1 = {
            id: `${data.id}`,
            judul: `${data.judulEmagz}`,
            poster: `${data.posterEmagz.formats.medium.url}`,
            link: `${data.linkEmagz}`
        }
        itemEmagz.push(item1)
    })
    // const sortedItemKhazanah = itemEmagz.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const itememagz = itemEmagz.map((doc, idx) => {
        return (
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 column-item-emagz">
                <div className="card rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right">
                    <div className="emagz-img w-100" style={{ borderRadius: `0.5rem 0.5rem 0 0` }}>
                        <a href={doc.poster} data-fancybox>
                            <img className="img-fluid img-emagz-poster w-100" src={doc.poster} alt="..." />
                        </a>
                    </div>
                    <a href={doc.link}>
                        <div className="card-body p-2 py-3" style={{textAlign:`center`}}>
                            <div style={{ minHeight: `1rem` }}>
                                <h4 className="img-emagz-capt">
                                    Unduh
                                </h4>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="row mb-5">
                <div className="col">
                    <div className="border-kita">
                        <h3 className="mb-0" style={{fontSize:`1.25rem`}}>
                            Majalah Elektronik
                    </h3>
                    </div>
                </div>
            </div>
            <div className="row mb-9">
                {isLoadingemagz ? <SkeletonEmagz></SkeletonEmagz> : itememagz}
            </div>
        </>
    )
}
export default Emagz