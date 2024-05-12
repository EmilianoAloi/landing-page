import tnw from "../assets/tnw.png"
import google from "../assets/google.png"
import nike from "../assets/nike.png"
import airbnb from "../assets/airbnb.png"
import africa from "../assets/africa.png"
import iphone from "../assets/iphone.png"
import { motion } from "framer-motion"
import Card from "./Cards/Card"
import { FC } from "react"

interface ContactCard {
    img?: string;
    title: string;
    body: string;
    textBtn: string;
}

const Brands: FC = () => {
    const contactCards: ContactCard[] = [
        { img: "", title: "Get in touch with us", body: "Maecenas sed diam eget risus varius blandit sit amet non magna.", textBtn: "Hire us" },
        { img: iphone, title: "Our Projects", body: "Maecenas sed diam eget risus varius blandit sit amet non magna.", textBtn: "See Projects" }
    ]
    return (
        <section id="brands" className="bg-white text-secondary pb-5 py-4">
            <div className="container brands-container gap-5">
                <h3 className="fs-6 fw-semibold letter-spacing-1 text-center py-5">CLIENTS WE WORKED WITH</h3>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="d-flex brands flex-column gap-5 justify-content-between align-items-center pb-5">
                    <img className="brand-img img-fluid" src={tnw} alt="tnw logo" />
                    <img className="brand-img " src={google} alt="google logo" />
                    <img className="brand-img " src={nike} alt="nike logo" />
                    <img className="brand-img " src={airbnb} alt="airbnb logo" />
                    <img className="brand-img " src={africa} alt="africa logo" />
                </motion.div>
                <div className="">
                    <div className="row row-gap-3 ">
                        {contactCards.map((card, i) => (
                            <div key={i} className="col-12 col-lg-6 pt-5">
                                <Card img={card.img} title={card.title} body={card.body} textBtn={card.textBtn} />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands