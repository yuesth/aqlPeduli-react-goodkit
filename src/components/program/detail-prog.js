import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Button, ProgressBar, Breadcrumb } from 'react-bootstrap'
import $, { ready } from 'jquery'
import "./detail-prog.css"

function SisaHari(props) {
    var hariTerakhir = new Date(new Date(props.tanggal).getTime() + (props.durasi * 24 * 60 * 60 * 1000));
    var sisaHari = Math.floor((hariTerakhir.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
    return (
        <span className="mb-3">{sisaHari.toString()} hari lagi</span>
    )
}

function DariTanggal(props) {
    var dariTanggal = new Date(props.tanggal)
    var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
    return (
        <span style={{ fontSize: `0.8rem` }}>
            {string}
        </span>
    )
}

function DetailProg(props) {
    function filterLampiran() {
        $(document).ready(()=>{
            $('.btn-gambar').click(function(){
                $('.img-gambar').toggle('slow');
            });
        })
    }

    const persenTerkumpul = (props.itemprog.terkumpul / props.itemprog.total) * 100
    var idrterkumpul = parseInt(props.itemprog.terkumpul).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    var idrtotal = parseInt(props.itemprog.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    const listup = props.itemup.map((doc, idx) => {
        return (
            <li className="timeline-item active text-left">
                <DariTanggal tanggal={doc.tanggalUp}></DariTanggal>
                <h2>
                    {doc.namaUp}
                </h2>
                <p className="text-muted mb-4">
                    {doc.desUp}
                </p>
                <div className="dropdown">
                    <div>
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButtonTwo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lampirkan <i class="fe fe-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonTwo">
                            <a className="dropdown-item btn-gambar" href="#!" onClick={() => filterLampiran("gambar")}>Gambar</a>
                            <a className="dropdown-item btn-dok" href="#!" onClick={() => filterLampiran("dokumen")}>Dokumen</a>
                        </div>
                    </div>
                </div>
                <div className="m-3 img-gambar">
                    <a href={doc.gambarUp} class="d-block mb-3 mb-md-0" data-fancybox data-width="800" data-height="1000">
                        <img className="img-fluid w-100 gambar-up-det-prog" src={doc.gambarUp} alt="" />
                    </a>
                </div>
                {/* <a className="h4 font-family-sans-serif" href="#!">
                    Activation Triggers <i className="fe fe-chevron-right ml-1" />
                </a> */}
            </li>
        )
    })
    return (
        <section className="pt-10 pt-md-12">
            <div className="container">
                <div className="row align-items-center justify-content-center mb-5">
                    {/* <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Program Kepedulian <br />
                            </h2>
                        </div> */}
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/program" style={{ textDecoration: `none`, color: `#E92998` }}>Program Kepedulian</Breadcrumb.Item>
                            <Breadcrumb.Item active>{props.itemprog.judul}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </div>


                <Container>
                    <Row className="mb-5">
                        <Col md={12} sm={12} lg={7}>
                            <div>
                                {props.itemprog.gambar !== null && <img className="img-fluid w-100" src={props.itemprog.gambar} height="330"></img>
                                }
                            </div>
                        </Col>
                        <br />
                        <Col md={12} sm={12} lg={5}>
                            <div className="kop rounded-bottom-right rounded-top-left p-2 lift m-3">
                                <p className="mb-1 text-info"><small>{props.itemprog.namaKateg}</small></p>
                                <h2>{props.itemprog.judul}</h2>
                                <p style={{ fontSize: `14px` }} className="mb-1">
                                    {props.itemprog.des}
                                </p>
                                <span style={{ fontSize: `0.8rem` }}>Rp.{props.itemprog.terkumpul !== null && idrterkumpul} dari Rp.<strong>{props.itemprog.total !== null && idrtotal}</strong></span>
                                <ProgressBar now={persenTerkumpul} label={`${persenTerkumpul} %`} />
                                {props.itemprog.durasi !== null && <SisaHari tanggal={props.itemprog.tanggal} durasi={props.itemprog.durasi} />
                                }
                                <br />
                                <div className="row mt-3">
                                    <div className="col-12 col-sm-7 col-md-7 my-2 lift" style={{ textAlign: `center` }}>
                                        <Button variant="success">DONASI SEKARANG</Button>
                                    </div>
                                    <div className="col-12 col-sm-5 col-md-5 lift btn-bagika-det-prog my-2" style={{ textAlign: `center` }}>
                                        <Button variant="primary">BAGIKAN</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-8 col-lg-8 m-3">
                        <div>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cerita</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Update</a>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <p className="text-muted text-justify">
                                        {props.itemprog.cerita}
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <ol className="timeline timeline-success m-5">
                                        {listup}
                                        {/* <li className="timeline-item active text-left">
                                            <h2>
                                                Activation
                                            </h2>
                                            <p className="text-muted mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                                                                                    </p>
                                            <a className="h4 font-family-sans-serif" href="#!">
                                                Activation Triggers <i className="fe fe-chevron-right ml-1" />
                                            </a>
                                        </li>
                                        <li className="timeline-item active">
                                            <h2>
                                                Engagement
                                            </h2>
                                            <p className="text-muted mb-4">
                                                In urna lectus, mattis non accumsan in, tempor dictum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                            <a className="h4 font-family-sans-serif" href="#!">
                                                Feedback Loops <i className="fe fe-chevron-right ml-1" />
                                            </a>
                                        </li>
                                        <li className="timeline-item">
                                            <h2>
                                                Retention
                                            </h2>
                                            <p className="text-muted mb-4">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                                            </p>
                                            <a className="h4 font-family-sans-serif" href="#!">
                                                Churn Minifiers <i className="fe fe-chevron-right ml-1" />
                                            </a>
                                        </li> */}
                                    </ol>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailProg