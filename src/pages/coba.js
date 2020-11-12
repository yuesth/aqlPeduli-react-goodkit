import React, { useState, useEffect } from 'react'
import Flickity from 'flickity'
import ButtonBacaLagi from "../components/button-bacalagi"
import Carousel from "react-elastic-carousel"
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./coba.css"

function SkeletonLayout() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-4">
                    <div className="card mx-2 p-2" style={{ width: `295px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={180} width={280} />
                        <h3><Skeleton /></h3>
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <small><Skeleton count={2} /></small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2" style={{ width: `295px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={180} width={280} />
                        <h3><Skeleton /></h3>
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <small><Skeleton count={2} /></small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2" style={{ width: `295px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={180} width={280} />
                        <h3><Skeleton /></h3>
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <small><Skeleton count={2} /></small>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function Coba() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <p><smal>{string}</smal></p>
        )
    }
    const urlUpdate2 = "http://167.99.72.148/update-programs"
    const [update2, setUpdate2] = useState([])
    const [flickup2, setFlickup2] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // fetch(urlUpdate2).then(res => {
        //   setData(res.data.data);
        //   setTimeout(() => setIsLoading(false), 2000);
        // });
        fetch(urlUpdate2).then(res => res.json()).then(parsedJson => {
            setUpdate2(parsedJson)
            setIsLoading(false)
        }).then(() => {
            setFlickup2(
                new Flickity('.carousel-main-up-landing-coba', {
                    cellAlign: 'left',
                    imagesLoaded: true,
                    pageDots: false,
                    prevNextButtons: false,
                    contain: true
                })
            )
            // setTimeout(() => {
            // }, 2000)
        })
    })
    const itemUpdate2 = []
    update2.map(doc => {
        if (doc.gambarUpdate !== null) {
            var item1 = {
                namaUp: doc.namaUpdate,
                judulProg: doc.program.judulProgram,
                idProg: doc.program.id,
                tanggalUp: doc.tanggalpelaksanaanUpdate,
                deskripsiUp: doc.deskripsiUpdate,
                gambarUp: `http://167.99.72.148${doc.gambarUpdate.url}`
            }
            itemUpdate2.push(item1)
        }
        else {
            var item2 = {
                namaUp: doc.namaUpdate,
                judulProg: doc.program.judulProgram,
                idProg: doc.program.id,
                tanggalUp: doc.tanggalpelaksanaanUpdate,
                deskripsiUp: doc.deskripsiUpdate,
            }
            itemUpdate2.push(item2)
        }
    })
    const sortedItemUpdate2 = itemUpdate2.sort((a, b) => { return new Date(b.tanggalUp) - new Date(a.tanggalUp) })
    const listup2 = sortedItemUpdate2.map((doc, idx) => {
        return (
            <div className="col-12" data-aos="fade-up" style={{ maxWidth: 320, height: `30rem` }}>
                <div className="card card-sm rounded-top-left rounded-bottom-right lift" style={{ height: `30rem` }}>
                    <div style={{ textAlign: `center` }}>
                        <img className="card-img rounded-top-left" src={doc.gambarUp} alt="..." height="180" />
                    </div>
                    <div className="position-relative">
                        <div className="shape shape-fluid-x shape-top text-white">
                            <div className="shape-img pb-4">
                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                            <h3 style={{ color: `black` }}>{doc.namaUp}</h3>
                            <a className="ml-auto text-decoration-none text-stripe stretched-link" href="#!">
                                <i className="fe fe-arrow-right" />
                            </a>
                        </div>
                        <DariTanggal tanggal={doc.tanggalUp}></DariTanggal>
                        <div style={{ height: `60px` }}>
                            <p style={{ color: `#E92998` }}>
                                {doc.judulProg}
                            </p>
                        </div>
                        <small className="des-update" style={{ color: `black` }}>
                            {doc.deskripsiUp}
                        </small>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <Link>
                <section className="pt-5 pt-md-5 pb-5 pb-md-5 mt-5">
                    <div className="container-lg">
                        <div className="row align-items-center justify-content-center mb-9 mt-5">
                            <div className="col-md-6" style={{ textAlign: `center` }}>
                                <h2 className=" text-white display-4 mb-4 mb-md-0">
                                    Update Program
                            </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* {isLoading ?
                                    <SkeletonLayout banyak={sortedItemUpdate2.length} />
                                    : */}
                                < div className="flickity-viewport-visible mx-n4 carousel-main-up-landing-coba">
                                    {isLoading ? <SkeletonLayout />
                                        : listup2
                                    }
                                </div>
                                {/* } */}
                            </div>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    )
    // const urlKepeduliankita = "http://167.99.72.148/kepeduliankitas"
    // const [kkk, setKkk] = useState([])
    // useEffect(() => {
    //     fetch(urlKepeduliankita).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
    //         {
    //             idKk: `${data.id}`,
    //             judulKk: `${data.judulKepedulianKita}`,
    //             gambarKk: `http://167.99.72.148${data.gambarKepedulianKita.url}`,
    //             tanggalKk: `${data.tanggalKepedulianKita}`,
    //             kontenKk: `${data.kontenKepedulianKita}`
    //         }
    //     ))).then(
    //         items => setKkk(items)
    //     )
    // })
    // const [flickkk1, setFlickkk1] = useState([])
    // useEffect(() => {
    //     setTimeout(() => {
    //         setFlickkk1(
    //             new Flickity('.carousel-main', {
    //                 imagesLoaded: true,
    //                 pageDots: false,
    //                 wrapAround: true,
    //                 fade: true,
    //                 contain: true
    //             })
    //         )
    //     }, 10000)
    // })
    // const listcoba = kkk.map((doc, idx) => {
    //     return (
    //         <div className="row align-items-center">
    //             <div className="col-md-5">
    //                 {/* <div className="flickity-soft-edges flickity-buttons-adjacent flickity-buttons-rounded flickity-buttons-bottom-left mx-n4"> */}
    //                 <div className="w-100">
    //                     <img className="w-100 h-auto" src={doc.gambarKk} alt="..." data-aos="wipe-left" />
    //                 </div>
    //                 {/* </div> */}
    //             </div>
    //             <div className="col-md-7 col-xl-6 offset-xl-1 pt-md-12 pb-md-8">
    //                 {/* <div className="flickity-soft-edges"> */}
    //                 <div className="col-12" data-aos="fade-up">
    //                     <blockquote>
    //                         <div>
    //                             <p className="h1 text-center mb-8">
    //                                 {doc.judulKk}
    //                             </p>
    //                             <div className="d-flex align-items-center justify-content-center">
    //                                 <div className="ml-4 text-center">
    //                                     <p className="font-weight-bold mb-0">
    //                                         Graham Follets
    //                                         </p>
    //                                     <p className="small text-muted mt-n1 mb-0">
    //                                         COO at Stripe
    //                                         </p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </blockquote>
    //                 </div>
    //                 {/* </div> */}
    //             </div>
    //         </div>
    //     )
    // })
    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    //     { width: 768, itemsToShow: 1 },
    //     { width: 1200, itemsToShow: 1 }
    // ];
    // return (
    //     <>
    //         <section className="py-10 py-md-12">
    //             <div className="container-lg flickity-viewport-visible mx-n4 carousel-main">
    //                 <Carousel breakPoints={breakPoints}>
    //                     {listcoba}
    //                 </Carousel>
    //             </div>
    //         </section>
    //     </>
    // )
}

export default Coba