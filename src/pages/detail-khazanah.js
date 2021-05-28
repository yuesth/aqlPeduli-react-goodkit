import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import { Link, useHistory } from 'react-router-dom'
import CopyToClipboard from 'react-copy-to-clipboard'
import ReactGA from 'react-ga'
import './detail-khazanah.css'
const $ = window.jQuery


function SkeletonDetailKhazanah() {
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
                    <div className="col-md-10 col-lg-9" style={{ textAlign: `center` }}>
                        <p>
                            <Skeleton count={10}></Skeleton>
                        </p>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}


function DetailKhazanah(props) {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }
    // const id = props.match.params.id
    const param = props.match.params.paramKhazanah
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname + "/" + param });
        ReactGA.pageview(window.location.pathname + "/" + param );
    },[])
    const [kontenfix, setKontenfix] = useState("")
    const urlDetailKha = `https://peaceful-meadow-45867.herokuapp.com/khazanahs?_where[linkShareKhazanah]=${param}`
    const [detailkha, setDetailkha] = useState([])
    const [isLoadingdetkha, setIsLoadingdetkha] = useState(true)
    const hist = useHistory()
    useEffect(() => {
        fetch(urlDetailKha).then(res => res.json()).then(parseJson => parseJson.map((parsedJson) => (
            {
                id: `${parsedJson.id}`,
                pemateri: `${parsedJson.pemateriKhazanah}`,
                penulis: `${parsedJson.penulisKhazanah}`,
                tanggal: `${parsedJson.tanggalKhazanah}`,
                judul: `${parsedJson.judulKhazanah}`,
                isi: `${parsedJson.isiKhazanah}`,
                gambar: `${parsedJson.gambarKhazanah.url}`,
                urlvideo: `${parsedJson.urlvideoKhazanah}`,
                linkshare: `${parsedJson.linkShareKhazanah}`,
                caption: `${parsedJson.captionGambarKhazanah}`
            }
        ))).then(
            items => {
                if (items.length > 0) {
                    const khaz = items[0]
                    setDetailkha(khaz)
                    setIsLoadingdetkha(false)
                    // return (khaz.isi)
                }
                else {
                    hist.push('/404')
                }
            }
        )
        // .then((ret) => {
        //     var str2 = ret.match(/http:\/\/167.99.72.148\/uploads\/([A-z])\w+\.(png|jpg|jpeg)/g)
        //     if (str2 !== null) {
        //         var res = ret.replace(/!\[[A-z]\w+\.(png|jpg|jpeg)\]\(http:\/\/167.99.72.148\/uploads\/([A-z])\w+\.(png|jpg|jpeg)\)/g, `<img className='img-fluid' src="${str2[0]}"></img>`)
        //         setKontenfix(res)
        //     }
        //     else {
        //         setKontenfix(ret)
        //     }
        // })
    }, [])
    const myImg = (props) => {
        return (
            // <img src={props.src} className="img-fluid"/>
            <a href={props.src} className="d-block mb-3 mb-md-0" style={{ textAlign: `center` }} data-fancybox>
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
                {isLoadingdetkha ? <SkeletonDetailKhazanah></SkeletonDetailKhazanah> :
                    <div className="container-xl">
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-8" style={{ textAlign: `center` }}>
                                <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                    {detailkha.judul} <br />
                                </h2>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-2">
                            <div md={10} lg={9} className="col-md-10 col-lg-9 px-auto">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to={`/khazanah`} style={{ color: `rgb(47, 57, 144)` }}>
                                                Khazanah
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">{detailkha.judul}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9 justify-content-center">
                                <img className="img-fluid w-100 mb-md-2" src={detailkha.gambar} alt="..." />
                                {detailkha.caption !== "null" &&
                                    <p style={{ fontSize: `0.875rem`, textAlign: `center` }} className="text-muted">
                                        {detailkha.caption}
                                    </p>
                                }
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-10 col-lg-9">
                                <div className="row no-gutters">
                                    <div className="col-md-7 col-12 mb-5 mb-md-0">
                                        <p className="small text-muted mb-0">
                                            <DariTanggal tanggal={detailkha.tanggal}></DariTanggal> {detailkha.pemateri !== "null" &&  <> |Oleh: {detailkha.pemateri} </>}
                                        </p>
                                        {detailkha.penulis !== "null" &&
                                            <p className="small text-muted mb-0">
                                                Penulis: {detailkha.penulis}
                                            </p>
                                        }
                                    </div>
                                    <div className="col-md col-12 text-right d-flex shareLinkDetail">
                                        <div className="smd">
                                            <a href={`https://twitter.com/intent/tweet?text=${detailkha.judul}%20melalui%20https%3A//aqlpeduli.or.id/khazanah/${detailkha.linkshare}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className=" img-thumbnail fa-twitter fa" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Twitter</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//aqlpeduli.or.id/khazanah/${detailkha.linkshare}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className="img-thumbnail fa-facebook fa" style={{ color: '#3b5998', backgroundColor: '#eceff5' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Facebook</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <a href={`https://t.me/share/url?url=https%3A//aqlpeduli.or.id/khazanah/${detailkha.linkshare}&text=${detailkha.judul}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className="img-thumbnail fa-telegram fa" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Telegram</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <a href={`https://api.whatsapp.com/send?text=${detailkha.judul}%20melalui%20https%3A//aqlpeduli.or.id/khazanah/${detailkha.linkshare}`} target="_blank" className="d-flex flex-column mx-3">
                                                <i className="img-thumbnail fa-whatsapp fa" style={{ color: '#25D366', backgroundColor: '#cef5dc' }} />
                                                {/* <span style={{ color: `black`, fontSize:`0.8rem` }}>Whatsapp</span> */}
                                            </a>
                                        </div>
                                        <div className="smd">
                                            <CopyToClipboard onCopy={handlecopy} text={`https://aqlpeduli.or.id/khazanah/${detailkha.linkshare}`}>
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
                                {/* <p className="text-justify" style={{ whiteSpace: `pre-wrap` }}>{kontenfix}</p> */}
                                {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}} dangerouslySetInnerHTML={markup}></p> */}
                                <ReactMarkdown children={detailkha.isi} renderers={renderMyImg}></ReactMarkdown>
                            </div>
                        </div>
                        {
                            detailkha.urlvideo !== "null" &&
                            <div className="row align-items-center justify-content-center mb-7 no-gutters" style={{ textAlign: `center` }}>
                                <div className="col-md-10 col-lg-9">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe className="embed-responsive-item" src={detailkha.urlvideo} allowFullScreen />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailKhazanah