import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({value}){
    const{cartSubTotal, clearCart} = value;
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className= "col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-title-TH mb-3 px5" 
                                type="button"
                                onClick ={()=> clearCart()} 
                            >
                                ลบทั้งหมด
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title-TH">
                            ยอดรวม :</span>
                            <strong>฿ {cartSubTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}