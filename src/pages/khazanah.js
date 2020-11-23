import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Link } from "react-router-dom"


function Khazanah() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }

    const urlKhazanah = "http://167.99.72.148/khazanahs"
    const [khazanah, setKhazanah] = useState([])
    const [isLoadingkhazanah, setIsLoadingkhazanah] = useState(true);
    useEffect(() => {
        fetch(urlKhazanah).then(res => res.json()).then(parsedJson => {
            setKhazanah(parsedJson)
            setIsLoadingkhazanah(false)
        })
    })
    const itemKhazanah = []
    khazanah.map(data => {
        if (data.gambarKhazanah !== null) {
            var item1 = {
                id: `${data.id}`,
                pemateri: `${data.pemateriKhazanah}`,
                tanggal: `${data.tanggalKhazanah}`,
                judul: `${data.judulKhazanah}`,
                isi: `${data.isiKhazanah}`,
                gambar: `http://167.99.72.148${data.gambarKhazanah.url}`,
                urlvideo: `${data.urlvideoKhazanah}`
            }
            itemKhazanah.push(item1)
        }
        else {
            var item2 = {
                id: `${data.id}`,
                pemateri: `${data.pemateriKhazanah}`,
                tanggal: `${data.tanggalKhazanah}`,
                judul: `${data.judulKhazanah}`,
                isi: `${data.isiKhazanah}`,
                urlvideo: `${data.urlvideoKhazanah}`
            }
            itemKhazanah.push(item2)
        }
    })
    const sortedItemKhazanah = itemKhazanah.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const itemkhazanahlayout = sortedItemKhazanah.map((doc, idx) => {
        return (
            <div className="col-6 col-md-4 col-lg-3">
                <div className={`card rounded-top-left rounded-bottom-right lift`}>
                    <div className="row">
                        <div className="card-body">
                            <h2 className="display-6">
                                {doc.judul}
                            </h2>
                            <span className="small text-muted mb-7" style={{fontSize:`12px`}}>
                                <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                            </span>
                            <br/>
                            <p className="font-size-sm text-gray-600 mb-0">
                                {doc.pemateri}
                            </p>
                            <Link to={`/khazanah/${doc.id}`} className="stretched-link"></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-12">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-9">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Khazanah <br />
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-9">
                        {/* <div className="col-6 col-md-4 col-lg-3"> */}
                        {itemkhazanahlayout}
                        {/* {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout}
                        {itemkhazanahlayout} */}
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Khazanah