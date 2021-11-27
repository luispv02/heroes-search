import React from 'react'

const HeroeCard = ({ heroe }) => {

    const { name, biography: { 'first-appearance': firstAppearance, "full-name": fullName, publisher }, image: { url } } = heroe;

    return (
        <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <div className="row">
                    <div className="col-5">
                        <img 
                            src={url}
                            alt={name}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-7">
                        <div className="card-body p-0">
                            <h5 className="card-title m-0">{name}</h5>
                            <p className="m-0">{fullName}</p>
                            <p className="m-0">{publisher}</p>

                            <hr className="m-0 mb-1" />
                            <p className="card-text">{firstAppearance}</p>
                            <button
                                className="btn btn-primary p-1"
                            >Ver Mas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroeCard
