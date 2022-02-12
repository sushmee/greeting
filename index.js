import React from "react";
import ReactDOM from "react-dom";
 import './index.css';
let curDate=new Date();
curDate=curDate.getHours();
let greeting=" ";
const cssStyle={};

if (curDate>=1 && curDate<12)
{
    greeting="GoodMorning";
    cssStyle.color="green";
}
else if (curDate>=12 && curDate <19)
{
    greeting="Good Afternoon";
    cssStyle.color="Yellow";
}
else{
    greeting="Good Night";
    cssStyle.color="Maroon";
}

ReactDOM.render(
    <>
    <div>
<h1> Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
</div>
</>,
document.getElementById("root")
);
