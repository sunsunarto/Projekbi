import {useState} from "react";
import './styleHeader.css'

function Header(){
  const [toggle, setToggle] =useState(false)
  const view = ()=> {
    setToggle(!toggle)
  }
    return(
        <header>
            <div className="title">
              <h6>Cerita <span>Anekdot</span></h6>
            </div>
            <div className={`navigation ${toggle?'active':''}`}>
              <div className="about">
                <a href="https://www.google.com/">Tentang website</a>
              </div>
              <div className="contect">
                <a href="">Contect</a>
              </div>
              <div className="cerita">
                <a href="">Cerita</a>
              </div>
              <div className="menuBox" onClick={view}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </header>
    );
};
export default Header