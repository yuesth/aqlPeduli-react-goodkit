import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import DetailProg from "../components/program/detail-prog"



function DetailProgram(props) {
    const id = props.match.params.id
    var fromUpdateLanding = false
    if(props.location.state){
        fromUpdateLanding = props.location.state.fromUpdateLanding
    }
    const urlDetailProgram = `http://167.99.72.148/programs/${id}`
    const urlUpdate = `http://167.99.72.148/update-programs`
    const [detailprog, setDetailprog] = useState([])
    const [detailup, setDetailup] = useState([])
    const [isLoadingdetprog, setIsLoadingdetprog] = useState(true);
    const [isLoadingdetup, setIsLoadingdetup] = useState(true);
    const [kontenfix, setKontenfix] = useState("")
    const [fromupdate, setFromupdate] = useState(fromUpdateLanding)
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
                linkbb: `${parsedJson.linkBerkahberjamaah}`,
                gambar: `${parsedJson.gambarProgram.url}`,
                cerita: `${parsedJson.cerita}`,
                namaKateg: `${parsedJson.kategori.namaKategori}`,
                updateProg: `${parsedJson.update_programs}`
            }
        )).then(
            items => {
                setDetailprog(items)
                setIsLoadingdetprog(false)
                return(items.cerita)
            }
        ).then((ret)=>{
            var str2 = ret.match(/http:\/\/167.99.72.148\/uploads\/([A-z])\w+\.(png|jpg|jpeg)/g)
            if(str2 !== null){
                var res = ret.replace(/!\[[A-z]\w+\.(png|jpg|jpeg)\]\(http:\/\/167.99.72.148\/uploads\/([A-z])\w+\.(png|jpg|jpeg)\)/g, `<img className="img-fluid w-50" src="${str2[0]}"></img>`)
                setKontenfix(res)
            }
            else{
                setKontenfix(ret)
            }
        })
        fetch(urlUpdate).then(res => res.json()).then(parsedJsonUp => parsedJsonUp.map(data => {
            if (data.gambarUpdate !== null) {
                return ({
                    idUp: `${data.id}`,
                    namaUp: `${data.namaUpdate}`,
                    desUp: `${data.deskripsiUpdate}`,
                    tanggalUp: `${data.tanggalpelaksanaanUpdate}`,
                    gambarUp: `${data.gambarUpdate.url}`,
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
    const sortedItemUp = itemup.sort((a, b) => { return new Date(b.tanggalUp) - new Date(a.tanggalUp) })
    return (
        <>
            <NavbarGK></NavbarGK>
            <DetailProg itemprog={detailprog} itemup={sortedItemUp} loadingdetprog={isLoadingdetprog} loadingdetup={isLoadingdetup} fromupdate={fromupdate} kontenfix={kontenfix}></DetailProg>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailProgram