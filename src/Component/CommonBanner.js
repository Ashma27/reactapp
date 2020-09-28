import React from 'react';

function CommonBanner(props) {
    return (
        <main className="main">
        <div class="jumbotron" style={{borderRadius:'0'}}>
            <div className="row d-flex align-items-center">
                <div className="col-sm-7 paddingRight">
                <h1>{props.heading}</h1>
          <p className="lead">{props.content}</p>
          <a className="btn btn-lg btn-primary" href={props.linkBtn} role="button">
              {props.buttonName}</a>
                </div>
                <div className="col-sm-5">
                    <img src={props.image} alt={props.heading} className="img-fluid" />
                    </div>
            </div>
       </div>
      </main>
    );
  }
  
  export default CommonBanner;