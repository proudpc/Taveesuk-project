import React, { Component } from "react";
import { storeRooms, detailRoom } from "./data";

const RoomContext= React.createContext();


class RoomProvider extends Component{
  state= {
    rooms:[],
    detailRoom: detailRoom,
    cart: [],
    modalOpen: false,
    modalRoom: detailRoom,
    cartSubTotal: 0,
    cartDeposit: 0,
    cartTotal: 0
  }
  componentDidMount(){
    this.setRooms();
  }
  setRooms= () =>{
    let tempRooms= [];
    storeRooms.forEach(item =>{
      const singleItem = {...item};
      tempRooms=[...tempRooms, singleItem];
    });
    this.setState(()=> {
      return {rooms: tempRooms};
    });
  };

  getItem = id =>{
    const room =this.state.rooms.find(item => item.id===id);
    return room;
  }

  handleDetail = (id) =>{
    const room = this.getItem(id);
    this.setState(()=> {
  return{detailRoom:room};
  });
  };

  addToCart = id => {
    let tempRooms = [...this.state.rooms];
    const index = tempRooms.indexOf(this.getItem(id));
    const room = tempRooms[index];
    room.inCart = true;
    room.count = 1;
    const price = room.price;
    room.total = price;
    this.setState(() => {
      return { rooms: tempRooms, cart:[...this.state.cart, room] };
      },
      ()=>{
        this.addTotals();
      }
    );
  };

  openModal = id =>{
    const room = this.getItem(id);
    this.setState(() => {
      return { modalRoom:room, modalOpen: true }
    })
  }
  closeModal = () =>{
    this.setState(() => {
      return { modalOpen: false }
    })
  }
  increment = (id) =>{
    let tempCart = [...this.state.cart];
    const selectedRoom = tempCart.find(item=>item.id ===id )

    const index = tempCart.indexOf(selectedRoom);
    const room = tempCart[index];

    room.count = room.count + 1;
    room.total = room.count * room.price;

    this.setState(
      () => {
        return { cart:[...tempCart] }
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) =>{
    let tempCart = [...this.state.cart];
    const selectedRoom = tempCart.find(item=>item.id ===id )

    const index = tempCart.indexOf(selectedRoom);
    const room = tempCart[index];
    room.count = room.count-1;

    if(room.count === 0){
      this.removeItem(id)
    }else{
      room.total = room.count*room.price;
      this.setState(
        () => {
          return { cart:[...tempCart] }
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) =>{
    let tempRooms = [...this.state.rooms];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempRooms.indexOf(this.getItem(id));
    let removedRoom = tempRooms[index];
    removedRoom.inCart = false;
    removedRoom.count = 0;
    removedRoom.total = 0;

    this.setState(()=>{
      return{
        cart: [...tempCart],
        rooms: [...tempRooms]
      }
    },()=>{
      this.addTotals();
    })
  };
  clearCart = () =>{
    this.setState(()=>{
      return { cart: [] };
    },()=>{
      this.setRooms();
      this.addTotals();
    });
  };
  addTotals = () =>{
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempDeposit = subTotal*0.5;
    const deposit = parseFloat(tempDeposit.toFixed(2));
    const total = subTotal - deposit;
    this.setState(()=>{
      return{
        cartSubTotal:subTotal,
        cartDeposit:deposit,
        cartTotal:total
      }
    })
  }
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer= RoomContext.Consumer;

export {RoomProvider, RoomConsumer};
