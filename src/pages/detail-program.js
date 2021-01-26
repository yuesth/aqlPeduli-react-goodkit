import React, { useState, useEffect, useRef } from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import DetailProg from "../components/program/detail-prog"


function DetailProgram(props) {
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
                <NavbarGK></NavbarGK>
                <DetailProg custparam={custparam} fromupdate={fromupdate} kontenfix={kontenfix}></DetailProg>
                <FooterGK></FooterGK>
            </>
        </>
    )
}

export default DetailProgram