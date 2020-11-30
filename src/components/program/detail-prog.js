import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Button, ProgressBar, Breadcrumb, Modal } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Sticky from 'wil-react-sticky'
import "./detail-prog.css"
import ReactMarkdown from 'react-markdown'
import CopyToClipboard from 'react-copy-to-clipboard'
import $ from 'jquery'


function SkeletonDetProg() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row mb-5">
                <div className="col-7">
                    <Skeleton reactangle={true} height={350} width={600} />
                </div>
                <div className="col-5">
                    <Skeleton reactangle={true} width={369} height={78}></Skeleton>
                    <br />
                    <Skeleton count={3}></Skeleton>
                    <br />
                    <Skeleton count={3}></Skeleton>
                    <div className="container" style={{ display: `flex`, flexDirection: `space-around` }}>
                        <Skeleton reactangle={true} width={225} height={54}></Skeleton>
                        <Skeleton reactangle={true} width={135} height={54}></Skeleton>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function SkeletonImgDetProg() {
    return (
        <div className="mb-5">
            <Skeleton reactangle={true} height={350} width={600} />
        </div>
    )
}

function SkeletonCerita() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <Skeleton count={7}></Skeleton>
        </SkeletonTheme>
    )
}

function SKeletonUpdate() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <li className="timeline-item active text-left">
                <p><Skeleton></Skeleton></p>
                <p>
                    <Skeleton></Skeleton>
                </p>
                <p className="text-muted mb-4">
                    <Skeleton></Skeleton>
                </p>
                <Skeleton reactangle={true} height={54} width={167} />
            </li>
        </SkeletonTheme>
    )
}

function SisaHari(props) {
    var hariTerakhir = new Date(new Date(props.tanggal).getTime() + (props.durasi * 24 * 60 * 60 * 1000));
    var sisaHari = Math.floor((hariTerakhir.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
    return (
        <span>{sisaHari.toString()} hari lagi</span>
    )
}

function DariTanggal(props) {
    var dariTanggal = new Date(props.tanggal)
    var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
    return (
        <span style={{ fontSize: `0.8rem` }}>
            {string}
        </span>
    )
}

function ModalDonasi(props) {
    const phone = '6282220825719'
    const text = `Assalamu'alaikum Warohmatulloh Wabarokatuh\nDengan ini saya menyumbang donasi untuk ${props.judulprog} sebesar .... \nSemoga bermanfaat bagi yang membutuhkan terima kasih.`
    return (
        <>
            <Modal show={props.status} onHide={props.handleclose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    {/* <Modal.Title className="align-items-center justify-content-center">Donasi Anda bisa disalurkan melalui</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="pt-0">
                    <div className="row align-items-center justify-content-center mb-5">
                        <div className="col-md-11 col-lg-10">
                            <h3 className="mb-5 mb-md-0 text-center">
                                Donasi Anda bisa disalurkan melalui
                            </h3>
                        </div>
                    </div>
                    <div className="row rek-mandiri mb-5">
                        <div className="col-4 col-md-4">
                            <img src={`${process.env.PUBLIC_URL}/images/donasi/mandiri.png`} alt="bank mandiri" className="img-fluid" />
                        </div>
                        <div className="col-8 col-md-8">
                            <span className="text-muted" style={{ fontSize: `14px` }}>Bank Mandiri <br /> a.n Yayasan Pusat Peradaban Islam <br /> 156 001600 5151</span>
                        </div>
                    </div>
                    <div className="row rek-bnis mb-5">
                        <div className="col-4 col-md-4">
                            <img src={`${process.env.PUBLIC_URL}/images/donasi/mandiris.png`} alt="bank mandiri syariah" className="img-fluid" />
                        </div>
                        <div className="col-8 col-md-8">
                            <span className="text-muted" style={{ fontSize: `14px` }}>Bank Mandiri Syariah <br /> a.n Yayasan Pusat Peradaban Islam <br /> 7888 844419</span>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-5">
                        <div className="col-md-10 col-lg-10">
                            <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/images/donasi/qrcode2.jpeg`} alt="QR Code 1" />
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-3">
                        <div className="col-md-11 col-lg-11">
                            <h5 className="mb-5 mb-md-0 text-center">
                                Sudah berdonasi? Jangan lupa konfirmasi ya
                            </h5>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-5">
                        <div className="col-md-11 col-lg-11">
                            <button className="btn btn-success rounded-top-right rounded-bottom-left rounded-top-left rounded-bottom-right rounded-sm w-100 btn-via-wa" onClick={() => window.open(`https://api.whatsapp.com/send?phone=+${phone}*&text=%20${text}`, `_blank`)}>
                                <i className="fa fa-whatsapp" /> Via WhatsApp
                            </button>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-3">
                        <div className="col-md-11 col-lg-11">
                            <h5 className="mb-5 mb-md-0 text-center">
                                Donasi langsung tanpa konfirmasi melalui
                            </h5>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-5">
                        <div className="col-md-11 col-lg-11">
                            <button className="btn btn-light rounded-top-right rounded-bottom-left rounded-top-left rounded-bottom-right rounded-sm w-100 align-items-center justify-content-center btn-via-bb" onClick={() => window.open(`${props.linkbb}`, '_blank')}>
                                {/* <i className="fa fa-whatsapp" /> */}
                                <img src={`${process.env.PUBLIC_URL}/images/donasi/berkahberjamaah.png`} className="img-fluid" height="35" width="35" />
                                <h3 className="mb-0 mt-1 ml-2">
                                    <strong>Berkah Berjamaah</strong>
                                </h3>
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

function ModalShare(props) {
    return (
        <>
            <Modal show={props.status} onHide={props.handlecloseshare} keyboard={false} className="modal-bagikan">
                <Modal.Header closeButton>
                    <Modal.Title className="align-items-center justify-content-center">Bagikan</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-0">
                    <div>
                        <div className="icon-container1 d-flex">
                            <div className="smd">
                                <a href="">
                                    <i className=" img-thumbnail fab fa-twitter fa fa-2x" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                    <p>Twitter</p>
                                </a>
                            </div>
                            <div className="smd">
                                <a href="">
                                    <i className="img-thumbnail fab fa-facebook fa fa-2x" style={{ color: '#3b5998', backgroundColor: '#eceff5' }} />
                                    <p>Facebook</p>
                                </a>
                            </div>
                            <div className="smd">
                                <a href="">
                                    <i className="img-thumbnail fab fa-2x fa-telegram fa" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                    <p>Telegram</p>
                                </a>
                            </div>
                            <div className="smd">
                                <a href="">
                                    <i className="img-thumbnail fab fa-whatsapp fa fa-2x" style={{ color: '#25D366', backgroundColor: '#cef5dc' }} />
                                    <p>Whatsapp</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <label style={{ fontWeight: 400 }}>Page Link <span className="message" /></label><br />
                            <div className="row"> <input className="col-10 ur" type="url" placeholder={`http://206.189.94.211/program/${props.id}`} id="myInput" aria-describedby="inputGroup-sizing-default" style={{ height: 40 }} />
                                <CopyToClipboard onCopy={props.handlecopied} text={`http://206.189.94.211/program/${props.id}`}>
                                    <button className="cpy" onClick={props.messagecopied}><i className="far fa-clone fa" /></button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

function DetailProg(props) {
    const bnykitemup = props.itemup.length
    const arritemup = []
    const arriconup = []
    for (var i = 0; i < bnykitemup; i++) {
        arritemup.push(false)
        arriconup.push(false)
    }
    const [isShowGbr, setIsShowGbr] = useState(arritemup)
    function filterLampiran(index) {
        var arrShowGbr = isShowGbr
        arrShowGbr[index] = !arrShowGbr[index]
        setIsShowGbr(arrShowGbr)
    }

    const [showmodal, setShowmodal] = useState(false)
    const handleClose = () => setShowmodal(false);
    const handleShow = () => setShowmodal(true);

    const [showshare, setShowshare] = useState(false)
    const handleCloseShare = () => setShowshare(false);
    const handleShowShare = () => setShowshare(true);

    const [copyurl, setCopyurl] = useState("")
    const [copied, setCopied] = useState(false)
    const handlecopied = () => setCopied(true)
    const messagecopied = () => {
        $(".message").text("link copied");
    }

    const persenTerkumpul = (props.itemprog.terkumpul / props.itemprog.total) * 100
    var idrterkumpul = parseInt(props.itemprog.terkumpul).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    var idrtotal = parseInt(props.itemprog.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    const listup = props.itemup.map((doc, idx) => {
        return (
            <li className="timeline-item active text-left">
                <DariTanggal tanggal={doc.tanggalUp}></DariTanggal>
                <h2>
                    {doc.namaUp}
                </h2>
                <p className="text-muted mb-4">
                    {doc.desUp}
                </p>
                <div className="dropdown">
                    <div>
                        <button className="btn btn-primary" type="button" aria-haspopup="true" aria-expanded="false" onClick={() => filterLampiran(idx)}>
                            Lampirkan
                            {isShowGbr[idx] ? <i class="fe fe-chevron-up"></i>
                                :
                                <i class="fe fe-chevron-down"></i>
                            }
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonTwo">
                            <a className="dropdown-item btn-gambar" href="#!" onClick={() => filterLampiran(idx)}>Gambar</a>
                            {/* <a className="dropdown-item btn-dok" href="#!" onClick={() => filterLampiran()}>Dokumen</a> */}
                        </div>
                    </div>
                </div>
                {isShowGbr[idx] ?
                    <div className="m-3 img-gambar" data-aos="fade-up">
                        <a href={doc.gambarUp} class="d-block mb-3 mb-md-0" data-fancybox>
                            <img className="img-fluid w-100 gambar-up-det-prog" src={doc.gambarUp} alt="" />
                        </a>
                    </div>
                    : null
                }
            </li>
        )
    })
    // const markup = { __html: props.kontenfix }
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
    return (
        <section className="pt-10 pt-md-11">
            <div className="container-xl" id="wadahSticky">
                <div className="row align-items-center justify-content-center">
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/program" style={{ textDecoration: `none`, color: `#E92998` }}>Program Kepedulian</Breadcrumb.Item>
                            <Breadcrumb.Item active>{props.itemprog.judul}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </div>
                <Container>
                    {props.loadingdetprog ? <SkeletonDetProg></SkeletonDetProg>
                        :
                        <Row className="mb-5">
                            <Col md={12} sm={12} lg={7} className="px-0">
                                <div>
                                    {props.itemprog.gambar !== null && <img className="img-fluid w-100 h-100" src={props.itemprog.gambar}></img>
                                    }
                                </div>
                            </Col>
                            <br />
                            <Col md={12} sm={12} lg={5}>
                                <Sticky containerSelectorFocus="#wadahSticky" offsetTop={70} stickyEnableRange={[768, Infinity]}>
                                    <div className="kop rounded-bottom-right rounded-top-left ml-3 wadah-info-det-prog">
                                        <p className="mb-1 text-info"><small>{props.itemprog.namaKateg}</small></p>
                                        <div style={{ height: `5rem` }}>
                                            <h2 className="judul-det-prog mb-3">{props.itemprog.judul}</h2>
                                        </div>
                                        <div style={{ height: `6rem` }} className="mb-3">
                                            <p style={{ fontSize: `14px` }} className="des-det-prog">
                                                {props.itemprog.des}
                                            </p>
                                        </div>
                                        <div style={{ height: `5rem` }} className="mb-3">
                                            <span style={{ fontSize: `0.8rem` }}>Rp.{props.itemprog.terkumpul !== null && idrterkumpul} dari Rp.<strong>{props.itemprog.total !== null && idrtotal}</strong></span>
                                            <ProgressBar now={persenTerkumpul} label={`${persenTerkumpul.toFixed(2)} %`} />
                                            {props.itemprog.durasi !== null && <SisaHari tanggal={props.itemprog.tanggal} durasi={props.itemprog.durasi} />
                                            }
                                        </div>
                                        <div className="row button-donasi-atas">
                                            <div className="col-12 col-sm-10 col-md-10">
                                                <Button variant="success" className="btn-donasi-sekarang w-100" onClick={handleShow}>DONASI SEKARANG</Button>
                                            </div>
                                            <div className="col-12 col-sm-2 col-md-2 btn-bagika-det-prog pl-0">
                                                <Button variant="primary" className="btn-bagikan" onClick={handleShowShare}>
                                                    <i className="fa fa-share-alt" />
                                                </Button>
                                            </div>
                                            <ModalDonasi status={showmodal} handleclose={handleClose} linkbb={props.itemprog.linkbb} judulprog={props.itemprog.judul}></ModalDonasi>
                                            <ModalShare status={showshare} handlecloseshare={handleCloseShare} id={props.itemprog.id} handlecopied={handlecopied} messagecopied={messagecopied}></ModalShare>
                                        </div>
                                    </div>
                                </Sticky>
                            </Col>
                        </Row>
                    }
                </Container>
                <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-7 col-lg-7">
                        {props.fromupdate ?
                            <div>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cerita</a>
                                        <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Update</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        {props.loadingdetprog ? <SkeletonCerita></SkeletonCerita> :
                                            // <p className="text-muted" style={{ whiteSpace: `pre-wrap`, textAlign: `justify` }} dangerouslySetInnerHTML={markup}>
                                            // </p>
                                            <ReactMarkdown children={props.itemprog.cerita} renderers={renderMyImg}></ReactMarkdown>
                                        }
                                    </div>
                                    <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <ol className="timeline timeline-success m-5">
                                            {props.loadingdetup ? <SKeletonUpdate></SKeletonUpdate>
                                                :
                                                listup
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cerita</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Update</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                        {/* <p className="text-muted" style={{ whiteSpace: `pre-wrap`, textAlign: `justify` }}>
                                            {props.loadingdetprog ? <SkeletonCerita></SkeletonCerita>
                                                :
                                                props.itemprog.cerita
                                            }
                                        </p> */}
                                        {props.loadingdetprog ? <SkeletonCerita></SkeletonCerita> :
                                            // <p className="text-muted" style={{ whiteSpace: `pre-wrap`, textAlign: `justify` }} dangerouslySetInnerHTML={markup}>
                                            // </p>
                                            <ReactMarkdown children={props.itemprog.cerita} renderers={renderMyImg}></ReactMarkdown>
                                        }
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <ol className="timeline timeline-success m-5">
                                            {props.loadingdetup ? <SKeletonUpdate></SKeletonUpdate>
                                                :
                                                listup
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {/* <Sticky containerSelectorFocus="#wadahSticky" offsetTop={70} stickyEnableRange={[100, 540]}> */}
                <div className="row no-gutters button-donasi-bawah d-flex bg-white" style={{ position: `fixed`, bottom: `0rem`, width: `100%`, height: `4rem`, zIndex: `9999` }}>
                    <div className="col-9 col-sm-6 col-md-6 my-2 justify-content-center">
                        <Button className="btn-sm h-100 w-100" variant="success" onClick={handleShow} className="btn-donasi-kecil-sekarang">DONASI SEKARANG</Button>
                    </div>
                    <div className="col-3 col-sm-6 col-md-6 btn-bagika-det-prog my-2">
                        <Button className="btn-sm h-100" variant="primary" onClick={handleShowShare} className="btn-bagikan"> <i className="fa fa-share-alt" /></Button>
                    </div>
                </div>
                {/* </Sticky> */}
            </div>
        </section>
    )
}

export default DetailProg

// https://api.whatsapp.com/send?phone=6282220825719&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.