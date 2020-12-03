import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Col, Breadcrumb } from 'react-bootstrap'
import Flickity from 'flickity'
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import "./detail-kepeduliankita.css"
import ReactMarkdown from 'react-markdown'
import "./detail-galeri.css"
import "flickity-as-nav-for"

function SkeletonDetailGaleri() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="container-lg">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8" style={{ textAlign: `center` }}>
                        <Skeleton reactangle={true} height={50} width={290} />
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mb-5">
                    <Col md={10} lg={9} style={{ textAlign: `center` }}>
                        <Skeleton reactangle={true} height={22} width={360} />
                    </Col>
                </div>
                <div className="row align-items-center justify-content-center">
                    <Col md={10} lg={9} style={{ textAlign: `center` }}>
                        <p>
                            <Skeleton count={8}></Skeleton>
                        </p>
                    </Col>
                </div>
                <div className="row align-items-center justify-content-center">
                    <Col md={10} lg={9} style={{ textAlign: `center` }}>
                        <Skeleton reactangle={true} height={350} width={600} />
                    </Col>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function DetailGaleri(props) {
    const id = props.match.params.id
    const urlDetailgaleri = `http://167.99.72.148/informasis/${id}`
    const [detailgaleri, setDetailgaleri] = useState([])
    const [detailgalerigbr, setDetailgalerigbr] = useState([])
    const [isLoadingdetgaleri, setIsLoadingdetgaleri] = useState(true)
    const [flickgaleriut, setFlickgaleriut] = useState([])
    const [flickgalerilain, setFlickgalerilain] = useState([])
    useEffect(() => {
        fetch(urlDetailgaleri).then(res => res.json()).then(parsedJson => {
            setDetailgaleri(parsedJson)
            // setTimeout(() => {
            setIsLoadingdetgaleri(false)
            // }, 1000)
            return (parsedJson.gambarGaleri)
        })
            .then((ret) =>
                ret.map(data => (
                    {
                        id: `${data.id}`,
                        gambarbesar: `${data.url}`,
                        gambarkecil: `${data.formats.thumbnail.url}`
                    }
                ))
            ).then((itemsgambar) => {
                setDetailgalerigbr(itemsgambar)
            }).then(() => {
                // setTimeout(() => {
                setFlickgaleriut(
                    new Flickity('.galeri-main', {
                        imagesLoaded: true,
                        pageDots: false,
                        wrapAround: true,
                        contain: true
                        // autoPlay:true,
                    })
                )
                setFlickgalerilain(
                    new Flickity('.galeri-nav', {
                        asNavFor: '.galeri-main',
                        pageDots: false,
                        prevNextButtons: false,
                        contain: true,
                        fade: true
                    })
                )
                // }, 3000)
            })
    })
    const galeribesar = detailgalerigbr.map((doc, idx) => {
        return (
            <div style={{ width: `calc(100% - 10rem)` }} className="car-cell-besar">
                <a class="d-block mb-3 mb-md-0" href={doc.gambarbesar} data-fancybox>
                    <img className="img-fluid h-100" src={doc.gambarbesar} alt="..." />
                    {/* <div className="carousel-caption capt">
                        <h1 className="text-gray-900">{doc.judul}</h1>
                    </div> */}
                </a>
            </div>
        )
    })
    const galerikecil = detailgalerigbr.map((doc, idx) => {
        return (
            <div className="carousel-cell car-cell-kecil">
                <img src={doc.gambarkecil} className="img-fluid" />
            </div>
        )
    })
    const myImg = (props) => {
        return (
            <a href={props.src} className="d-block mb-3 mb-md-0" data-fancybox>
                <img src={props.src} className="img-fluid" />
            </a>

        )
    }
    const myParagraph = (props) => {
        return (
            <p className="text-justify">{props.children}</p>
        )
    }
    const renderMyImg = {
        image: myImg,
        paragraph: myParagraph,
    }
    // console.log(detailgaleri[0].gambar)
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                {isLoadingdetgaleri ? <SkeletonDetailGaleri></SkeletonDetailGaleri>
                    :
                    <div className="container-xl">
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-8" style={{ textAlign: `center` }}>
                                <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                    {detailgaleri.judulGaleri} <br />
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-2">
                            <Col md={10} lg={9} className="px-auto">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/informasi" style={{ textDecoration: `none`, color: `#E92998` }}>Galeri</Breadcrumb.Item>
                                    <Breadcrumb.Item active>{detailgaleri.judulGaleri}</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7 no-gutters" style={{ textAlign: `center` }}>
                            <div className="col-md-10 col-lg-9">
                                {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}}>{detailkk.konten}</p> */}
                                {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}} dangerouslySetInnerHTML={markup}></p> */}
                                <ReactMarkdown children={detailgaleri.kontenGaleri} renderers={renderMyImg}></ReactMarkdown>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9">
                                <div className="flickity-buttons-overlap flickity-items-fade shadow-lg galeri-main mb-5">
                                    {galeribesar}
                                </div>
                                <div className="flickity-items-fade shadow-lg galeri-nav">
                                    {galerikecil}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailGaleri
