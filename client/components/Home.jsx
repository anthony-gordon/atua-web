import React from "react";
import { connect } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";

import Nav from "./Nav";
import WindInfo from "./WindInfo";
import Atua from "./Atua";
import Text from "./Text";
import { openNav, closeNav } from "../actions/nav";

const Home = props => {
  function findBackgroundImg() {
    if (props.weather) {
      var hour = new Date(
        Date.parse(props.weather.local_time_rfc822)
      ).getHours();
      console.log(hour);
      if (hour < 6) {
        return "/assets/images/night.svg";
      } else if (hour == 6) {
        return "/assets/images/sunset.svg";
      } else if (hour >= 7 && hour <= 16) {
        return "/assets/images/daytime.svg";
      } else if (hour == 17) {
        return "/assets/images/sunset.svg";
      } else if (hour >= 18) {
        console.log(props.weather);
        return "/assets/images/night.svg";
      }
    }
  }

  var divStyle = {
    backgroundImage: "url(" + findBackgroundImg() + ")"
  };

  return (
    <div style={divStyle} className="home">
      {/* container has to be at the top, else you can't hover over anything else.
     not sure why, it's a good bug to fix later. */}
      <div className="container">{!props.current_text.name && <Atua />}</div>
      <div className="head-banner fade-in">
        <CSSTransitionGroup
          transitionName="nav"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {!props.current_text.name && <WindInfo />}
        </CSSTransitionGroup>
      </div>
      <CSSTransitionGroup
        transitionName="nav"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={300}
      >
        {props.current_text.name && (
          <Text
            text={props.current_text}
            index={props.current_index}
            dispatch={props.dispatch}
          />
        )}
      </CSSTransitionGroup>
      <div className="open fade-in" onClick={() => props.dispatch(openNav())}>
        ﹖
      </div>
      <CSSTransitionGroup
        transitionName="nav"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {props.menuVisible && (
          <div className="navbar" id="myNavbar">
            <Nav closeNav={() => props.dispatch(closeNav())} />
          </div>
        )}
      </CSSTransitionGroup>
    </div>
  );
};

var mapStateToProps = state => {
  return {
    navVisible: state.navVisible,
    menuVisible: state.menuVisible,
    current_text: state.current_text,
    current_index: state.current_index,
    weather: state.weather
  };
};

export default connect(mapStateToProps)(Home);
