import "./intro.css";

const Intro = () => { 
    return(
        <div className="i">
           <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className="i-intro">Hello, my name is</h2>
                  <h1 className="i-name">Samuel Lutz</h1>
                  <div className="i-title">
                      <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">Fullstack</div>
                          <div className="i-title-item">React</div>
                      </div>
                  </div>
                  <div className="i-desc">
                      I am a full stack web developer Specilizing in React,
                       javascript, API, and other services. 
                  </div>
              </div>
           </div>
           <div className="i-right">
             <img src="" alt="" className="i-img" />
           </div>
        </div>
    )}

export default Intro