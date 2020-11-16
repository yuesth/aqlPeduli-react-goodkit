import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import { Col, Container, Breadcrumb } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SkeletonDetailKK() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="container-lg">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8" style={{ textAlign: `center` }}>
                        <Skeleton reactangle={true} height={50} width={290} />
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mb-5">
                    <Col md={10} lg={9}>
                        <Skeleton reactangle={true} height={22} width={360} />
                    </Col>
                </div>
                <div className="row align-items-center justify-content-center">
                    <Col md={10} lg={9}>
                        <Skeleton reactangle={true} height={350} width={600} />
                    </Col>
                </div>
                <div className="row align-items-center justify-content-center">
                    <Col md={10} lg={9}>
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

function DetailKK(props) {
    const id = props.match.params.id
    const urlDetailKk = `http://167.99.72.148/kepeduliankitas/${id}`
    const [detailkk, setDetailkk] = useState([])
    const [isLoadingdetkk, setIsLoadingdetkk] = useState(true)
    useEffect(() => {
        fetch(urlDetailKk).then(res => res.json()).then(parsedJson => (
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulKepedulianKita}`,
                konten: `${parsedJson.kontenKepedulianKita}`,
                tanggal: `${parsedJson.tanggalKepedulianKita}`,
                gambar: `http://167.99.72.148${parsedJson.gambarKepedulianKita.url}`,
            }
        )).then(
            items => {
                setDetailkk(items)
                setIsLoadingdetkk(false)
            }
        )
    })
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                {isLoadingdetkk ? <SkeletonDetailKK></SkeletonDetailKK> :
                    <div className="container-lg">
                        <div className="row align-items-center justify-content-center mb-9">
                            <div className="col-md-8" style={{ textAlign: `center` }}>
                                <h2 className="display-4 mb-4 mb-md-0">
                                    {detailkk.judul} <br />
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-5">
                            <Col md={10} lg={8}>
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/kk" style={{ textDecoration: `none`, color: `#E92998` }}>Kepedulian Kita</Breadcrumb.Item>
                                    <Breadcrumb.Item active>{detailkk.judul}</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </div>
                        <div className="row align-items-center justify-content-center mb-5" style={{ textAlign: `center` }}>
                            <div className="col-md-10 col-lg-9">
                                <img className="img-fluid" src={detailkk.gambar} alt="..." />
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-6">
                            <div className="col-md-10 col-lg-9 ml-5">
                                <span className="small text-muted mt-n1 mb-0">
                                    <DariTanggal tanggal={detailkk.tanggal}></DariTanggal>
                                </span>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-9">
                            <div className="col-md-10 col-lg-9">
                                <p className="text-justify p-4">{detailkk.konten}</p>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailKK