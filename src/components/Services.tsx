import ActionCard from "./Cards/ActionCard";
import { IoIosPaper } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { motion } from "framer-motion";

const Services = () => {

    const serviceCards = [
        { icon: IoIosPaper, title: "Business & Product Concept", body: " Analyse business and product concepts at Start-up Workshops or Ongoing Projects´ Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit." },
        { icon: MdDeveloperMode, title: "Web & Mobile Development", body: "Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages." },
        { icon: MdDeveloperMode, title: "UX & UI Design", body: "Sketch information architecture and simple mock-ups, convert them into clickeable prototypes and finish with usable interface designs to deliver a good and reliable user exprience." }
    ];

    return (
        <motion.section
            id="services"
            className="container services-container pb-5"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="text-center my-5">
                <h2 className="fw-semibold fs-3 mb-3 ">Our Services</h2>
                <p className=" services-container-subtitle text-white-50 fs-6 fw-semibold ">We feel very strong about our skills when it comes to planning, designing <br /> and coding applications. Here is what we love to do!</p>
            </div>

            <div className="row ">
                {serviceCards.map((card, i) => (
                    <div key={i} className="col-12 col-sm-6 col-lg-4">
                        <ActionCard icon={card.icon} title={card.title} body={card.body} />
                    </div>
                ))}
            </div>
        </motion.section>)
}

export default Services