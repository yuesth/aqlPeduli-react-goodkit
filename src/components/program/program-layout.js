import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Isotope from 'isotope-layout'
import "./program-layout.css"


function ProgramLayout() {
    const urlListProgram = "http://167.99.72.148/programs"
    const urlKateg = "http://167.99.72.148/kategoris"
    const [program, setProgram] = useState([])
    const [kateg, setKateg] = useState([])
    useEffect(() => {
        filterSelection('all')
        var btnContainer = document.getElementById("col-list");
        var btns = btnContainer.getElementsByClassName("kategoriBtn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    })
    useEffect(() => {
        fetch(urlListProgram).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                id: `${data.id}`,
                judul: `${data.judulProgram}`,
                tanggal: `${data.created_at}`,
                gambar: `http://167.99.72.148${data.gambarProgram.url}`,
                total: `${data.totaldanaProgram}`,
                terkumpul: `${data.totalterkumpulProgram}`,
                durasi: `${data.durasiProgram}`,
                des: `${data.deskripsiProgram}`,
                namaKateg: `${data.kategori.namaKategori}`
            }
        ))).then(
            items => setProgram(items)
        )
        fetch(urlKateg).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                id: `${data.id}`,
                namaKateg: `${data.namaKategori}`
            }
        ))).then(
            items => setKateg(items)
        )
    }, [])

    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState("*");
    // useEffect(() => {
    //     setIsotope(
    //         new Isotope(".filter-container", {
    //             itemSelector: ".filter-item",
    //             layoutMode: "fitRows"
    //         })
    //     );
    // }, []);

    // useEffect(
    //     () => {
    //         if (isotope) {
    //             filterKey === "*"
    //                 ? isotope.arrange({ filter: `*` })
    //                 : isotope.arrange({ filter: `.${filterKey}` });
    //         }
    //     },
    //     [isotope, filterKey]
    // );

    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <>{string}</>
        )
    }

    function SisaHari(props) {
        var hariTerakhir = new Date(new Date(props.tanggal).getTime() + (props.durasi * 24 * 60 * 60 * 1000));
        var sisaHari = Math.floor((hariTerakhir.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
        return (
            <span>{sisaHari.toString()} hari</span>
        )
    }

    function PersenTerkumpul(props) {
        var persen = (props.terkumpul / props.total) * 100;
        return (
            <ProgressBar now={persen} />
        )
    }

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("item-donasi");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
        var btnContainer = document.getElementById("col-list");
        var btns = btnContainer.getElementsByClassName("kategoriBtn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    const listprogram = program.map((doc, idx) => {
        var tostring = parseInt(doc.terkumpul)
        var idr = tostring.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        var namaKategori = doc.namaKateg
        var namaKategori2 = namaKategori.replace(/\s/g, "")
        var namaClass = "card item-donasi " + namaKategori2
        return (
            <div className="m-3">
                <Link to={{ pathname: `/program/${doc.id}` }}>
                    <div class={namaClass} style={{ width: `14rem`, height: `470px`, borderRadius: `20px`, color: `black` }}>
                        <div className="card-gambar p-2">
                            {doc.gambar !== null && <img src={doc.gambar} style={{ borderRadius: `5px` }} height="180" width="220"></img>
                            }
                        </div>
                        <div class="card-body" style={{ padding: `10px`, textAlign: `left` }}>
                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                            <div style={{ width: `auto`, height: `60px` }}>
                                <h5 class="card-title titleListProgram">{doc.judul}</h5>
                            </div>
                            <p class="card-text kontenListProgram">{doc.des}</p>
                            <Container>
                                <Row>
                                    <Col md={5} xs={4} style={{ textAlign: `left`, fontSize: `10px` }}>
                                        <p style={{ marginBottom: `5px` }}>Sisa Waktu</p>
                                        {doc.durasi !== null && <SisaHari tanggal={doc.tanggal} durasi={doc.durasi} />
                                        }
                                    </Col>
                                    <Col md={{ span: `7` }} xs={8} style={{ textAlign: `right`, fontSize: `10px` }}>
                                        <p style={{ marginBottom: `5px` }}>Terkumpul</p>
                                        <span>Rp.{idr}</span>
                                    </Col>
                                </Row>
                            </Container>
                            <br />
                            <div>
                                <PersenTerkumpul total={doc.total} terkumpul={doc.terkumpul}></PersenTerkumpul>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    const listprogram2 = program.map((doc, idx) => {
        var tostring = parseInt(doc.terkumpul)
        var idr = tostring.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        var namaKategori = doc.namaKateg
        var namaKategori2 = namaKategori.replace(/\s/g, "")
        var namaClass = "item-donasi " + namaKategori2
        return (
            <div className={`col-md-4 col-lg-4 col-sm-6 p-2 mt-0 ml-0 mr-0 mb-5 ${namaClass}`}>
                <div className={`card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6`}>
                    <div>
                        <img className="card-img-top rounded-top-left" src={doc.gambar} alt="..." height="200" />
                    </div>
                    <div className="position-relative">
                        <div className="shape shape-fluid-x shape-top text-white">
                            <div className="shape-img pb-5">
                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-1">
                        <span className="small text-muted mt-n1 mb-0">
                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                        </span>
                        <div style={{ minHeight: `55px` }}>
                            <h3 className="mb-2">
                                {doc.judul}
                            </h3>
                        </div>
                        <p className="font-size-sm mb-4 des-prog">
                            {doc.des}
                        </p>
                        <Container>
                            <Row>
                                <Col md={5} xs={4} style={{ textAlign: `left`, fontSize: `10px` }}>
                                    <p style={{ marginBottom: `5px` }}>Sisa Waktu</p>
                                    {doc.durasi !== null && <SisaHari tanggal={doc.tanggal} durasi={doc.durasi} />
                                    }
                                </Col>
                                <Col md={{ span: `7` }} xs={8} style={{ textAlign: `right`, fontSize: `10px` }}>
                                    <p style={{ marginBottom: `5px` }}>Terkumpul</p>
                                    <span>Rp.{idr}</span>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <div>
                            <PersenTerkumpul total={doc.total} terkumpul={doc.terkumpul}></PersenTerkumpul>
                        </div>
                        <Link to={`/program/${doc.id}`}>
                            <a className="stretched-link" href="blog-post.html" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section className="pt-10 pt-md-12">
            <div className="container ">
                <div className="row align-items-center justify-content-center mb-9">
                    <div className="col-md-6" style={{ textAlign: `center` }}>
                        <h2 className="display-4 mb-4 mb-md-0">
                            Program Kepedulian <br />
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <Col md={2} id="col-list" className="pt-10">
                        <Row>
                            <Col style={{ textAlign: `center` }}>
                                <h2>Kategori</h2>
                            </Col>
                        </Row>
                        <Row className="row-besar">
                            <Row>
                                <Col>
                                    <Button variant="default" onClick={() => filterSelection('all')} className="kategoriBtn active">Semua</Button>
                                    {/* <Button variant="default" onClick={() => setFilterKey('*')} className="kategBtn active">Semua</Button> */}
                                </Col>
                            </Row>
                            <br />
                            {kateg.map((doc, idx) => {
                                var nama1 = doc.namaKateg
                                var nama2 = nama1.replace(/\s/g, "")
                                return (
                                    <Row>
                                        <Col>
                                            <Button variant="default" onClick={() => filterSelection(nama2)} key={idx} className="kategoriBtn">{doc.namaKateg}</Button>
                                            {/* <Button variant="default" onClick={() => setFilterKey(nama2)} key={idx} className="kategBtn">{doc.namaKateg}</Button> */}
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Row>
                        <Row className="row-kecil mb-2">
                            <Button variant="default" onClick={() => filterSelection('all')} className="kategoriBtn active">Semua</Button>
                            {kateg.map((doc, idx) => {
                                var nama1 = doc.namaKateg
                                var nama2 = nama1.replace(/\s/g, "")
                                return (
                                    <Button variant="default" onClick={() => filterSelection(nama2)} key={idx} className="kategoriBtn">{doc.namaKateg}</Button>
                                )
                            })}
                        </Row>
                    </Col>

                    <Col md={10}>
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-10 text-center text-white">
                                <form>
                                    <div className="input-group rounded-top-left rounded-bottom-right shadow">
                                        <input type="email" className="form-control bg-white pr-2 w-60" placeholder="Masukkan nama program" aria-label="Email address" aria-describedby="subscriptionButton" />
                                        <div className="input-group-append">
                                            <button className="btn btn-info ml-3" type="button" id="subscriptionButton">
                                                Cari
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container-fluid d-flex px-0">
                            <div className="row pl-3">
                                {listprogram2}
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </section>
    )
}

export default ProgramLayout