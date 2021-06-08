import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Isotope from 'isotope-layout'
import "./program-layout.css"
// import $ from 'jquery'
const $ = window.jQuery


function SkeletonKateg() {
    return (
        <SkeletonTheme color="e3e3e3">
            <div className="row">
                <div className="col">
                    <Skeleton></Skeleton>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Skeleton></Skeleton>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Skeleton></Skeleton>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Skeleton></Skeleton>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Skeleton></Skeleton>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function SkeletonProg() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `290px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={200} width={290} />
                        <br />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `290px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={200} width={290} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `290px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={200} width={290} />
                        <h3><Skeleton /></h3>
                        <br />
                        <Skeleton count={2} />
                        <br />
                        <Skeleton count={2} />
                        <small><Skeleton count={2} /></small>

                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function ProgramLayout(props) {
    var init = ""
    var nama1 = props.namakateg
    var nama2 = nama1.replace(/\s/g, "")
    var initKategbtn = ""
    props.namakateg !== "" ? init = nama2 : init = "*"
    props.namakateg !== "" ? initKategbtn = nama2 : initKategbtn = "Semua"
    const urlListProgram = "https://peaceful-meadow-45867.herokuapp.com/programs"
    const urlKateg = "https://peaceful-meadow-45867.herokuapp.com/kategoris"
    const [program, setProgram] = useState([])
    const [kateg, setKateg] = useState([])
    const [isLoadingprog, setIsLoadingprog] = useState(true);
    const [isLoadingkateg, setIsLoadingkateg] = useState(true);
    const [isotope, setIsotope] = useState(null)
    const [filterKey, setFilterKey] = useState(init)
    const [kategbtn, setKategbtn] = useState(initKategbtn)
    useEffect(() => {
        fetch(urlListProgram).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                id: `${data.id}`,
                judul: `${data.judulProgram}`,
                tanggal: `${data.created_at}`,
                gambar: `${data.gambarProgram.url}`,
                total: data.totaldanaProgram,
                terkumpul: data.totalterkumpulProgram,
                durasi: `${data.durasiProgram}`,
                des: `${data.deskripsiProgram}`,
                linkshare: `${data.linkShareProgram}`,
                namaKateg: `${data.kategori.namaKategori}`
            }
        ))).then(
            items => {
                setProgram(items)
                setIsLoadingprog(false)
                setIsotope(
                    new Isotope('.container-filter', {
                        itemSelector: ".item-filter",
                        layoutMode: "fitRows"
                    })
                )
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

    useEffect(() => {
        if (isotope) {
            filterKey === "*"
                ? isotope.arrange({ filter: `*` })
                : isotope.arrange({ filter: `.${filterKey}` })
        }
        $(`.kateg-${kategbtn}`).addClass('is-checked')
        $(`.kateg-thin-${kategbtn}`).addClass('is-checked')
        // document.getElementsByClassName(`kateg-${kategbtn}`).className += " is-checked"
        // document.getElementsByClassName(`kateg-thin-${kategbtn}`).className += " is-checked"
        
        // $('.flex-kateg').each(function (i, buttonGroup) {
        //     var $buttonGroup = $(buttonGroup);
        //     $buttonGroup.on('click', 'button', function () {
        //         $buttonGroup.find('.is-checked').removeClass('is-checked');
        //         $(this).addClass('is-checked');
        //     });
        // });
        // var btnContainer = document.getElementById("col-list");
        // var btns = btnContainer.getElementsByClassName("kategoriBtn");
        // for (var i = 0; i < btns.length; i++) {
        //     btns[i].addEventListener("click", function () {
        //         var current = document.getElementsByClassName("active");
        //         current[0].className = current[0].className.replace(" active", "");
        //         this.className += " active";
        //     });
        // }
    }, [isotope, filterKey])


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
            // <div className="progress">
            //     <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={persen}>
            //     </div>
            // </div>
            <ProgressBar animated now={persen} srOnly></ProgressBar>
        )
    }

    function filterSelection(c) {
        var x, i;
        const d = c;
        x = document.getElementsByClassName("item-donasi");
        if (c === "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
    }

    const filterSelection2 = (c, d) => {
        setFilterKey(c)
        setKategbtn(d)
        $('.flex-kateg').find('.is-checked').removeClass('is-checked');
        c === "*" ? $(`.kateg-Semua`).addClass('is-checked') : $(`.kateg-${c}`).addClass('is-checked')
        $('.flex-kateg-thin').find('.is-checked').removeClass('is-checked')
        c === "*" ? $(`.kateg-thin-all`).addClass('is-checked') : $(`.kateg-thin-${c}`).addClass('is-checked')

        // var ele = document.querySelector('.kategoriBtn')
        // ele.classList.remove('is-checked')
        // c === "*" ? document.querySelector(`.kateg-Semua`).classList.add("is-checked") : document.querySelector(`.kateg-${c}`).classList.add("is-checked")
        // document.querySelector(`.flex-kateg .is-checked`).classList.remove('is-checked')
        // c === "*" ? document.getElementsByClassName(`kateg-Semua`).className += " is-checked" : document.getElementsByClassName(`kateg-${c}`).className += "is-checked"
        // var ele2 = document.querySelector('.dropdown-item')
        // ele2.classList.remove('is-checked')
        // c === "*" ? document.querySelector(`.kateg-thin-all`).classList.add("is-checked") : document.querySelector(`.kateg-thin-${c}`).classList.add("is-checked")
        // document.querySelector(`.flex-kateg-thin .is-checked`).classList.remove('is-checked')
        // c === "*" ? document.getElementsByClassName(`kateg-thin-all`).className += " is-checked" : document.getElementsByClassName(`kateg-thin-${c}`).className += "is-checked"
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

    const sortedItemProgram = program.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })

    const listprogram2 = sortedItemProgram.map((doc, idx) => {
        var tostring = parseInt(doc.terkumpul)
        var idr = tostring.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        var namaKategori = doc.namaKateg
        var namaKategori2 = namaKategori.replace(/\s/g, "")
        var namaClass = "item-donasi " + namaKategori2
        return (
            <div className={`col-md-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-0 ml-0 mr-0 mb-3 item-filter ${namaClass}`}>
                <div className={`card card-sm rounded-top-left rounded-bottom-right lift lift-lg mb-md-5 mb-2`}>
                    <div>
                        <img className="card-img-top rounded-top-left img-fluid img-prog" src={doc.gambar} alt="..." />
                    </div>
                    <div className="card-body p-2 pb-3">
                        <span className="text-muted mt-n1 mb-0" style={{ fontSize: `0.875rem` }}>
                            <DariTanggal tanggal={doc.tanggal}></DariTanggal>
                        </span>
                        <div style={{ height: `4rem` }} className="div-judul-program">
                            <h3 className="titleListProgram">
                                {doc.judul}
                            </h3>
                        </div>
                        <div className="container p-0">
                            <div className="row">
                                <div className="col-md-5 col-12" style={{ textAlign: `left`, fontSize: `0.875rem` }}>
                                    <p style={{ marginBottom: `0.3rem` }}>Sisa Waktu</p>
                                    {doc.durasi !== null && <SisaHari tanggal={doc.tanggal} durasi={doc.durasi} />
                                    }
                                </div>
                                <div className="col-md-7 col-12" style={{ textAlign: `left`, fontSize: `0.875rem` }}>
                                    <p style={{ marginBottom: `0.3rem` }}>Terkumpul</p>
                                    <span style={{ color: `#6053db` }} className="span-terkumpul">Rp.{idr}</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <PersenTerkumpul total={doc.total} terkumpul={doc.terkumpul}></PersenTerkumpul>
                        </div>
                        <Link to={{
                            pathname: `/kepedulian/${doc.linkshare}`,
                            state: {
                                fromUpdateLanding: false,
                                idprogram: doc.id
                            },
                            search: `?img=${doc.gambar}`
                        }} className="stretched-link">
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
                        <h2 className="mb-4 mb-md-0" style={{fontSize:`1.75rem`}}>
                            Program Kepedulian <br />
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div id="col-list" className="col-md-2 px-0 kateg-wide">
                        <div className="row">
                            <div className="col pl-6">
                                <h3 style={{fontSize:`1.25rem`}}>Kategori</h3>
                            </div>
                        </div>
                        <div className="row pl-n5 flex-kateg mb-md-7">
                            <button onClick={() => filterSelection2('*', "Semua")} className={`btn kategoriBtn kateg-Semua`}>Semua</button>
                            {isLoadingkateg ? <SkeletonKateg></SkeletonKateg>
                                :
                                kateg.map((doc, idx) => {
                                    var nama1 = doc.namaKateg
                                    var nama2 = nama1.replace(/\s/g, "")
                                    return (
                                        <button onClick={() => filterSelection2(nama2, nama2)} key={idx} className={`btn kategoriBtn kateg-${nama2}`}>{doc.namaKateg}</button>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="col-md-10">
                        <div className="row justify-content-center mt-3 kateg-thin">
                            <div className="col-md-12 col-lg-12 text-center text-white">
                                <div className="dropdown mb-5 w-100">
                                    <button className="btn btn-default w-100 dropdown-toggle btn-kateg-thin" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {kategbtn}
                                        <i className="fe fe-chevron-down"></i>
                                    </button>
                                    <div className="dropdown-menu w-100 flex-kateg-thin" aria-labelledby="dropdownMenuButtonTwo">
                                        <a className="dropdown-item w-100 kategoriBtn kateg-thin-Semua" onClick={() => filterSelection2("*", "Semua")} style={{cursor:`pointer`}}>Semua</a>
                                        {
                                            kateg.map((doc, idx) => {
                                                var nama1 = doc.namaKateg
                                                var nama2 = nama1.replace(/\s/g, "")
                                                return (
                                                    <>
                                                        <a className={`dropdown-item kategoriBtn kateg-thin-${nama2}`} key={idx} onClick={() => filterSelection2(nama2, nama2)} style={{cursor:`pointer`}}>{doc.namaKateg}</a>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid px-0">
                            <div className="row container-filter">
                                {isLoadingprog ? <SkeletonProg></SkeletonProg>
                                    :
                                    listprogram2
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramLayout
