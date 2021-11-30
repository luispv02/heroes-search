import { useNavigate } from 'react-router-dom';
import './heroes.css'
import { motion } from "framer-motion"

const HeroeCard = ({ heroe }) => {

    const navigate = useNavigate()

    if(Object.keys(heroe).length === 0){
        return null
    }

    const { id, name, biography: { 'first-appearance': firstAppearance, "full-name": fullName, publisher }, image: { url } } = heroe;

    const heroInfo = (id) => {
        navigate(`/info/${id}`)
    }


    return (
        <motion.div 
            className="col-12 col-md-4 col-lg-3 mb-4 mx-auto"
            initial={{y: -100}}
            animate={{ y: 0 }}
        >
            <div className="card">
                <div className="row">
                    <div className="col-5 col-md-12">
                        {
                            (url === 404) ? null : <img 
                            src={url}
                            alt={name}
                            className="img-fluid img-hero"
                        />
                        }
                    </div>
                    <div className="col-7 col-md-12">
                        <div className="card-body p-md-1 p-0">
                            <h5 className="card-title m-0">{name}</h5>
                            <p className="m-0 fullname">{fullName}</p>
                            <p className="m-0 publisher">{publisher}</p>

                            <hr className="m-0 mb-1" />
                            
                            {
                                firstAppearance === '-' ? null : <p className="card-text appearance m-0">{firstAppearance}</p>
                            }

                            <button
                                className="btn btn-primary p-1 my-1 btn-more"
                                onClick={() => heroInfo(id)}
                            >More</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroeCard
