import { Link } from 'react-router-dom';
import React from 'react';
import presidentImage from '../../../images/president.jpg'
import './President.css'

const President = () => {
    return (
        <div className="col-md-3 col-sm-6 col-12 text-dark">
            <div className="president-area">
                <div className="container">
                    <h5 className="mt-sm-3">President's</h5>
                    <div className="president-image">
                        <img src={presidentImage} alt="" className="img-fluid" />
                    </div>
                    <div>
                        <h3>Md. Israfil </h3>
                        <Link to="/about/president">
                            <button className="btn btn-primary">Know More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default President;