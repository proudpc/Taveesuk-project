import React, { Component } from "react";
import Room from "./Room";
import Title from "./Title";
import {RoomConsumer} from "../Context"

export default class RoomSize extends Component{

  render(){
    return (
      <React.Fragment>
      <div className= "py-5">
        <div className= "container">
        <Title name= "our" title= "Rooms" />
          <div className= "row">
          <RoomConsumer>
            {value => {
              return value.rooms.map( room =>{
                return <Room key={room.id} room ={room}/>;
              })
            }}
          </RoomConsumer>
          </div>
        </div>
      </div>
      </React.Fragment>
      //
    )
  }
}
