import React, { useState, useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import DetailProg from "../components/program/detail-prog"
import Helmet from 'react-helmet'



function DetailProgram(props) {
    // const id = props.match.params.id
    // const id = props.location.state.idprogram
    // const namaprog = props.match.params.program
    // var custparam = null
    var fromUpdateLanding = false
    var id = ""
    var urlDetailProgram = ""
    if (props.location.state) {
        fromUpdateLanding = props.location.state.fromUpdateLanding
        id = props.location.state.idprogram
    }
    const custparam = props.match.params.paramKepedulian
    urlDetailProgram = `https://peaceful-meadow-45867.herokuapp.com/programs?_where[linkShareProgram]=${custparam}`
    const urlUpdate = `https://peaceful-meadow-45867.herokuapp.com/update-programs`
    const [detailprog, setDetailprog] = useState([])
    const [detailup, setDetailup] = useState([])
    const [metadata, setMetadata] = useState({})
    const [isLoadingdetprog, setIsLoadingdetprog] = useState(true);
    const [isLoadingdetup, setIsLoadingdetup] = useState(true);
    const [kontenfix, setKontenfix] = useState("")
    const [fromupdate, setFromupdate] = useState(fromUpdateLanding)
    useEffect(() => {
        fetch(urlDetailProgram).then(res => res.json()).then(parseJson => parseJson.map((parsedJson)=>(
            {
                id: `${parsedJson.id}`,
                judul: `${parsedJson.judulProgram}`,
                tanggal: `${parsedJson.created_at}`,
                total: `${parsedJson.totaldanaProgram}`,
                terkumpul: `${parsedJson.totalterkumpulProgram}`,
                durasi: `${parsedJson.durasiProgram}`,
                des: `${parsedJson.deskripsiProgram}`,
                linkbb: `${parsedJson.linkBerkahBerjamaah}`,
                gambar: parsedJson.gambarProgram.url,
                cerita: `${parsedJson.cerita}`,
                idKateg: `${parsedJson.kategori.id}`,
                namaKateg: `${parsedJson.kategori.namaKategori}`,
                updateProg: `${parsedJson.update_programs}`
            }
        ))).then(
            items => {
                const detprog = items[0]
                setDetailprog(detprog)
                setIsLoadingdetprog(false)
                setMetadata({
                    title: `AQL | ${items[0].judul}`,
                    desc: items[0].des,
                    img: items[0].gambar,
                })
                return (items.cerita)
            }
        )
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
                var itemup2 = []
                items2.map((doc) => {
                    if (doc.idProg === id) {
                        itemup2.push(doc)
                    }
                })
                setDetailup(itemup2)
                setIsLoadingdetup(false)
            }
        )
    }, [])
    // const itemup = []
    // detailup.map((doc, idx) => {
    //     if (doc.idProg === id) {
    //         itemup.push(doc)
    //     }
    // })
    const sortedItemUp = detailup.sort((a, b) => { return new Date(b.tanggalUp) - new Date(a.tanggalUp) })
    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.desc} />

                <meta itemProp="name" content={metadata.title} />
                <meta itemProp="description" content={metadata.desc} />
                <meta itemProp="image" content={metadata.img} />

                <meta property="og:url" content="https://aqlpeduli.or.id" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.desc} />
                <meta property="og:image" content={metadata.img} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.desc} />
                <meta name="twitter:image" content={metadata.img} />
            </Helmet>
            <NavbarGK></NavbarGK>
            <DetailProg itemprog={detailprog} itemup={sortedItemUp} loadingdetprog={isLoadingdetprog} loadingdetup={isLoadingdetup} fromupdate={fromupdate} kontenfix={kontenfix}></DetailProg>
            <FooterGK></FooterGK>
        </>
    )
}

export default DetailProgram