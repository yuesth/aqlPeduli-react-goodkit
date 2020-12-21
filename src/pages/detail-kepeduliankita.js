import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import { Col, Container, Breadcrumb } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./detail-kepeduliankita.css"
import ReactMarkdown from 'react-markdown'
import { LinkContainer } from 'react-router-bootstrap'

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
                    <Col md={10} lg={9} style={{ textAlign: `center` }}>
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
    const [kontenfix, setKontenfix] = useState("")
    const id = props.match.params.id
    const urlDetailKk = `https://peaceful-meadow-45867.herokuapp.com/kepeduliankitas/${id}`
    const [detailkk, setDetailkk] = useState([])
    const [isLoadingdetkk, setIsLoadingdetkk] = useState(true)
    useEffect(() => {
        fetch(urlDetailKk).then(res => res.json()).then(parsedJson => (
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulKepedulianKita}`,
                konten: `${parsedJson.kontenKepedulianKita}`,
                tanggal: `${parsedJson.tanggalKepedulianKita}`,
                gambar: `${parsedJson.gambarKepedulianKita.url}`,
            }
        )).then(
            items => {
                setDetailkk(items)
                setIsLoadingdetkk(false)
                return (items.konten)
            }
        ).then((ret) => {
            var str2 = ret.match(/http:\/\/167.99.72.148\/uploads\/([A-z])\w+\.(png|jpg|jpeg)/g)
            if (str2 !== null) {
                var res = ret.replace(/!\[[A-z]\w+\.(png|jpg|jpeg)\]\(http:\/\/167.99.72.148\/uploads\/([A-z])\w+\.(png|jpg|jpeg)\)/g, `<img className='img-fluid' src="${str2[0]}"></img>`)
                setKontenfix(res)
            }
            else {
                setKontenfix(ret)
            }
        })
    })
    const markup = { __html: kontenfix }
    const myImg = (props) => {
        return (
            // <img src={props.src} className="img-fluid"/>
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
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                {isLoadingdetkk ? <SkeletonDetailKK></SkeletonDetailKK> :
                    <div className="container-xl">
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-8" style={{ textAlign: `center` }}>
                                <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                    {detailkk.judul} <br />
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-2">
                            <Col md={10} lg={9} className="px-auto">
                                <Breadcrumb>
                                    <LinkContainer to="/kk">
                                        <Breadcrumb.Item style={{ textDecoration: `none`, color: `#E92998` }}>Kepedulian Kita</Breadcrumb.Item>
                                    </LinkContainer>
                                    <Breadcrumb.Item active>{detailkk.judul}</Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9">
                                <img className="img-fluid w-100" src={detailkk.gambar} alt="..." />
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9">
                                <span className="small text-muted mb-0">
                                    <DariTanggal tanggal={detailkk.tanggal}></DariTanggal>
                                </span>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7 no-gutters" style={{ textAlign: `center` }}>
                            <div className="col-md-10 col-lg-9">
                                {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}}>{detailkk.konten}</p> */}
                                {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}} dangerouslySetInnerHTML={markup}></p> */}
                                <ReactMarkdown children={detailkk.konten} renderers={renderMyImg}></ReactMarkdown>
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