import React from 'react'
import HeroeCard from './HeroeCard'
import { motion } from "framer-motion"

const HeroesList = ({heroes}) => {
  
    if(heroes === undefined) return null

    return (
        <motion.div 
            className="row"
            initial={{y: -100}}
            animate={{ y: 0 }}
        >

            {
                heroes.map(heroe => (
                    <HeroeCard 
                        key={heroe.id}
                        heroe={heroe}
                    />
                ))
            }
        </motion.div>
    )
}

export default HeroesList
