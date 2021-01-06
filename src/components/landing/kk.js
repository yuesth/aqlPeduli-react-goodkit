import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Flickity from "flickity"
import "./kk.css"
import ButtonBacaLagi from "../button-bacalagi"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "flickity-as-nav-for"

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
            <>{string}</>
        )
    }
    const urlKepeduliankita = "https://peaceful-meadow-45867.herokuapp.com/kepeduliankitas?_limit=3"
    const [kk, setKk] = useState([])
    const [flickkk1, setFlickkk1] = useState([])
    const [flickkk2, setFlickkk2] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(urlKepeduliankita).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                idKk: `${data.id}`,
                judulKk: `${data.judulKepedulianKita}`,
                gambarKk: `${data.gambarKepedulianKita.url}`,
                tanggalKk: `${data.tanggalKepedulianKita}`,
                kontenKk: `${data.kontenKepedulianKita}`
            }
        ))).then(
            items => {
                const itemss = items.sort((a, b) => { return new Date(b.tanggalKk) - new Date(a.tanggalKk) })
                setKk(itemss)
                setIsLoading(false)
            }
        ).then(() => {
            setFlickkk1(
                new Flickity('.kk-main', {
                    imagesLoaded: true,
                    pageDots: false,
                    wrapAround: true
                })
            )
            setFlickkk2(
                new Flickity('.kk-nav', {
                    fade: true,
                    imagesLoaded: true,
                    pageDots: false,
                    prevNextButtons: false,
                    asNavFor: '.kk-main',
                    draggable: false
                })
            )
        })
    },[])
    const gambarkk = kk.map((doc, idx) => {
        return (
            <Link to={`/kepedulian-kita/${doc.idKk}`} key={idx}>
                <div className="w-100" style={{ backgroundImage: `url(${doc.gambarKk})` }}>
                    <img src={`${doc.gambarKk}`} alt="..." className="img-fluid" />
                </div>
            </Link>
        )
    })
    const tulisankk = kk.map((doc, idx) => {
        return (
            <div className="col-12 text-center" key={idx}>
                <Link to={`/kepedulian-kita/${doc.idKk}`}>
                        <h3 className="text-left" style={{ fontSize: `20px`, color: `black` }}>{doc.judulKk}</h3>
                        <blockquote>
                        <p className="tulisan-kk text-left">
                            {doc.kontenKk}
                            {/* <ReactMarkdown children={doc.kontenKk} renderers={renderMyImg}></ReactMarkdown> */}
                        </p>
                        </blockquote>
                        <footer className="d-flex align-items-center">
                            <div className="text-left">
                                <p className="small text-muted mt-n1 mb-0">
                                    <DariTanggal tanggal={doc.tanggalKk}></DariTanggal>
                                </p>
                            </div>
                        </footer>
                </Link>
            </div>
        )
    })
    // const listKK2 = kk.map((doc, idx) => {
    //     const teksBtn = "Baca Lebih Lanjut";
    //     return (
    //         <div className="card mb-3 d-block mw-70 wadah-card rounded-top-left-lg rounded-bottom-right-lg">
    //             <div class="row no-gutters">
    //                 <div class="col-md-4 col-12 col-sm-6">
    //                     <img src={doc.gambarKk} alt="..." height="251" width="375" className="gambar-kk"></img>
    //                 </div>
    //                 <div class="col-md-8 col-12">
    //                     <div class="card-body">
    //                         <DariTanggal tanggal={doc.tanggalKk}></DariTanggal>
    //                         <h5 class="card-title judul-kk">{doc.judulKk}</h5>
    //                         <p class="card-text konten-kk">{doc.kontenKk}</p>
    //                         <div>
    //                             <ButtonBacaLagi teks={teksBtn} link={`/kepeduliankita/${doc.idKk}`}></ButtonBacaLagi>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })
    // const listKK3 = kk.map((doc, idx) => {
    //     return (
    //         <div className="row no-gutters position-relative">
    //             <div className="col-md-6">
    //                 <div className="card-img-slider rounded-top-left-lg overflow-hidden">
    //                     <div className="w-100 bg-cover" style={{ backgroundImage: `url(${doc.gambarKk})` }}>
    //                         <img src={`${doc.gambarKk}`} alt="..." className="img-fluid invisible" />
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-md-6 position-static">
    //                 <div className="card-body py-4 py-lg-4">
    //                     <div className="flickity-soft-edges flickity-buttons-adjacent flickity-buttons-rounded flickity-buttons-bottom-left mx-n4">
    //                         <div className="col-12 text-center">
    //                             <blockquote>
    //                                 <h2>{doc.judulKk}</h2>
    //                                 <DariTanggal tanggal={doc.tanggalKk}></DariTanggal>
    //                                 <p className="lead mb-5 mb-md-8 tulisan-kk">
    //                                     {doc.kontenKk}
    //                                 </p>
    //                             </blockquote>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })
    // const listKK4 = kk.map((doc, idx) => {
    //     return (
    //         <div className="card card-lg rounded-top-left rounded-bottom-right mb-7">
    //             <div className="row no-gutters">
    //                 <div className="col-md-6 bg-cover rounded-top-left my-n2" style={{ backgroundImage: `url(${doc.gambarKk})`, backgroundPosition: 'center right', height: `340px` }}>
    //                     <img className="img-fluid invisible" src={`${doc.gambarKk}`} alt="..." />
    //                 </div>
    //                 <div className="col-md-6">
    //                     <div className="card-body p-5">
    //                         <h2 className="display-6 mb-4">
    //                             {doc.judulKk}
    //                         </h2>
    //                         <p className="mb-4 tulisan-kk">
    //                             {doc.kontenKk}
    //                         </p>
    //                         <Link to={`/kk/${doc.idKk}`} className="stretched-link"></Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <>
            <section className="position-relative mt-7 mt-md-7 pt-7 pt-md-7 pb-7 pb-md-7 bg-light" >
                <div className="container-xl position-relative" style={{ zIndex: 1 }}>
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 style={{ fontSize: `2rem` }}>
                                Kepedulian Kita <br />
                            </h2>
                        </div>
                        <div className="position-absolute bottom-right text-warning mb-n9 mr-n7">
                            <svg width={185} height={186} viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="currentColor" /><circle cx={22} cy={2} r={2} fill="currentColor" /><circle cx={42} cy={2} r={2} fill="currentColor" /><circle cx={62} cy={2} r={2} fill="currentColor" /><circle cx={82} cy={2} r={2} fill="currentColor" /><circle cx={102} cy={2} r={2} fill="currentColor" /><circle cx={122} cy={2} r={2} fill="currentColor" /><circle cx={142} cy={2} r={2} fill="currentColor" /><circle cx={162} cy={2} r={2} fill="currentColor" /><circle cx={182} cy={2} r={2} fill="currentColor" /><circle cx={2} cy={22} r={2} fill="currentColor" /><circle cx={22} cy={22} r={2} fill="currentColor" /><circle cx={42} cy={22} r={2} fill="currentColor" /><circle cx={62} cy={22} r={2} fill="currentColor" /><circle cx={82} cy={22} r={2} fill="currentColor" /><circle cx={102} cy={22} r={2} fill="currentColor" /><circle cx={122} cy={22} r={2} fill="currentColor" /><circle cx={142} cy={22} r={2} fill="currentColor" /><circle cx={162} cy={22} r={2} fill="currentColor" /><circle cx={182} cy={22} r={2} fill="currentColor" /><circle cx={2} cy={42} r={2} fill="currentColor" /><circle cx={22} cy={42} r={2} fill="currentColor" /><circle cx={42} cy={42} r={2} fill="currentColor" /><circle cx={62} cy={42} r={2} fill="currentColor" /><circle cx={82} cy={42} r={2} fill="currentColor" /><circle cx={102} cy={42} r={2} fill="currentColor" /><circle cx={122} cy={42} r={2} fill="currentColor" /><circle cx={142} cy={42} r={2} fill="currentColor" /><circle cx={162} cy={42} r={2} fill="currentColor" /><circle cx={182} cy={42} r={2} fill="currentColor" /><circle cx={2} cy={62} r={2} fill="currentColor" /><circle cx={22} cy={62} r={2} fill="currentColor" /><circle cx={42} cy={62} r={2} fill="currentColor" /><circle cx={62} cy={62} r={2} fill="currentColor" /><circle cx={82} cy={62} r={2} fill="currentColor" /><circle cx={102} cy={62} r={2} fill="currentColor" /><circle cx={122} cy={62} r={2} fill="currentColor" /><circle cx={142} cy={62} r={2} fill="currentColor" /><circle cx={162} cy={62} r={2} fill="currentColor" /><circle cx={182} cy={62} r={2} fill="currentColor" /><circle cx={2} cy={82} r={2} fill="currentColor" /><circle cx={22} cy={82} r={2} fill="currentColor" /><circle cx={42} cy={82} r={2} fill="currentColor" /><circle cx={62} cy={82} r={2} fill="currentColor" /><circle cx={82} cy={82} r={2} fill="currentColor" /><circle cx={102} cy={82} r={2} fill="currentColor" /><circle cx={122} cy={82} r={2} fill="currentColor" /><circle cx={142} cy={82} r={2} fill="currentColor" /><circle cx={162} cy={82} r={2} fill="currentColor" /><circle cx={182} cy={82} r={2} fill="currentColor" /><circle cx={2} cy={102} r={2} fill="currentColor" /><circle cx={22} cy={102} r={2} fill="currentColor" /><circle cx={42} cy={102} r={2} fill="currentColor" /><circle cx={62} cy={102} r={2} fill="currentColor" /><circle cx={82} cy={102} r={2} fill="currentColor" /><circle cx={102} cy={102} r={2} fill="currentColor" /><circle cx={122} cy={102} r={2} fill="currentColor" /><circle cx={142} cy={102} r={2} fill="currentColor" /><circle cx={162} cy={102} r={2} fill="currentColor" /><circle cx={182} cy={102} r={2} fill="currentColor" /><circle cx={2} cy={122} r={2} fill="currentColor" /><circle cx={22} cy={122} r={2} fill="currentColor" /><circle cx={42} cy={122} r={2} fill="currentColor" /><circle cx={62} cy={122} r={2} fill="currentColor" /><circle cx={82} cy={122} r={2} fill="currentColor" /><circle cx={102} cy={122} r={2} fill="currentColor" /><circle cx={122} cy={122} r={2} fill="currentColor" /><circle cx={142} cy={122} r={2} fill="currentColor" /><circle cx={162} cy={122} r={2} fill="currentColor" /><circle cx={182} cy={122} r={2} fill="currentColor" /><circle cx={2} cy={142} r={2} fill="currentColor" /><circle cx={22} cy={142} r={2} fill="currentColor" /><circle cx={42} cy={142} r={2} fill="currentColor" /><circle cx={62} cy={142} r={2} fill="currentColor" /><circle cx={82} cy={142} r={2} fill="currentColor" /><circle cx={102} cy={142} r={2} fill="currentColor" /><circle cx={122} cy={142} r={2} fill="currentColor" /><circle cx={142} cy={142} r={2} fill="currentColor" /><circle cx={162} cy={142} r={2} fill="currentColor" /><circle cx={182} cy={142} r={2} fill="currentColor" /><circle cx={2} cy={162} r={2} fill="currentColor" /><circle cx={22} cy={162} r={2} fill="currentColor" /><circle cx={42} cy={162} r={2} fill="currentColor" /><circle cx={62} cy={162} r={2} fill="currentColor" /><circle cx={82} cy={162} r={2} fill="currentColor" /><circle cx={102} cy={162} r={2} fill="currentColor" /><circle cx={122} cy={162} r={2} fill="currentColor" /><circle cx={142} cy={162} r={2} fill="currentColor" /><circle cx={162} cy={162} r={2} fill="currentColor" /><circle cx={182} cy={162} r={2} fill="currentColor" /><circle cx={2} cy={182} r={2} fill="currentColor" /><circle cx={22} cy={182} r={2} fill="currentColor" /><circle cx={42} cy={182} r={2} fill="currentColor" /><circle cx={62} cy={182} r={2} fill="currentColor" /><circle cx={82} cy={182} r={2} fill="currentColor" /><circle cx={102} cy={182} r={2} fill="currentColor" /><circle cx={122} cy={182} r={2} fill="currentColor" /><circle cx={142} cy={182} r={2} fill="currentColor" /><circle cx={162} cy={182} r={2} fill="currentColor" /><circle cx={182} cy={182} r={2} fill="currentColor" /></svg>
                        </div>
                    </div>
                    <div className="row car-kk mb-7">
                        {isLoading ? <Skeleton2Layout></Skeleton2Layout> :
                            <div className="col-12">
                                <div className="card rounded-top-left-lg rounded-bottom-right-lg">
                                    <div className="row no-gutters position-relative">
                                        <div className="col-md-6">
                                            <div className="card-img-slider rounded-top-left-lg overflow-hidden kk-nav" data-flickity="{&quot;fade&quot;: true, &quot;imagesLoaded&quot;: true, &quot;pageDots&quot;: false, &quot;prevNextButtons&quot;: false, &quot;asNavFor&quot;: &quot;#testmonialsSlider&quot;, &quot;draggable&quot;: false}">
                                                {gambarkk}
                                            </div>
                                        </div>
                                        <div className="col-md-6 position-static card-kkita">
                                            <div className="card-body">
                                                <div className="flickity-soft-edges flickity-buttons-adjacent flickity-buttons-rounded flickity-buttons-bottom-left position-static mx-n4 kk-main">
                                                    {tulisankk}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="row align-items-center mb-7 mt-3">
                        <div className="mx-auto" style={{ zIndex: `10` }}>
                            <Link className="btn btn-sm btn-primary btn-kkita" to="/kepedulian-kita" style={{backgroundColor:`rgb(47,57,144)`}}>
                                Lihat Lainnya
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KK