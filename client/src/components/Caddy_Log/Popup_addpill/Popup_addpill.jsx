import React from 'react'
import style from "./popup_addpill.module.css"


function Popup_addpill({setbtn,btn}) {
    return (btn)?(
       <>
     <div className={style.popupbody}>
        
<div className={style.flexwrap}>
    <h5>Name of the pill</h5>
         <button onClick={()=>{
             setbtn(false)
         }}>close</button>

</div>

<input placeholder="Pill Name"></input>

     </div>



       </>
    ):""
}

export default Popup_addpill
