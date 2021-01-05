import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Flickity from "flickity"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./update.css"

function SkeletonUpdateLayout() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row">
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `295px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={180} width={280} />
                        <br />
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <p><Skeleton count={2} /></p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `295px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={180} width={280} />
                        <br />
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <p><Skeleton count={2} /></p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mx-2 p-2 bg-transparent" style={{ width: `295px`, height: `480px` }}>
                        <Skeleton reactangle={true} height={180} width={280} />
                        <br />
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <p><Skeleton /></p>
                        <p><Skeleton count={2} /></p>
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

function Update() {
    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <p style={{ color: `black`, marginBottom: `0.5rem` }}><small>{string}</small></p>
        )
    }

    const urlUpdate = "https://peaceful-meadow-45867.herokuapp.com/update-programs"
    const [update, setUpdate] = useState([])
    const [flickup, setFlickup] = useState([])
    const [isLoadingup, setIsLoadingup] = useState(true);
    useEffect(() => {
        fetch(urlUpdate).then(res => res.json()).then(parsedJson => {
            setUpdate(parsedJson)
            setIsLoadingup(false)
        }).then(() => {
            setFlickup(
                new Flickity('.carousel-main-up-landing', {
                    cellAlign: 'left',
                    imagesLoaded: true,
                    pageDots: false,
                    prevNextButtons: true,
                    contain: true
                })
            )
        })
    },[])
    const itemUpdate = []
    update.map(doc => {
        if (doc.gambarUpdate !== null) {
            var item1 = {
                namaUp: doc.namaUpdate,
                judulProg: doc.program.judulProgram,
                idProg: doc.program.id,
                linkshareProg: doc.program.linkShareProgram,
                tanggalUp: doc.tanggalpelaksanaanUpdate,
                deskripsiUp: doc.deskripsiUpdate,
                gambarUp: doc.gambarUpdate.url
            }
            itemUpdate.push(item1)
        }
        else {
            var item2 = {
                namaUp: doc.namaUpdate,
                judulProg: doc.program.judulProgram,
                idProg: doc.program.id,
                linkshareProg: doc.program.linkShareProgram,
                tanggalUp: doc.tanggalpelaksanaanUpdate,
                deskripsiUp: doc.deskripsiUpdate,
            }
            itemUpdate.push(item2)
        }
    })
    const sortedItemUpdate = itemUpdate.sort((a, b) => { return new Date(b.tanggalUp) - new Date(a.tanggalUp) })
    const listup = sortedItemUpdate.map((doc, idx) => {
        return (
            <div className="col-12 mb-7" style={{ maxWidth: 320, height: `30rem` }} data-aos="fade-up" key={idx}>
                <Link to={{
                    pathname:`/kepedulian/${doc.linkshareProg}`,
                    state:{
                        fromUpdateLanding: true,
                        idprogram: doc.idProg
                    },
                    }}>
                    <div className="card card-sm rounded-top-left rounded-bottom-right lift" style={{ height: `30rem` }}>
                        <div style={{ textAlign: `center` }}>
                            <img className="card-img rounded-top-left" src={doc.gambarUp} alt="..." height="180" />
                        </div>
                        <div className="position-relative">
                            <div className="shape shape-fluid-x shape-top text-white">
                                <div className="shape-img pb-4">
                                    <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-3">
                                <h3 style={{ color: `black` }}>{doc.namaUp}</h3>
                                {/* <a className="ml-auto text-decoration-none text-stripe stretched-link"> */}
                                    <i className="fe fe-arrow-right" />
                                {/* </a> */}
                            </div>
                            <DariTanggal tanggal={doc.tanggalUp}></DariTanggal>
                            <div style={{ height: `5rem` }}>
                                <p style={{ color: `#E92998` }}>
                                    {doc.judulProg}
                                </p>
                            </div>
                            <small className="des-update" style={{ color: `black` }}>
                                {doc.deskripsiUp}
                            </small>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <section className="pt-7 pt-md-7 pb-7 pb-md-7 mb-7 mb-md-7">
            <div className="container-xl">
                <div className="row align-items-center justify-content-center mb-7">
                    <div className="col-md-6" style={{ textAlign: `center` }}>
                        <h2 className=" text-white" style={{fontSize:`2rem`}}>
                            Update Program
                            </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="flickity-viewport-visible mx-n4 carousel-main-up-landing">
                            {isLoadingup ? <SkeletonUpdateLayout></SkeletonUpdateLayout>
                                :
                                listup}
                            {/* <Carousel breakPoints={breakPoints}>
                                {listup}
                            </Carousel> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Update


{/* <div className="col-12" style={{ maxWidth: 300 }}>
                                <div className="card card-sm rounded-top-left rounded-bottom-right lift">
                                    <img className="card-img rounded-top-left" src={`${process.env.PUBLIC_URL}/dist/assets/img/robo-advisor/office-stripe.jpg`} alt="..." />
                                    <div className="position-relative">
                                        <div className="shape shape-fluid-x shape-top text-white">
                                            <div className="shape-img pb-4">
                                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="img-fluid svg-shim text-stripe mb-0" style={{ maxWidth: 64 }}>
                                                <svg viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.56803 10.5801C4.56803 9.87724 5.14579 9.60679 6.10289 9.60679C7.475 9.60679 9.20829 10.0215 10.5805 10.7604V6.52467C9.08197 5.92992 7.60145 5.69559 6.10289 5.69559C2.4375 5.69559 0 7.6062 0 10.7966C0 15.771 6.86105 14.9781 6.86105 17.123C6.86105 17.952 6.13895 18.2224 5.12776 18.2224C3.62921 18.2224 1.71526 17.6095 0.198555 16.7805V21.0702C1.87776 21.7912 3.575 22.0975 5.12776 22.0975C8.88329 22.0975 11.4653 20.2411 11.4653 17.0148C11.4472 11.6436 4.56803 12.5988 4.56803 10.5801ZM16.7736 2.09082L12.368 3.02801L12.35 17.4653C12.35 20.133 14.3542 22.0975 17.0264 22.0975C18.507 22.0975 19.5903 21.8272 20.1861 21.5027V17.8439C19.6084 18.0782 16.7555 18.9073 16.7555 16.2397V9.84112H20.1861V6.00203H16.7555L16.7736 2.09082ZM25.8014 7.33576L25.5125 6.00203H21.6125V21.7731H26.1264V11.0849C27.1916 9.69703 28.9972 9.94935 29.557 10.1476V6.00203C28.9792 5.7857 26.8667 5.38915 25.8014 7.33576ZM30.6583 6.00203H35.1903V21.7731H30.6583V6.00203ZM30.6583 4.63218L35.1903 3.65888V0L30.6583 0.955306V4.63205V4.63218ZM44.6153 5.69559C42.8458 5.69559 41.7083 6.52467 41.0764 7.10155L40.8416 5.98403H36.8695V27L41.3833 26.0448L41.4014 20.944C42.0514 21.4126 43.0083 22.0795 44.5972 22.0795C47.8292 22.0795 50.7722 19.484 50.7722 13.7704C50.7542 8.54338 47.775 5.69559 44.6153 5.69559ZM43.532 18.1142C42.4667 18.1142 41.8346 17.7358 41.4014 17.2671L41.3833 10.5801C41.8528 10.0575 42.5028 9.69703 43.532 9.69703C45.175 9.69703 46.3125 11.5354 46.3125 13.8965C46.3125 16.3118 45.193 18.1142 43.532 18.1142ZM65 13.9507C65 9.33647 62.7611 5.69559 58.482 5.69559C54.1846 5.69559 51.5846 9.3366 51.5846 13.9147C51.5846 19.3398 54.6542 22.0795 59.0596 22.0795C61.2083 22.0795 62.8333 21.5929 64.0611 20.908V17.3031C62.8334 17.916 61.425 18.2945 59.6375 18.2945C57.8861 18.2945 56.3333 17.6816 56.1347 15.5548H64.9639C64.9639 15.3204 65 14.3832 65 13.9507ZM56.0805 12.2384C56.0805 10.2017 57.3264 9.35447 58.4639 9.35447C59.5653 9.35447 60.7389 10.2017 60.7389 12.2384H56.0805Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <a className="ml-auto text-decoration-none text-stripe stretched-link" href="#!">
                                                <i className="fe fe-arrow-right" />
                                            </a>
                                        </div>
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non.
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 300 }}>
                                <div className="card card-sm rounded-top-left rounded-bottom-right lift">
                                    <img className="card-img rounded-top-left" src={`${process.env.PUBLIC_URL}/dist/assets/img/robo-advisor/office-digital-ocean.jpg`} alt="..." />
                                    <div className="position-relative">
                                        <div className="shape shape-fluid-x shape-top text-white">
                                            <div className="shape-img pb-4">
                                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="img-fluid svg-shim text-digital-ocean mb-0" style={{ maxWidth: 140 }}>
                                                <svg viewBox="0 0 141 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.8267 23.8123V19.1795C16.7255 19.1795 20.5042 14.3368 18.6156 9.21222C17.9198 7.28664 16.4074 5.77016 14.4869 5.07257C12.2522 4.23005 9.74782 4.53658 7.7809 5.89338C5.81399 7.25018 4.6332 9.48571 4.61911 11.8795H0C0 4.15813 7.48866 -1.94849 15.6757 0.579261C19.2467 1.70391 22.0434 4.50856 23.1644 8.08925C25.684 16.3023 19.595 23.8123 11.8267 23.8123Z" fill="currentColor" />
                                                    <path d="M11.8799 19.2275H7.25596V14.6684H11.8799V19.2275ZM7.25596 22.8052H3.75315V19.2275H7.25596V22.8052ZM3.75315 19.2275H0.814453V16.2819H3.75315V19.2275ZM42.2151 6.95252C40.8843 6.04013 39.1329 5.54451 37.1705 5.54451H32.8982V19.2219H37.1719C39.1338 19.2219 40.8154 18.7309 42.2165 17.7491C42.9818 17.1919 43.586 16.4418 43.9679 15.5751C44.3899 14.6627 44.5981 13.5406 44.5981 12.348C44.5981 11.1554 44.3885 10.0332 43.9679 9.19124C43.5459 8.1451 42.986 7.44391 42.2151 6.95252ZM35.4205 7.8649H36.7513C38.2227 7.8649 39.4832 8.1465 40.4637 8.77729C41.5145 9.40807 42.0111 10.6077 42.0111 12.355C42.0111 14.1024 41.4484 15.371 40.4637 16.0722C39.5535 16.6354 38.362 16.9845 36.8202 16.9845H35.4205V7.8649ZM47.61 5.34035C47.2164 5.32983 46.8361 5.48272 46.5591 5.76275C46.2352 6.01329 46.0523 6.40512 46.0682 6.81453C46.0682 7.62792 46.727 8.2873 47.5396 8.2873C48.3523 8.2873 49.0111 7.62792 49.0111 6.81453C49.0215 6.42068 48.8687 6.04005 48.5891 5.76275C48.3795 5.48115 48.0264 5.34035 47.6044 5.34035H47.61ZM46.3383 9.54887H48.7902V19.1585H46.3481V9.54887H46.3383ZM57.5571 10.3937C56.8537 9.76289 56.0097 9.3419 55.1051 9.3419C53.856 9.31436 52.6557 9.82754 51.8119 10.7499C50.9369 11.6776 50.4593 12.9112 50.4812 14.1868C50.4812 15.5202 50.9032 16.7114 51.7472 17.6238C52.5913 18.5362 53.7082 18.9572 55.0404 18.9572C55.8977 18.9706 56.7353 18.6993 57.4221 18.1856V18.3954C57.4221 19.1669 57.2125 19.8034 56.7918 20.2258C56.3712 20.6482 55.8071 20.8565 55.0404 20.8565C53.915 20.8565 53.2187 20.4341 52.3789 19.243L50.6908 20.8565L50.7611 20.9269C51.1114 21.4183 51.6713 21.9126 52.3718 22.3997C53.0724 22.8869 53.9826 23.1037 55.0334 23.1037C56.5049 23.1037 57.626 22.6813 58.4659 21.7703C59.3057 20.8594 59.7967 19.7358 59.7967 18.263V9.54887H57.4178V10.3937H57.5585H57.5571ZM56.9283 16.075C56.5063 16.5664 55.9436 16.779 55.2402 16.779C54.5368 16.779 53.9741 16.5692 53.5521 16.075C53.1301 15.5808 52.9219 14.9486 52.9219 14.1812C52.9219 13.4138 53.1455 12.7746 53.5676 12.2832C53.9896 11.7918 54.5523 11.5792 55.2557 11.5792C55.959 11.5792 56.5217 11.789 56.9438 12.2832C57.3658 12.7774 57.574 13.4096 57.574 14.177C57.574 14.9443 57.3644 15.585 56.9438 16.0707L56.9283 16.075ZM62.0573 9.54747H64.5093V19.1571H62.0418V9.54887L62.0573 9.54747ZM63.2333 5.34035C62.8402 5.33059 62.4602 5.48262 62.1821 5.76097C61.904 6.03931 61.7521 6.41961 61.7619 6.81312C61.7619 7.62651 62.4207 8.2859 63.2333 8.2859C64.046 8.2859 64.7048 7.62651 64.7048 6.81312C64.7146 6.41936 64.5625 6.03883 64.2841 5.76044C64.0057 5.48206 63.6253 5.3302 63.2319 5.34035H63.2333ZM69.7452 6.95252H67.3664V9.54887H65.9596V11.7228H67.3664V15.7216C67.3664 16.9888 67.6477 17.8955 68.1373 18.3869C68.6268 18.8783 69.544 19.1585 70.7299 19.1585C71.1284 19.1701 71.5271 19.1465 71.9214 19.0881H72.0621V16.9127L71.2181 16.9831C70.6554 16.9831 70.2333 16.9127 70.0927 16.7015C69.8831 16.4917 69.8113 16.0707 69.8113 15.4343V11.7932H72.0537V9.61787H69.8183L69.7452 6.95252ZM83.3358 5.54451H85.7878V19.2219H83.3386V5.55296L83.3358 5.54451ZM110.241 15.7934C109.883 16.2081 109.484 16.5855 109.05 16.9198C108.668 17.1513 108.23 17.2727 107.784 17.2704C107.119 17.2646 106.488 16.9825 106.039 16.4917C105.548 15.9285 105.336 15.2992 105.336 14.4572C105.336 13.6152 105.546 12.9844 106.039 12.4226C106.471 11.9057 107.119 11.6203 107.791 11.651C108.562 11.651 109.401 12.1424 110.102 12.9844L111.713 11.4356C110.662 10.1022 109.331 9.47143 107.719 9.47143C106.388 9.47143 105.267 9.96283 104.287 10.9442C103.369 11.9073 102.864 13.1913 102.88 14.5219C102.88 15.9299 103.371 17.1873 104.287 18.0997C105.168 19.0589 106.417 19.5949 107.719 19.5725C109.47 19.5725 110.872 18.8009 111.852 17.3985L110.241 15.7849V15.7934ZM120.119 10.9456C119.751 10.4595 119.267 10.0725 118.713 9.81921C118.077 9.52447 117.382 9.37995 116.681 9.39681C115.351 9.39681 114.229 9.8882 113.388 10.8696C112.592 11.8897 112.171 13.1531 112.197 14.4473C112.197 15.9201 112.619 17.1127 113.527 18.0251C114.436 18.9374 115.559 19.4331 117.03 19.4331C118.641 19.4331 119.973 18.8023 121.024 17.4689L121.094 17.3985L119.484 15.8497C119.343 16.0595 119.133 16.2003 118.921 16.4129C118.722 16.6226 118.483 16.7898 118.218 16.9043C117.853 17.1041 117.441 17.2014 117.026 17.1859C116.416 17.1947 115.821 16.9962 115.338 16.6227C114.916 16.2721 114.708 15.7779 114.635 15.1499H121.08V14.2375C121.096 13.6155 121.001 12.9957 120.799 12.4071C120.696 11.8633 120.454 11.3557 120.096 10.9344L120.119 10.9456ZM114.865 13.1956C114.972 12.7711 115.19 12.3825 115.496 12.0692C115.83 11.7352 116.289 11.557 116.762 11.5778C117.324 11.5778 117.812 11.7186 118.092 12.0692C118.374 12.3508 118.514 12.7732 118.583 13.1956H114.865ZM129.438 10.3191C128.734 9.68827 127.686 9.40667 126.426 9.40667C125.655 9.42853 124.895 9.59572 124.186 9.89947C123.556 10.2501 122.92 10.7443 122.576 11.4483L124.123 12.921C124.753 11.8693 125.454 11.513 126.434 11.513C126.893 11.5009 127.341 11.6504 127.7 11.9354C128.024 12.186 128.207 12.5778 128.191 12.9872V13.4786C127.627 13.2881 127.035 13.1929 126.44 13.197C125.249 13.197 124.268 13.4786 123.497 14.0418C122.726 14.605 122.372 15.4498 122.372 16.427C122.372 17.3394 122.653 18.0405 123.282 18.6009C123.911 19.1613 124.689 19.3725 125.593 19.3725C126.498 19.3725 127.345 19.0219 128.186 18.3869V19.1585H130.567V12.9858C130.567 11.8594 130.217 10.9512 129.442 10.3205L129.438 10.3191ZM125.168 15.5104C125.45 15.3006 125.799 15.2288 126.294 15.2288C126.916 15.2497 127.53 15.368 128.115 15.5794V16.4917C127.536 17.0024 126.786 17.2776 126.014 17.2633C125.592 17.2633 125.243 17.1929 125.029 16.9817C124.815 16.7705 124.679 16.5593 124.679 16.2777C124.729 15.9637 124.907 15.6843 125.17 15.5061L125.168 15.5104ZM139.876 10.4599C139.173 9.68827 138.265 9.33345 137.074 9.33345C136.093 9.33345 135.322 9.61505 134.762 10.1783V9.61505H132.379V19.2247H134.831V13.8968C134.831 13.1928 134.972 12.5634 135.322 12.1438C135.67 11.7288 136.188 11.4963 136.729 11.513C137.216 11.4893 137.686 11.6982 137.995 12.0762C138.324 12.5246 138.497 13.0688 138.486 13.625V19.2359H140.927V13.6166C140.856 12.2837 140.506 11.2314 139.876 10.4599ZM80.3268 10.3191C79.6234 9.68827 78.5754 9.40667 77.3149 9.40667C76.5432 9.42773 75.7824 9.59445 75.0725 9.89806C74.4423 10.2487 73.8065 10.7429 73.4618 11.4469L75.0092 12.9196C75.6395 11.8679 76.34 11.5116 77.3205 11.5116C77.779 11.4995 78.2271 11.649 78.5866 11.934C78.9105 12.1846 79.0934 12.5764 79.0776 12.9858V13.4772C78.5134 13.2867 77.9215 13.1915 77.3262 13.1956C76.1351 13.1956 75.1541 13.4772 74.3832 14.0404C73.6123 14.6036 73.2578 15.4484 73.2578 16.4256C73.2578 17.3379 73.5392 18.0391 74.168 18.5995C74.7968 19.1599 75.5748 19.3711 76.4793 19.3711C77.3838 19.3711 78.2307 19.0205 79.0719 18.3855V19.1571H81.4536V12.9858C81.4536 11.8594 81.0315 10.9512 80.3282 10.3205L80.3268 10.3191ZM75.9841 15.5104C76.2655 15.3006 76.6143 15.2288 77.1095 15.2288C77.7313 15.2497 78.346 15.368 78.9313 15.5794V16.4917C78.3514 17.0024 77.6018 17.2776 76.8296 17.2633C76.4076 17.2633 76.0587 17.1929 75.8449 16.9817C75.631 16.7705 75.4946 16.5593 75.4946 16.2777C75.5993 15.9874 75.7669 15.7239 75.9855 15.5061L75.9841 15.5104ZM94.5546 19.4345C91.7197 19.4356 89.1633 17.7273 88.0777 15.1061C86.992 12.485 87.5909 9.46743 89.5951 7.46067C91.5993 5.4539 94.614 4.85324 97.2332 5.93881C99.8524 7.02439 101.56 9.58237 101.56 12.4198C101.546 16.287 98.4184 19.419 94.5546 19.4345ZM94.5546 7.79169C92.7119 7.78884 91.049 8.89752 90.3416 10.6006C89.6341 12.3036 90.0216 14.2655 91.3232 15.5711C92.6248 16.8767 94.5841 17.2687 96.2872 16.5644C97.9902 15.86 99.1015 14.198 99.1026 12.3536C99.1053 11.1439 98.6264 9.98297 97.7719 9.12744C96.9174 8.27191 95.7576 7.79225 94.549 7.7945L94.5546 7.79169Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <a className="ml-auto text-decoration-none text-digital-ocean stretched-link" href="#!">
                                                <i className="fe fe-arrow-right" />
                                            </a>
                                        </div>
                                        <small>
                                            Tempor dictum neque. In hac habitasse platea dictumst. Proin sit amet convallis enim.
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 300 }}>
                                <div className="card card-sm rounded-top-left rounded-bottom-right lift">
                                    <img className="card-img rounded-top-left" src={`${process.env.PUBLIC_URL}/dist/assets/img/robo-advisor/office-airbnb.jpg`} alt="..." />
                                    <div className="position-relative">
                                        <div className="shape shape-fluid-x shape-top text-white">
                                            <div className="shape-img pb-4">
                                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="img-fluid svg-shim text-airbnb mb-0" style={{ maxWidth: 96 }}>
                                                <svg viewBox="0 0 96 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M50.5951 7.53795C50.5951 8.61913 49.725 9.48971 48.6452 9.48971C47.5655 9.48971 46.696 8.61913 46.696 7.53795C46.696 6.45677 47.5358 5.58619 48.6452 5.58619C49.7556 5.61619 50.5951 6.48707 50.5951 7.53795ZM42.5573 11.4721V11.9527C42.5573 11.9527 41.628 10.7509 39.6485 10.7509C36.3798 10.7509 33.8302 13.2435 33.8302 16.6968C33.8302 20.1203 36.3499 22.6426 39.6485 22.6426C41.6579 22.6426 42.5573 21.4115 42.5573 21.4115V21.9218C42.5573 22.1621 42.7377 22.3418 42.9774 22.3418H45.4063V11.0503H42.9774C42.7377 11.0512 42.5573 11.2618 42.5573 11.4721ZM42.5573 18.7088C42.1079 19.3697 41.2079 19.9403 40.1285 19.9403C38.2092 19.9403 36.7394 18.7391 36.7394 16.6968C36.7394 14.6547 38.2092 13.4535 40.1285 13.4535C41.1783 13.4535 42.1379 14.0541 42.5573 14.6847V18.7088ZM47.206 11.0512H50.0848V22.3427H47.206V11.0512ZM90.2123 10.7506C88.2328 10.7506 87.3029 11.9524 87.3029 11.9524V5.61619H84.424V22.3427H86.8535C87.0934 22.3427 87.2729 22.1324 87.2729 21.9221V21.4118C87.2729 21.4118 88.2029 22.6429 90.1817 22.6429C93.451 22.6429 96 20.1212 96 16.6977C96 13.2741 93.451 10.7506 90.2123 10.7506ZM89.7323 19.91C88.6223 19.91 87.7529 19.34 87.3029 18.6788V14.6547C87.7529 14.0541 88.7125 13.4235 89.7323 13.4235C91.6516 13.4235 93.1211 14.6247 93.1211 16.6668C93.1211 18.7088 91.6519 19.91 89.7323 19.91ZM82.9248 15.6462V22.3727H80.0453V15.9762C80.0453 14.1147 79.4455 13.3635 77.8271 13.3635C76.9576 13.3635 76.0576 13.8141 75.4869 14.475V22.343H72.6086V11.0515H74.8871C75.127 11.0515 75.3071 11.2618 75.3071 11.4721V11.9527C76.1469 11.0815 77.2563 10.7509 78.3657 10.7509C79.6256 10.7509 80.6754 11.1118 81.5152 11.8324C82.5344 12.6732 82.9248 13.7541 82.9248 15.6462ZM65.6198 10.7506C63.6409 10.7506 62.7109 11.9524 62.7109 11.9524V5.61619H59.8321V22.3427H62.2609C62.5009 22.3427 62.681 22.1324 62.681 21.9221V21.4118C62.681 21.4118 63.611 22.6429 65.5898 22.6429C68.8591 22.6429 71.4081 20.1212 71.4081 16.6977C71.438 13.2738 68.889 10.7506 65.6198 10.7506ZM65.1398 19.91C64.0304 19.91 63.1609 19.34 62.7109 18.6788V14.6547C63.1609 14.0541 64.1206 13.4235 65.1398 13.4235C67.0597 13.4235 68.5289 14.6247 68.5289 16.6668C68.5289 18.7088 67.0597 19.91 65.1398 19.91ZM57.3427 10.7506C58.2121 10.7506 58.6621 10.9012 58.6621 10.9012V13.5735C58.6621 13.5735 56.2629 12.7626 54.7637 14.4747V22.3724H51.8842V11.0512H54.3137C54.5537 11.0512 54.7332 11.2615 54.7332 11.4718V11.9524C55.2736 11.3215 56.4433 10.7506 57.3427 10.7506ZM27.4427 21.3215C27.2929 20.9612 27.1428 20.5709 26.993 20.2403C26.7527 19.7 26.5128 19.1891 26.3033 18.7088L26.2734 18.6788C24.2037 14.1741 21.9849 9.61001 19.6453 5.1059L19.5554 4.9253C19.3093 4.45805 19.0695 3.98752 18.8361 3.51383C18.5359 2.97294 18.2363 2.40295 17.7563 1.86206C16.7967 0.660887 15.417 0 13.9478 0C12.448 0 11.0986 0.660887 10.1093 1.80176C9.65927 2.34205 9.3291 2.91264 9.0295 3.45353C8.79544 3.92692 8.55564 4.39745 8.31016 4.865L8.21998 5.0456C5.91065 9.54971 3.66154 14.1141 1.59219 18.6185L1.56193 18.6782C1.35221 19.1594 1.11193 19.6697 0.871946 20.2097C0.722145 20.5403 0.572344 20.9006 0.422543 21.2909C0.0324614 22.4018 -0.0876789 23.4529 0.0627212 24.5344C0.392583 26.7868 1.89179 28.6779 3.96144 29.5194C4.7413 29.85 5.55113 30 6.39061 30C6.63059 30 6.93019 29.97 7.17047 29.9397C8.16036 29.8197 9.1799 29.4897 10.1698 28.9191C11.3994 28.2282 12.569 27.2377 13.8884 25.7962C15.2079 27.2377 16.4075 28.2282 17.6071 28.9191C18.5973 29.4897 19.6165 29.8197 20.6061 29.9397C20.8461 29.9703 21.1463 30 21.3863 30C22.2261 30 23.0655 29.85 23.8152 29.5194C25.9148 28.6779 27.384 26.7568 27.7142 24.5344C27.9524 23.4835 27.8325 22.433 27.4427 21.3215ZM13.9175 22.8829C12.2979 20.8409 11.2481 18.9191 10.8885 17.298C10.7387 16.6071 10.7085 16.0065 10.7987 15.4659C10.8583 14.9853 11.0386 14.5647 11.2786 14.2044C11.8485 13.3941 12.8081 12.8832 13.9178 12.8832C15.0278 12.8832 16.0174 13.3638 16.5573 14.2044C16.7973 14.5647 16.977 14.9856 17.0376 15.4659C17.1271 16.0068 17.0972 16.6371 16.9474 17.298C16.5864 18.8891 15.5366 20.8112 13.9175 22.8829ZM25.883 24.2944C25.6733 25.8559 24.6235 27.2077 23.1542 27.8082C22.4346 28.1082 21.6544 28.1985 20.8752 28.1082C20.1256 28.0179 19.3754 27.7776 18.5961 27.3277C17.5163 26.7265 16.4369 25.7962 15.177 24.4144C17.1562 21.9824 18.3558 19.7597 18.8058 17.7782C19.0158 16.8471 19.0461 16.0065 18.9556 15.2253C18.8361 14.4747 18.5658 13.7838 18.1461 13.1832C17.2158 11.8315 15.6561 11.0512 13.9172 11.0512C12.1783 11.0512 10.6186 11.8621 9.68893 13.1832C9.26918 13.7838 8.99894 14.4747 8.8791 15.2253C8.75926 16.0065 8.78892 16.8771 9.0289 17.7782C9.47861 19.7597 10.7082 22.0121 12.6574 24.4444C11.4278 25.8259 10.3181 26.7571 9.23833 27.3577C8.45846 27.8082 7.70916 28.0485 6.95955 28.1382C6.15003 28.2285 5.36987 28.1082 4.68018 27.8382C3.21094 27.2377 2.16113 25.8859 1.95141 24.3244C1.86153 23.5738 1.92115 22.8232 2.22135 21.9824C2.31093 21.6818 2.46133 21.3818 2.61113 21.0215C2.82115 20.5409 3.06054 20.03 3.30082 19.5197L3.33108 19.46C5.40013 14.9853 7.61928 10.4209 9.92861 5.97678L10.0185 5.79618C10.2588 5.34619 10.4987 4.8656 10.7384 4.41501C10.9784 3.93442 11.2481 3.48383 11.5782 3.09324C12.208 2.37325 13.0475 1.98236 13.9774 1.98236C14.9074 1.98236 15.7469 2.37325 16.3766 3.09324C16.7068 3.48473 16.9764 3.93532 17.2164 4.41501C17.4567 4.8656 17.6967 5.34619 17.9361 5.79618L18.0262 5.97678C20.3004 10.4394 22.49 14.9446 24.5941 19.49V19.52C24.8344 20.0012 25.0441 20.5412 25.2841 21.0224C25.4339 21.3821 25.584 21.6821 25.6739 21.9827C25.9133 22.7626 26.0031 23.5138 25.883 24.2944Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <a className="ml-auto text-decoration-none text-airbnb stretched-link" href="#!">
                                                <i className="fe fe-arrow-right" />
                                            </a>
                                        </div>
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non.
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 300 }}>
                                <div className="card card-sm rounded-top-left rounded-bottom-right lift">
                                    <img className="card-img rounded-top-left" src={`${process.env.PUBLIC_URL}/dist/assets/img/robo-advisor/office-coinbase.jpg`} alt="..." />
                                    <div className="position-relative">
                                        <div className="shape shape-fluid-x shape-top text-white">
                                            <div className="shape-img pb-4">
                                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="img-fluid svg-shim text-coinbase mb-0" style={{ maxWidth: 96 }}>
                                                <svg viewBox="0 0 96 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.20801 20.9198C3.0708 20.9198 0 18.6546 0 13.5412C0 8.41122 3.0708 6.17933 6.20801 6.17933C7.75171 6.17933 8.96343 6.57907 9.82658 7.14537L8.88044 9.22736C8.29947 8.81096 7.43633 8.54447 6.57318 8.54447C4.6809 8.54447 2.95461 10.0435 2.95461 13.5079C2.95461 16.9723 4.7307 18.5047 6.57318 18.5047C7.43633 18.5047 8.29947 18.2382 8.88044 17.8218L9.82658 19.9538C8.93023 20.5534 7.75171 20.9198 6.20801 20.9198ZM17.0139 20.9198C13.0136 20.9198 10.8059 17.7385 10.8059 13.5412C10.8059 9.34395 12.997 6.17933 17.0139 6.17933C21.0143 6.17933 23.2219 9.3273 23.2219 13.5412C23.2219 17.7385 21.0143 20.9198 17.0139 20.9198ZM17.0139 8.46119C14.7897 8.46119 13.6941 10.4599 13.6941 13.5079C13.6941 16.556 14.7897 18.5713 17.0139 18.5713C19.2382 18.5713 20.3337 16.556 20.3337 13.5079C20.3337 10.4599 19.2382 8.46119 17.0139 8.46119ZM27.0729 3.89748C26.1267 3.89748 25.3632 3.16462 25.3632 2.2652C25.3632 1.36578 26.1267 0.632924 27.0729 0.632924C28.019 0.632924 28.7826 1.36578 28.7826 2.2652C28.7826 3.16462 28.0024 3.89748 27.0729 3.89748ZM25.6288 6.46248H28.517V20.62H25.6288V6.46248ZM39.8375 20.62V11.1761C39.8375 9.52717 38.8415 8.4945 36.8829 8.4945C35.8371 8.4945 34.8744 8.67772 34.2934 8.9109V20.6366H31.4384V7.17869C32.8493 6.59573 34.6586 6.17933 36.8663 6.17933C40.8168 6.17933 42.7257 7.91155 42.7257 10.9096V20.6366H39.8375V20.62ZM50.3114 20.9198C48.4855 20.9198 46.6762 20.4701 45.5641 19.9204V0H48.4191V6.82891C49.0997 6.51245 50.1952 6.24596 51.1745 6.24596C54.8097 6.24596 57.283 8.87759 57.283 13.2081C57.283 18.5547 54.5275 20.9198 50.3114 20.9198ZM50.6766 8.4945C49.8964 8.4945 48.9669 8.67772 48.4191 8.96087V18.2549C48.8341 18.4381 49.6474 18.6213 50.4608 18.6213C52.7348 18.6213 54.4113 17.039 54.4113 13.4246C54.4279 10.3266 52.9672 8.4945 50.6766 8.4945ZM65.0513 20.9198C61.0011 20.9198 58.9429 19.2709 58.9429 16.4727C58.9429 12.5252 63.1258 11.8257 67.3917 11.5925V10.6931C67.3917 8.9109 66.2132 8.27798 64.4039 8.27798C63.076 8.27798 61.4493 8.69437 60.5032 9.14408L59.7728 7.17869C60.9015 6.67901 62.8104 6.17933 64.7027 6.17933C68.0723 6.17933 70.1305 7.49515 70.1305 10.9929V19.9204C69.118 20.4701 67.0431 20.9198 65.0513 20.9198ZM67.4083 13.5079C64.5201 13.6578 61.6485 13.9077 61.6485 16.4227C61.6485 17.9217 62.7938 18.8378 64.9683 18.8378C65.8812 18.8378 66.9601 18.6879 67.4083 18.4714V13.5079ZM76.5709 20.9198C74.9276 20.9198 73.2013 20.4701 72.1722 19.9204L73.135 17.7219C73.8653 18.1716 75.409 18.6379 76.4879 18.6379C78.0316 18.6379 79.0608 17.8718 79.0608 16.6892C79.0608 15.4067 77.9818 14.907 76.5543 14.374C74.6621 13.6578 72.554 12.7917 72.554 10.1434C72.554 7.81161 74.3633 6.17933 77.5005 6.17933C79.2102 6.17933 80.6211 6.59573 81.617 7.17869L80.7207 9.17739C80.0899 8.77765 78.8284 8.3446 77.8159 8.3446C76.322 8.3446 75.492 9.12743 75.492 10.1601C75.492 11.4426 76.5377 11.8923 77.9321 12.4253C79.8907 13.1581 82.0652 13.9743 82.0652 16.7392C82.0486 19.2542 80.1065 20.9198 76.5709 20.9198ZM95.9751 13.4746L86.5967 14.7904C86.8789 17.3388 88.5388 18.6213 90.9124 18.6213C92.3233 18.6213 93.8504 18.2715 94.8132 17.7552L95.6431 19.9038C94.5476 20.4867 92.6553 20.9031 90.7132 20.9031C86.2647 20.9031 83.7749 18.0383 83.7749 13.5246C83.7749 9.19405 86.1817 6.16268 90.1323 6.16268C93.8006 6.16268 95.9751 8.57778 95.9751 12.392C96.0083 12.7418 96.0083 13.1082 95.9751 13.4746ZM90.1157 8.27798C87.9246 8.27798 86.4805 9.96022 86.4307 12.9083L93.2695 11.9589C93.2363 9.49385 91.9914 8.27798 90.1157 8.27798Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <a className="ml-auto text-decoration-none text-coinbase stretched-link" href="#!">
                                                <i className="fe fe-arrow-right" />
                                            </a>
                                        </div>
                                        <small>
                                            Tempor dictum neque. In hac habitasse platea dictumst. Proin sit amet convallis enim.
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" style={{ maxWidth: 300 }}>
                                <div className="card card-sm rounded-top-left rounded-bottom-right lift">
                                    <img className="card-img rounded-top-left" src={`${process.env.PUBLIC_URL}/dist/assets/img/robo-advisor/office-netflix.jpg`} alt="..." />
                                    <div className="position-relative">
                                        <div className="shape shape-fluid-x shape-top text-white">
                                            <div className="shape-img pb-4">
                                                <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="img-fluid svg-shim text-netflix mb-0" style={{ maxWidth: 86 }}>
                                                <svg viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M73.4135 22.4746C74.6112 22.594 75.8083 22.7223 77.0026 22.855L79.6394 16.1576L82.1457 23.4727C83.4317 23.6385 84.7171 23.8125 85.9986 23.9941L81.6045 11.1664L86 0.000884651H82.2773L82.2386 0.055733L79.8641 6.08758L77.7794 0.0017693H74.1038L77.8984 11.0791L73.4137 22.4746H73.4135ZM70.6336 22.2121V0.000884651H66.9594V21.9004C68.1849 21.9977 69.4109 22.1021 70.6336 22.2118V22.2121ZM43.033 20.9701C44.0248 20.9701 45.0156 20.9777 46.0046 20.986V12.826H50.4185V9.35106H46.0049V3.47992H51.0884V0.000884651H42.3163V20.973C42.5545 20.973 42.7939 20.9692 43.033 20.9701ZM31.6252 21.1824C32.8493 21.1376 34.0745 21.0998 35.3015 21.0691V3.48051H38.7358V0.0017693H28.1909V3.48051H31.6258V21.1824H31.6252ZM3.52461 23.5244V10.2914L7.87512 22.99C9.21302 22.8355 10.5529 22.6901 11.8965 22.5527V0.00117954H8.37107V13.7083L3.67655 0.00117954H0V24H0.0220736C1.18682 23.8343 2.35557 23.6768 3.52461 23.5244ZM24.6479 3.47963V0.00117954H15.875V22.1767C18.7938 21.9175 21.716 21.7002 24.6408 21.5247V18.0431C22.9448 18.1445 21.2523 18.2613 19.5638 18.3913V12.8274H23.9777V9.35047H19.5638V3.47963H24.6479ZM58.3701 17.8767V0H54.6798V21.1951C57.6153 21.3059 60.5394 21.4605 63.4537 21.6551V18.1713C61.7623 18.059 60.0681 17.9614 58.3701 17.8764V17.8767Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <a className="ml-auto text-decoration-none text-netflix stretched-link" href="#!">
                                                <i className="fe fe-arrow-right" />
                                            </a>
                                        </div>
                                        <small>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non.
                                        </small>
                                    </div>
                                </div>
                            </div> */}