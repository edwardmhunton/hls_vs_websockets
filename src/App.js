import React from 'react';


class App extends React.Component {

  constructor() {
        super()
    }

render () {

  return (

        <div className="container-fluid">

<div className="player_holder">
          <p> 2 Streams </p>

          <div id="hls" className="stream_box">
            <h2>HLS Stream</h2>

                <div className="player" >
                  <video id='example-hls' width='320' height='240' className="video-js vjs-default-skin">
                    <source src='./hls_content/webcam.m3u8' type='application/x-mpegURL' />
                  </video>
                </div>

                

          </div>
          <div id="websockets" className="stream_box">  
            <h2>Dash Stream</h2>

              <div className="player" >
                <video data-dashjs-player id='videoPlayer' width='320' height='240' className="vjs-default-skin">
                  <source src='./dash_content/webcam.mpd' type='application/x-mpegURL' />
                </video>
              </div>



            

          </div><div id="websockets" className="stream_box">
            <h2>Web Socket Stream</h2>

              <canvas id="video-canvas" width="320" height="240"></canvas>



            

          </div>
        </div>

          </div>


  )
}

}

/*App.propTypes = {
  children: PropTypes.object.isRequired
};*/

export default App;
