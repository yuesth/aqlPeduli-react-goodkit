import React, { useEffect } from 'react'
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import ReactGA from 'react-ga'
import "./profil.css"

function ProfilLayout(props) {
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, [])
    return (
        <section className="pt-10 pt-md-12">
            <div className="container-lg p-10">
                <div className="row" style={{ textAlign: `center` }}>
                    <div className="col-md-7">
                        <h2>Tentang AQL Peduli</h2>
                        <p className="text-muted paragraf1" style={{ textAlign: `justify` }}>
                            AQL Peduli adalah sebuah lembaga nirlaba di bawah naungan AQL Islamic Center yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/profil/logo-aql.png`}></img>
                    </div>
                </div>
                <br />
                <div className="row row-lb">
                    <div className="col">
                        <div className="wadah-lb">
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/profil/latarbelakang2.png`}></img>
                            <h3>
                                <strong>Latar Belakang</strong>
                            </h3>
                            <p>
                                Sejak berdirinya, AQL Peduli telah melakukan kegiatan kemanusiaan dengan program-program yang diantaranya di bidang Pendidikan, Religi, Kesehatan, Pangan dan saat bencana.
                            <br />
                            Dalam bidang pendidikan membangun madrasah salah satunya di Halmahera, Maluku Utara. Dalam bidang religi membangun masjid, di antaranya di Bogor, Palu, Lombok Utara dan Halmahera Tengah. Dalam bidang kesehatan membangun MCK, pengobatan gratis dan pengadaan ambulance gratis. Dalam bidang pangan, AQL Peduli setiap pekan berbagi makanan kepada dhuafa dalam program dapur sedekah, beras untuk pedalaman, iftar dan sembako dhuafa.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/profil/visi.png`}></img>
                    </div>
                    <div className="col-md-6" style={{ textAlign: `right`, margin: `auto` }}>
                        <h3>
                            <strong>Visi</strong>
                        </h3>
                        <p>
                            Menjadi lembaga kemanusiaan yang profesional bertaraf internasional
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6" style={{ textAlign: `left`, margin: `auto` }}>
                        <h3>
                            <strong>Misi</strong>
                        </h3>
                        <p>
                            Memberikan solusi problem tanggap darurat kemanusiaan dengan cepat, tepat dan terintegrasi serta membangun kembali masyarakat pasca bencana dalam tatanan nilai dan peradaban yang lebih baik
                        </p>
                        <p>
                            Memiliki kinerja yang dapat dipercaya, transparan, terukur, responsif dan sesuai dengan aturan yang berlaku
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/profil/misi.png`} style={{ marginLeft: `30px` }}></img>
                    </div>
                </div>
                <br />
                <br />
                {/* <div className="row align-items-center justify-content-center mb-9">
                    <div className="col-md-6" style={{ textAlign: `center` }}>
                        <h2 className="display-4 mb-4 mb-md-0">
                            Profil <br />
                        </h2>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

function Profil() {
    // const urlKepeduliankita = "http://167.99.72.148/kepeduliankitas"
    // const [kk, setKk] = useState([])
    // const [flick, setFlick] = useState([])
    // useEffect(() => {
    //     fetch(urlKepeduliankita).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
    //         {
    //             idKk: `${data.id}`,
    //             judulKk: `${data.judulKepedulianKita}`,
    //             gambarKk: `http://167.99.72.148${data.gambarKepedulianKita.url}`,
    //             tanggalKk: `${data.tanggalKepedulianKita}`,
    //             kontenKk: `${data.kontenKepedulianKita}`
    //         }
    //     ))).then(
    //         items => setKk(items)
    //     )
    // })

    // useEffect(() => {
    //     setTimeout(() => {
    //         setFlick(
    //             new Flickity('.main-carousel', {
    //                 fade: true,
    //                 contain: true,
    //                 wrapAround: true,
    //                 fullscreen: true,
    //                 cellAlign: 'left'
    //             })
    //         )
    //     }, 1000)
    // })
    // const listkk = kk.map((doc, idx) => {
    //     return (
    //         <div className="carousel-cell" style={{ width: `300px`, height: `170px` }}>
    //             <img className="carousel-cell-image" style={{ display: `block`, height: `200px` }} src={doc.gambarKk} alt="" />
    //         </div>
    //     )
    // })

    return (
        <>
            <NavbarGK></NavbarGK>
            <ProfilLayout></ProfilLayout>
            <FooterGK></FooterGK>
        </>

    );
}

export default Profil