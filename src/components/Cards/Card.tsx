const Card = ({ img, title, body, textBtn }) => {
    return (
        <>
            <div className="card card-container custom-blue-bg text-white d-flex flex-row py-2">
                <div className="card-body card-column d-flex flex-column gap-4 justify-content-center ">
                    <h5 className="card-title fw-semibold fs-3 ">{title}</h5>
                    <p className="card-text  text-light fs-5">{body}</p>
                    <a href="#" className="btn btn-outline-light rounded-1 px-4 w-50">{textBtn}</a>
                </div>

                {img && <div className="card-img me-4">
                </div>}


            </div>

        </>
    )
}

export default Card