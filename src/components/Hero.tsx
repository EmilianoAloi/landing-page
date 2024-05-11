import { MdArrowRightAlt } from "react-icons/md";

const Hero = () => {
    return (
        <>
            <div className="text-start d-flex gap-3 flex-column">
                <div className="hero d-flex  flex-column justify-content-start">
                    <h1 className="fw-semibold fs-2"> We build beautiful and <br /> reliable web solutions </h1>
                    <p className="custom-gray">
                        We strongly believe that communication, trust and transparency are the essential elements of successful business relationship. <br />Ready for the journey?
                    </p>
                    <div className="d-flex flex-row mt-2 gap-3">
                        <button className="btn btn-outline-secondary pb-2 rounded-1 fw-semibold">
                            <a href="#services" className="text-white-50">Learn more</a>
                        </button>
                        <button className="btn btn-primary custom-blue-bg pb-2 align-items-center d-flex gap-1 rounded-1 fw-semibold">Our Projects <MdArrowRightAlt size={25} /></button>
                    </div>
                </div>
            </div>
        </>)
}

export default Hero