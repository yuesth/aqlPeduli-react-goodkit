import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function Galeri() {
    const urlGaleri = "http://167.99.72.148/informasis"
    const [galeri, setGaleri] = useState([])
    const [gambar, setGambar] = useState([])
    const [isLoadinggaleri, setIsLoadinggaleri] = useState(true)
    useEffect(() => {
        fetch(urlGaleri).then(res => res.json()).then(parsedJson => {
            setGaleri(parsedJson)
            setIsLoadinggaleri(false)
        }).then(()=>{
            const itemGaleri = []
            galeri.map(data => {
                if (data.gambarGaleri !== null) {
                    var item1 = {
                        id: `${data.id}`,
                        judul: `${data.judulGaleri}`,
                        konten: `${data.kontenGaleri}`,
                        gambar: data.gambarGaleri,
                        link: `${data.linkGaleri}`
                    }
                    itemGaleri.push(item1)
                }
                else {
                    var item2 = {
                        id: `${data.id}`,
                        judul: `${data.judulGaleri}`,
                        konten: `${data.kontenGaleri}`,
                        link: `${data.linkGaleri}`
                    }
                    itemGaleri.push(item2)
                }
            })
            setGambar(itemGaleri)
        })
    })
    // console.log(gambar[0])
    // alert(JSON.stringify(gambar[0].gambar))
    return (
        <>
            <div className="row mb-9">
                <div className="border-kita">
                    <h2 className="mb-0">
                        Galeri
                            </h2>
                </div>
            </div>
            <div className="row mb-9">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div className="card rounded-top-left rounded-top-right lift">
                        <div>
                            {/* <img className="card-img-top rounded-top-left img-fluid img-infor" src={ } alt="..." /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galeri