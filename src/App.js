import React from 'react';
//import ReactDom from 'react-dom';


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

                <div className="player" />

                  <button type="button" className="btn">Start Stream</button>

          </div>
          <div id="websockets" className="stream_box">
            <h2>Web Socket Stream</h2>

              <div className="player" />

              <button type="button" className="btn">Start Stream</button>

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
