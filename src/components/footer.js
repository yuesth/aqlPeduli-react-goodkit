import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    const urlBerita = "https://peaceful-meadow-45867.herokuapp.com/beritas"
    const [berita, setBerita] = useState([])

    useEffect(() => {
        fetch(urlBerita).then(res => res.json()).then(parsedJson => setBerita(parsedJson))
    }, [])
    const itemBerita = []
    berita.map(data => {
        if (data.gambarBerita !== null) {
            var item1 = {
                id: `${data.id}`,
                linkshare: `${data.linkShareBerita}`,
                judul: `${data.judulBerita}`,
                tanggal: `${data.tanggalBerita}`
            }
            itemBerita.push(item1)
        }
        else {
            var item2 = {
                id: `${data.id}`,
                linkshare: `${data.linkShareBerita}`,
                judul: `${data.judulBerita}`,
                tanggal: `${data.tanggalBerita}`
            }
            itemBerita.push(item2)
        }
    })
    const sortedItemBerita = itemBerita.sort((a, b) => { return new Date(b.tanggal) - new Date(a.tanggal) })
    const berut = sortedItemBerita.map((doc, idx) => {
        if (idx === 0) {
            return (
                <li className="mb-3" key={idx}>
                    <Link className="text-gray-600" to={`/berita/${doc.linkshare}`} style={{ fontSize: `1rem` }}>{doc.judul}</Link>
                </li>
            )
        }
    })
    return (
        // style={{backgroundColor: `#261793`}}
        <footer className="footer py-7 py-md-7" style={{ backgroundColor: `#f5f5f5` }}>
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-7 pr-5">
                        <img src={`${process.env.PUBLIC_URL}/images/logo-aql2.png`} alt="logo-aql" width="160px" height="100px" className="logo-footer mb-5" />
                        <p className=" mb-4">
                            AQL Peduli adalah sebuah lembaga di bawah naungan AQL Islamic Center yang fokus bergerak di bidang kemanusiaan.
                        </p>
                        <p className="text-muted mb-4">
                            <strong>Kantor Pusat :</strong> <br />
                            <span className="text-muted">Jl. Tebet Raya No.16B, RT.1/RW.2, Tebet Bar., Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810 </span><br />
                            <strong>Call Center :</strong> <span className="text-muted">0822-3919-3515</span> <br />
                            <strong>SMS/WA Center :</strong> <span className="text-muted">0822-3919-3515</span> <br />
                            <strong>Kantor Yayasan Pusat Peradaban Islam :</strong> <br /> <strong>AQL Islamic Center | </strong><span className="text-muted">Jl. Tebet Utara I No. 40, Tebet, Jakarta Selatan</span>
                        </p>
                        {/* <h2 className="font-family-serif text-white mb-1">
                            AQL Peduli
                        </h2> */}
                    </div>
                    <div className="col-6 col-md mt-5">
                        <h6 className="text-uppercase text-black mb-3 mb-md-5" style={{ fontSize: `1rem` }}>
                            AQL Peduli
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/`} style={{ fontSize: `1rem` }}>Beranda</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/profil`} style={{ fontSize: `1rem` }}>Profil</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/berita`} style={{ fontSize: `1rem` }}>Berita</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/kepedulian`} style={{ fontSize: `1rem` }}>Kepedulian</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/informasi`} style={{ fontSize: `1rem` }}>Informasi</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/khazanah`} style={{ fontSize: `1rem` }}>Khazanah</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/kepedulian`} style={{ fontSize: `1rem` }}>Donasi</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={`/relawan`} style={{ fontSize: `1rem` }}>Relawan</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md mt-5">
                        <h6 className="text-uppercase text-black mb-3 mb-md-5" style={{ fontSize: `1rem` }}>
                            Kepedulian
                        </h6>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link className="text-gray-600" to={{
                                    pathname: `/kepedulian`,
                                    state: {
                                        namaKateg: 'Peduli Bencana'
                                    }
                                }} style={{ fontSize: `1rem` }}>Peduli Bencana</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={{
                                    pathname: `/kepedulian`,
                                    state: {
                                        namaKateg: 'Peduli Masjid'
                                    }
                                }} style={{ fontSize: `1rem` }}>Peduli Masjid</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={{
                                    pathname: `/kepedulian`,
                                    state: {
                                        namaKateg: 'Peduli Pangan'
                                    }
                                }} style={{ fontSize: `1rem` }}>Peduli Pangan</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={{
                                    pathname: `/kepedulian`,
                                    state: {
                                        namaKateg: 'Peduli Kesehatan'
                                    }
                                }} style={{ fontSize: `1rem` }}>Peduli Kesehatan</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={{
                                    pathname: `/kepedulian`,
                                    state: {
                                        namaKateg: 'Dapur Sedekah'
                                    }
                                }} style={{ fontSize: `1rem` }}>Dapur Sedekah</Link>
                            </li>
                            <li className="mb-3">
                                <Link className="text-gray-600" to={{
                                    pathname: `/kepedulian`,
                                    state: {
                                        namaKateg: 'Peduli Dunia Islam'
                                    }
                                }} style={{ fontSize: `1rem` }}>Peduli Dunia Islam</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md mt-5">
                        <h6 className="text-uppercase text-black mb-3 mb-md-5" style={{ fontSize: `1rem` }}>
                            Berita Terbaru
                        </h6>
                        <ul className="list-unstyled">
                            {berut}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr className="border-black-10 my-3" />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md">
                        <ul className="list-inline list-unstyled text-black small mb-md-0">
                            <li className="list-inline-item">
                                © 2021 AQL Peduli
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-auto">
                        <ul className="list-inline list-unstyled text-black mb-0">
                            <li className="list-inline-item">
                                <a className="icon icon-sm text-reset" href="https://www.instagram.com/aqlpeduli/" target="_blank">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li className="list-inline-item ml-1">
                                <a className="icon icon-sm text-reset" href="https://www.facebook.com/officialAQLPeduli/" target="_blank">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0V0Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li className="list-inline-item ml-1">
                                <a className="icon icon-sm text-reset" href="https://twitter.com/AqlPeduli" target="_blank">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 4.55705C23.117 4.94905 22.168 5.21305 21.172 5.33205C22.189 4.72305 22.97 3.75805 23.337 2.60805C22.386 3.17205 21.332 3.58205 20.21 3.80305C19.313 2.84605 18.032 2.24805 16.616 2.24805C13.437 2.24805 11.101 5.21405 11.819 8.29305C7.728 8.08805 4.1 6.12805 1.671 3.14905C0.381 5.36205 1.002 8.25705 3.194 9.72305C2.388 9.69705 1.628 9.47605 0.965 9.10705C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.10605C22.505 6.41105 23.34 5.54405 24 4.55705Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                            <li className="list-inline-item ml-1">
                                <a className="icon icon-sm text-reset" href="https://www.youtube.com/channel/UC4I9rgS8Ra6qV4GcaJVoEpg" target="_blank">
                                    {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0V0Z" fill="currentColor" />
                                    </svg> */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path data-name="layer1" d="M49.539 12H14.461A12.4 12.4 0 0 0 2 24.327v17.346A12.4 12.4 0 0 0 14.461 54h35.078A12.4 12.4 0 0 0 62 41.673V24.327A12.4 12.4 0 0 0 49.539 12z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2} />
                                        <path data-name="layer2" d="M41.111 33.844L24.7 41.585a.658.658 0 0 1-.938-.585V25.031a.659.659 0 0 1 .956-.581l16.407 8.225a.649.649 0 0 1-.014 1.169z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2} />
                                    </svg> */}
                                    <svg className="youtube" fill="#1e255c" height={24} viewBox="0 0 22 22" width={24} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10,16.5V7.5L16,12M20,4.4C19.4,4.2 15.7,4 12,4C8.3,4 4.6,4.19 4,4.38C2.44,4.9 2,8.4 2,12C2,15.59 2.44,19.1 4,19.61C4.6,19.81 8.3,20 12,20C15.7,20 19.4,19.81 20,19.61C21.56,19.1 22,15.59 22,12C22,8.4 21.56,4.91 20,4.4Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer