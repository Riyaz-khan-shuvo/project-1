import React from 'react';
import presidentImg from '../../../images/president.jpg'
import './President.css'


const President = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3">
                    <div className="president-img">
                       <img src={presidentImg} className="img-fluid" alt=""/> 
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="text-justify know-president">
                        <h3 className="text-center my-5">About President</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi possimus molestiae inventore ullam dolorum perferendis tempora dolore recusandae consequuntur cum quam mollitia voluptatem, maxime quisquam eum nesciunt! Cupiditate dolore et consequuntur nihil deleniti iusto porro facere ipsam similique recusandae. Sapiente ut magni at praesentium blanditiis dolorum culpa temporibus ex sunt distinctio vel dicta commodi veritatis nemo, repellendus asperiores sequi nobis ullam dolore non ipsum libero! Sequi, in, voluptatum perspiciatis exercitationem ipsa neque praesentium alias, optio laborum iste quidem voluptatibus aliquid asperiores distinctio nemo! Commodi alias saepe quas ex nisi eos aliquam doloribus placeat distinctio. Sed ipsam suscipit consectetur soluta quisquam sapiente nemo ratione tempore dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default President;