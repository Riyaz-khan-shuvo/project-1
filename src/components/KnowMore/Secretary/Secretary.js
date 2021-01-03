import React from 'react';
import secretaryImg from '../../../images/secretary-image.png'
import './Secretary.css'


const Secretary = () => {
    return (
        <div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="secretary-img">
                        <img src={secretaryImg} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-9 col-sm-6 col-12">
                    <div className="text-justify">
                        <div className="secretary-area">
                            <h3 className="text-center my-3">About Secretary</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur obcaecati, ut eveniet adipisci hic ab inventore eius! Deserunt laudantium laboriosam nisi, voluptatem numquam quae sunt magnam esse consequuntur eveniet quis corrupti, autem fugiat nostrum, consectetur ipsum sint fugit libero praesentium eaque repudiandae quos beatae ratione. Voluptate recusandae nulla eveniet. Sequi pariatur optio inventore eligendi officiis odio eaque quaerat architecto neque blanditiis incidunt sunt, voluptatum excepturi, tempore dolores distinctio rem veniam amet laborum odit placeat impedit ad! Quos repellendus sunt rerum voluptas dolores accusantium quae quisquam, expedita vero officiis ratione impedit quidem! Aliquid repudiandae amet modi, expedita blanditiis aperiam laudantium tempora ut velit, in ullam consequatur?
                        </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secretary;