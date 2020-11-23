import React, { useState, useEffect } from "react"
import Flickity from 'flickity'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./carousel.css"
import { Link } from "react-router-dom"

function SkeletonCarouselLanding() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <Skeleton reactangle={true} height={600} width={1096} />
        </SkeletonTheme>
    )
}

function CarouselLanding() {
    const urlListProgramCar = "http://167.99.72.148/programs"
    const [programcar, setProgramcar] = useState([])
    const [flickcar, setFlickcar] = useState([])
    const [isLoadingcar, setIsLoadingcar] = useState(true);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    useEffect(() => {
        fetch(urlListProgramCar).then(res => res.json()).then(parsedJson => parsedJson.map(data => (
            {
                id: `${data.id}`,
                judul: `${data.judulProgram}`,
                gambar: `http://167.99.72.148${data.gambarProgram.url}`,
            }
        ))).then(
            items => {
                setProgramcar(items)
                // setTimeout(()=>{
                setIsLoadingcar(false)
                // },1000)
            })
            .then(() => {
                setFlickcar(
                    new Flickity('.carousel-main-car-landing', {
                        imagesLoaded: true,
                        pageDots: false,
                        wrapAround: true,
                        autoPlay:true,
                    })
                )
            })
    })
    const listcarousel = programcar.map((doc, idx) => {
        return (
            <div style={{ width: `calc(100% - 5rem)`, maxWidth: `812px` }}>
                <Link to={{
                    pathname: `/program/${doc.id}`,
                    state: {
                        fromUpdateLanding: false,
                    }
                }}>
                    <img className="img-fluid" src={doc.gambar} alt="..." width="812" height="473" />
                    {/* <div className="carousel-caption capt">
                        <h1 className="text-gray-900">{doc.judul}</h1>
                    </div> */}
                </Link>
            </div>
        )
    })
    return (
        < section className="position-relative pt-11 pt-md-11 pb-7 pb-md-7" style={{ zIndex: 1 }}>
            <div className="container-xl">
                <div className="row">
                    <div className="col-12">
                        <div className="position-absolute bottom-right text-warning mb-n8 mr-n7">
                            <svg width={185} height={186} viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="currentColor" /><circle cx={22} cy={2} r={2} fill="currentColor" /><circle cx={42} cy={2} r={2} fill="currentColor" /><circle cx={62} cy={2} r={2} fill="currentColor" /><circle cx={82} cy={2} r={2} fill="currentColor" /><circle cx={102} cy={2} r={2} fill="currentColor" /><circle cx={122} cy={2} r={2} fill="currentColor" /><circle cx={142} cy={2} r={2} fill="currentColor" /><circle cx={162} cy={2} r={2} fill="currentColor" /><circle cx={182} cy={2} r={2} fill="currentColor" /><circle cx={2} cy={22} r={2} fill="currentColor" /><circle cx={22} cy={22} r={2} fill="currentColor" /><circle cx={42} cy={22} r={2} fill="currentColor" /><circle cx={62} cy={22} r={2} fill="currentColor" /><circle cx={82} cy={22} r={2} fill="currentColor" /><circle cx={102} cy={22} r={2} fill="currentColor" /><circle cx={122} cy={22} r={2} fill="currentColor" /><circle cx={142} cy={22} r={2} fill="currentColor" /><circle cx={162} cy={22} r={2} fill="currentColor" /><circle cx={182} cy={22} r={2} fill="currentColor" /><circle cx={2} cy={42} r={2} fill="currentColor" /><circle cx={22} cy={42} r={2} fill="currentColor" /><circle cx={42} cy={42} r={2} fill="currentColor" /><circle cx={62} cy={42} r={2} fill="currentColor" /><circle cx={82} cy={42} r={2} fill="currentColor" /><circle cx={102} cy={42} r={2} fill="currentColor" /><circle cx={122} cy={42} r={2} fill="currentColor" /><circle cx={142} cy={42} r={2} fill="currentColor" /><circle cx={162} cy={42} r={2} fill="currentColor" /><circle cx={182} cy={42} r={2} fill="currentColor" /><circle cx={2} cy={62} r={2} fill="currentColor" /><circle cx={22} cy={62} r={2} fill="currentColor" /><circle cx={42} cy={62} r={2} fill="currentColor" /><circle cx={62} cy={62} r={2} fill="currentColor" /><circle cx={82} cy={62} r={2} fill="currentColor" /><circle cx={102} cy={62} r={2} fill="currentColor" /><circle cx={122} cy={62} r={2} fill="currentColor" /><circle cx={142} cy={62} r={2} fill="currentColor" /><circle cx={162} cy={62} r={2} fill="currentColor" /><circle cx={182} cy={62} r={2} fill="currentColor" /><circle cx={2} cy={82} r={2} fill="currentColor" /><circle cx={22} cy={82} r={2} fill="currentColor" /><circle cx={42} cy={82} r={2} fill="currentColor" /><circle cx={62} cy={82} r={2} fill="currentColor" /><circle cx={82} cy={82} r={2} fill="currentColor" /><circle cx={102} cy={82} r={2} fill="currentColor" /><circle cx={122} cy={82} r={2} fill="currentColor" /><circle cx={142} cy={82} r={2} fill="currentColor" /><circle cx={162} cy={82} r={2} fill="currentColor" /><circle cx={182} cy={82} r={2} fill="currentColor" /><circle cx={2} cy={102} r={2} fill="currentColor" /><circle cx={22} cy={102} r={2} fill="currentColor" /><circle cx={42} cy={102} r={2} fill="currentColor" /><circle cx={62} cy={102} r={2} fill="currentColor" /><circle cx={82} cy={102} r={2} fill="currentColor" /><circle cx={102} cy={102} r={2} fill="currentColor" /><circle cx={122} cy={102} r={2} fill="currentColor" /><circle cx={142} cy={102} r={2} fill="currentColor" /><circle cx={162} cy={102} r={2} fill="currentColor" /><circle cx={182} cy={102} r={2} fill="currentColor" /><circle cx={2} cy={122} r={2} fill="currentColor" /><circle cx={22} cy={122} r={2} fill="currentColor" /><circle cx={42} cy={122} r={2} fill="currentColor" /><circle cx={62} cy={122} r={2} fill="currentColor" /><circle cx={82} cy={122} r={2} fill="currentColor" /><circle cx={102} cy={122} r={2} fill="currentColor" /><circle cx={122} cy={122} r={2} fill="currentColor" /><circle cx={142} cy={122} r={2} fill="currentColor" /><circle cx={162} cy={122} r={2} fill="currentColor" /><circle cx={182} cy={122} r={2} fill="currentColor" /><circle cx={2} cy={142} r={2} fill="currentColor" /><circle cx={22} cy={142} r={2} fill="currentColor" /><circle cx={42} cy={142} r={2} fill="currentColor" /><circle cx={62} cy={142} r={2} fill="currentColor" /><circle cx={82} cy={142} r={2} fill="currentColor" /><circle cx={102} cy={142} r={2} fill="currentColor" /><circle cx={122} cy={142} r={2} fill="currentColor" /><circle cx={142} cy={142} r={2} fill="currentColor" /><circle cx={162} cy={142} r={2} fill="currentColor" /><circle cx={182} cy={142} r={2} fill="currentColor" /><circle cx={2} cy={162} r={2} fill="currentColor" /><circle cx={22} cy={162} r={2} fill="currentColor" /><circle cx={42} cy={162} r={2} fill="currentColor" /><circle cx={62} cy={162} r={2} fill="currentColor" /><circle cx={82} cy={162} r={2} fill="currentColor" /><circle cx={102} cy={162} r={2} fill="currentColor" /><circle cx={122} cy={162} r={2} fill="currentColor" /><circle cx={142} cy={162} r={2} fill="currentColor" /><circle cx={162} cy={162} r={2} fill="currentColor" /><circle cx={182} cy={162} r={2} fill="currentColor" /><circle cx={2} cy={182} r={2} fill="currentColor" /><circle cx={22} cy={182} r={2} fill="currentColor" /><circle cx={42} cy={182} r={2} fill="currentColor" /><circle cx={62} cy={182} r={2} fill="currentColor" /><circle cx={82} cy={182} r={2} fill="currentColor" /><circle cx={102} cy={182} r={2} fill="currentColor" /><circle cx={122} cy={182} r={2} fill="currentColor" /><circle cx={142} cy={182} r={2} fill="currentColor" /><circle cx={162} cy={182} r={2} fill="currentColor" /><circle cx={182} cy={182} r={2} fill="currentColor" /></svg>
                        </div>
                        <div className="flickity-buttons-overlap flickity-items-fade shadow-lg carousel-main-car-landing" >
                            {/* <div className="flickity-buttons-overlap flickity-items-fade shadow-lg" data-flickity="{&quot;imagesLoaded&quot;: true, &quot;pageDots&quot;: false, &quot;wrapAround&quot;: true}"> */}
                            {/* {isLoadingcar ? <SkeletonCarouselLanding></SkeletonCarouselLanding>
                                :
                                <Slider {...settings}>
                                    {listcarousel}
                                </Slider>
                            } */}
                            {isLoadingcar ? <SkeletonCarouselLanding></SkeletonCarouselLanding> :
                                // <Slider {...settings}>
                                <>
                                    {listcarousel}
                                    {/* <div style={{ width: `calc(100% - 4rem)`, maxWidth: `812px` }}>
                                        <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div style={{ width: `calc(100% - 4rem)`, maxWidth: `812px` }}>
                                        <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div style={{ width: `calc(100% - 4rem)`, maxWidth: `812px` }}>
                                        <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div style={{ width: `calc(100% - 4rem)`, maxWidth: `812px` }}>
                                        <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div style={{ width: `calc(100% - 4rem)`, maxWidth: `812px` }}>
                                        <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div style={{ width: `calc(100% - 4rem)`, maxWidth: `812px` }}>
                                        <img className="img-fluid rounded" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div> */}



                                    {/* <div className="w-100">
                                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div className="w-100">
                                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div className="w-100">
                                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div className="w-100">
                                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div className="w-100">
                                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div>
                                    <div className="w-100">
                                        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/carousel/aqlCarousel1.png`} alt="..." />
                                    </div> */}
                                    {/* // </Slider> */}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default CarouselLanding

