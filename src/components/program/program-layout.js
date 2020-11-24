import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Isotope from 'isotope-layout'
import "./program-layout.css"

function SkeletonKateg() {
    return (
        <SkeletonTheme color="e3e3e3">
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Skeleton></Skeleton>
                </Col>
            </Row>
        </SkeletonTheme>
    )
}

function SkeletonProg() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `290px`, height: `480px` }}>
                        {/* <SkeletonTheme color="#e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={290} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                        {/* </SkeletonTheme> */}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `290px`, height: `480px` }}>
                        {/* <SkeletonTheme color="e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={290} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                        {/* </SkeletonTheme> */}
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `290px`, height: `480px` }}>
                        {/* <SkeletonTheme color="e3e3e3"> */}
                        <Skeleton reactangle={true} height={200} width={290} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                        {/* </SkeletonTheme> */}

                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function ProgramLayout(props) {
    const urlListProgram = "http://167.99.72.148/programs"
    const urlKateg = "http://167.99.72.148/kategoris"
    const [program, setProgram] = useState([])
    const [kateg, setKateg] = useState([])
    const [isLoadingprog, setIsLoadingprog] = useState(true);
    const [isLoadingkateg, setIsLoadingkateg] = useState(true);
    // const namaprog = props.namaprog
    useEffect(() => {
        // (namaprog && filterSelection(namaprog)) || filterSelection('all')
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
            items => {
                setProgram(items)
                setIsLoadingprog(false)
            }
        )
        fetch(urlKateg).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                id: `${data.id}`,
                namaKateg: `${data.namaKategori}`
            }
        ))).then(
            items => {
                setKateg(items)
                setIsLoadingkateg(false)
            }
        )
    }, [])

    // const [isotope, setIsotope] = useState(null);
    // const [filterKey, setFilterKey] = useState("*");
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
            <span style={{ color: `#5146b8` }} className="span-sisahari">{sisaHari.toString()} hari</span>
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
            <div className={`col-md-4 col-lg-4 col-sm-6 col-6 mt-0 ml-0 mr-0 mb-3 ${namaClass}`}>
                <div className={`card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-md-5 mt-2`}>
                    <div>
                        <img className="card-img-top rounded-top-left img-fluid img-prog" src={doc.gambar} alt="..." />
                    </div>
                    <div className="position-relative">
                        <div className="shape shape-fluid-x shape-top text-white">
                            <div className="shape-img pb-5">
                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-2 pb-3">
                        <span className="small text-muted mt-n1 mb-0">
                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                        </span>
                        <div style={{ minHeight: `5rem` }}>
                            <h3>
                                {doc.judul}
                            </h3>
                        </div>
                        {/* <p className="font-size-sm mb-4 des-prog">
                            {doc.des}
                        </p> */}
                        <Container className="p-0">
                            <Row>
                                <Col md={5} xs={6} style={{ textAlign: `left`, fontSize: `12px` }}>
                                    <p style={{ marginBottom: `0.3rem` }}>Sisa Waktu</p>
                                    {doc.durasi !== null && <SisaHari tanggal={doc.tanggal} durasi={doc.durasi} />
                                    }
                                </Col>
                                <Col md={7} xs={6} style={{ textAlign: `right`, fontSize: `12px` }}>
                                    <p style={{ marginBottom: `0.3rem` }}>Terkumpul</p>
                                    <span style={{ color: `#6053db` }} className="span-terkumpul">Rp.{idr}</span>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <div>
                            <PersenTerkumpul total={doc.total} terkumpul={doc.terkumpul}></PersenTerkumpul>
                        </div>
                        <Link to={{
                            pathname: `/program/${doc.id}`,
                            state: {
                                fromUpdateLanding: false,
                            }
                        }}>
                            <a className="stretched-link" href="" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section className="pt-10 pt-md-11">
            <div className="container-xl">
                <div className="row align-items-center justify-content-center mb-7">
                    <div className="col-md-6" style={{ textAlign: `center` }}>
                        <h2 className="display-4 mb-4 mb-md-0">
                            Program Kepedulian <br />
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <Col md={2} id="col-list" className="pt-10 px-0 kateg-wide">
                        <Row>
                            <Col className="pl-6">
                                <h2>Kategori</h2>
                            </Col>
                        </Row>
                        <div className="row pl-n5 flex-kateg">
                            {/* disini */}
                            <div>
                                <Button variant="default" onClick={() => filterSelection('all')} className="kategoriBtn active">Semua</Button>
                            </div>
                            {isLoadingkateg ? <SkeletonKateg></SkeletonKateg>
                                :
                                kateg.map((doc, idx) => {
                                    var nama1 = doc.namaKateg
                                    var nama2 = nama1.replace(/\s/g, "")
                                    return (
                                        <div>
                                            <Button variant="default" onClick={() => filterSelection(nama2)} key={idx} className="kategoriBtn">{doc.namaKateg}</Button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>

                    <Col md={10}>
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-12 col-lg-12 text-center text-white">
                                <form>
                                    <div className="input-group rounded-top-left rounded-bottom-right shadow">
                                        <input type="text" className="form-control bg-white pr-2 w-60" placeholder="Masukkan nama program" aria-label="Email address" aria-describedby="subscriptionButton" />
                                        <div className="input-group-append">
                                            <button className="btn btn-info ml-3" type="button" id="subscriptionButton">
                                                Cari
                                        </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3 kateg-thin">
                            <div className="col-md-12 col-lg-12 text-center text-white">
                                <form>
                                    <div className="mb-3">
                                        <select className="custom-select">
                                            <option selected value={1} onClick={() => filterSelection('all')}>Semua</option>
                                            {
                                                kateg.map((doc, idx) => {
                                                    var nama1 = doc.namaKateg
                                                    var nama2 = nama1.replace(/\s/g, "")
                                                    return (
                                                        <>
                                                            <option value={idx+2} onClick={() => filterSelection(nama2)} key={idx}>{doc.namaKateg}</option>
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="container-fluid px-0">
                            <div className="row">
                                {isLoadingprog ? <SkeletonProg></SkeletonProg>
                                    :
                                    listprogram2
                                }
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </section>
    )
}

export default ProgramLayout

{/* <Row>
                                <Col>
                                    <Button variant="default" onClick={() => filterSelection('all')} className="kategoriBtn active">Semua</Button>
                                    {/* <Button variant="default" onClick={() => setFilterKey('*')} className="kategBtn active">Semua</Button>
                                </Col>
                            </Row>
                            <br />
                            {isLoadingkateg ? <SkeletonKateg></SkeletonKateg>
                                :
                                kateg.map((doc, idx) => {
                                    var nama1 = doc.namaKateg
                                    var nama2 = nama1.replace(/\s/g, "")
                                    return (
                                        <Row>
                                            <Col>
                                                <Button variant="default" onClick={() => filterSelection(nama2)} key={idx} className="kategoriBtn">{doc.namaKateg}</Button>
                                                {/* <Button variant="default" onClick={() => setFilterKey(nama2)} key={idx} className="kategBtn">{doc.namaKateg}</Button>
                                            </Col>
                                        </Row>
                                    )
                                })
                            } */}