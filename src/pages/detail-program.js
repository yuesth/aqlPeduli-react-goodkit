import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import DetailProg from "../components/program/detail-prog"



function DetailProgram(props) {
    const id = props.match.params.id
    const urlDetailProgram = `http://167.99.72.148/programs/${id}`
    const urlUpdate = `http://167.99.72.148/update-programs`
    const [detailprog, setDetailprog] = useState([])
    const [detailup, setDetailup] = useState([])
    const [isLoadingdetprog, setIsLoadingdetprog] = useState(true);
    const [isLoadingdetup, setIsLoadingdetup] = useState(true);
    const [isShowgbrdetup, setIsShowgbrdetup] = useState([])
    useEffect(() => {
        fetch(urlDetailProgram).then(res => res.json()).then(parsedJson => (
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulProgram}`,
                tanggal: `${parsedJson.created_at}`,
                total: `${parsedJson.totaldanaProgram}`,
                terkumpul: `${parsedJson.totalterkumpulProgram}`,
                durasi: `${parsedJson.durasiProgram}`,
                des: `${parsedJson.deskripsiProgram}`,
                gambar: `http://167.99.72.148${parsedJson.gambarProgram.url}`,
                cerita: `${parsedJson.cerita}`,
                namaKateg: `${parsedJson.kategori.namaKategori}`,
                updateProg: `${parsedJson.update_programs}`
            }
        )).then(
            items => {
                setDetailprog(items)
                setIsLoadingdetprog(false)
            }
        )
        fetch(urlUpdate).then(res => res.json()).then(parsedJsonUp => parsedJsonUp.map(data => {
            if (data.gambarUpdate !== null) {
                return ({
                    idUp: `${data.id}`,
                    namaUp: `${data.namaUpdate}`,
                    desUp: `${data.deskripsiUpdate}`,
                    tanggalUp: `${data.tanggalpelaksanaanUpdate}`,
                    gambarUp: `http://167.99.72.148${data.gambarUpdate.url}`,
                    idProg: `${data.program.id}`
                })
            }
            else {
                return (
                    {
                        idUp: `${data.id}`,
                        namaUp: `${data.namaUpdate}`,
                        desUp: `${data.deskripsiUpdate}`,
                        tanggalUp: `${data.tanggalpelaksanaanUpdate}`,
                        idProg: `${data.program.id}`
                    }
                )
            }
        })).then(
            (items2) => {
                setDetailup(items2)
                setIsLoadingdetup(false)
            }
        )
    })
    const itemup = []
    detailup.map((doc, idx) => {
        if (doc.idProg === id) {
            itemup.push(doc)
        }
    })
    return (
        <>
            <NavbarGK></NavbarGK>
            <DetailProg itemprog={detailprog} itemup={itemup} loadingdetprog={isLoadingdetprog} loadingdetup={isLoadingdetup}></DetailProg>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailProgram