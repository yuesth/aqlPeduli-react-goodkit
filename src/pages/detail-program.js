import React, { useState, useEffect, useRef } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import DetailProg from "../components/program/detail-prog"
import {useLocation} from 'react-router-dom'
// import Helmet from 'react-helmet'


function DetailProgram(props) {
    const query = useLocation().search
    var fromUpdateLanding = false
    var id = ""
    if (props.location.state) {
        fromUpdateLanding = props.location.state.fromUpdateLanding
        id = props.location.state.idprogram
    }
    const custparam = props.match.params.paramKepedulian
    const [kontenfix, setKontenfix] = useState("")
    const [fromupdate, setFromupdate] = useState(fromUpdateLanding)

    return (
        <>
            <>
                {/* <Helmet>
                    <title>AQL Peduli | Kepedulian</title>
                    <meta name="description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />

                    <meta itemProp="name" content="AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat" />
                    <meta itemProp="description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />
                    <meta itemProp="image" content="https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png" />

                    <meta property="og:url" content="https://aqlpeduli.or.id" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="AQL Peduli | Kepedulian" />
                    <meta property="og:description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />
                    <meta property="og:image" content="https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="AQL Peduli - Kemanusiaan, Kerelawanan, dan Pemberdayaan Masyarakat" />
                    <meta name="twitter:description" content="AQL Peduli adalah sebuah lembaga nirlaba yang bergerak di bidang sosial yang bersemangat untuk mengedukasi masyarakat dalam hal kemanusiaan mulai pra-bencana, saat bencana dan pasca bencana , dimana dalam kegiatannya terus berusaha memberikan yang terbaik kepada masyarakat yang terkena dampak bencana secara universal, tanpa diskrimanasi dan tidak berafiliasi dengan partai politik manapun." />
                    <meta name="twitter:image" content="https://res.cloudinary.com/aqlpeduli/image/upload/v1606811406/large_logo_aql_65cc6815e9.png" />
                </Helmet> */}
                <NavbarGK></NavbarGK>
                <DetailProg custparam={custparam} fromupdate={fromupdate} kontenfix={kontenfix} query={query}></DetailProg>
                <FooterGK></FooterGK>
            </>
        </>
    )
}

export default DetailProgram