import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className="container-home">
            <div className="d-flex flex-column align-items-center text-center px-3 pt-3">
                <h1 className="mt-3 mt-md-5 title">Search your favorite heroes by Name or ID</h1>

                <Link
                    className="btn mt-5"
                    to='/searchname'
                >Search by Name</Link>

                <Link
                    className="btn mt-3"
                    to='/searchid'
                >Search by ID</Link>
            </div>
        </div>
    )
}

export default Home
