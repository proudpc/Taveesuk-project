import React, { Component } from "react";
import { RoomConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component{
  render(){
    return (
      <RoomConsumer>
        {(value)=> {
          const {id, img, type, info, price, title, note, inCart} =
          value.detailRoom;
          return (
            <div className= "container">
            {/*title*/}
              <div className= "row">
                <div className= "col-10 mx-auto text-center text-title-TH text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title*/}
              {/*Room info*/}
              <div className= "row">
                <div className= "col-10 mx-auto col-md-6 my-3">
                  <img src={img} className= "img-fluid" alt= "Room" />
                </div>
                {/*Room text*/}
                <div className= "col-10 mx-auto col-md-6 my-3 text-thai">
                  <h2>ขนาด : {type}</h2>
                  <h4 className= "text-blue text-thai">
                    <strong>
                      ราคา : <span>฿</span>
                      {price}
                    </strong>
                  </h4>
                  <p className= "text-thai font-weight-bold mt-3 mb-0">
                    ภายในห้องประกอบด้วย:
                  </p>
                  <p className= "text-muted text-thai">{info}</p>{/*ถ้าอยากให้ตัวใหญ่ขึ้นให้ใส่ lead*/}
                  <p className= "text-thai font-weight-bold mt-3 mb-0">
                    หมายเหตุ:
                  </p>
                  <p className= "text-muted text-thai">{note}</p>
                  {/*buuton*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>หน้าหลัก</ButtonContainer>
                    </Link>
                    {/*<ButtonContainer cart
                      disabled={inCart? true:false}
                      onClick={() =>{
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart? "ซื้อแล้ว" : "เพิ่ม"}
                    </ButtonContainer>*/}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </RoomConsumer>
    );
  }
}
