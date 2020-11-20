import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-elastic-carousel"
import Flickity from "flickity"
import "./kk.css"
import ButtonBacaLagi from "../button-bacalagi"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

function Skeleton2Layout() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="card mx-3" style={{ width: `1010px`, height: `346px` }}>
                <div className="row">
                    <div className="col-6">
                        <div className="mr-2">
                            <Skeleton reactangle={true} height={330} width={500} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h2><Skeleton /></h2>
                            <p><Skeleton></Skeleton></p>
                        </div>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function KK() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <p className="mb-1"><small>{string}</small></p>
        )
    }
    const urlKepeduliankita = "http://167.99.72.148/kepeduliankitas"
    const [kk, setKk] = useState([])
    const [flickkk1, setFlickkk1] = useState([])
    const [flickkk2, setFlickkk2] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(urlKepeduliankita).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                idKk: `${data.id}`,
                judulKk: `${data.judulKepedulianKita}`,
                gambarKk: `http://167.99.72.148${data.gambarKepedulianKita.url}`,
                tanggalKk: `${data.tanggalKepedulianKita}`,
                kontenKk: `${data.kontenKepedulianKita}`
            }
        ))).then(
            items => {
                setKk(items)
                setTimeout(() => {
                    setIsLoading(false)
                }, 5000)
            }
        )
    })
    // useEffect(() => {
    //     setTimeout(() => {
    //         setFlickkk1(
    //             new Flickity('.carousel-nav', {
    //                 fade: true,
    //                 imagesLoaded: true,
    //                 pageDots: false,
    //                 prevNextButtons: false,
    //                 asNavFor: '.carousel-main',
    //                 draggable: false
    //             })
    //         )
    //         setFlickkk2(
    //             new Flickity('.carousel-main', {
    //                 imagesLoaded: true,
    //                 pageDots: false,
    //                 wrapAround: true,
    //             })
    //         )
    //     }, 10000)
    // })
    const gambarkk = kk.map((doc, idx) => {
        return (
            <div className="w-100 bg-cover" style={{ backgroundImage: `url(${doc.gambarKk})` }}>
                <img src={`${doc.gambarKk}`} alt="..." className="img-fluid invisible" />
            </div>
        )
    })
    const tulisankk = kk.map((doc, idx) => {
        return (
            <div className="col-12 text-center">
                <blockquote>
                    <h2>{doc.judulKk}</h2>
                    <DariTanggal tanggal={doc.tanggalKk}></DariTanggal>
                    <p className="lead mb-5 mb-md-8 tulisan-kk">
                        {doc.kontenKk}
                    </p>
                </blockquote>
            </div>
        )
    })
    const listKK2 = kk.map((doc, idx) => {
        const teksBtn = "Baca Lebih Lanjut";
        return (
            <div className="card mb-3 d-block mw-70 wadah-card rounded-top-left-lg rounded-bottom-right-lg">
                <div class="row no-gutters">
                    <div class="col-md-4 col-12 col-sm-6">
                        <img src={doc.gambarKk} alt="..." height="251" width="375" className="gambar-kk"></img>
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="card-body">
                            <DariTanggal tanggal={doc.tanggalKk}></DariTanggal>
                            <h5 class="card-title judul-kk">{doc.judulKk}</h5>
                            <p class="card-text konten-kk">{doc.kontenKk}</p>
                            <div>
                                <ButtonBacaLagi teks={teksBtn} link={`/kepeduliankita/${doc.idKk}`}></ButtonBacaLagi>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    const listKK3 = kk.map((doc, idx) => {
        return (
            <div className="row no-gutters position-relative">
                <div className="col-md-6">
                    <div className="card-img-slider rounded-top-left-lg overflow-hidden">
                        <div className="w-100 bg-cover" style={{ backgroundImage: `url(${doc.gambarKk})` }}>
                            <img src={`${doc.gambarKk}`} alt="..." className="img-fluid invisible" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 position-static">
                    <div className="card-body py-4 py-lg-4">
                        <div className="flickity-soft-edges flickity-buttons-adjacent flickity-buttons-rounded flickity-buttons-bottom-left mx-n4">
                            <div className="col-12 text-center">
                                <blockquote>
                                    <h2>{doc.judulKk}</h2>
                                    <DariTanggal tanggal={doc.tanggalKk}></DariTanggal>
                                    <p className="lead mb-5 mb-md-8 tulisan-kk">
                                        {doc.kontenKk}
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    const listKK4 = kk.map((doc, idx) => {
        return (
            <div className="card card-lg rounded-top-left rounded-bottom-right mb-7">
                <div className="row no-gutters">
                    <div className="col-md-6 bg-cover rounded-top-left my-n2" style={{ backgroundImage: `url(${doc.gambarKk})`, backgroundPosition: 'center right', height: `340px` }}>
                        <img className="img-fluid invisible" src={`${doc.gambarKk}`} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body p-5">
                            <h2 className="display-6 mb-4">
                                {doc.judulKk}
                            </h2>
                            <p className="mb-4 tulisan-kk">
                                {doc.kontenKk}
                            </p>
                            <Link to={`/kk/${doc.idKk}`} className="stretched-link"></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="position-relative">

                {/* <div className="position-absolute top-right text-primary-dark mt-n12">
                    <svg width={129} height={208} viewBox="0 0 129 208" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#decoration5clip0)"><path fillRule="evenodd" clipRule="evenodd" d="M142.812 201.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z" fill="currentColor" /></g><g clipPath="url(#decoration5clip1)"><path fillRule="evenodd" clipRule="evenodd" d="M142.812 149.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z" fill="currentColor" /></g><g clipPath="url(#decoration5clip2)"><path fillRule="evenodd" clipRule="evenodd" d="M142.812 97.281a6.47 6.47 0 1112.939.002 6.47 6.47 0 01-12.939-.002zm1.618 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.81-1.143-1.143 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.937 0zm1.617 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81z" fill="currentColor" /></g><g clipPath="url(#decoration5clip3)"><path fillRule="evenodd" clipRule="evenodd" d="M38.813 149.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.938 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.469 6.469 0 1112.937.001 6.469 6.469 0 01-12.938-.001zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z" fill="currentColor" /></g><g clipPath="url(#decoration5clip4)"><path fillRule="evenodd" clipRule="evenodd" d="M38.813 97.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z" fill="currentColor" /></g><g clipPath="url(#decoration5clip5)"><path fillRule="evenodd" clipRule="evenodd" d="M38.813 45.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z" fill="currentColor" /></g><g clipPath="url(#decoration5clip6)"><path fillRule="evenodd" clipRule="evenodd" d="M90.813 175.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.344 1.143a6.469 6.469 0 1112.938.001 6.469 6.469 0 01-12.938-.001zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z" fill="currentColor" /></g><g clipPath="url(#decoration5clip7)"><path fillRule="evenodd" clipRule="evenodd" d="M90.813 123.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z" fill="currentColor" /></g><g clipPath="url(#decoration5clip8)"><path fillRule="evenodd" clipRule="evenodd" d="M90.813 71.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z" fill="currentColor" /></g><defs><clipPath id="decoration4clip0"><path transform="matrix(0 -1 -1 0 155.75 207.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip1"><path transform="rotate(-90 155.75 0)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip2"><path transform="matrix(0 -1 -1 0 155.75 103.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip3"><path transform="matrix(0 -1 -1 0 51.75 155.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip4"><path transform="matrix(0 -1 -1 0 51.75 103.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip5"><path transform="matrix(0 -1 -1 0 51.75 51.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip6"><path transform="matrix(0 -1 -1 0 103.75 181.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip7"><path transform="matrix(0 -1 -1 0 103.75 129.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath><clipPath id="decoration4clip8"><path transform="matrix(0 -1 -1 0 103.75 77.75)" fill="#fff" d="M0 0h51.75v51.75H0z" /></clipPath></defs></svg>
                </div> */}
            </div>

            <section className="position-relative mt-7 mt-md-7 pt-7 pt-md-7 mb-7 mb-md-7 pb-7 pb-md-7 bg-white" >
                <div className="container-xl position-relative" style={{ zIndex: 1 }}>
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4">
                                Kepedulian Kita <br />
                            </h2>
                        </div>
                        <div className="position-absolute bottom-right text-warning mb-n9 mr-n7">
                            <svg width={185} height={186} viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="currentColor" /><circle cx={22} cy={2} r={2} fill="currentColor" /><circle cx={42} cy={2} r={2} fill="currentColor" /><circle cx={62} cy={2} r={2} fill="currentColor" /><circle cx={82} cy={2} r={2} fill="currentColor" /><circle cx={102} cy={2} r={2} fill="currentColor" /><circle cx={122} cy={2} r={2} fill="currentColor" /><circle cx={142} cy={2} r={2} fill="currentColor" /><circle cx={162} cy={2} r={2} fill="currentColor" /><circle cx={182} cy={2} r={2} fill="currentColor" /><circle cx={2} cy={22} r={2} fill="currentColor" /><circle cx={22} cy={22} r={2} fill="currentColor" /><circle cx={42} cy={22} r={2} fill="currentColor" /><circle cx={62} cy={22} r={2} fill="currentColor" /><circle cx={82} cy={22} r={2} fill="currentColor" /><circle cx={102} cy={22} r={2} fill="currentColor" /><circle cx={122} cy={22} r={2} fill="currentColor" /><circle cx={142} cy={22} r={2} fill="currentColor" /><circle cx={162} cy={22} r={2} fill="currentColor" /><circle cx={182} cy={22} r={2} fill="currentColor" /><circle cx={2} cy={42} r={2} fill="currentColor" /><circle cx={22} cy={42} r={2} fill="currentColor" /><circle cx={42} cy={42} r={2} fill="currentColor" /><circle cx={62} cy={42} r={2} fill="currentColor" /><circle cx={82} cy={42} r={2} fill="currentColor" /><circle cx={102} cy={42} r={2} fill="currentColor" /><circle cx={122} cy={42} r={2} fill="currentColor" /><circle cx={142} cy={42} r={2} fill="currentColor" /><circle cx={162} cy={42} r={2} fill="currentColor" /><circle cx={182} cy={42} r={2} fill="currentColor" /><circle cx={2} cy={62} r={2} fill="currentColor" /><circle cx={22} cy={62} r={2} fill="currentColor" /><circle cx={42} cy={62} r={2} fill="currentColor" /><circle cx={62} cy={62} r={2} fill="currentColor" /><circle cx={82} cy={62} r={2} fill="currentColor" /><circle cx={102} cy={62} r={2} fill="currentColor" /><circle cx={122} cy={62} r={2} fill="currentColor" /><circle cx={142} cy={62} r={2} fill="currentColor" /><circle cx={162} cy={62} r={2} fill="currentColor" /><circle cx={182} cy={62} r={2} fill="currentColor" /><circle cx={2} cy={82} r={2} fill="currentColor" /><circle cx={22} cy={82} r={2} fill="currentColor" /><circle cx={42} cy={82} r={2} fill="currentColor" /><circle cx={62} cy={82} r={2} fill="currentColor" /><circle cx={82} cy={82} r={2} fill="currentColor" /><circle cx={102} cy={82} r={2} fill="currentColor" /><circle cx={122} cy={82} r={2} fill="currentColor" /><circle cx={142} cy={82} r={2} fill="currentColor" /><circle cx={162} cy={82} r={2} fill="currentColor" /><circle cx={182} cy={82} r={2} fill="currentColor" /><circle cx={2} cy={102} r={2} fill="currentColor" /><circle cx={22} cy={102} r={2} fill="currentColor" /><circle cx={42} cy={102} r={2} fill="currentColor" /><circle cx={62} cy={102} r={2} fill="currentColor" /><circle cx={82} cy={102} r={2} fill="currentColor" /><circle cx={102} cy={102} r={2} fill="currentColor" /><circle cx={122} cy={102} r={2} fill="currentColor" /><circle cx={142} cy={102} r={2} fill="currentColor" /><circle cx={162} cy={102} r={2} fill="currentColor" /><circle cx={182} cy={102} r={2} fill="currentColor" /><circle cx={2} cy={122} r={2} fill="currentColor" /><circle cx={22} cy={122} r={2} fill="currentColor" /><circle cx={42} cy={122} r={2} fill="currentColor" /><circle cx={62} cy={122} r={2} fill="currentColor" /><circle cx={82} cy={122} r={2} fill="currentColor" /><circle cx={102} cy={122} r={2} fill="currentColor" /><circle cx={122} cy={122} r={2} fill="currentColor" /><circle cx={142} cy={122} r={2} fill="currentColor" /><circle cx={162} cy={122} r={2} fill="currentColor" /><circle cx={182} cy={122} r={2} fill="currentColor" /><circle cx={2} cy={142} r={2} fill="currentColor" /><circle cx={22} cy={142} r={2} fill="currentColor" /><circle cx={42} cy={142} r={2} fill="currentColor" /><circle cx={62} cy={142} r={2} fill="currentColor" /><circle cx={82} cy={142} r={2} fill="currentColor" /><circle cx={102} cy={142} r={2} fill="currentColor" /><circle cx={122} cy={142} r={2} fill="currentColor" /><circle cx={142} cy={142} r={2} fill="currentColor" /><circle cx={162} cy={142} r={2} fill="currentColor" /><circle cx={182} cy={142} r={2} fill="currentColor" /><circle cx={2} cy={162} r={2} fill="currentColor" /><circle cx={22} cy={162} r={2} fill="currentColor" /><circle cx={42} cy={162} r={2} fill="currentColor" /><circle cx={62} cy={162} r={2} fill="currentColor" /><circle cx={82} cy={162} r={2} fill="currentColor" /><circle cx={102} cy={162} r={2} fill="currentColor" /><circle cx={122} cy={162} r={2} fill="currentColor" /><circle cx={142} cy={162} r={2} fill="currentColor" /><circle cx={162} cy={162} r={2} fill="currentColor" /><circle cx={182} cy={162} r={2} fill="currentColor" /><circle cx={2} cy={182} r={2} fill="currentColor" /><circle cx={22} cy={182} r={2} fill="currentColor" /><circle cx={42} cy={182} r={2} fill="currentColor" /><circle cx={62} cy={182} r={2} fill="currentColor" /><circle cx={82} cy={182} r={2} fill="currentColor" /><circle cx={102} cy={182} r={2} fill="currentColor" /><circle cx={122} cy={182} r={2} fill="currentColor" /><circle cx={142} cy={182} r={2} fill="currentColor" /><circle cx={162} cy={182} r={2} fill="currentColor" /><circle cx={182} cy={182} r={2} fill="currentColor" /></svg>
                        </div>
                    </div>
                    <div className="row car-kk">
                        {isLoading ?
                            <Skeleton2Layout></Skeleton2Layout>
                            :
                            <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={7000}>
                                {listKK4}
                            </Carousel>
                        }
                        {/* <div className="col-12">
                        <div className="card rounded-top-left-lg rounded-bottom-right-lg carousel-main">
                            {listKK4} */}
                        {/* <div className="row no-gutters position-relative">
                                            <div className="col-md-6">
                                                <div className="card-img-slider rounded-top-left-lg overflow-hidden carousel-nav">
                                                    {gambarkk}
                                                    {/* <Carousel itemsToShow={1}> 
                                                    {gambarkk}
                                                {/*</Carousel> */}
                        {/*</div>
                                            </div>
                                            <div className="col-md-6 position-static">
                                                <div className="card-body py-4 py-lg-4">
                                                    <div className="flickity-soft-edges flickity-buttons-adjacent flickity-buttons-rounded flickity-buttons-bottom-left position-static mx-n4 carousel-main">
                                                        {tulisankk}
                                                        {/* <Carousel itemsToShow={1}>
                                                        {tulisankk}
                                                </Carousel> //}
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                        {/* </div>
                    </div> */}
                    </div>
                    <div className="row align-items-center mb-7">
                        <div className="mx-auto" style={{zIndex:`10`}}>
                            <a className="btn btn-sm btn-primary" href="/kk">
                                Lihat Lainnya
                        </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KK

{/* <div className="col-12 text-center">
                                                <div className="img-fluid svg-shim text-pinterest mx-auto mb-3 mb-md-5" style={{ maxWidth: 132 }}>
                                                    <svg viewBox="0 0 119 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M27.7945 11.3191C29.0692 11.3191 30.2921 10.2476 30.5048 8.92569C30.7562 7.63902 29.8922 6.56752 28.6185 6.56752C27.3444 6.56752 26.1213 7.63902 25.9054 8.92569C25.6568 10.2476 26.4853 11.3191 27.7945 11.3191ZM114.293 15.1435H117.145C117.536 15.1435 117.764 14.9833 117.852 14.6151C117.989 14.0449 118.129 13.4756 118.273 12.9073C118.358 12.5759 118.167 12.3247 117.803 12.3247H114.989C115.192 11.5105 115.981 8.86711 115.981 7.14376C115.981 3.70203 113.087 0.774522 108.98 0.774522C104.342 0.774522 101.324 3.91741 101.324 8.33988C101.324 9.62981 101.801 11.1334 102.392 12.0661C102.137 12.0514 101.883 12.0441 101.628 12.0443C98.1038 12.0443 95.884 13.9746 95.884 16.7834C95.884 19.4195 97.9421 20.4439 99.8798 21.1256C101.601 21.7314 103.186 22.0132 103.186 23.3709C103.186 24.2863 102.314 24.8235 100.607 24.8235C98.582 24.8235 97.469 23.8606 97.1861 23.4953C97.378 23.3431 97.6634 22.9807 97.6634 22.3769C97.6634 21.5323 97.0758 20.8429 95.9845 20.8429C95.0611 20.8429 94.2805 21.6033 94.0845 22.6036C92.6015 23.8286 90.9829 24.6225 88.6872 24.6225C86.4268 24.6225 85.2536 23.4354 85.2536 20.9093C85.7835 21.0722 87.1634 21.2679 88.0754 21.2679C91.9028 21.2679 94.5113 19.512 94.5113 15.9956C94.5113 14.1047 92.8673 12.1189 89.6149 12.1189H89.6075C85.3298 12.1189 82.9337 14.855 81.8875 17.8644C81.5943 17.7931 81.3007 17.7239 81.0066 17.6569C81.2405 16.9894 81.4085 16.2158 81.4085 15.3581C81.4085 13.8718 80.4969 12.1189 78.0576 12.1189C76.3584 12.1189 74.7466 13.2427 73.6295 14.927C73.9075 13.8283 74.0917 13.0966 74.1037 13.0476C74.1765 12.7602 74.058 12.4402 73.6142 12.4402H71.1105C70.7537 12.4402 70.5019 12.5675 70.4005 12.9777C70.3324 13.2513 69.4722 16.6593 68.6347 19.9778C68.1073 22.0469 65.3786 24.6225 61.9489 24.6225C59.6882 24.6225 58.5159 23.3573 58.5159 20.8302C59.1074 21.068 60.4255 21.2677 61.3371 21.2677C65.3202 21.2677 67.773 19.5118 67.773 15.9954C67.773 14.1045 66.1292 12.1187 62.8764 12.1187H62.8694C58.0525 12.1187 55.1018 15.8964 54.6018 20.1797C54.3938 21.9603 52.9055 24.4054 51.292 24.4054C50.5059 24.4054 50.0676 23.9069 50.0676 23.0605C50.0676 22.3296 50.5772 20.5423 51.1358 18.3025C51.3229 17.5532 51.6069 16.4101 51.9218 15.1435H54.5406C54.9304 15.1435 55.159 14.9833 55.2476 14.6151C55.3729 14.085 55.6029 13.1602 55.6681 12.9073C55.7525 12.5759 55.5625 12.3247 55.1975 12.3247H52.6224C52.6224 12.3247 53.808 7.54827 53.8362 7.42556C53.9503 6.93987 53.5478 6.6596 53.1267 6.74901C53.1267 6.74901 51.1363 7.14242 50.7672 7.22014C50.3961 7.29595 50.1081 7.50175 49.9741 8.04181L48.9199 12.3247H46.8522C46.4624 12.3247 46.2331 12.4853 46.1457 12.8527C46.0084 13.4228 45.8682 13.9922 45.7252 14.5609C45.6397 14.8923 45.8306 15.1435 46.1952 15.1435H48.223C48.2086 15.2021 47.4905 17.96 46.9098 20.4298C46.6364 21.6175 45.7208 24.3966 44.2215 24.3966C43.3258 24.3966 42.9474 23.9404 42.9474 22.9619C42.9474 21.421 44.4496 17.5637 44.4496 15.8133C44.4496 13.4753 43.2073 12.1206 40.6624 12.1206C39.0582 12.1206 37.3948 13.1665 36.6899 14.0844C36.6899 14.0844 36.9038 13.333 36.9769 13.0442C37.0551 12.739 36.893 12.4392 36.4961 12.4392H34.0078C33.4783 12.4392 33.3319 12.725 33.2542 13.0394C33.2231 13.1655 32.3265 16.7206 31.4657 20.1334C30.877 22.4703 29.4465 24.423 27.917 24.423C27.1305 24.423 26.7803 23.9247 26.7803 23.0783C26.7803 22.347 27.2483 20.5425 27.8066 18.3028C28.486 15.5762 29.0853 13.3307 29.1494 13.0685C29.233 12.7323 29.0842 12.4394 28.6551 12.4394H26.1518C25.6983 12.4394 25.5364 12.6797 25.4408 13.0135C25.4408 13.0135 24.7363 15.7065 23.9902 18.7045C23.4484 20.8802 22.85 23.0963 22.85 24.1376C22.85 25.9957 23.6762 27.3963 25.9478 27.3963C27.701 27.3963 29.0885 26.4986 30.148 25.3548C29.9923 25.9739 29.893 26.3658 29.8829 26.4058C29.7915 26.7597 29.9023 27.0726 30.3152 27.0726H32.8769C33.3228 27.0726 33.4942 26.8915 33.5873 26.4988C33.677 26.1242 35.5902 18.5257 35.5902 18.5257C36.0959 16.4845 37.3467 15.133 39.1063 15.133C39.9407 15.133 40.6629 15.6908 40.5793 16.775C40.4864 17.9676 39.062 22.2523 39.062 24.1328C39.062 25.5562 39.5847 27.3976 42.2383 27.3976C44.0471 27.3976 45.3786 26.522 46.3469 25.3919C46.7014 26.5913 47.6407 27.3976 49.3636 27.3976C52.2269 27.3976 53.9528 25.6829 54.9668 23.9605C55.8082 25.9616 57.7789 27.3967 60.6688 27.3967C63.6142 27.3967 65.8935 26.1429 67.5089 24.4385L67.0051 26.4337C66.9136 26.7931 67.0685 27.0756 67.4863 27.0756H70.0216C70.3688 27.0756 70.6158 26.8974 70.7059 26.5292C70.7505 26.3485 71.1168 24.919 71.6342 22.8879C72.6237 19.001 74.214 14.9685 76.6037 14.9685C77.4465 14.9685 77.7921 15.4443 77.7921 16.1937C77.7921 16.5471 77.6905 16.8525 77.6027 17.0162C76.4445 16.7838 75.5126 17.3611 75.5126 18.6099C75.5126 19.4235 76.3605 20.1631 77.5049 20.1631C78.3793 20.1631 79.1023 19.9466 79.6788 19.5547C80.2463 19.6729 80.8126 19.7972 81.3774 19.9276C81.2906 20.4912 81.2461 21.0607 81.2445 21.631C81.2445 24.7508 83.4507 27.3965 87.4051 27.3965C90.5039 27.3965 92.6305 26.2519 94.4662 24.7845C95.3485 26.2423 97.5765 27.4204 100.5 27.4204C104.506 27.4204 106.778 25.317 106.778 22.5368C106.778 20.0203 104.732 19.0941 102.622 18.3229C100.907 17.6973 99.4765 17.3571 99.4765 16.1332C99.4765 15.1301 100.259 14.6712 101.599 14.6712C102.469 14.6712 103.122 14.8604 103.47 14.9591C103.816 15.8331 104.532 16.8008 105.753 16.8008C106.787 16.8008 107.251 15.9753 107.251 15.2151C107.251 13.051 103.681 12.8242 103.681 8.18309C103.681 5.29712 105.298 2.91636 108.648 2.91636C110.975 2.91636 112.495 4.40654 112.495 6.81161C112.495 8.79455 111.304 12.3245 111.304 12.3245H109.279C108.89 12.3245 108.661 12.4851 108.573 12.8525C108.436 13.4228 108.295 13.9922 108.151 14.5608C108.066 14.8921 108.257 15.1433 108.622 15.1433H110.599C110.599 15.1433 108.555 22.7531 108.555 24.137C108.555 25.9951 109.592 27.3953 111.865 27.3953C115.079 27.3953 117.088 25.2862 117.961 22.2193C118.029 21.9821 117.896 21.789 117.658 21.789H116.431C116.187 21.789 116.045 21.9299 115.983 22.1715C115.706 23.2602 115.019 24.4056 113.668 24.4056C112.881 24.4056 112.443 23.9071 112.443 23.0609C112.443 22.3298 112.923 20.6181 113.512 18.3028C113.793 17.2003 114.293 15.1435 114.293 15.1435ZM88.949 15.0135C90.0857 15.0135 90.6257 15.777 90.6257 16.6869C90.6257 18.2259 89.4435 19.1643 87.5946 19.1643C86.9329 19.1643 86.0078 19.006 85.4616 18.8222C85.6912 17.4069 86.7057 15.0135 88.949 15.0135ZM62.211 15.0135C63.4551 15.0135 63.887 15.777 63.887 16.6869C63.887 18.2259 62.7054 19.1643 60.8567 19.1643C60.1948 19.1643 59.2697 19.006 58.7237 18.8222C58.952 17.4069 59.8516 15.0135 62.211 15.0135ZM13.0223 0.741211C4.91171 0.741211 0.822266 6.6127 0.822266 11.509C0.822266 14.4736 1.93388 17.1111 4.31808 18.0938C4.70903 18.2554 5.05922 18.0993 5.1726 17.6623C5.25147 17.3598 5.43803 16.5969 5.52127 16.2789C5.63579 15.8467 5.59123 15.695 5.27574 15.3183C4.58826 14.4995 4.14896 13.4395 4.14896 11.938C4.14896 7.58197 7.37668 3.68232 12.5538 3.68232C17.1383 3.68232 19.6568 6.51066 19.6568 10.288C19.6568 15.258 17.4787 19.4526 14.2447 19.4526C12.4589 19.4526 11.122 17.9613 11.5505 16.1323C12.0635 13.9487 13.0574 11.5921 13.0574 10.0159C13.0574 8.60503 12.3074 7.42824 10.7551 7.42824C8.92949 7.42824 7.46294 9.33518 7.46294 11.8898C7.46294 13.5168 8.00747 14.6172 8.00747 14.6172C8.00747 14.6172 6.13917 22.6101 5.81173 24.0099C5.15951 26.7976 5.71352 30.2151 5.76035 30.5602C5.78803 30.7647 6.04835 30.8133 6.16628 30.659C6.33464 30.4371 8.50877 27.7267 9.2482 25.0182C9.45733 24.2513 10.4489 20.2804 10.4489 20.2804C11.042 21.4228 12.7755 22.429 14.619 22.429C20.1065 22.429 23.8298 17.3774 23.8298 10.6157C23.8298 5.50292 19.5409 0.741211 13.0223 0.741211Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <blockquote>
                                                    <p className="lead mb-5 mb-md-8">
                                                        <q>
                                                            Building a thriving business is hard enough without worrying about overhead. Do the smart thing and just use Goodkit.
                                                        </q>
                                                    </p>
                                                    <footer className="d-flex align-items-center justify-content-center">
                                                        <div className="avatar avatar-sm">
                                                            <img className="avatar-img rounded-circle" src={`${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-2.jpg`} alt="..." />
                                                        </div>
                                                        <div className="ml-4 text-left">
                                                            <h4 className="font-family-sans-serif mb-0">
                                                                James Owens
                                                            </h4>
                                                            <p className="small text-muted mt-n1 mb-0">
                                                                Ops at Pinterest
                                                            </p>
                                                        </div>
                                                    </footer>
                                                </blockquote>
                                            </div>

                                            <div className="col-12 text-center">
                                                <div className="img-fluid svg-shim text-stripe mx-auto mb-3 mb-md-5" style={{ maxWidth: 85 }}>
                                                    <svg viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.56803 10.5801C4.56803 9.87724 5.14579 9.60679 6.10289 9.60679C7.475 9.60679 9.20829 10.0215 10.5805 10.7604V6.52467C9.08197 5.92992 7.60145 5.69559 6.10289 5.69559C2.4375 5.69559 0 7.6062 0 10.7966C0 15.771 6.86105 14.9781 6.86105 17.123C6.86105 17.952 6.13895 18.2224 5.12776 18.2224C3.62921 18.2224 1.71526 17.6095 0.198555 16.7805V21.0702C1.87776 21.7912 3.575 22.0975 5.12776 22.0975C8.88329 22.0975 11.4653 20.2411 11.4653 17.0148C11.4472 11.6436 4.56803 12.5988 4.56803 10.5801ZM16.7736 2.09082L12.368 3.02801L12.35 17.4653C12.35 20.133 14.3542 22.0975 17.0264 22.0975C18.507 22.0975 19.5903 21.8272 20.1861 21.5027V17.8439C19.6084 18.0782 16.7555 18.9073 16.7555 16.2397V9.84112H20.1861V6.00203H16.7555L16.7736 2.09082ZM25.8014 7.33576L25.5125 6.00203H21.6125V21.7731H26.1264V11.0849C27.1916 9.69703 28.9972 9.94935 29.557 10.1476V6.00203C28.9792 5.7857 26.8667 5.38915 25.8014 7.33576ZM30.6583 6.00203H35.1903V21.7731H30.6583V6.00203ZM30.6583 4.63218L35.1903 3.65888V0L30.6583 0.955306V4.63205V4.63218ZM44.6153 5.69559C42.8458 5.69559 41.7083 6.52467 41.0764 7.10155L40.8416 5.98403H36.8695V27L41.3833 26.0448L41.4014 20.944C42.0514 21.4126 43.0083 22.0795 44.5972 22.0795C47.8292 22.0795 50.7722 19.484 50.7722 13.7704C50.7542 8.54338 47.775 5.69559 44.6153 5.69559ZM43.532 18.1142C42.4667 18.1142 41.8346 17.7358 41.4014 17.2671L41.3833 10.5801C41.8528 10.0575 42.5028 9.69703 43.532 9.69703C45.175 9.69703 46.3125 11.5354 46.3125 13.8965C46.3125 16.3118 45.193 18.1142 43.532 18.1142ZM65 13.9507C65 9.33647 62.7611 5.69559 58.482 5.69559C54.1846 5.69559 51.5846 9.3366 51.5846 13.9147C51.5846 19.3398 54.6542 22.0795 59.0596 22.0795C61.2083 22.0795 62.8333 21.5929 64.0611 20.908V17.3031C62.8334 17.916 61.425 18.2945 59.6375 18.2945C57.8861 18.2945 56.3333 17.6816 56.1347 15.5548H64.9639C64.9639 15.3204 65 14.3832 65 13.9507ZM56.0805 12.2384C56.0805 10.2017 57.3264 9.35447 58.4639 9.35447C59.5653 9.35447 60.7389 10.2017 60.7389 12.2384H56.0805Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <blockquote>
                                                    <p className="lead mb-5 mb-md-8">
                                                        <q>
                                                            We wouldn't be able to run the majority of our business without the Goodkit platform helping us manage everything.
                                                        </q>
                                                    </p>
                                                    <footer className="d-flex align-items-center justify-content-center">
                                                        <div className="avatar avatar-sm">
                                                            <img className="avatar-img rounded-circle" src={`${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-1.jpg`} alt="..." />
                                                        </div>
                                                        <div className="ml-4 text-left">
                                                            <h4 className="font-family-sans-serif mb-0">
                                                                Katie Williams
                                                            </h4>
                                                            <p className="small text-muted mt-n1 mb-0">
                                                                COO at Stripe
                                                            </p>
                                                        </div>
                                                    </footer>
                                                </blockquote>
                                            </div> */}


{/* < div className="w-100 bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-jumbo-2.jpg)` }}>
                                            < img src={`${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-jumbo-2.jpg`} alt="..." className="img-fluid invisible" />
                                        </div >
                                        <div className="w-100 bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-jumbo-1.jpg)` }}>
                                            <img src={`${process.env.PUBLIC_URL}/dist/assets/img/avatars/avatar-jumbo-1.jpg`} alt="..." className="img-fluid invisible" />
                                        </div> */}



