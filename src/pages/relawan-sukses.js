import React, { useState, useEffect } from 'react'
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
// import Swal from 'sweetalert2'
import "./relawan.css"
const Swal = window.swal


function RelawanSukses() {
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
        created: 'x-sheetmonkey-current-date-time'
    })
    const updateField = (e) => {
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }
    useEffect(() => {
        Swal('Berhasil', 'Selamat Anda berhasil mendaftar sebagai relawan AQL Peduli. Tim kami akan segeri menghubungi anda','success')
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
                    <form action="https://api.sheetmonkey.io/form/4cJ1NBhrxnbVQVGUNpnpYX" method="POST">
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
                                        <div className="form-group">
                                            <input type="text" name="NIK" className="form-control w-100" placeholder="Nomor Induk Kependudukan" value={data.nik} onChange={updateField} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="namaLengkap" className="form-control w-100" placeholder="Nama Lengkap" value={data.fullname} onChange={updateField} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="tempatLahir" className="form-control w-100" placeholder="Tempat Lahir" value={data.pob} onChange={updateField} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="umur" className="form-control w-100" placeholder="Umur" value={data.umur} onChange={updateField} />
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
                                                <option value="0">Status</option>
                                                <option value="1">Kawin</option>
                                                <option value="2">Belum Kawin</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="jumlahSaudara" className="form-control w-100" placeholder="Jumlah Saudara" value={data.jmlsaudara} onChange={updateField} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="namaPanggilan" className="form-control w-100" placeholder="Nama Panggilan" value={data.nickname} onChange={updateField} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="date" name="tanggalLahir" className="form-control w-100" placeholder="Tanggal Lahir" value={data.dob} onChange={updateField} required />
                                        </div>
                                        <div className="form-group">
                                            <select
                                                as="select"
                                                className="custom-select mr-sm-2"
                                                id="inlineFormCustomSelect"
                                                custom
                                                name="jenisKelamin"
                                                value={data.jk} onChange={updateField} required
                                            >
                                                <option value="0">Jenis Kelamin</option>
                                                <option value="1">Laki-laki</option>
                                                <option value="2">Perempuan</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="anakKe" className="form-control w-100" placeholder="Anak ke" value={data.anakke} onChange={updateField} />
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
                                        <div className="form-group">
                                            <input type="text" name="noHp" className="form-control w-100" placeholder="Nomor handphone" value={data.nohp} onChange={updateField} required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="twitter" className="form-control w-100" placeholder="Twitter" value={data.twitter} onChange={updateField} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="whatsapp" className="form-control w-100" placeholder="Nomor Whatsapp" value={data.wa} onChange={updateField} />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control w-100" placeholder="Email" value={data.email} onChange={updateField} required />
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
                                    <input type="hidden" name="Created" defaultValue="x-sheetmonkey-current-date-time" />
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

export default RelawanSukses