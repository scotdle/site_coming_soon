import React from "react"


 const headerText = (props) =>

<header>
   <h1 className="nameHeader">{props.textInHeader}</h1>
   <p className="descriptionHeader"> {props.comingSoon} </p>
</header>





export default headerText;
