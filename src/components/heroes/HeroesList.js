import React from 'react'
import HeroeCard from './HeroeCard'

const HeroesList = ({heroes, heroname}) => {
  
    if(heroes === undefined) return null

    return (
        <div className="row">

            {
                heroes.map(heroe => (
                    <HeroeCard 
                        key={heroe.id}
                        heroe={heroe}
                    />
                ))
            }
        </div>
    )
}

export default HeroesList
