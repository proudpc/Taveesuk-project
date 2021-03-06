import React, { Component } from "react";
import styled from "styled-components";
import { RoomConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component{
  render() {
    return (
      <RoomConsumer>
        {(value) => {
          const { modalOpen,closeModal } = value;
          const { img, type, price, title } = value.modalRoom;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className= "container">
                  <div className= "row">
                    <div
                      id="modal"
                      className= "col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5> item added to the cart </h5>
                      <img src={img} className= "img-fluid" alt="room" />
                      <h4 className = "text-thai">{title} {type}</h4>

                      <h5 className= "text-muted text-thai">ราคา : ฿ {price}</h5>
                      <Link to = "/">
                        <ButtonContainer onClick={()=> closeModal()}>กลับหน้าหลัก</ButtonContainer>
                      </Link>
                      <Link to = "/cart">
                        <ButtonContainer cart onClick={()=> closeModal()}>ยืนยัน</ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </RoomConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
