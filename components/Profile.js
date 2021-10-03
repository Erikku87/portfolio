import stylesProfile from "../styles/Profile.module.css";
import React, { useState } from "react";
import Image from "next/dist/client/image";

const Profile = () => {
  const navs = ["Identity", "Who am I?", "Projects", "Contact"];
  const [navSelected, setNavSelected] = useState("");

  return (
    <div className={stylesProfile.profileframe}>
      <div id="profile" className={stylesProfile.profile}>
        <div id="profilepicture" className={stylesProfile.profilepic}></div>
        <div id="profilebuttons" className={stylesProfile.profilebuttons}>
          <ul>
            <li>
              <Image
                src="/images/ed_logo.png"
                width="40px"
                height="40px"
                alt="404"
              />
            </li>

            {navs.map((nav) => (
              <button
                type="button"
                className={stylesProfile.profilebutton}
                key={nav}
                onClick={() => setNavSelected(nav)}
              >
                <li className={stylesProfile.label}> {nav}</li>
              </button>
            ))}
          </ul>
        </div>
        <div id="profileinfo" className={stylesProfile.profileinfo}>
          {navSelected}
          {currentNav}
        </div>
      </div>
    </div>
  );
};

if (typeof window === "object") {
  window.addEventListener("load", function () {
    //alert('Finished loading')
    document.getElementById("profilepicture").style.width = "21%";
    document.getElementById("profileinfo").style.width = "70%";
    document.getElementById("profilebuttons").style.width = "9%";
    document.getElementById("profile").style.opacity = "1";
  });
}

const currentNav = () => {
  return (
    <>
      <div>
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
    </>
  );
};

export default Profile;
