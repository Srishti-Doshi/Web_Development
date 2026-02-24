import imageUrl from './assets/image.png';

// function ProfilePicture(){

//     // const imageUrl = './assets/image.png';

//     const handleClick = () => console.log("YUP!");

//     return(
//         <img onClick = {handleClick} src={imageUrl}/>
//     );
// }

function ProfilePicture(){

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick = {(e) => handleClick(e)} src={imageUrl}/>
    );
}

export default ProfilePicture;