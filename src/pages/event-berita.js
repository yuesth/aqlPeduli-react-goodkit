import React from "react"
import NavbarGK from "../components/navbar"
import FooterGK from "../components/footer"
import BeritaHeader from "../components/berita/berita-header"
import BeritaList from "../components/berita/berita-list"

function EventBerita() {
    return (
        <>
            <NavbarGK></NavbarGK>
            <section className="pt-8 pt-md-12">
                <div className="container-lg">
                    <div className="row align-items-center justify-content-center mb-7">
                        <div className="col-md-6" style={{ textAlign: `center` }}>
                            <h2 className="display-4 mb-4 mb-md-0">
                                Events <br />
                            </h2>
                        </div>
                    </div>
                    {/* <div className="row justify-content-center mt-8">
                        <div className="col-md-11 col-lg-111 text-center text-white">
                            <form>
                                <div className="input-group rounded-top-left rounded-bottom-right shadow">
                                    <input type="text" className="form-control bg-white pr-2 w-60" placeholder="Cari apa yang kamu cari hari ini?" aria-label="Email address" aria-describedby="subscriptionButton" />
                                    <div className="input-group-append">
                                        <button className="btn btn-info ml-3" type="button" id="subscriptionButton">
                                            Cari
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row" id="wadahStickyBerita">
                        <Col md={10}>
                            <div className="container-fluid px-0">
                                {isShowevent ?
                                    <div className="row pl-4 mb-5">
                                        {isLoadingberlist ? <SkeletonBeritaEvent></SkeletonBeritaEvent>
                                            :
                                            listevent
                                        }
                                    </div>
                                    : null
                                }
                                <div className="row px-4">
                                    {listberitalain}
                                </div>
                            </div>
                        </Col>
                        <Col md={2} id="col-list" className="pt-5 px-0">
                            <Sticky containerSelectorFocus="#wadahStickyBerita" offsetTop={70} stickyEnableRange={[768, Infinity]}>
                                <Row>
                                    <Col className="pl-6">
                                        <h2>Kategori</h2>
                                    </Col>
                                </Row>
                                <div className="row pl-n5 flex-kateg">
                                    {isLoadingberkateg ? <SkeletonBeritaKateg></SkeletonBeritaKateg>
                                        :
                                        kategberita.map((doc, idx) => {
                                            var nama1 = doc.namaKateg
                                            var nama2 = nama1.replace(/\s/g, "")
                                            return (
                                                <div>
                                                    <Button variant="default" onClick={() => filterEvent(nama2)} key={idx} className="kategoriBtnBerita">{doc.namaKateg}</Button>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Sticky>
                        </Col>
                    </div> */}
                </div>
            </section>
            <FooterGK></FooterGK>
        </>
    )
}

export default EventBerita