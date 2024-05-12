import { HiRectangleGroup } from "react-icons/hi2";
import { FC } from "react"

const Navbar: FC = () => {
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg navbar-dark d-flex py-4">
                <div className="container-fluid p-0">
                    <a className="navbar-brand flex-grow-1 fw-semibold fs-5" href="#">compleet labs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav fs-5 gap-3 ">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#services">Services</a>
                            <a className="nav-link" href="#tech">Technology</a>
                            <a className="nav-link" href="#brands">Case studies</a>
                            <a className="nav-link" href="#tech">About</a>
                            <div className="d-flex align-items-center">
                                <HiRectangleGroup size={20} />
                                <a className="nav-link active" href="#"> Hire us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar