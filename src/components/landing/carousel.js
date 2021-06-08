import React, { useState, useEffect } from "react"
import Flickity from 'flickity'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./carousel.css"

function SkeletonCarouselLanding() {
    return (
        <SkeletonTheme color="#e3e3e3">
            <div className="row justify-content-center">
                <div className="col-11 justify-content-center">
                    <Skeleton reactangle={true} height={600} width={1096} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

function CarouselLanding() {
    const urlListProgramCar = "https://peaceful-meadow-45867.herokuapp.com/banner-programs?_limit=5"
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
        fetch(urlListProgramCar).then(res => res.json()).then(parsedJson => parsedJson.map(data => {
            if (data.program !== null) {
                return ({
                    id: `${data.id}`,
                    gambar: `${data.banner.url}`,
                    link: `${data.linkBanner}`
                })
            }
            else {
                return ({
                    id: `${data.id}`,
                    gambar: `${data.banner.url}`,
                    link: `${data.linkBanner}`
                })
            }
        })).then(
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
                        autoPlay: true,
                    })
                )
            })
    },[])
    const listcarousel = programcar.map((doc, idx) => {
        return (
            <div style={{ width: `calc(100% - 5rem)`, maxWidth: `780px` }} key={idx}>
                <a href={`${doc.link}?img=${doc.gambar}`}>
                    <img className="img-fluid" src={doc.gambar} alt="..." width="780" height="473" />
                </a>
            </div>
        )
    })
    return (
        < section className="position-relative pt-12 pt-md-12 pb-7 pb-md-7" style={{ zIndex: 1 }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="position-absolute bottom-right text-warning mb-n13 mr-n7">
                            <svg width={185} height={186} viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="currentColor" /><circle cx={22} cy={2} r={2} fill="currentColor" /><circle cx={42} cy={2} r={2} fill="currentColor" /><circle cx={62} cy={2} r={2} fill="currentColor" /><circle cx={82} cy={2} r={2} fill="currentColor" /><circle cx={102} cy={2} r={2} fill="currentColor" /><circle cx={122} cy={2} r={2} fill="currentColor" /><circle cx={142} cy={2} r={2} fill="currentColor" /><circle cx={162} cy={2} r={2} fill="currentColor" /><circle cx={182} cy={2} r={2} fill="currentColor" /><circle cx={2} cy={22} r={2} fill="currentColor" /><circle cx={22} cy={22} r={2} fill="currentColor" /><circle cx={42} cy={22} r={2} fill="currentColor" /><circle cx={62} cy={22} r={2} fill="currentColor" /><circle cx={82} cy={22} r={2} fill="currentColor" /><circle cx={102} cy={22} r={2} fill="currentColor" /><circle cx={122} cy={22} r={2} fill="currentColor" /><circle cx={142} cy={22} r={2} fill="currentColor" /><circle cx={162} cy={22} r={2} fill="currentColor" /><circle cx={182} cy={22} r={2} fill="currentColor" /><circle cx={2} cy={42} r={2} fill="currentColor" /><circle cx={22} cy={42} r={2} fill="currentColor" /><circle cx={42} cy={42} r={2} fill="currentColor" /><circle cx={62} cy={42} r={2} fill="currentColor" /><circle cx={82} cy={42} r={2} fill="currentColor" /><circle cx={102} cy={42} r={2} fill="currentColor" /><circle cx={122} cy={42} r={2} fill="currentColor" /><circle cx={142} cy={42} r={2} fill="currentColor" /><circle cx={162} cy={42} r={2} fill="currentColor" /><circle cx={182} cy={42} r={2} fill="currentColor" /><circle cx={2} cy={62} r={2} fill="currentColor" /><circle cx={22} cy={62} r={2} fill="currentColor" /><circle cx={42} cy={62} r={2} fill="currentColor" /><circle cx={62} cy={62} r={2} fill="currentColor" /><circle cx={82} cy={62} r={2} fill="currentColor" /><circle cx={102} cy={62} r={2} fill="currentColor" /><circle cx={122} cy={62} r={2} fill="currentColor" /><circle cx={142} cy={62} r={2} fill="currentColor" /><circle cx={162} cy={62} r={2} fill="currentColor" /><circle cx={182} cy={62} r={2} fill="currentColor" /><circle cx={2} cy={82} r={2} fill="currentColor" /><circle cx={22} cy={82} r={2} fill="currentColor" /><circle cx={42} cy={82} r={2} fill="currentColor" /><circle cx={62} cy={82} r={2} fill="currentColor" /><circle cx={82} cy={82} r={2} fill="currentColor" /><circle cx={102} cy={82} r={2} fill="currentColor" /><circle cx={122} cy={82} r={2} fill="currentColor" /><circle cx={142} cy={82} r={2} fill="currentColor" /><circle cx={162} cy={82} r={2} fill="currentColor" /><circle cx={182} cy={82} r={2} fill="currentColor" /><circle cx={2} cy={102} r={2} fill="currentColor" /><circle cx={22} cy={102} r={2} fill="currentColor" /><circle cx={42} cy={102} r={2} fill="currentColor" /><circle cx={62} cy={102} r={2} fill="currentColor" /><circle cx={82} cy={102} r={2} fill="currentColor" /><circle cx={102} cy={102} r={2} fill="currentColor" /><circle cx={122} cy={102} r={2} fill="currentColor" /><circle cx={142} cy={102} r={2} fill="currentColor" /><circle cx={162} cy={102} r={2} fill="currentColor" /><circle cx={182} cy={102} r={2} fill="currentColor" /><circle cx={2} cy={122} r={2} fill="currentColor" /><circle cx={22} cy={122} r={2} fill="currentColor" /><circle cx={42} cy={122} r={2} fill="currentColor" /><circle cx={62} cy={122} r={2} fill="currentColor" /><circle cx={82} cy={122} r={2} fill="currentColor" /><circle cx={102} cy={122} r={2} fill="currentColor" /><circle cx={122} cy={122} r={2} fill="currentColor" /><circle cx={142} cy={122} r={2} fill="currentColor" /><circle cx={162} cy={122} r={2} fill="currentColor" /><circle cx={182} cy={122} r={2} fill="currentColor" /><circle cx={2} cy={142} r={2} fill="currentColor" /><circle cx={22} cy={142} r={2} fill="currentColor" /><circle cx={42} cy={142} r={2} fill="currentColor" /><circle cx={62} cy={142} r={2} fill="currentColor" /><circle cx={82} cy={142} r={2} fill="currentColor" /><circle cx={102} cy={142} r={2} fill="currentColor" /><circle cx={122} cy={142} r={2} fill="currentColor" /><circle cx={142} cy={142} r={2} fill="currentColor" /><circle cx={162} cy={142} r={2} fill="currentColor" /><circle cx={182} cy={142} r={2} fill="currentColor" /><circle cx={2} cy={162} r={2} fill="currentColor" /><circle cx={22} cy={162} r={2} fill="currentColor" /><circle cx={42} cy={162} r={2} fill="currentColor" /><circle cx={62} cy={162} r={2} fill="currentColor" /><circle cx={82} cy={162} r={2} fill="currentColor" /><circle cx={102} cy={162} r={2} fill="currentColor" /><circle cx={122} cy={162} r={2} fill="currentColor" /><circle cx={142} cy={162} r={2} fill="currentColor" /><circle cx={162} cy={162} r={2} fill="currentColor" /><circle cx={182} cy={162} r={2} fill="currentColor" /><circle cx={2} cy={182} r={2} fill="currentColor" /><circle cx={22} cy={182} r={2} fill="currentColor" /><circle cx={42} cy={182} r={2} fill="currentColor" /><circle cx={62} cy={182} r={2} fill="currentColor" /><circle cx={82} cy={182} r={2} fill="currentColor" /><circle cx={102} cy={182} r={2} fill="currentColor" /><circle cx={122} cy={182} r={2} fill="currentColor" /><circle cx={142} cy={182} r={2} fill="currentColor" /><circle cx={162} cy={182} r={2} fill="currentColor" /><circle cx={182} cy={182} r={2} fill="currentColor" /></svg>
                        </div>
                        <div className="flickity-buttons-overlap flickity-items-fade shadow-lg carousel-main-car-landing" >
                            {isLoadingcar ? <SkeletonCarouselLanding></SkeletonCarouselLanding> :
                                <>
                                    {listcarousel}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}


// import React from 'react'; 
// import './App.css'; 
// import Photos from './Components/Photos'

// class Apps extends React.Component { 
//     state = { 
//         photos: null, pages: null, currentPage: null, 
//     }

//     componentDidMount() { 
//         fetch('https//localhost:3000/photos?page=1')
//         .then(res => res.json())
//         .then(res => { 
//             this.setState({ 
//                 photos: res.photos, 
//                 pages: res.pages, 
//                 currentPage: res.currentPage 
//             }) 
//         }) 
//     } 
//     fetchMoreData = () => { 
//         if (this.state.currentPage - this.state.pages !== 0) { 
//             fetch(`http://localhost:3000/photos?page=${this.state.currentPage + 1}`)
//             .then(res => res.json())
//             .then(res => { 
//                 this.setState({ 
//                     photos: [...this.state.photos, ...res.photos], 
//                     pages: res.pages, 
//                     currentPage: res.currentPage, 
//                 }) 
//             }) 
//         } 
//     }
//     render() { 
//         return (
//             <PhotosfetchMoreData={this.fetchMoreData} photos={this.state.photos} pages={this.state.pages} currentPage={this.state.currentPage}/>

//         )
//     }
// }
export default CarouselLanding

