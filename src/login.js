import logo from './logo.svg';
import Style from './style.css';


function Login() {
    return (
        <div >
             <header>
            <a href="#" className="logo">COC-STATS</a>
            <ul className="navlist">
                {/* <li><iframe src="home.js"> Home</iframe></li> */}
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/clans">Clans</a></li>
                <li><a href="/troops">Troops</a></li>
                <li><a href="/training_hall">Training hall</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div class="bx bx-menu" id="menu-icon"></div>
            </header>
            <section className="hero">
        <div className="hero-text">
            <h5>#2 Trending</h5>
            <h4>Lead Supercell</h4>
            <h1>GOBLINS</h1>
            {/* <P>Join millions of players worldwide and build your village,raise a clan,and compete in epic Clan Wars!!</P> */}
            <a href="#">Compare</a>
            <a href="#" className="ctaa"><i class="ri-play-fill"></i>Watch Gameplay</a>
        </div>

        <div className="hero-img">
            <img src="hero-img.png"/>
        </div>
      
 </section>
 <div className="icons">
        <a href="#"><i class="ri-instagram-line"></i></a>
        <a href="#"><i class="ri-youtube-line"></i></a>
        <a href="#"><i class="ri-twitter-line"></i></a>
    </div>
    <div className="scroll-down">
        <a href="#"><i class="ri-arrow-down-s-fill"></i></a>
    </div>
 
                
    </div >
   
  );
}

export default Login;
