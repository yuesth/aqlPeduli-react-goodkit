import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Carousel from 'react-elastic-carousel'
import "./coba2.css"

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

function Coba2() {
    const urlKepedulian = "http://167.99.72.148/kategoris"
    const [kateg, setKateg] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        fetch(urlKepedulian).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                namaKateg: `${data.namaKategori}`,
                idKateg: `${data.idKategori}`
            }
        ))).then(
            items => {
                setKateg(items)
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }
        )
    }, [])
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 5 }
    ];
    const arrGbr = ['natural-disaster', 'healthcare', 'jama-masjid', 'beverages', 'give-love']
    const listKategori2 = kateg.map((doc, idx) => {
        var pathGbr2 = `${process.env.PUBLIC_URL}/images/kepedulian/${arrGbr[idx]}.png`
        return (
            <div className="lift">
                <Link to={{
                    pathname: `/program/darikepedulian/${doc.namaKateg}`,
                    state: {
                        namaKateg: `${doc.namaKateg}`
                    }
                }} style={{ margin: `auto auto`, textDecoration: `none` }} className="wadah-item-kecil">
                    <div className="col-12 justify-content-center lift" style={{ maxWidth: 288 }}>
                        <div style={{ textAlign: `center`, minHeight: `151px` }}>
                            <img className="img-fluid rounded-top-left rounded-bottom-right mx-auto" src={pathGbr2} alt="..." />
                        </div>
                        <div className="py-4 text-center">
                            <h3 style={{ color: `#000000` }}>
                                {doc.namaKateg}
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <section className="pt-10 pt-md-11 bg-light" >
            <div className="container">
                <div className="row">
                    <div className="col-12 car-kep">
                        {isLoading ?
                            <Skeleton2Layout></Skeleton2Layout>
                            :
                            <Carousel breakPoints={breakPoints}>
                                {listKategori2}
                            </Carousel>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coba2
