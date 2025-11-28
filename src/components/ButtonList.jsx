import React from "react";
import Button from "./Button";

const list= ["All","Gaming","Songs","Live","Cricket","Soccer","Cooking","News","Valentines"];

const ButtonsList = () => {
  return(
   <div className="flex">
    <Button name="All"/>
    <Button name="Gaming"/>
    <Button name="Songs"/>
    <Button name="Live"/>
    <Button name="Cricket"/>
    <Button name="Soccer"/>
    <Button name="Cooking"/>
    <Button name="News"/>
    <Button name="Valentines"/>
    <Button name="Podcast"/>
    <Button name="Mixes"/>   
    <Button name="T-Series"/>
   </div>
  );
};

export default ButtonsList;