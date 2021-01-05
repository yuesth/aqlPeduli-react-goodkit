import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import CopyToClipboard from 'react-copy-to-clipboard'
import "./detail-events.css"
const $ = window.jQuery


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
                    <div className="col-md-10 col-lg-9" style={{ textAlign: `center` }}>
                        <Skeleton reactangle={true} height={22} width={360} />
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-10 col-lg-9" style={{ textAlign: `center` }}>
                        <Skeleton reactangle={true} height={350} width={600} />
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-10 col-lg-9" style={{ textAlign: `center` }}>
                        <p><Skeleton></Skeleton></p>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-10 col-lg-9">
                        <p>
                            <Skeleton count={10}></Skeleton>
                        </p>
                    </div>
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

function DetailEvent(props) {
    const [kontenfix, setKontenfix] = useState("")
    // const id = props.match.params.id
    const param = props.match.params.paramEvents
    const urlDetailberita = `https://peaceful-meadow-45867.herokuapp.com/events?_where[linkShareEvent]=${param}`
    const [detailberita, setDetailberita] = useState([])
    const [isLoadingdetberita, setIsLoadingdetberita] = useState(true)
    useEffect(() => {
        fetch(urlDetailberita).then(res => res.json()).then(parseJson => parseJson.map((parsedJson) => (
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulEvent}`,
                isi: `${parsedJson.isiEvent}`,
                mulai: `${parsedJson.tanggalmulaiEvent}`,
                selesai: `${parsedJson.tanggalselesaiEvent}`,
                linkshare: `${parsedJson.linkShareEvent}`,
                gambar: parsedJson.gambarEvent[0].url,
                caption: `${parsedJson.captionGambarEvent}`
            }
        ))).then(
            items => {
                const eve = items[0]
                setDetailberita(eve)
                setIsLoadingdetberita(false)
                return (eve.isi)
            }
        ).then((ret) => {
            const isi = ret
            setKontenfix(isi.replace(/\n/g, `<br/>`))
        })
    }, [])
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
    const [copied, setCopied] = useState(false)
    const handlecopy = () => setCopied(true)
    const clickedcopy = () => {
        $(".message").text("link copied");
    }
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                {isLoadingdetberita ? <SkeletonDetailBerita></SkeletonDetailBerita> :
                    <div className="container-xl">
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-8" style={{ textAlign: `center` }}>
                                <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                    {detailberita.judul} <br />
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-2">
                            <div className="col-md-10 col-lg-9 px-auto">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={`/events`}>
                                                Events
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">{detailberita.judul}</li>
                                    </ol>
                                </nav>
                                {/* <Breadcrumb>
                                    <LinkContainer to="/events">
                                        <Breadcrumb.Item style={{ textDecoration: `none`, color: `#E92998` }}>Events</Breadcrumb.Item>
                                    </LinkContainer>
                                    <Breadcrumb.Item active>{detailberita.judul}</Breadcrumb.Item>
                                </Breadcrumb> */}
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9 justify-content-center">
                                <img className="img-fluid w-100 mb-md-2" src={detailberita.gambar} alt="..." />
                                {detailberita.caption !== null &&
                                    <p style={{ fontSize: `0.875rem`, textAlign: `center` }} className="text-muted">
                                        {detailberita.caption}
                                    </p>
                                }
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9">
                                <div className="row no-gutters">
                                    <div className="col-7">
                                        <span className="small text-muted mb-0">
                                            <DariTanggal tanggal={detailberita.mulai}></DariTanggal> - <DariTanggal tanggal={detailberita.selesai}></DariTanggal>
                                        </span>
                                    </div>
                                    <div className="col justify-content-end text-right d-flex">
                                        <div className="smd">
                                            <a href={`https://twitter.com/intent/tweet?text=${detailberita.judul}%20melalui%20https%3A//aqlpeduli.or.id/events/${detailberita.linkshare}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className=" img-thumbnail fa-twitter fa" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Twitter</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//aqlpeduli.or.id/events/${detailberita.linkshare}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className="img-thumbnail fa-facebook fa" style={{ color: '#3b5998', backgroundColor: '#eceff5' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Facebook</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <a href={`https://t.me/share/url?url=https%3A//aqlpeduli.or.id/events/${detailberita.linkshare}&text=${detailberita.judul}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className="img-thumbnail fa-telegram fa" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Telegram</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <a href={`https://api.whatsapp.com/send?text=${detailberita.judul}%20melalui%20https%3A//aqlpeduli.or.id/events/${detailberita.linkshare}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className="img-thumbnail fa-whatsapp fa" style={{ color: '#25D366', backgroundColor: '#cef5dc' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Whatsapp</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <CopyToClipboard onCopy={handlecopy} text={`https://aqlpeduli.or.id/events/${detailberita.linkshare}`}>
                                                <button className="d-flex flex-column mx-3 cpy" style={{ width: `30px`, height: `30px` }} onClick={clickedcopy}>
                                                    <img src={`${process.env.PUBLIC_URL}/images/copy-link.png`} width="12" height="12" className="mx-auto my-auto" />
                                                </button>
                                            </CopyToClipboard>
                                        </div>
                                        <span className="message" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7 no-gutters" style={{ textAlign: `center` }}>
                            <div className="col-md-10 col-lg-9">
                                {/* <p className="text-justify" style={{ whiteSpace: `pre-wrap` }}>{detailberita.isi}</p> */}
                                <ReactMarkdown children={detailberita.isi} renderers={renderMyImg}></ReactMarkdown>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailEvent