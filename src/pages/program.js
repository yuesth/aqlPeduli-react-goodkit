import React from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import ProgramLayout from "../components/program/program-layout"


function Program(){
    return(
        <>
            <NavbarGK></NavbarGK>
            <ProgramLayout></ProgramLayout>
            <FooterGK></FooterGK>
        </>
    )
}

export default Program