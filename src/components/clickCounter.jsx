import React, { useState } from "react";
import User from "./user";

function ClickCounter() {

  return (
    <div> 
      <User render={(isLoggedin) => (isLoggedin ? "Nishanthan" : "Guest")} />
    </div>
  );
}

export default ClickCounter;
