import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container-home">
            <div className="d-flex flex-column align-items-center text-center px-3 mt-3">
                <h1 className="mt-3">Search your favorite heroes by Name or ID</h1>

                <Link
                    className="btn btn-info mt-5"
                    to='/searchname'
                >Search by Name</Link>

                <Link
                    className="btn btn-info mt-3"
                    to='/searchid'
                >Search by ID</Link>
            </div>
        </div>
    )
}

export default Home
