import profilePic from './assets/ProfileDP.jpg'

function Card(){

    return(
        <div className='card'>
            <img className="card-image" src={profilePic} alt="card image"/>
            <h2 className='card-title'>Srishti Doshi</h2>
            <p className = "card-text">I am a 3rd Year Computer Science Engineering Student and I am learning MERN Stack</p>
        </div>
    );

}

export default Card