import React from 'react';
import './AboutUs.css'
import secretary from '../../../images/secretary-image.png'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="about-us-area">
            <div className="py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-9 col-sm-12 col-12">
                        <marquee> <h3> Hello </h3> </marquee>
                        <div className="container">
                            <div className="about-us">
                                <h3 className="text-center">About Us</h3>
                                <p className="text-justify" id="about-us">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est possimus temporibus, assumenda vitae dolorum officiis quod necessitatibus rerum tempore quia tenetur dicta nulla nemo ab unde ex! Eos, culpa nam ad veritatis cum maiores debitis! Voluptatem harum quasi cupiditate debitis ratione, maiores porro inventore deleniti, natus animi dolores dolor nostrum. Laudantium quaerat vero dolor aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, totam iure vitae quaerat eum quas aut tenetur perspiciatis. Minus ut odit illum saepe nemo voluptatibus, cupiditate fuga quos cum dignissimos dolore nesciunt hic deserunt enim magnam reiciendis sit tenetur commodi ex. Est reiciendis a magni officia harum! Quo iure quidem placeat incidunt, architecto quis accusamus.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat illo maiores autem cum aperiam, necessitatibus totam, maxime eveniet distinctio beatae consequuntur sed neque cumque perspiciatis ullam perferendis itaque modi unde excepturi blanditiis mollitia! Amet, ipsa debitis quas laborum, veniam maxime ad unde inventore expedita nihil, non facilis excepturi aperiam repellendus ipsam totam provident blanditiis?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae minima dicta nemo voluptatem quibusdam sequi sapiente totam. Tenetur molestiae aut eveniet! Nulla, non. Aut tempora maxime ipsum. Non obcaecati doloribus dolorum eaque perferendis iusto earum sit nulla quaerat! Fugit, minus rerum in asperiores harum unde id fugiat possimus ea sunt et, molestias odio beatae tempora. Amet exercitationem, officiis eveniet iste impedit necessitatibus magni officia et ullam sed obcaecati dolorem dicta explicabo excepturi doloribus dignissimos cumque! Ratione culpa harum nostrum, dolor minus quasi maiores quos illum eveniet in voluptatibus sed adipisci exercitationem fugiat deleniti quo possimus dicta recusandae rerum blanditiis asperiores ut? Aut facere corrupti ea error mollitia, voluptas repudiandae.
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="secretry-area">
                            <div className="container">
                                <h5 className="mt-sm-3">General Secretary</h5>
                                <div className="secretry-image">
                                    <img src={secretary} alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <h3>Md. Israfil </h3>
                                    <Link to="/about/secretary">
                                        <button className="btn btn-primary">Know More</button>
                                    </Link>
                                </div>
                                <div className="button-area">
                                    <Link to="/login"> <button className="btn btn-secondary">Registration</button> </Link>
                                    <br />
                                    <Link to="/how-to-registration">
                                        <button className="btn btn-success">How To Registration</button></Link>
                                    <br />
                                    <Link>
                                        <button className="btn btn-info">All Members</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;