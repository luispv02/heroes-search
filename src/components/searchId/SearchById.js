/* eslint-disable react-hooks/exhaustive-deps */

import { useMemo, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { fetchId } from '../../fetch/fetchId';
import useForm from '../../hooks/useForm'
import queryString from 'query-string'
import HeroeCard from '../heroes/HeroeCard';
import Spinner from '../spinner/Spinner';

const SearchById = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search)

    const [hero, setHero] = useState({})
    const [error, setError] = useState(false)
    const [showspinner, setShowSpinner] = useState(false)

    const [{heroid}, handleChange] = useForm({
        heroid: q
    });

    useMemo(() => fetchId(q, setShowSpinner).then(hero => setHero(hero)), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(heroid === ''){
            setError(true);
            return;
        }
        setError(false)
        setShowSpinner(true)
        navigate(`?q=${heroid}`)
    }

    useEffect(() => {
        setShowSpinner(!showspinner)
    }, [hero])



    return (
        <div className="container-id-name mt-5">
            <h3 className="text-center">Search By Id</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        {
                            error ? <p className="alert alert-danger p-1 text-center mt-4">Please, Enter a ID</p> : null
                        }

                        <form
                            onSubmit={handleSubmit}
                        >
                            <input 
                                type="number"
                                className="form-control mt-3"
                                placeholder="Hero ID"
                                name='heroid'
                                onChange={handleChange}
                                value={heroid}
                            />
                            
                            

                            <button
                                type="submit"
                                className="btn btn-primary mt-4 btn-search"
                            >Search</button>
                        </form>

                        <i>You don't know the id? <a
                            href="https://superheroapi.com/ids.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >See Id</a></i>
                        
                    </div>

                    <div className="col-12 col-md-8 mt-5">
                        <div className="container-heroes">

                            {
                                showspinner 
                                ?( <Spinner />)
                                : q === ''
                                ? (<p className="alert alert-info p-1 text-center ">Enter a ID to search</p> )
                                : hero.response === 'error'
                                    ?( <p className="alert alert-danger p-1 text-center">No results found</p>)
                                    : (<HeroeCard 
                                        heroe={hero}
                                    />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchById
