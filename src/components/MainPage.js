import { NavLink } from "react-router-dom";

const MainPage = (handleOne) => {
    return (<div className="mainPage">
        <div className="head"> 
        <h1 className="header"> Leave your notes</h1>
       <h1 className="header">all over the world ! </h1>
        </div>
    
        <img src="new.gif" alt="gif of world" />
        <div className="wrapper">
       <NavLink to="map" className="button">Let's begin!</NavLink>
        </div>
          
    
    </div>)
}

export default MainPage;