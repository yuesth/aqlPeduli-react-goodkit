import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./khazanah.css"

function SkeletonKhazanah() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
                <div className="col-3">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `258px`, height: `262px` }}>
                        <Skeleton reactangle={true} height={78} width={258} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function Khazanah() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }

    const urlKhazanah = "https://peaceful-meadow-45867.herokuapp.com/khazanahs"
    const [khazanah, setKhazanah] = useState([])
    const [khazanahdef, setKhazanahdef] = useState([])
    const [key, setKey] = useState("")
    const [isLoadingkhazanah, setIsLoadingkhazanah] = useState(true);
    useEffect(() => {
        fetch(urlKhazanah).then(res => res.json()).then(json => json.map((data) => {
            if (data.gambarKhazanah !== null) {
                return ({
                    id: `${data.id}`,
                    pemateri: `${data.pemateriKhazanah}`,
                    tanggal: `${data.tanggalKhazanah}`,
                    judul: `${data.judulKhazanah}`,
                    isi: `${data.isiKhazanah}`,
                    gambar: `${data.gambarKhazanah.url}`,
                    urlvideo: `${data.urlvideoKhazanah}`,
                    linkshare: `${data.linkShareKhazanah}`
                })
            }
            else {
                return ({
                    id: `${data.id}`,
                    pemateri: `${data.pemateriKhazanah}`,
                    tanggal: `${data.tanggalKhazanah}`,
                    judul: `${data.judulKhazanah}`,
                    isi: `${data.isiKhazanah}`,
                    urlvideo: `${data.urlvideoKhazanah}`,
                    linkshare: `${data.linkShareKhazanah}`
                })
            }
        }))
            .then((items) => {
                const khaza = items.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
                setKhazanah(khaza)
                setKhazanahdef(khaza)
                setIsLoadingkhazanah(false)
            })
    }, [])
    const searchkey = async (e) => {
        const filtered = khazanahdef.filter(kh => {
            return kh.judul.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setKey(e.target.value)
        setKhazanah(filtered)
    }
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-md-9 mb-4">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                Khazanah <br />
                            </h2>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-md-6 mb-4">
                        <div className="col-8" style={{ textAlign: `center` }}>
                            <input type="text" className="form-control" placeholder="Masukkan judul khazanah" aria-label="Search" aria-describedby="search" value={key} onChange={searchkey} />
                        </div>
                    </div>
                    <div className="row mb-9">
                        {isLoadingkhazanah ? <SkeletonKhazanah></SkeletonKhazanah>
                            :
                            // itemkhazanahlayout
                            khazanah.map((doc, idx) => {
                                return (
                                    <div className="col-6 col-md-4 col-lg-3 my-md-5 my-2" key={idx}>
                                        <div className={`card rounded-top-left rounded-bottom-right lift`}>
                                            <div className="row">
                                                <div className="card-body">
                                                    <h3 className="judulKha">
                                                        {doc.judul}
                                                    </h3>
                                                    <span className="text-muted mb-7 tanggalKha">
                                                        <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                                                    </span>
                                                    <br />
                                                    {doc.pemateri !== "null" &&
                                                        <p className="text-gray-600 mb-0 pemateriKha">
                                                            {doc.pemateri}
                                                        </p>
                                                    }
                                                    <Link to={`/khazanah/${doc.linkshare}`} className="stretched-link"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Khazanah