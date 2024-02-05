import TermsComponent from '@/components/Home_Page/Home_Componrnts/terms/TermsComponent'
import Moving_Submenu from '@/components/Moving_Submenu'
import Search from '@/components/serach-bar/Search'
import Header_Left from '@/components/Header/Header_Left'
import Header_Right from '@/components/Header/Header_Right'
import Left_Panel from '@/components/left-panel/Left_Panel'
import Footer from '@/components/footer/Footer'
import React from 'react'

export default function page() {
  return (
    <>
    
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
        <TermsComponent/>
        </div>
        {/* !PAGE (all pages go inside this div) */}
        {/* FOOTER (inside the content) */}
        <Footer/>
        {/* !FOOTER (inside the content) */}
      </div>
      {/* !CONTENT */}
    </div>
  </div>
</>
  )
}
