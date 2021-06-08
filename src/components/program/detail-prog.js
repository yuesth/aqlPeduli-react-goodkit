import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Sticky from 'wil-react-sticky'
import "./detail-prog.css"
import ReactMarkdown from 'react-markdown'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Link, useHistory } from 'react-router-dom'
// import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
const $ = window.jQuery



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
        <span style={{ fontSize: `1rem` }}>{sisaHari.toString()} hari lagi</span>
    )
}

function DariTanggal(props) {
    var dariTanggal = new Date(props.tanggal)
    var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
    return (
        <span style={{ fontSize: `0.875rem` }}>
            {string}
        </span>
    )
}

function ModalDonasi(props) {
    const urlNorek = `https://peaceful-meadow-45867.herokuapp.com/nomor-rekening-kategoris?_where[kategori.id]=${props.idkateggg}`
    const urlQr = `https://peaceful-meadow-45867.herokuapp.com/kategoris?_where[id]=${props.idkateggg}`
    const [norek, setNorek] = useState([])
    const [qrcode, setQrcode] = useState([])
    const [form, setForm] = useState({
        id_campaign: props.idprog,
        name: '',
        email: '',
        amount: 0,
        phone_number: '',
    })
    const [mandiricopied, setMandiricopied] = useState(false)
    const handleMandiri = () => setMandiricopied(true)
    const [mandiriscopied, setMandiriscopied] = useState(false)
    const handleMandiris = () => setMandiriscopied(true)
    const [bnicopied, setbnicopied] = useState(false)
    const handlebni = () => setbnicopied(true)
    const [bniscopied, setbniscopied] = useState(false)
    const handlebnis = () => setbniscopied(true)
    const [bricopied, setbricopied] = useState(false)
    const handlebri = () => setbricopied(true)
    const [briscopied, setbriscopied] = useState(false)
    const handlebris = () => setbriscopied(true)
    const norekcopied = () => {
        $(".norekmessage").text("copied");
    }
    const norekmandiriscopied = () => {
        $(".norekmandirismessage").text("copied");
    }
    const norekbnicopied = () => {
        $(".norekbnimessage").text("copied");
    }
    const norekbniscopied = () => {
        $(".norekbnismessage").text("copied");
    }
    const norekbricopied = () => {
        $(".norekbrimessage").text("copied");
    }
    const norekbriscopied = () => {
        $(".norekbrismessage").text("copied");
    }
    const phone = '6282239193515'
    const text = `Assalamu'alaikum Warohmatulloh Wabarokatuh\nDengan ini saya menyumbang donasi untuk ${props.judulprog} sebesar .... \nSemoga bermanfaat bagi yang membutuhkan terima kasih.`
    useEffect(() => {
        fetch(urlNorek).then(res => res.json()).then(parsedJson => parsedJson.map(doc => {
            // if(doc.kategori.id === props.idkateg){
            return ({
                id: `${doc.id}`,
                bank: `${doc.jenisBank}`,
                norek: `${doc.nomorRekening}`,
                an: `${doc.atasNama}`
            })
            // }
        })).then(items => {
            setNorek(items)
        })
        fetch(urlQr).then(res => res.json()).then(parsedJson => parsedJson.map(doc => {
            return ({
                qrcode: `${doc.qrcodeKategori.url}`,
            })
        })).then(items => {
            setQrcode(items)
        })
    }, [])
    useEffect(() => {
        $(document).on('change keyup', '.required', function (e) {
            let Disabled = true;
            $(".required").each(function () {
                let value = this.value
                if ((value) && (value.trim() != '')) {
                    Disabled = false
                } else {
                    Disabled = true
                    return false
                }
            });
            if (Disabled) {
                $('#submitdata').prop("disabled", true);
            } else {
                $('#submitdata').prop("disabled", false);
            }
        })
        $('#submitdata').click(() => {
            var pages1 = document.getElementById("modal-split1")
            var pages2 = document.getElementById("modal-split2")
            pages1.style.display = "none"
            pages2.style.display = "block"
        })
    })
    const onchangeform = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onsubmitform = (event) => {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0MjgzNzgsImV4cCI6MTYxMDQzMTk3OCwibmJmIjoxNjEwNDI4Mzc4LCJqdGkiOiJWSTFEZkVORjZWc3luNHB2Iiwic3ViIjoxMDAxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.awgkdKJarKGTxP_0HIldNI7CnG_xtJoxnzhALuFGIPc"
        const data = {
            ...form,
            qrcode_url: qrcode[0],
            account_number: norek,
        }
        const dataMsg = {
            donatur: form.name,
            nohp: form.phone_number,
            namakepedulian: props.judulprog,
            jumlah: form.amount,
            norek: norek
        }
        console.log(data)
        fetch(`https://donasi.aqlpeduli.or.id/addDonation?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json()
            })
            .then(resjson => (
                console.log(resjson)
            ))
        fetch(`https://admin-donasi.aqlpeduli.or.id/wa-blast/send-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataMsg)
        }).then(res => res.json()).then(restext => {
            console.log(restext)
        })
        event.preventDefault()
    }
    return (
        <>
            <Modal show={props.status} onHide={props.handleclose} backdrop="static" keyboard={false} className="modal-donasi">
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="modal-body pt-0">
                    <div className="modal-split" id="modal-split1">
                        <div className="row align-items-center justify-content-center mb-5">
                            <div className="col-md-11 col-lg-10">
                                <h3 className="mb-5 mb-md-0 text-center">
                                    Donasi untuk {props.judulprog}
                                </h3>
                            </div>
                        </div>
                        <form onSubmit={onsubmitform}>
                            <input type="number" name="id_campaign" className="d-none" defaultValue={props.idprog} onChange={onchangeform} />
                            <div className="form-group">
                                <label htmlFor="recipient-nominal" className="col-form-label">Nominal:</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Rp.</span>
                                    </div>
                                    <input type="text" placeholder="Isi nominal donasi" className="form-control required" aria-label="Amount (to the nearest rupiah)" name="amount" onChange={onchangeform} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="recipient-nama" className="col-form-label">Nama:</label>
                                <input type="text" className="form-control required" id="recipient-nama" name="name" onChange={onchangeform} placeholder="Nama" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="recipient-email" className="col-form-label">Email:</label>
                                <input type="email" className="form-control" id="recipient-email" name="email" onChange={onchangeform} placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="recipient-nohp" className="col-form-label">No.Handphone:</label>
                                <input type="tel" className="form-control required" id="recipient-nohp" name="phone_number" onChange={onchangeform} placeholder="Nomor telepon" />
                            </div>
                            <button type="submit" className="btn btn-donasi-sekarang w-100" id="submitdata" disabled>Lanjut ke Metode Donasi</button>
                            <div className="spinner-border text-dark d-none" id="spinner-form" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </form>
                    </div>
                    <div className="modal-split" id="modal-split2">
                        <div className="row align-items-center justify-content-center mb-5">
                            <div className="col-md-11 col-lg-10">
                                <h3 className="mb-5 mb-md-0 text-center">
                                    Donasi Anda bisa disalurkan melalui
                            </h3>
                            </div>
                        </div>
                        {props.linkbb !== "null"
                            ?
                            <>
                                <div className="row align-items-center justify-content-center mb-5">
                                    <div className="col-md-11 col-lg-11">
                                        <button className="btn btn-light rounded-top-right rounded-bottom-left rounded-top-left rounded-bottom-right rounded-sm w-100 align-items-center justify-content-center btn-via-bb" onClick={() => window.open(`${props.linkbb}`, '_blank')}>
                                            <img src={`${process.env.PUBLIC_URL}/images/donasi/berkahberjamaah.png`} className="img-fluid" height="35" width="35" alt="berkahBerjamaah" />
                                            <h3 className="mb-0 mt-1 ml-2">
                                                <strong>Berkah Berjamaah</strong>
                                            </h3>
                                        </button>
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-center mb-3">
                                    <div className="col-md-11 col-lg-11">
                                        <h4 className="mb-5 mb-md-0 text-center">
                                            Atau
                            </h4>
                                    </div>
                                </div>
                            </>
                            :
                            <></>
                        }
                        {
                            norek.map((doc, idx) => {
                                if (doc.bank === "Mandiri") {
                                    return (
                                        <div className="row rek-mandiri mb-5" key={idx}>
                                            <div className="col-4 col-md-4">
                                                <img src={`${process.env.PUBLIC_URL}/images/donasi/mandiri.png`} alt="bank mandiri" className="img-fluid" alt="bankMandiri" />
                                            </div>
                                            <div className="col-8 col-md-8">
                                                <span className="text-muted" style={{ fontSize: `16px` }}>Bank Mandiri <br /> a.n {doc.an} <br /></span>
                                                <span className="text-muted" style={{ fontSize: `16px` }}>{doc.norek}</span>
                                                <CopyToClipboard onCopy={handleMandiri} text={doc.norek}>
                                                    <button className="cpy" onClick={norekcopied}> <i className="far fa-clone fa" /></button>
                                                </CopyToClipboard>
                                                <span className="norekmessage" />
                                            </div>
                                        </div>
                                    )
                                }
                                else if (doc.bank === "BSM") {
                                    return (
                                        <div className="row rek-bsm mb-5" key={idx}>
                                            <div className="col-4 col-md-4">
                                                <img src={`${process.env.PUBLIC_URL}/images/donasi/mandiris.png`} alt="bank mandiri syariah" className="img-fluid" alt="MandiriSyariah" />
                                            </div>
                                            <div className="col-8 col-md-8">
                                                <span className="text-muted" style={{ fontSize: `16px` }}>Bank Mandiri Syariah<br /> a.n {doc.an} <br /></span>
                                                <span className="text-muted" style={{ fontSize: `16px` }}>{doc.norek}</span>
                                                <CopyToClipboard onCopy={handleMandiris} text={doc.norek}>
                                                    <button className="cpy" onClick={norekmandiriscopied}> <i className="far fa-clone fa" /></button>
                                                </CopyToClipboard>
                                                <span className="norekmandirismessage" />
                                            </div>
                                        </div>
                                    )
                                }
                                else if (doc.bank === "BNI") {
                                    return (
                                        <div className="row rek-bsm mb-5" key={idx}>
                                            <div className="col-4 col-md-4">
                                                <img src={`${process.env.PUBLIC_URL}/images/donasi/bni.png`} alt="bank BNI" className="img-fluid" alt="BankBNI" />
                                            </div>
                                            <div className="col-8 col-md-8">
                                                <span className="text-muted" style={{ fontSize: `16px` }}>Bank BNI <br /> a.n {doc.an} <br /></span>
                                                <span className="text-muted" style={{ fontSize: `16px` }}>{doc.norek}</span>
                                                <CopyToClipboard onCopy={handlebni} text={doc.norek}>
                                                    <button className="cpy" onClick={norekbnicopied}> <i className="far fa-clone fa" /></button>
                                                </CopyToClipboard>
                                                <span className="norekbnimessage" />
                                            </div>
                                        </div>
                                    )
                                }
                                else if (doc.bank === "BNISyariah") {
                                    return (
                                        <div className="row rek-bsm mb-5" key={idx}>
                                            <div className="col-4 col-md-4">
                                                <img src={`${process.env.PUBLIC_URL}/images/donasi/bnis.png`} alt="bank BNI syariah" className="img-fluid" alt="BNISyariah" />
                                            </div>
                                            <div className="col-8 col-md-8">
                                                <span className="text-muted" style={{ fontSize: `16px` }}>Bank BNI Syariah <br /> a.n {doc.an} <br /></span>
                                                <span className="text-muted" style={{ fontSize: `16px` }}>{doc.norek}</span>
                                                <CopyToClipboard onCopy={handlebnis} text={doc.norek}>
                                                    <button className="cpy" onClick={norekbniscopied}> <i className="far fa-clone fa" /></button>
                                                </CopyToClipboard>
                                                <span className="norekbnismessage" />
                                            </div>
                                        </div>
                                    )
                                }
                                else if (doc.bank === "BRI") {
                                    return (
                                        <div className="row rek-bri mb-5" key={idx}>
                                            <div className="col-4 col-md-4">
                                                <img src={`${process.env.PUBLIC_URL}/images/donasi/bri.png`} alt="bank BRI" className="img-fluid" alt="BRI" />
                                            </div>
                                            <div className="col-8 col-md-8">
                                                <span className="text-muted" style={{ fontSize: `16px` }}>Bank BRI <br /> a.n {doc.an} <br /></span>
                                                <span className="text-muted" style={{ fontSize: `16px` }}>{doc.norek}</span>
                                                <CopyToClipboard onCopy={handlebri} text={doc.norek}>
                                                    <button className="cpy" onClick={norekbricopied}> <i className="far fa-clone fa" /></button>
                                                </CopyToClipboard>
                                                <span className="norekbrimessage" />
                                            </div>
                                        </div>
                                    )
                                }
                                else if (doc.bank === "BRISyariah") {
                                    return (
                                        <div className="row rek-bsm mb-5" key={idx}>
                                            <div className="col-4 col-md-4">
                                                <img src={`${process.env.PUBLIC_URL}/images/donasi/bris.png`} alt="bank bri syariah" className="img-fluid" alt="BRISyariah" />
                                            </div>
                                            <div className="col-8 col-md-8">
                                                <span className="text-muted" style={{ fontSize: `16px` }}>Bank BRI Syariah <br /> a.n {doc.an} <br /></span>
                                                <span className="text-muted" style={{ fontSize: `16px` }}>{doc.norek}</span>
                                                <CopyToClipboard onCopy={handlebris} text={doc.norek}>
                                                    <button className="cpy" onClick={norekbriscopied}> <i className="far fa-clone fa" /></button>
                                                </CopyToClipboard>
                                                <span className="norekbrismessage" />
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        <div className="row align-items-center justify-content-center mb-5">
                            <div className="col-md-10 col-lg-10">
                                {
                                    qrcode.map((doc, idx) => {
                                        return (
                                            <img className="img-fluid w-100" src={doc.qrcode} alt="QR Code" key={idx} />
                                        )
                                    })
                                }
                                {/* <img className="img-fluid w-100" src={`${process.env.PUBLIC_URL}/images/donasi/qrcode2.jpeg`} alt="QR Code 1" /> */}
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
                    </div>
                </div>
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
                                <a href={`https://twitter.com/intent/tweet?text=Mari%20berdonasi%20untuk%20${props.judulprog}%20melalui%20https://aqlpeduli.or.id/kepedulian/${props.linkshare}`} rel="noreferrer" target="_blank">
                                    <i className=" img-thumbnail fab fa-twitter fa fa-2x" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                    <p style={{ color: `black` }}>Twitter</p>
                                </a>
                            </div>
                            <div className="smd">
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//aqlpeduli.or.id/kepedulian/${props.linkshare}`} rel="noreferrer" target="_blank">
                                    <i className="img-thumbnail fab fa-facebook fa fa-2x" style={{ color: '#3b5998', backgroundColor: '#eceff5' }} />
                                    <p style={{ color: `black` }}>Facebook</p>
                                </a>
                            </div>
                            <div className="smd">
                                <a href={`https://t.me/share/url?url=${props.judulprog}&text=%20Mari%20membantu%20donasi%20${props.judulprog}%20melalui%20https://aqlpeduli.or.id/kepedulian/${props.linkshare}`} rel="noreferrer" target="_blank">
                                    <i className="img-thumbnail fab fa-2x fa-telegram fa" style={{ color: '#4c6ef5', backgroundColor: 'aliceblue' }} />
                                    <p style={{ color: `black` }}>Telegram</p>
                                </a>
                            </div>
                            <div className="smd">
                                <a href={`https://api.whatsapp.com/send?text=%20Mari%20membantu%20donasi%20${props.judulprog}%20melalui%20https://aqlpeduli.or.id/kepedulian/${props.linkshare}`} rel="noreferrer" target="_blank">
                                    <i className="img-thumbnail fab fa-whatsapp fa fa-2x" style={{ color: '#25D366', backgroundColor: '#cef5dc' }} />
                                    <p style={{ color: `black` }}>Whatsapp</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <label style={{ fontWeight: 400 }}>Page Link <span className="message" /></label><br />
                            <div className="row"> <input className="col-10 ur" type="url" id="myInput" aria-describedby="inputGroup-sizing-default" style={{ height: 40 }} value={`https://aqlpeduli.or.id/kepedulian/${props.linkshare}?${props.query}`} disabled />
                                <CopyToClipboard onCopy={props.handlecopied} text={`https://aqlpeduli.or.id/kepedulian/${props.linkshare}?${props.query}`}>
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

function ListUpdate(props) {
    const [toggleup, setToggleup] = useState(false)
    const toggleUp = () => setToggleup(prev => !prev)
    const toggleClass = `m-3 img-gambar dropdown-menu${toggleup ? " show" : ""}`
    var bnykitemup = 0
    bnykitemup = props.data.length
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
        var img = document.getElementsByClassName(`${index}`)
        for (var i = 0; i < img.length; i++) {
            if (img[i].style.display == "none") {
                img[i].style.display = "block"
            }
            else {
                img[i].style.display = "none"
            }
        }
    }
    const listup = props.data.map((doc, idx) => {
        console.log("url: " + doc.gambarUpdate.url)
        return (
            <li className="timeline-item active text-left" key={idx}>
                <DariTanggal tanggal={doc.tanggalpelaksanaanUpdate}></DariTanggal>
                <h3 style={{ fontSize: `1.25rem` }}>
                    {doc.namaUpdate}
                </h3>
                <p className="text-muted mb-4">
                    {doc.deskripsiUpdate}
                </p>
                {/* <div className="dropdown" onClick={toggleUp}> */}
                <div className="w-100">
                    <button className="btn btn-primary" id="btnImgUp" type="button" aria-haspopup="true" aria-expanded="false" onClick={() => filterLampiran(idx)}>
                        {/* <i class={`fe fe-chevron-up upIcon ${idx}`}></i> */}
                        Lampirkan
                                {/* {isShowGbr[idx] ? */}
                        {/* : */}
                        {/* <i class={`fe fe-chevron-down ${idx}`}></i> */}
                        {/* } */}
                    </button>
                </div>
                {/* {isShowGbr[idx] ? */}
                <div className={`m-3 img-gambar ${idx}`} data-aos="fade-up">
                    <a href={doc.gambarUpdate.url} class="d-block mb-3 mb-md-0" data-fancybox>
                        <img className="img-fluid w-100 gambar-up-det-prog" src={doc.gambarUpdate.url} alt="Gambar update kepedulian" />
                    </a>
                </div>
                {/* : null */}
                {/* } */}
                {/* </div> */}
            </li>
        )
    })
    return (
        <>
            {listup}
        </>
    )
}

function DetailProg(props) {
    const custparam = props.custparam
    const [detailup, setDetailup] = useState([])
    const [isLoadingdetup, setIsLoadingdetup] = useState(true);
    const [detailprog, setDetailprog] = useState([])
    const [metadata, setMetadata] = useState({})
    const [isLoadingdetprog, setIsLoadingdetprog] = useState(true);
    const hist = useHistory()
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname + "/" + custparam });
        ReactGA.pageview(window.location.pathname + "/" + custparam );
    },[])

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
    // const urlUpdate = `https://peaceful-meadow-45867.herokuapp.com/update-programs?_where[program.id]=${detailprog.id}`
    const urlDetailProgram = `https://peaceful-meadow-45867.herokuapp.com/programs?_where[linkShareProgram]=${custparam}`

    useEffect(() => {
        fetch(urlDetailProgram).then(res => res.json()).then(parseJson => parseJson.map((parsedJson) => (
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulProgram}`,
                tanggal: `${parsedJson.created_at}`,
                total: parsedJson.totaldanaProgram,
                terkumpul: parsedJson.totalterkumpulProgram,
                durasi: `${parsedJson.durasiProgram}`,
                des: `${parsedJson.deskripsiProgram}`,
                linkbb: `${parsedJson.linkBerkahBerjamaah}`,
                gambar: parsedJson.gambarProgram.url,
                cerita: `${parsedJson.cerita}`,
                idKateg: `${parsedJson.kategori.id}`,
                namaKateg: `${parsedJson.kategori.namaKategori}`,
                updateProg: parsedJson.update_programs,
                linkshare: `${parsedJson.linkShareProgram}`
            }
        ))).then(
            items => {
                if (items.length > 0) {
                    const detprog = items[0]
                    setDetailprog(detprog)
                    setIsLoadingdetprog(false)
                    console.log(detprog.updateProg)
                    setDetailup(detprog.updateProg)
                    setIsLoadingdetup(false)
                    setMetadata({
                        title: `AQL | ${items[0].judul}`,
                        desc: items[0].des,
                        img: items[0].gambar,
                    })
                }
                else {
                    hist.push('/404')
                }
            }
        )
    }, [])
    // useEffect(() => {
    //     fetch(urlUpdate).then(res => res.json()).then(parsedJsonUp => {
    //         if (parsedJsonUp.length == undefined || parsedJsonUp == undefined || parsedJsonUp == null) {
    //             setDetailup(0)
    //             return 0
    //         }
    //         else {
    //             return parsedJsonUp.map(data => {
    //                 if (data.gambarUpdate !== null) {
    //                     return ({
    //                         idUp: `${data.id}`,
    //                         namaUp: `${data.namaUpdate}`,
    //                         desUp: `${data.deskripsiUpdate}`,
    //                         tanggalUp: `${data.tanggalpelaksanaanUpdate}`,
    //                         gambarUp: `${data.gambarUpdate.url}`,
    //                         idProg: `${data.program.id}`
    //                     })
    //                 }
    //                 else {
    //                     return (
    //                         {
    //                             idUp: `${data.id}`,
    //                             namaUp: `${data.namaUpdate}`,
    //                             desUp: `${data.deskripsiUpdate}`,
    //                             tanggalUp: `${data.tanggalpelaksanaanUpdate}`,
    //                             idProg: `${data.program.id}`
    //                         }
    //                     )
    //                 }
    //             })
    //         }
    //     }).then((items2) => {
    //         var itemup2 = []
    //         // items2.map((doc) => {
    //         //     console.log(doc.idProg+", "+detailprog.id)
    //         //     if (doc.idProg == detailprog.id) {
    //         //         itemup2.push(doc)
    //         //     }
    //         // })
    //         console.log("ini length itemup2: " + itemup2.length)

    //         if (items2 == 0) {
    //             return 0
    //         }
    //         else {
    //             const itemup2sort = itemup2.sort((a, b) => { return new Date(b.tanggalUp) - new Date(a.tanggalUp) })
    //             setDetailup(itemup2sort)
    //         }
    //     }
    //     )
    // }, [])
    const persenTerkumpul = (detailprog.terkumpul / detailprog.total) * 100
    var idrterkumpul = parseInt(detailprog.terkumpul).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    var idrtotal = parseInt(detailprog.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    // const markup = { __html: props.kontenfix }
    const myImg = (props) => {
        return (
            <a href={props.src} className="d-block mb-3 mb-md-0" data-fancybox>
                <img src={props.src} className="img-fluid" alt="image Konten" />
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
    // useEffect((event)=>{
    //     event.preventDefault()
    //     fetch(`localhost:1337/form-donasis`, {
    //         method: 'POST',
    //         body: JSON.stringify()
    //     })
    // })
    return (
        <>
            {/* <Helmet>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.desc} />

                <meta itemProp="name" content={metadata.title} />
                <meta itemProp="description" content={metadata.desc} />
                <meta itemProp="image" content={metadata.img} />

                <meta property="og:url" content={`https://aqlpeduli.or.id/kepedulian/${detailprog.linkshare}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`AQL | Kepedulian dan Kemanusiaan`} />
                <meta property="og:description" content={metadata.desc} />
                <meta property="og:image" content={metadata.img} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.desc} />
                <meta name="twitter:image" content={metadata.img} />
            </Helmet> */}
            <section className="pt-10 pt-md-11">
                <div className="container-xl" id="wadahSticky">
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb px-0">
                                    <li className="breadcrumb-item pl-0">
                                        <Link to={`/kepedulian`} style={{color:`rgb(47, 57, 144)`, fontWeight:`bold`}}>
                                            Program Kepedulian
                                    </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">{detailprog.judul}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="container">
                        {isLoadingdetprog ? <SkeletonDetProg></SkeletonDetProg>
                            :
                            <div className="row mb-5">
                                <div className="col-sm-12 col-md-12 col-lg-7 px-0">
                                    <div>
                                        {detailprog.gambar !== null && <img className="img-fluid w-100 h-100" src={detailprog.gambar} alt="gambar kepedulian"></img>
                                        }
                                    </div>
                                </div>
                                <br />
                                <div className="col-sm-12 col-md-12 col-lg-5">
                                    <Sticky containerSelectorFocus="#wadahSticky" offsetTop={70} stickyEnableRange={[900, Infinity]}>
                                        <div className="kop rounded-bottom-right rounded-top-left ml-3 wadah-info-det-prog">
                                            <p className="mb-1 text-info"><small>{detailprog.namaKateg}</small></p>
                                            <div style={{ height: `5rem` }}>
                                                <h2 className="judul-det-prog mb-3">{detailprog.judul}</h2>
                                            </div>
                                            <div style={{ height: `6rem` }} className="mb-3">
                                                <p style={{ fontSize: `1rem` }} className="des-det-prog">
                                                    {detailprog.des}
                                                </p>
                                            </div>
                                            <div style={{ height: `5rem` }} className="mb-3">
                                                <span style={{ fontSize: `1rem` }}>Rp.{detailprog.terkumpul !== null ? idrterkumpul : 'Rp.0.00'} dari Rp.<strong>{detailprog.total !== null && idrtotal}</strong></span>
                                                {/* <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={persenTerkumpul}>
                                                </div>
                                            </div> */}
                                                <ProgressBar animated now={persenTerkumpul} srOnly></ProgressBar>
                                                {detailprog.durasi !== null && <SisaHari tanggal={detailprog.tanggal} durasi={detailprog.durasi} />
                                                }
                                            </div>
                                            <div className="row button-donasi-atas">
                                                <div className="col-12 col-sm-10 col-md-10">
                                                    <button className="btn btn-donasi-sekarang w-100" onClick={handleShow}>DONASI SEKARANG</button>
                                                </div>
                                                <div className="col-12 col-sm-2 col-md-2 btn-bagika-det-prog pl-0">
                                                    <button className="btn btn-bagikan" onClick={handleShowShare}>
                                                        <i className="fa fa-share-alt" />
                                                    </button>
                                                </div>
                                                <ModalDonasi status={showmodal} handleclose={handleClose} linkbb={detailprog.linkbb} judulprog={detailprog.judul} idkateggg={detailprog.idKateg} idprog={detailprog.id}></ModalDonasi>
                                                <ModalShare status={showshare} handlecloseshare={handleCloseShare} id={detailprog.id} judulprog={detailprog.judul} handlecopied={handlecopied} messagecopied={messagecopied} linkshare={detailprog.linkshare} query={props.query}></ModalShare>
                                            </div>
                                        </div>
                                    </Sticky>
                                </div>
                            </div>
                        }
                    </div>
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
                                            {isLoadingdetprog ? <SkeletonCerita></SkeletonCerita> :
                                                <ReactMarkdown children={detailprog.cerita} renderers={renderMyImg}></ReactMarkdown>
                                            }
                                        </div>
                                        <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <ol className="timeline timeline-success m-5">
                                                {isLoadingdetup ? <SKeletonUpdate></SKeletonUpdate>
                                                    :
                                                    // listup
                                                    <ListUpdate data={detailup}></ListUpdate>
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
                                                detailprog.cerita
                                            }
                                        </p> */}
                                            {props.loadingdetprog ? <SkeletonCerita></SkeletonCerita> :
                                                // <p className="text-muted" style={{ whiteSpace: `pre-wrap`, textAlign: `justify` }} dangerouslySetInnerHTML={markup}>
                                                // </p>
                                                <ReactMarkdown children={detailprog.cerita} renderers={renderMyImg}></ReactMarkdown>
                                            }
                                        </div>
                                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                            <ol className="timeline timeline-success m-5">
                                                {isLoadingdetup ? <SKeletonUpdate></SKeletonUpdate>
                                                    :
                                                    // listup
                                                    <ListUpdate data={detailup}></ListUpdate>
                                                }
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="row no-gutters button-donasi-bawah d-flex bg-white" style={{ position: `fixed`, left: `0`, bottom: `0rem`, width: `100%`, height: `4rem`, zIndex: `99` }}>
                        <div className="col-9 col-sm-6 col-md-6 my-2 justify-content-center" style={{ textAlign: `center` }}>
                            <button className="btn h-100 w-100 btn-donasi-kecil-sekarang" onClick={handleShow}>DONASI SEKARANG</button>
                        </div>
                        <div className="col-3 col-sm-6 col-md-6 btn-bagika-det-prog my-2" style={{ textAlign: `center` }}>
                            <button className="btn h-100 w-100 btn-bagikan" onClick={handleShowShare}> <i className="fa fa-share-alt" /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailProg

// https://api.whatsapp.com/send?phone=6282220825719&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.