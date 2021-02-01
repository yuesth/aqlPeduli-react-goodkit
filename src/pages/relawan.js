import React, { useState, useEffect } from 'react'
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import "./relawan.css"
const $ = window.jQuery
const Swal = window.swal


function Relawan() {
    const SPREADSHEET_ID = "1zdfe0OkZe7llFTztwXC97G45UxPQfJNQbNukLGLq0ls"
    const CLIENT_ID = "187026482676-bvntnst8anbfnpdhac9mmnc9avpempuv.apps.googleusercontent.com"
    const API_KEY = "AIzaSyBAW2iZvzQ3aATi9nHWUes0yXJMLlyjAD0"
    const SCOPE = "https://www.googleapis.com/auth/spreadsheets"
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0MjgzNzgsImV4cCI6MTYxMDQzMTk3OCwibmJmIjoxNjEwNDI4Mzc4LCJqdGkiOiJWSTFEZkVORjZWc3luNHB2Iiwic3ViIjoxMDAxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.awgkdKJarKGTxP_0HIldNI7CnG_xtJoxnzhALuFGIPc'
    const [data, setData] = useState({
        NIK: '',
        namaLengkap: '',
        tempatLahir: '',
        umur: '',
        status: '',
        jumlahSaudara: '',
        namaPanggilan: '',
        tanggalLahir: '',
        jenisKelamin: '',
        anakKe: '',
        alamat: '',
        facebook: '',
        instagram: '',
        twitter: '',
        noHp: '',
        whatsapp: '',
        email: '',
        tempatMengaji: '',
        motivasi: '',
        harapan: '',
        komitmen: '',
        // created: 'x-sheetmonkey-current-date-time'
    })
    // const [nik, setNik] = useState("")
    // const [namalengkap, setNamalengkap] = useState("")
    // const [tempatlahir, setTempatlahir] = useState("")
    // const [umur, setUmur] = useState("")
    // const [status, setStatus] = useState("")
    // const [nik, setNik] = useState("")
    // const [nik, setNik] = useState("")
    // const [nik, setNik] = useState("")
    // const [nik, setNik] = useState("")
    // const [nik, setNik] = useState("")
    // const [nik, setNik] = useState("")
    const submitRelawan = (event) => {
        event.preventDefault()
        fetch(`https://donasi.aqlpeduli.or.id/addVolunteer?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            return res.json()
        }).then(resjson => {
            if (resjson.success) {
                Swal('Berhasil', 'Selamat Anda berhasil mendaftar sebagai relawan AQL Peduli. Tim kami akan segeri menghubungi anda', 'success')
            }
            else {
                Swal('Gagal', 'Pastikan data wajib diisi', 'error')
            }
            console.log("berhasil dengan: " + resjson.success)
        })
            .catch(err => {
                console.log(err.message)
            })
        // event.preventDefault()
        // fetch('https://script.google.com/macros/s/AKfycbxI8rjPgqZyjuR_boZeDO2CN75HevpEG_hNkGuzORLoTtBFZtI/exec', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // }).then((resp) => {
        //     console.log("success")
        //     return resp.json()
        // })
    }
    const updateField = (e) => {
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }
    useEffect(() => {
        $('.palceholder').click(function () {
            $(this).siblings('input').focus();
        });
        $('.form-control').focus(function () {
            $(this).siblings('.palceholder').hide();
        });
        $('.form-control').blur(function () {
            var $this = $(this);
            if ($this.val().length == 0)
                $(this).siblings('.palceholder').show();
        });
        $('.form-control').blur();
    }, [])
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-10 pt-md-11">
                <div className="container-xl">
                    <div data-alerts="alerts" data-ids="myid" data-fade={3000} className="alert-submit" />
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="mb-4 mb-md-0" style={{ fontSize: `1.75rem` }}>
                                Relawan AQL Peduli<br />
                            </h2>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-7 no-gutters" style={{ textAlign: `justify` }}>
                        <div className="col-md-10 col-lg-9">
                            <p>
                                Alhamdulillah, sejak berdirinya AQL Peduli telah melakukan kegiatan kemanusiaan dengan program-program yang diantaranya di bidang Pendidikan, Religi, Kesehatan, Pangan dan saat bencana.
                                <br />
                                <br />
                                Semua kesuksesan dari kegiatan-kegiatan tersebut tidak terlepas dari peran penting para relawan yang telah ikut berkontribusi dalam kegiatan AQL Peduli.
                                <br />
                                <br />
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
                            </p>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h3 className=" mb-4 mb-md-0" style={{ fontSize: `1.25rem` }}>
                                Daftar Jadi Relawan<br />
                            </h3>
                        </div>
                    </div>
                    {/* <form action="https://api.sheetmonkey.io/form/4cJ1NBhrxnbVQVGUNpnpYX" method="POST"> */}
                    <form onSubmit={submitRelawan}>
                        <div className="row data-pribadi mb-7">
                            <div className="col-12 col-md-12 w-100">
                                <div className="row judul-dp mb-3">
                                    <div className="col-12 col-md-12">
                                        <h4>
                                            Data Pribadi
                                        </h4>
                                    </div>
                                </div>
                                <div className="row form-dp">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">NIK KTP</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="NIK" className="form-control w-100 wajib" value={data.nik} onChange={updateField} required />
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Nama Lengkap</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="namaLengkap" className="form-control w-100 wajib" value={data.fullname} onChange={updateField} required />
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Tempat Lahir</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="tempatLahir" className="form-control w-100 wajib" value={data.pob} onChange={updateField} required />
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Umur</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="umur" className="form-control w-100 wajib" value={data.umur} onChange={updateField} required />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                as="select"
                                                className="custom-select mr-sm-2"
                                                id="inlineFormCustomSelect"
                                                custom
                                                name="status"
                                                value={data.status} onChange={updateField}
                                            >
                                                <option selected>Status</option>
                                                <option value="Nikah">Nikah</option>
                                                <option value="Belum Nikah">Belum Nikah</option>
                                            </select>
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Jumlah Saudara</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="jumlahSaudara" className="form-control w-100" value={data.jmlsaudara} onChange={updateField} required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Nama Panggilan</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="namaPanggilan" className="form-control w-100 wajib" value={data.nickname} onChange={updateField} required />
                                        </div>
                                        <label htmlFor="name" className="tgllahirLabel">Tanggal Lahir</label>
                                        <div className="form-group">
                                            <input type="date" name="tanggalLahir" className="form-control w-100" placeholder="Tanggal Lahir" value={data.dob} onChange={updateField} />
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Jenis Kelamin</label>
                                                <span className="star">*</span>
                                            </div>
                                            <select
                                                as="select"
                                                className="custom-select mr-sm-2 wajib"
                                                id="inlineFormCustomSelect"
                                                custom
                                                name="jenisKelamin"
                                                value={data.jk} onChange={updateField}
                                            >
                                                <option value="0">Jenis Kelamin</option>
                                                <option value="Laki-laki">Laki-laki</option>
                                                <option value="Perempuan">Perempuan</option>
                                            </select>
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Anak ke-</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="anakKe" className="form-control w-100" value={data.anakke} onChange={updateField} required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group" controlId="exampleForm.ControlTextarea1">
                                            <textarea className="form-control" name="alamat" as="textarea" placeholder="Alamat Lengkap" rows={3} value={data.alamat} onChange={updateField} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row data-medsos mb-7">
                            <div className="col-12 col-md-12 w-100">
                                <div className="row judul-dp mb-3">
                                    <div className="col-12 col-md-12">
                                        <h4>
                                            Social Media
                                        </h4>
                                    </div>
                                </div>
                                <div className="row form-dp">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="facebook" className="form-control w-100" placeholder="Facebook" value={data.fb} onChange={updateField} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="instagram" className="form-control w-100" placeholder="Instagram" value={data.ig} onChange={updateField} />
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">No. Handphone</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="text" name="noHp" className="form-control w-100 wajib" value={data.nohp} onChange={updateField} required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="twitter" className="form-control w-100" placeholder="Twitter" value={data.twitter} onChange={updateField} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="whatsapp" className="form-control w-100" placeholder="Nomor Whatsapp" value={data.wa} onChange={updateField} />
                                        </div>
                                        <div className="form-group grupForm">
                                            <div className="palceholder">
                                                <label htmlFor="name">Email</label>
                                                <span className="star">*</span>
                                            </div>
                                            <input type="email" name="email" className="form-control w-100 wajib" value={data.email} onChange={updateField} required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="row data-motivasi mb-7">
                            <div className="col-12 col-md-12 w-100">
                                <div className="row judul-dp mb-3">
                                    <div className="col-12 col-md-12">
                                        <h4>
                                            Motivasi, Harapan, dan Komitmen
                                        </h4>
                                    </div>
                                </div>
                                <div className="row form-dp">
                                    <div className="col-12">
                                        <div className="form-group" controlId="exampleForm.ControlTextarea1">
                                            <textarea className="form-control" as="textarea" name="tempatMengaji" placeholder="Tempat mengaji selain AQL?" rows={3} value={data.tempatngaji} onChange={updateField} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group" controlId="exampleForm.ControlTextarea1">
                                            <textarea className="form-control" as="textarea" name="motivasi" placeholder="Apa motivasi anda untuk menjadi tim relawan AQL?" rows={3} value={data.motivasi} onChange={updateField} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group" controlId="exampleForm.ControlTextarea1">
                                            <textarea className="form-control" as="textarea" name="harapan" placeholder="Apa harapan anda untuk menjadi tim relawan AQL?" rows={3} value={data.harapan} onChange={updateField} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group" controlId="exampleForm.ControlTextarea1">
                                            <textarea className="form-control" as="textarea" name="komitmen" placeholder="Komitmen apa yang dapat anda berikan sebagai tim relawan AQL?" rows={3} value={data.komitmen} onChange={updateField} />
                                        </div>
                                    </div>
                                    {/* <input type="hidden" name="Created" defaultValue="x-sheetmonkey-current-date-time" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-center mb-7">
                            <div className="col-md-6" style={{ textAlign: `center` }}>
                                <button className="btn btn-primary btn-daftar" type="submit">Daftar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default Relawan

// action="https://api.sheetmonkey.io/form/rtCNxiEBTmxguKWYnDYBjU" method="POST"