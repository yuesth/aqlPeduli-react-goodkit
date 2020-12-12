import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-elastic-carousel"
import Flickity from 'flickity'
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
    const urlKepedulian = "http://167.99.72.148/kategoris"
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
    // useEffect(() => {
    //     setTimeout(() => {
    //         setFlickk(
    //             new Flickity('.main-kepedulian', {
    //                 imagesLoaded: true,
    //                 pageDots: false,
    //                 contain: true,
    //                 wrapAround: false,
    //                 prevNextButtons: true,
    //             })
    //         )
    //     }, 5000)
    // })
    const arrGbr = ['natural-disaster', 'healthcare', 'jama-masjid', 'beverages', 'give-love', 'peduli-dunia-islam']
    const listkateg = kateg.map((doc, idx) => {
        var pathGbr = `${process.env.PUBLIC_URL}/images/kepedulian/${arrGbr[idx]}.png`
        return (
            <div className="col-12" style={{ maxWidth: 288 }}>
                {/* Image */}
                <img className="img-fluid rounded-top-left rounded-bottom-right" src={pathGbr} alt="..." />
                {/* Footer */}
                <div className="py-4 text-center">
                    {/* Title */}
                    <p className="font-weight-bold mb-0">
                        {doc.namaKateg}
                    </p>

                </div>
            </div>
        )
    })
    const listKategori = kateg.map((doc, idx) => {
        var pathGbr = `${process.env.PUBLIC_URL}/images/kepedulian/${arrGbr[idx]}.png`
        return (
            <Link to={{
                pathname: `/program/darikepedulian/${doc.namaKateg}`,
                state: {
                    namaKateg: `${doc.namaKateg}`
                }
            }} style={{ margin: `auto auto`, textDecoration: `none` }} className="wadah-item-kecil">
                <img src={pathGbr}  ></img>
                <h4 style={{ fontSize: `20px`, fontWeight: `bold` }}>{doc.namaKateg}</h4>
            </Link>
        )
    })
    const listKategori2 = kateg.map((doc, idx) => {
        var pathGbr2 = `${process.env.PUBLIC_URL}/images/kepedulian/${arrGbr[idx]}.png`
        var namaKategori = `${doc.namaKateg}`
        var namaKategori2 = namaKategori.replace(/\s/g, "")
        return (
            // <div className="lift">
            // <Link to={{
            //     pathname: `/program`,
            //     state: {
            //         namaKateg: `${doc.namaKateg}`
            //     }
            // }} style={{ margin: `auto auto`, textDecoration: `none` }} className="wadah-item-kecil">
                <div className="col-6 col-md-4 col-lg justify-content-center lift m-lg-1 pb-1 kartu-kep">
                    <div style={{ textAlign: `center`, height: `8rem` }} className="align-items-center justify-content-center">
                        <img className="img-fluid rounded-top-left rounded-bottom-right" src={pathGbr2} alt="..." width="110" height="120" />
                    </div>
                    <div className="text-center w-100" style={{height:`3rem`, textAlign:`center`}}>
                        <h4 style={{ color: `#000000` }}>
                            {doc.namaKateg}
                        </h4>
                    </div>
                    <Link to={{
                        pathname: `/program`,
                        state: {
                            namaKateg: namaKategori
                        }
                    }} className="stretched-link"></Link>
                </div>
            // </Link>
            // </div>
        )
    })
    return (
        < section className="mt-7 mt-md-7 pt-7 pt-md-7 mb-7 mb-md-7 pb-7 pb-md-7" >
            <div className="container-xl">
                <div className="row align-items-center justify-content-center mb-7">
                    <div className="col-md-6" style={{ textAlign: `center`, zIndex:`999` }}>
                        <h2 style={{fontSize:`2rem`}}>
                            Kepedulian <br />
                        </h2>
                    </div>
                </div>
                <div className="row car-kep align-items-center justify-content-center">
                    {/* <div className=""> */}
                        {isLoading ?
                            <Skeleton2Layout></Skeleton2Layout>
                            :
                            // <Carousel breakPoints={breakPoints}>
                            listKategori2
                            // </Carousel>
                        }
                        {/* <div className="main-kepedulian">
                            {listKategori2}
                        </div> */}
                    </div>
                {/* </div> */}
            </div>
        </section >

    )
}

export default KepedulianLanding

// < section className = "pt-10 pt-md-11 bg-light" >
//     <div className="container-lg">
//         <div className="row align-items-center justify-content-center mb-9">
//             <div className="col-md-6" style={{ textAlign: `center` }}>
//                 {/* Heading */}
//                 <h2 className="display-4 mb-4 mb-md-0">
//                     Kepedulian <br />
//                 </h2>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-12">
//                 {/* <Carousel breakPoints={breakPoints}>
//                         {listKategori}
//                     </Carousel> */}
//             </div>
//         </div>
//     </div>
//     </section >

{/* <div className="col-12 justify-content-center" style={{ maxWidth: 288 }}>
                                <div style={{ textAlign: `center`, minHeight: `151px` }}>
                                    <img className="img-fluid rounded-top-left rounded-bottom-right mx-auto" src={`${process.env.PUBLIC_URL}/images/kepedulian/natural-disaster.png`} alt="..." />
                                </div>
                                <div className="py-4 text-center">
                                    <p className="font-weight-bold mb-0">
                                        Peduli Bencana
                                    </p>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 288 }}>
                                <div style={{ textAlign: `center`, minHeight: `151px` }}>
                                    <img className="img-fluid rounded-top-left rounded-bottom-right" src={`${process.env.PUBLIC_URL}/images/kepedulian/healthcare.png`} alt="..." />
                                </div>
                                <div className="py-4 text-center">
                                    <p className="font-weight-bold mb-0">
                                        Peduli Kesehatan
                                    </p>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 288 }}>
                                <div style={{ textAlign: `center`, minHeight: `151px` }}>
                                    <img className="img-fluid rounded-top-left rounded-bottom-right" src={`${process.env.PUBLIC_URL}/images/kepedulian/beverages.png`} alt="..." />
                                </div>
                                <div className="py-4 text-center">
                                    <p className="font-weight-bold mb-0">
                                        Peduli Masjid
                                    </p>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 288 }}>
                                <div style={{ textAlign: `center`, minHeight: `151px` }}>
                                    <img className="img-fluid rounded-top-left rounded-bottom-right" src={`${process.env.PUBLIC_URL}/images/kepedulian/give-love.png`} alt="..." />
                                </div>
                                <div className="py-4 text-center">
                                    <p className="font-weight-bold mb-0">
                                        Peduli Pangan
                                    </p>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 288 }}>
                                <div style={{ textAlign: `center`, minHeight: `151px` }}>
                                    <img className="img-fluid rounded-top-left rounded-bottom-right" src={`${process.env.PUBLIC_URL}/images/kepedulian/jama-masjid.png`} alt="..." />
                                </div>
                                <div className="py-4 text-center">
                                    <p className="font-weight-bold mb-0">
                                        Dapur Sedekah
                                    </p>
                                </div>
                            </div> */}

{/* <div className="flickity-viewport-visible mx-n4" data-flickity="{&quot;cellAlign&quot;: &quot;left&quot;, &quot;imagesLoaded&quot;: true, &quot;pageDots&quot;: false, &quot;prevNextButtons&quot;: false, &quot;contain&quot;: true}">
    {listKategori2}
</div> */}