import React, { useEffect } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import CarouselLanding from "../components/landing/carousel"
import KepedulianLanding from "../components/landing/kepedulian"
import KepeduliankitaLanding from "../components/landing/kk"
import UpdateLanding from "../components/landing/update"
import BeritaLanding from "../components/landing/berita"
// import Helmet from 'react-helmet'
import ReactGA from 'react-ga'


function Landing() {
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    },[])
    // document.title = "AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat"
    // document.getElementsByTagName('meta')[4].content = "AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun."
    return (
        <>
            {/* <Helmet>
                <title>AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat</title>
                <meta name="description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />

                <meta itemProp="name" content="AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat" />
                <meta itemProp="description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />
                <meta itemProp="image" content="https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png" />

                <meta property="og:url" content="https://aqlpeduli.or.id" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat" />
                <meta property="og:description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />
                <meta property="og:image" content="https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat" />
                <meta name="twitter:description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />
                <meta name="twitter:image" content="https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png" />
            </Helmet> */}
            <NavbarGK></NavbarGK>
            <div className="bg-dark" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/dist/assets/img/patterns/pattern-1.svg)` }}>
                <CarouselLanding></CarouselLanding>
            </div>
            <KepedulianLanding></KepedulianLanding>
            <KepeduliankitaLanding></KepeduliankitaLanding>
            <div className="bg-dark" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/dist/assets/img/patterns/pattern-1.svg)` }}>
                <UpdateLanding></UpdateLanding>
            </div>
            <BeritaLanding></BeritaLanding>
            <FooterGK></FooterGK>
        </>

    )
}

export default Landing