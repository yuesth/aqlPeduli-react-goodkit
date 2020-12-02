import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./kepeduliankita.css"

function SkeletonKKList() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-6">
                    <Skeleton reactangle={true} height={168} width={288} />
                </div>
                <div className="col-6">
                    <p><Skeleton count={3}></Skeleton></p>
                    <p className="">
                        <Skeleton count={3}></Skeleton>
                    </p>
                    <p><Skeleton></Skeleton></p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Skeleton reactangle={true} height={168} width={288} />
                </div>
                <div className="col-6">
                    <p><Skeleton count={3}></Skeleton></p>
                    <p className="">
                        <Skeleton count={3}></Skeleton>
                    </p>
                    <p><Skeleton></Skeleton></p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <Skeleton reactangle={true} height={168} width={288} />
                </div>
                <div className="col-6">
                    <p><Skeleton count={3}></Skeleton></p>
                    <p className="">
                        <Skeleton count={3}></Skeleton>
                    </p>
                    <p><Skeleton></Skeleton></p>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function LayoutKK() {
    const urlKk = "http://167.99.72.148/kepeduliankitas"
    const [kk, setKk] = useState([])
    const [isLoadingkk, setIsLoadingkk] = useState(true);
    useEffect(() => {
        fetch(urlKk).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                id: `${data.id}`,
                judul: `${data.judulKepedulianKita}`,
                konten: `${data.kontenKepedulianKita}`,
                tanggal: `${data.tanggalKepedulianKita}`,
                gambar: `${data.gambarKepedulianKita.url}`,
            }
        ))).then(
            items => {
                setKk(items)
                setIsLoadingkk(false)
            }
        )
    })
    const listkk = kk.map((doc, idx) => {
        return (
            <div className="row align-items-center mb-7">
                <div className="col-md-6">
                    <img className="img-fluid mb-6 mb-md-0" src={doc.gambar} alt="..." />
                </div>
                <div className="col-md-6 text-md-left">
                    <h3 className="mb-2">
                        {doc.judul}
                    </h3>
                    <p className="text-muted mb-2 konten-kk-list">
                        {doc.konten}
                    </p>
                    <Link to={`/kk/${doc.id}`}>
                        <a className="h6 text-uppercase" href={`/kk/${doc.id}`}>
                            Baca Lanjut <i className="fe fe-arrow-right" />
                        </a>
                    </Link>
                </div>
            </div>
        )
    })
    return (
        <section className="pt-10 pt-md-12">
            <div className="container">
                <div className="row align-items-center justify-content-center mb-9">
                    <div className="col-md-6" style={{ textAlign: `center` }}>
                        <h2 className="mb-4 mb-md-0" style={{fontSize:`1.75rem`}}>
                            Kepedulian Kita <br />
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 text-center">
                        <p className="mb-9">
                            AQL Peduli setiap hari terus bergerak dan tiada henti berkiprah untuk umat, apa saja yang ada di sekitar kita dan seantero dunia.
                            Berikut ini beberapa contoh program kepedulian kita dari donasi teman-teman semua.
                        </p>
                        {isLoadingkk ? <SkeletonKKList></SkeletonKKList>
                            :
                            listkk}
                    </div>
                </div>
            </div>
        </section>
    )
}

function KK() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <LayoutKK></LayoutKK>
            <FooterGK></FooterGK>
        </>
    )
}

export default KK

{/* <div className="row align-items-center mb-7">
                            <div className="col-md-6">
                                <img className="img-fluid mb-6 mb-md-0" src="assets/img/illustrations/illustration-5.png" alt="..." />
                            </div>
                            <div className="col-md-6 text-md-left">
                                <h3 className="font-family-sans-serif mb-2">
                                    Sharing Efficiencies
                                </h3>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan.
                                </p>
                                <a className="h6 text-uppercase" href="#!">
                                    Keep reading <i className="fe fe-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row align-items-center mb-7">
                            <div className="col-md-6">
                                <img className="img-fluid mb-6 mb-md-0" src="assets/img/illustrations/illustration-4.png" alt="..." />
                            </div>
                            <div className="col-md-6 text-md-left">
                                <h3 className="font-family-sans-serif mb-2">
                                    Removing Repetitive Overhead
                                </h3>
                                <p className="text-muted mb-2">
                                    In urna lectus, mattis non accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <a className="h6 text-uppercase" href="#!">
                                    Keep reading <i className="fe fe-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="img-fluid mb-6 mb-md-0" src="assets/img/illustrations/illustration-6.png" alt="..." />
                            </div>
                            <div className="col-md-6 text-md-left">
                                <h3 className="font-family-sans-serif mb-2">
                                    Organize Once. Save Forever.
                                </h3>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan.
                                </p>
                                <a className="h6 text-uppercase" href="#!">
                                    Keep reading <i className="fe fe-arrow-right" />
                                </a>
                            </div>
                        </div> */}