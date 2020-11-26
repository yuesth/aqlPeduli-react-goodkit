import React, { useState, useEffect } from 'react'
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import { Container, Row, Col, Form } from "react-bootstrap"
import "./relawan.css"

function Relawan() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-11">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Relawan AQL Peduli<br />
                            </h2>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-7 no-gutters" style={{ textAlign: `justify` }}>
                        <div className="col-md-10 col-lg-9">
                            {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}}>{detailkk.konten}</p> */}
                            {/* <p className="text-justify" style={{whiteSpace:`pre-wrap`}} dangerouslySetInnerHTML={markup}></p> */}
                            <p>
                                Sebagai negara majemuk, Indonesia memiliki begitu banyak keragaman dan keindahan budaya. Dikombinasikan dengan situasi sosial dan ekonomi yang masih berkembang, negeri tercinta ini juga rentan akan berbagai masalah sosial. Sulit untuk tidak merasa tersentuh saat melihat realita keluarga yang kurang mampu di jalanan kota, merasa geram saat membaca pejabat kementerian yang korupsi di saat masih banyak anak yang mengenyam pendidikan seadanya atau mempertanyakan apa yang bisa dilakukan saar terjebak macet dan banjir di ibukota. Kami yakin, Anda pernah melalui kegundahan tersebut.
                                </p>
                                Syarat Pendaftaran:
                                <ol>
                                <li>Muslim/Muslimah</li>
                                <li>Usia minimal 17 tahun</li>
                                <li>Mau berjuang untuk kemanusiaan</li>
                                <li>Berjiwa sosial, tangguh, dan disiplin</li>
                                <li>Bersedia ditempatkan di wilayah JABODETABEK</li>
                            </ol>
                                Briefing Sosialisasi Lebih Lanjut:
                                <ol>
                                <li>Mengisi formulir yang tersedia</li>
                                <li>Melampirkan foto pribadi</li>
                                <li>Konfirmasi ke Call Center AQL Peduli</li>
                                <li>Info Contact (WhatsApp) 0822-3919-3515</li>
                                <li>Follow Instagram AQL Peduli @aqlpeduli</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h1 className=" mb-4 mb-md-0">
                                Daftar Jadi Relawan<br />
                            </h1>
                        </div>
                    </div>
                    <div className="row data-pribadi mb-7">
                        <div className="col-12-col-md-12 w-100">
                            <div className="row judul-dp mb-3">
                                <div className="col-12 col-md-12">
                                    <h4>
                                        Data Pribadi
                                </h4>
                                </div>
                            </div>
                            <div className="row form-dp">
                                <div className="col-12 col-md-6">
                                    <Form>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Nomor Induk Kependudukan (NIK)" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Nama Lengkap" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Tempat Lahir" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Umur" />
                                        </div>
                                        <Form.Group>
                                            <Form.Control
                                                as="select"
                                                className="mr-sm-2"
                                                id="inlineFormCustomSelect"
                                                custom
                                            >
                                                <option value="0">Status</option>
                                                <option value="1">Kawin</option>
                                                <option value="2">Belum Kawin</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Jumlah Saudara" />
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Form>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Nama Panggilan" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Tanggal Lahir" />
                                        </div>
                                        <Form.Group>
                                            <Form.Control
                                                as="select"
                                                className="mr-sm-2"
                                                id="inlineFormCustomSelect"
                                                custom
                                            >
                                                <option value="0">Jenis Kelamin</option>
                                                <option value="1">Laki-laki</option>
                                                <option value="2">Perempuan</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Anak ke" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Jumlah Saudara" />
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-12">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Alamat Lengkap" rows={3} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row data-medsos mb-7">
                        <div className="col-12-col-md-12 w-100">
                            <div className="row judul-dp mb-3">
                                <div className="col-12 col-md-12">
                                    <h4>
                                        Social Media
                                </h4>
                                </div>
                            </div>
                            <div className="row form-dp">
                                <div className="col-12 col-md-6">
                                    <Form>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Facebook" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Instagram" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Nomor handphone" />
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Form>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Twitter" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" placeholder="Nomor Whatsapp" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control w-100" placeholder="Email" />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row data-motivasi mb-7">
                        <div className="col-12-col-md-12 w-100">
                            <div className="row judul-dp mb-3">
                                <div className="col-12 col-md-12">
                                    <h4>
                                        Motivasi, Harapan, dan Komitmen
                                </h4>
                                </div>
                            </div>
                            <div className="row form-dp">
                                <div className="col-12">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Tempat mengaji selain AQL?" rows={3} />
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Apa motivasi anda untuk menjadi tim relawan AQL?" rows={3} />
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Apa harapan anda untuk menjadi tim relawan AQL?" rows={3} />
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Komitmen apa yang dapat anda berikan sebagai tim relawan AQL?" rows={3} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <button className="btn btn-primary btn-daftar">Daftar</button>
                        </div>
                    </div>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Relawan