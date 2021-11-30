/* eslint-disable react-hooks/exhaustive-deps */

import useForm from '../../hooks/useForm'
import {fetchNames} from '../../fetch/fetchNames'
import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import HeroesList from '../heroes/HeroesList';
import Spinner from '../spinner/Spinner';
import './searchByName.css'

const SearchByName = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const {q = ''} = queryString.parse(location.search);

    const [heroes, setHeroes] = useState([])
    const [error, setError] = useState(false)
    const [showspinner, setShowSpinner] = useState(false)

    const [ {heroname}, handleChange ] = useForm({
        heroname: q,
    });
    
    useMemo(() => fetchNames(q).then(heroes => setHeroes(heroes)), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(heroname.trim() === ''){
            setError(true);
            return;
        }
        setError(false)
        setShowSpinner(true)
        navigate(`?q=${heroname}`);
    }

    useEffect(() => {
        setShowSpinner(!showspinner)
    }, [heroes])
  

    return (
        <div className="container-search-name mt-5">
            <h3 className="text-center">Search by Name</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 container-form">
                        {
                            error ? <p className="alert alert-danger p-1 text-center mt-4">Please, Enter a name</p> : null
                        }

                        <form
                            onSubmit={handleSubmit}
                        >
                            <input 
                                type="input"
                                className="form-control mt-3"
                                placeholder="Hero name"
                                name='heroname'
                                onChange={handleChange}
                                value={heroname}
                            />

                            <button
                                type="submit"
                                className="btn btn-primary mt-4 btn-search"
                            >Search</button>
                        </form>
                    </div>

                    <div className="col-12 mt-5 container-images">
                        <div className="container-heroes">
                            {
                                showspinner
                                ? (<Spinner />)
                                : q === ''
                                ? (<p className="alert alert-info p-1 text-center search-text">Enter a name to search</p>) 
                                : heroes === undefined 
                                    ? ( <p className="alert alert-danger p-1 text-center search-text">No results found: <span className="fw-bold">{q}</span></p>)
                                    : (<HeroesList 
                                        heroes={heroes}
                                        heroname={heroname}
                                    />)
                            }

                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SearchByName
