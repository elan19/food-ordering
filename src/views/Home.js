import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './style.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Welcome to our Food Ordering Website</h1>
            <p>Order your favorite food online and have it delivered to your doorstep!</p>
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
        </div>
    );
}

export default Home;
