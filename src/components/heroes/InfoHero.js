import { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { fetchId } from '../../fetch/fetchId';
import { motion } from "framer-motion"

const InfoHero = () => {

    const [hero, setHero] = useState({})
    const { heroeId } = useParams();
    const navigate = useNavigate()
    const [showspinner, setShowSpinner] = useState(false)
    
    useMemo(() => fetchId(heroeId, setShowSpinner).then(hero => setHero(hero)), [heroeId]);

    if(Object.keys(hero).length === 0) return null

    const { appearance: { race }, biography: { alignment, "first-appearance": firstAppearance, "full-name": fullname, publisher }, image: { url }, name, work: { occupation }, powerstats:{combat, durability,intelligence, power, speed, strength}} = hero;

    const handleReturn = () => {
        navigate(-1)
    }


    return (
        <div 
            className="container-info mt-5"
 
        >
            <div className="container">
                <h1 className="text-center">{name}</h1>
                <div className="card mb-3">
                    <div className="row g-0">
                        <motion.div 
                            className="col-12"
                            initial={{ x: -100}}
                            animate={{ x: 0 }}
                        >
                            <img 
                                src={url}
                                className="img-fluid rounded-start" 
                                alt={name}
                            />
                        </motion.div>
                        <motion.div 
                            className="col-12"
                            initial={{ x: 100}}
                            animate={{ x: 0 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">{name}</h5>
                                <p className="m-0 fw-bold">Name: <span className="fw-normal"> {fullname}</span></p>
                                {
                                    (race !== 'null') && <p className="m-0 fw-bold">Race: <span className="fw-normal">{race}</span></p> 
                                }
                                {
                                    (publisher !== 'null') && <p className="fw-bold m-0">Publisher: <span className="fw-normal">{publisher}</span></p>
                                }
                                {
                                    (alignment !== 'null') && <p className="fw-bold m-0">Alignment: <span className="fw-normal">{alignment}</span></p>
                                }
                                {
                                    (firstAppearance !== 'null') && <p className="fw-bold m-0">First Appearance: <span className="fw-normal">{firstAppearance}</span></p>
                                }
                                {
                                    (occupation !== 'null') && <p className="fw-bold m-0">Occupation: <span className="fw-normal">{occupation}</span></p>
                                }
                                <hr className="my-2"/>

                                <h5 className="card-title">Powerstats</h5>
                                <p className="fw-bold m-0">Combat: <span className="fw-normal">{combat} pts</span></p>
                                <p className="fw-bold m-0">Durability: <span className="fw-normal">{durability} pts</span></p>
                                <p className="fw-bold m-0">Intelligence: <span className="fw-normal">{intelligence} pts</span></p>
                                <p className="fw-bold m-0">Power: <span className="fw-normal">{power} pts</span></p>
                                <p className="fw-bold m-0">Speed: <span className="fw-normal">{speed} pts</span></p>
                                <p className="fw-bold m-0">Strength: <span className="fw-normal">{strength} pts</span></p>

                                <button
                                    className="btn btn-outline-primary p-1 mt-3"
                                    onClick={handleReturn}
                                >Return</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoHero
