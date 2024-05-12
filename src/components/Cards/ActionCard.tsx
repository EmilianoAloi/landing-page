import { ComponentType, FC } from "react"

interface Props {
    icon: ComponentType<{ size?: number }>;
    title: string;
    body: string;
}


const ActionCard: FC<Props> = ({ icon: IconComponent, title, body }) => {
    return (
        <div className="card mb-5 ">
            <div className="card-body action-card text-center d-flex flex-column align-items-center justify-content-around gap-3">
                {IconComponent &&
                    <div className="custom-blue-bg text-white p-3 rounded-5">
                        <IconComponent size={40} />
                    </div>
                }
                <h3 className="card-title ">{title}</h3>
                <p className="card-text action-card-text lh-lg text-secondary letter-spacing-1 text-opacity-75 ">{body}</p>
                <a href="#" className="btn btn-outline-secondary rounded-1 px-5  py-2">Learn More</a>
            </div>
        </div>
    )
}

export default ActionCard