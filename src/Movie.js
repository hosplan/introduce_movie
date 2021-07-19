import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { BsCalendar, BsFillAlarmFill, BsHeart, BsHeartFill, BsSkipStart, BsStar, BsStarFill } from "react-icons/bs";

function Test(id){
    console.log(id);
}
function Movie({id, year, title, summary, poster, genres}){
    const [count, setCount] = useState(0);
    const [cardBackground, setBg] = useState("card-body bg-white");

    return(
        <div className="col-sm-4 mt-3 mb-3">
            <div className="card shadow">
                <img src={poster} className="card-img top" alt={title} title={title} style={{ height:'60vh'}}  />
                <div className={cardBackground} id={id}>
                    {genres.map((genre, index) => 
                        <span key={index} className="badge bg-info  p-2" style={{ marginRight:'0.1rem'}}>{genre}</span>
                    )}
                    <div style={{ minHeight:'5vh', maxHeight:'5vh'}}>
                        <h5 className="card-title mt-2">
                            {title}               
                        </h5>
                    </div>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-link" onClick={() => setBg(cardBackground === 'card-body bg-light'?'card-body bg-white':'card-body bg-light')}>
                                        <BsStarFill />
                                    </button>                                                                  
                                </div>
                                <div className="col text-center">
                                    <button className="btn btn-link" onClick={() => setCount(count+1)}>
                                        <BsHeartFill className="text-success"/>
                                    </button>                                       
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <BsHeartFill className='text-success' style={{marginRight:'0.2rem'}}/>
                            Like : <span className="badge bg-success rounded-pill">{count}</span>
                        </li>                        
                        <li className="list-group-item">
                            <BsCalendar className='text-primary' style={{marginRight:'0.2rem'}} />
                            년도 : {year}
                        </li>
                        <li className="list-group-item">
                            <div style={{ minHeight:'9vh', maxHeight:'9vh', overflowY:'auto'}}>                               
                                <p className="card-text">
                                    {summary.slice(0,100)}...
                                    {/* <button type="button" className="btn btn-link btn-sm">펼처보기</button> */}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>              
            </div>
        </div> 
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;