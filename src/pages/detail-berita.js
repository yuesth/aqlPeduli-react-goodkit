import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import { Col, Container, Breadcrumb } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SkeletonDetailBerita() {
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
                        <Skeleton reactangle={true} height={350} width={600} />
                    </Col>
                </div>
                <div className="row align-items-center justify-content-center">
                    <Col md={10} lg={9} style={{ textAlign: `center` }}>
                        <p><Skeleton></Skeleton></p>
                    </Col>
                </div>
                <div className="row align-items-center justify-content-center">
                    <Col md={10} lg={9}>
                        <p>
                            <Skeleton count={10}></Skeleton>
                        </p>
                    </Col>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function DariTanggal(props) {
    var dariTanggal = new Date(props.tanggal)
    var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
    return (
        <>{string}</>
    )
}

function DetailBerita(props) {
    const [kontenfix, setKontenfix] = useState("")
    const id = props.match.params.id
    const urlDetailberita = `http://167.99.72.148/beritas/${id}`
    const [detailberita, setDetailberita] = useState([])
    const [isLoadingdetberita, setIsLoadingdetberita] = useState(true)
    useEffect(() => {
        fetch(urlDetailberita).then(res => res.json()).then(parsedJson => (
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulBerita}`,
                isi: `${parsedJson.isiBerita}`,
                tanggal: `${parsedJson.tanggalBerita}`,
                gambar: `http://167.99.72.148${parsedJson.gambarBerita.url}`,
            }
        )).then(
            items => {
                setDetailberita(items)
                setIsLoadingdetberita(false)
                return (items.isi)
            }
        ).then((ret) => {
            const isi = ret
            setKontenfix(isi.replace(/\n/g, `<br/>`))
        })
    })
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                {isLoadingdetberita? <SkeletonDetailBerita></SkeletonDetailBerita> :
                    <div className="container-lg">
                        <div className="row align-items-center justify-content-center mb-9">
                            <div className="col-md-10" style={{ textAlign: `center` }}>
                                <h2 className="display-4 mb-4 mb-md-0">
                                    {detailberita.judul} <br />
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-5">
                            <Col md={11} lg={10} className="ml-5">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/berita" style={{ textDecoration: `none`, color: `#E92998` }}>Berita</Breadcrumb.Item>
                                    <Breadcrumb.Item active>{detailberita.judul}</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </div>
                        <div className="row align-items-center justify-content-center mb-5" style={{ textAlign: `center` }}>
                            <div className="col-md-11 col-lg-10">
                                <img className="img-fluid" src={detailberita.gambar} alt="..." />
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-6">
                            <div className="col-md-11 col-lg-10 ml-5">
                                <span className="small text-muted mt-n1 mb-0">
                                    <DariTanggal tanggal={detailberita.tanggal}></DariTanggal>
                                </span>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-9">
                            <div className="col-md-11 col-lg-10">
                                <p className="text-justify p-4" style={{ whiteSpace: `pre-wrap` }}>{detailberita.isi}</p>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailBerita