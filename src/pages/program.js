import React, {useState, useEffect} from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import ProgramLayout from "../components/program/program-layout"
import ReactGA from 'react-ga'


function Program(props){
    // const namaProg = (props.location ? props.location.state.namaKateg : {} )
    // const nama1 = namaProg
    // const nama2 = nama1.replace(/\s/g, "")
    useEffect(() => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    },[])
    var namakateg = ""
    if(props.location.state){
        namakateg = props.location.state.namaKateg
    }
    const [namakategori, setNamakategori] = useState(namakateg)
    return(
        <>
            <NavbarGK></NavbarGK>
            <ProgramLayout namakateg={namakategori}></ProgramLayout>
            <FooterGK></FooterGK>
        </>
    )
}

export default Program