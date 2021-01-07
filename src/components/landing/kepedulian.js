import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./kepedulian.css"

function Skeleton2Layout() {
    return (
        <div style={{ display: `flex` }}>
            <div className="card mx-3" style={{ width: `185px`, height: `220px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={215} width={185} />
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
            <div className="card mx-3" style={{ width: `185px`, height: `220px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={215} width={185} />
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
            <div className="card mx-3" style={{ width: `185px`, height: `220px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={215} width={185} />
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
            <div className="card mx-3" style={{ width: `185px`, height: `220px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={215} width={185} />
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
            <div className="card mx-3" style={{ width: `185px`, height: `220px` }}>
                <SkeletonTheme color="#e3e3e3">
                    <Skeleton reactangle={true} height={215} width={185} />
                    <h3><Skeleton /></h3>
                </SkeletonTheme>
            </div>
        </div>
    )
}

function KepedulianLanding() {
    const urlKepedulian = "https://peaceful-meadow-45867.herokuapp.com/kategoris"
    const [kateg, setKateg] = useState([])
    const [flickk, setFlickk] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(urlKepedulian).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                namaKateg: `${data.namaKategori}`,
                idKateg: `${data.idKategori}`
            }
        ))).then(
            items => {
                setKateg(items)
                // setTimeout(() => {
                setIsLoading(false)
                // }, 2000)
            }
        )
    }, [])
    const arrGbr = ['natural-disaster', 'healthcare', 'jama-masjid', 'peduli-dunia-islam', 'give-love', 'beverages']
    const listKategori2 = kateg.map((doc, idx) => {
        var pathGbr2 = `${process.env.PUBLIC_URL}/images/kepedulian/${arrGbr[idx]}.png`
        var namaKategori = `${doc.namaKateg}`
        var namaKategori2 = namaKategori.replace(/\s/g, "")
        return (
            <div className="col-6 col-md-4 py-3" key={idx}>
                <div className="py-md-4 py-2 px-md-4 px-2 lift kartu-kep d-flex align-items-center">
                    <div style={{ textAlign: `center`, height: `auto` }} className="align-items-center justify-content-center">
                        <img className="img-fluid" src={pathGbr2} alt="..." width="65" height="70" />
                    </div>
                    <div className="text-center px-md-3 px-2 d-flex flex-column" style={{ height: `3rem`, textAlign: `center`, justifyContent: `center` }}>
                        <h4 style={{ color: `#000000` }} className="my-auto label-kep">
                            {doc.namaKateg}
                        </h4>
                    </div>
                    <Link to={{
                        pathname: `/kepedulian`,
                        state: {
                            namaKateg: namaKategori
                        }
                    }} className="stretched-link"></Link>
                </div>
            </div>
        )
    })
    return (
        < section className="mt-7 mt-md-7 pt-7 pt-md-7 mb-7 mb-md-7 pb-7 pb-md-7" >
            <div className="container-xl">
                <div className="row align-items-center justify-content-center mb-7">
                    <div className="col-md-6" style={{ textAlign: `center`, zIndex: `999` }}>
                        <h2 style={{ fontSize: `2rem` }}>
                            Kepedulian <br />
                        </h2>
                    </div>
                </div>
                <div className="row car-kep">
                    {isLoading ?
                        <Skeleton2Layout></Skeleton2Layout>
                        :
                        listKategori2
                    }
                </div>
            </div>
        </section >

    )
}

export default KepedulianLanding
