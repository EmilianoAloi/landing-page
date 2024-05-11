import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer-container pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 py-4">
                        <div className="w-100">
                            <h6 className="fw-semibold">compleet labs</h6>
                            <p className="text-white-50 py-2 lh-lg">Este Desarrollo se construyó en React + TypeScript <br /> En la sección Contact estan todas mis redes :D
                            </p>
                            <div className="text-white-50 d-flex gap-2 ">
                                <FaTwitter />
                                <TbWorld />
                                <FaFacebook />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-2 py-4">
                        <h6 className="fs-6 fw-semibold">SITEMAP</h6>
                        <div className="d-flex flex-column gap-2 text-white-50 pt-3 ">
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#tech">Technology</a>
                            <a className="nav-link" href="#services">Services</a>
                            <a className="nav-link" href="#services">About</a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-2 py-4">
                        <h6 className="fw-semibold">CASE STUDIES</h6>
                        <div className="d-flex flex-column gap-2 text-white-50 pt-3 ">
                            <a className="nav-link" href="#">Swiss Airlines</a>
                            <a className="nav-link" href="#">Google</a>
                            <a className="nav-link" href="#">Apple</a>
                            <a className="nav-link" href="#">Nike</a>
                        </div>
                    </div>
                    <div className="col- 6 col-sm-2 py-4 ">
                        <h6 className="fw-semibold">CONTACT</h6>
                        <div className="d-flex flex-column gap-2 text-white-50 pt-3 ">
                            <a className="nav-link" target="_blank" href="https://portfolio-emilianoaloi.vercel.app/">Portfolio </a>
                            <a className="nav-link" target="_blank" href="https://github.com/EmilianoAloi">Github</a>
                            <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/emilianoaloi/">Linkedin</a>
                            <a className="nav-link" target="_blank" href="mailto:emilianoaloi.dev@gmail.com">Gmail</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer