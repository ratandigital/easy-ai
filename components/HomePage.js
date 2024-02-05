'use client'

import React, { useState } from 'react'
import Moving_Submenu from './Moving_Submenu'
import Preloader from './Preloader'
import Search from './serach-bar/Search'
import Header_Left from './Header/Header_Left'
import Header_Right from './Header/Header_Right'
import Left_Panel from './left-panel/Left_Panel'
import Home_page from './Home_Page/Home_page'
import CommunityFeedComponent from './Home_Page/Community_Feed/CommunityFeedComponent'
import ReportComponent from './ReportComponent'
import ImageLightBox from './Others/ImageLightBox'
import Footer from './footer/Footer'
import Personal_Feed from './Home_Page/Personal_Feed/Personal_Feed'
import FinetunedComponent from './Home_Page/Home_Componrnts/finetuned_component/FinetunedComponent'
import Image_Generation from './Home_Page/Home_Componrnts/image_generation/Image_Generation'
import ChatboatComponent from './Home_Page/Home_Componrnts/chatboat-component/ChatboatComponent'
import PricingComponent from './Home_Page/Home_Componrnts/Pricing/PricingComponent'
import DocumentationComponent from './Home_Page/Home_Componrnts/documentation/DocumentationComponent'
import Faq from './Home_Page/Home_Componrnts/faq/Faq'
import ChangelogComponent from './Home_Page/Home_Componrnts/changeLog/ChangelogComponent'
import ContactComponent from './Home_Page/Home_Componrnts/contact/ContactComponent'
import UserSettingComponent from './Home_Page/Home_Componrnts/userSettings/UserSettingComponent'
import User_profileComponent from './Home_Page/Home_Componrnts/user_profile/User_profileComponent'
import User_billingComponent from './Home_Page/Home_Componrnts/User_Billing/User_billingComponent'
import TermsComponent from './Home_Page/Home_Componrnts/terms/TermsComponent'
import Notification_Signal from './Home_Page/notification/Notification_Signal'
import Notification from './Home_Page/notification/Notification'
import { clickHandelarContact } from '@/units/ClickHandelar'
import { allFunction } from '@/units/FunctionContext'


export default function HomePage() {
  const [home, setHome] = useState(true);
  const [community, setCommunuty] = useState(false);
  const [personal, setPersonal] = useState(false);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(false);
  const [chat, setChat] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [documaentation, setDocumaentation] = useState(false);
  const [faq, setFaq] = useState(false);
  const [changelog, setChangelog] = useState(false);
  const [contact, setContact] = useState(false);
  const [logout, setLogout] = useState(false);

 function clickHandelarHome (){
  setHome(true)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)
}
function clickHandelarHome(){
 
  setHome(true)
  setCommunuty(false)
  setPersonal(false)
  setModal(false)
  setImage(false)
  setChat(false)
  setPricing(false)
  setDocumaentation(false)
  setFaq(false)
  setChangelog(false)
  setContact(false)
  setLogout(false)

}
function clickHandelarHCommunity (){
  setHome(false)
setCommunuty(true)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarPersonal (){
  setHome(false)
setCommunuty(false)
setPersonal(true)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarModal (){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(true)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarImage (){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(true)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarChat (){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(true)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarPricing (){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(true)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarDocumaentation (){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(true)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarFaq (){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(true)
setChangelog(false)
setContact(false)
setLogout(false)

}
function clickHandelarChangelog(){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(true)
setContact(false)
setLogout(false)

}
function clickHandelarContact(){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(true)
setLogout(false)

}
function clickHandelarLogout(){
  setHome(false)
setCommunuty(false)
setPersonal(false)
setModal(false)
setImage(false)
setChat(false)
setPricing(false)
setDocumaentation(false)
setFaq(false)
setChangelog(false)
setContact(false)
setLogout(true)

}
  const componentLogic = ()=>{
    if(home){
return <Home_page home={clickHandelarHome}/>
  }else if(community){
    return <CommunityFeedComponent community={clickHandelarHCommunity}/>
  }else if(personal){
    return <Personal_Feed/>
  }else if(modal){
    return <FinetunedComponent/>
  }else if(image){
    return <Image_Generation/>
  }else if(chat){
    return <ChatboatComponent/>
  }else if(pricing){
    return <PricingComponent/>
  }else if(documaentation){
    return <DocumentationComponent/>
  }else if(faq){
    return <Faq/>
  }else if(changelog){
    return <ChangelogComponent/>
  }else if(contact){
    return <ContactComponent/>
  }
  else{
    return <logout/>
  }
}




  return (

  
<>
<allFunction.Provider value={{community:clickHandelarHCommunity, home:clickHandelarHome, clickHandelarPersonal: clickHandelarPersonal,
clickHandelarModal, clickHandelarImage, clickHandelarChat, clickHandelarPricing, clickHandelarDocumaentation, clickHandelarFaq,
clickHandelarChangelog, clickHandelarLogout, clickHandelarContact
}}>
<Moving_Submenu/>
  {/* Preloader */}
  <Preloader/>
  {/* !Preloader */}
  <ReportComponent/>
  <ImageLightBox/>
  {/* MAIN WRAPPER */}
  <div className="techwave_fn_wrapper">
    <div className="techwave_fn_wrap">
      {/* Searchbar */}
     <Search/>
      {/* !Searchbar */}
      {/* HEADER */}
      <header className="techwave_fn_header">
        {/* Header left: token information */}
       <Header_Left/>
        {/* /Header left: token information */}
        {/* Header right: navigation bar */}
      <Header_Right/>
        {/* !Header right: navigation bar */}
      </header>
      {/* !HEADER */}
      {/* LEFT PANEL */}
      <Left_Panel/>
      {/* !LEFT PANEL */}
      {/* CONTENT */}
      <div className="techwave_fn_content">
        {/* PAGE (all pages go inside this div) */}
        <div className="techwave_fn_page">
          
          {/* Home Page */}
         {/* <Home_page /> */}
          {/* !Home Page */}
          {/* <CommunityFeedComponent/> */}
          {/* <Personal_Feed/> */}
          {/* <FinetunedComponent/> */}
          {/* <Image_Generation/> */}
          {/* <ChatboatComponent/> */}
          {/* <PricingComponent/> */}
          {/* <DocumentationComponent/> */}
          {/* <Faq/> */}
          {/* <ChangelogComponent/> */}
          {/* <ContactComponent/> */}
          {/* <UserSettingComponent/> */}
          {/* <User_profileComponent/> */}
          {/* <User_billingComponent/> */}
          {/* <TermsComponent/> */}
          {/* <Notification_Signal/> */}
        {componentLogic()}
        </div>
        {/* !PAGE (all pages go inside this div) */}
        {/* FOOTER (inside the content) */}
        <Footer/>
        {/* !FOOTER (inside the content) */}
      </div>
      {/* !CONTENT */}
    </div>
  </div>
  {/* !MAIN WRAPPER */}
  </allFunction.Provider>
</>
  )
}
