import React from "react";
import "../styles/style.css";
import { TypeAnimation } from 'react-type-animation';
export default function LandingPage() {
  return (
    <div className=" landing-container">
      <div className="container">
        <div className="row">
          <div className="col-15 col-md-8">  
            <h1 id="main">Hire Top Talents</h1>
            <h1 id="anime"><TypeAnimation
  sequence={[
   
    'For SysOps|',
    1000,
    'For DevOps|',
    1000,
    'For CloudOps|',
    1000,
    'For Devops|',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/></h1>
<p>We help clients by providing Dedicated DevOps,cloudOps and
                             <br /> SysOps Engineers to work on their project immediatly.</p>
                             <div className="buttons">
                        <button id='one'>Hire Now→</button>
                        <button id='second'>Register a talent→</button>
                        
                   </div>

            </div>
          <div className="col-12 col-md-4">
            <img
              className="w-100 m-4"
              src="https://hazercloud.com/assets/images/bg/hazercloud.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
