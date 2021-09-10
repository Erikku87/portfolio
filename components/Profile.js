import stylesProfile from '../styles/Profile.module.css'
import React, {useEffect} from "react";


const Profile = () => {
    return (
        <div className={stylesProfile.profileframe}>
        <div id="profile" className={stylesProfile.profile}>
            <div id="profilepicture" className={stylesProfile.profilepic}>
            </div>
            <div id="profileinfo" className={stylesProfile.profileinfo}>
            <ul>
                <li className={stylesProfile.label}>Naam:</li>
                <li>Eric Tjhie</li>
                <li className={stylesProfile.label}>Geboren op:</li>
                <li>13 - 10 - 1987</li>
                <li className={stylesProfile.label}>Telefoon:</li>
                <li>0619049059</li>
                <li className={stylesProfile.label}>E-mail:</li>
                <li>Erikkudesign@gmail.com</li>

            </ul>
            </div>
            {/* <div id="tools" className={stylesProfile.tools}>
            <ul>
                <li></li>
                <li></li>
                <li></li>


            </ul>
            </div> */}
        </div>
        </div>
    )
}

if (typeof window === 'object') {
 
    window.addEventListener("load", function(){
           //alert('Finished loading')
           document.getElementById("profilepicture").style.width = "35%";
           document.getElementById("profileinfo").style.width = "65%";
           document.getElementById("profile").style.opacity = "1";

           
           
         });
      }

export default Profile