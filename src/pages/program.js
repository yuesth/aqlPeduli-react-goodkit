import React from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import ProgramLayout from "../components/program/program-layout"


function Program(props){
    // const namaProg = (props.location ? props.location.state.namaKateg : {} )
    // const nama1 = namaProg
    // const nama2 = nama1.replace(/\s/g, "")
    return(
        <>
            <NavbarGK></NavbarGK>
            <ProgramLayout></ProgramLayout>
            <FooterGK></FooterGK>
        </>
    )
}

export default Program