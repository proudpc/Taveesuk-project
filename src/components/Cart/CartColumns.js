import React from "react";

export default function CartColumns() {
  return (
    <div className= "container-fluid text-center d-none d-lg-block">
      <div className= "row">

        <div className= "col-10 mx-auto col-lg-1">
          <p className= "text-title-TH">สินค้า</p>
        </div>
        <div className= "col-10 mx-auto col-lg-2">
          <p className= "text-title-TH">ประเภท</p>
        </div>
        <div className= "col-10 mx-auto col-lg-2">
          <p className= "text-title-TH">ราคา</p>
        </div>
        <div className= "col-10 mx-auto col-lg-2">
          <p className= "text-title-TH">จำนวน</p>
        </div>
        <div className= "col-10 mx-auto col-lg-2">
          <p className= "text-title-TH">ลบ</p>
        </div>
        <div className= "col-10 mx-auto col-lg-2">
          <p className= "text-title-TH">รวม</p>
        </div>

      </div>
    </div>
  );
}
