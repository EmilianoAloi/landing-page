import html5 from "../assets/html5.png"
import css from "../assets/css.png"
import sass from "../assets/sass.png"
import angular from "../assets/angular.png"
import python from "../assets/python.png"
import node from "../assets/node.png"
import { motion } from "framer-motion"
import { FC } from "react"

const Tech: FC = () => {
    return (
        <section id="tech" className="custom-blue-bg tech-container text-center d-flex align-items-center justify-content-center ">
            <div className="container">
                <div className="row overflow-x-hidden">
                    <motion.div
                        className="col-12 col-lg-6 d-flex flex-column justify-content-center"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}>
                        <h2 className="fs-3 fw-semibold  mb-4">We use cutting edge technology</h2>
                        <p className="fs-6 text-white-50">Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    </motion.div>
                    <div className="col-12 col-lg-6">
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="container tech-container-logos mx-auto d-flex flex-row align-items-end">
                            <div className="row w-50 ">
                                <div className="col-md-6 ">
                                    <img className="w-75 my-4" src={html5} alt="html5 logo" />
                                </div>
                                <div className="col-md-6">
                                    <img className="w-75 my-4" src={css} alt="css logo" />
                                </div>
                            </div>
                            <div className="row w-50">
                                <div className="col-md-6">
                                    <img className="w-75 my-4" src={sass} alt="sass logo" />
                                </div>
                                <div className="col-md-6">
                                    <img className="w-75 my-4" src={node} alt="node logo" />
                                </div>
                            </div>
                            <div className="row w-50">
                                <div className="col-md-6">
                                    <img className="w-75 my-4" src={angular} alt="angular logo" />
                                </div>
                                <div className="col-md-6">
                                    <img className="w-75 my-4" src={python} alt="python logo" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Tech