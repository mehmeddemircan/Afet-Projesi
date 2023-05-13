import React ,  { Fragment ,useState } from 'react'
import {useSelector} from 'react-redux'
import LoggedInSegment from './LoggedInSegment';
import NotLoggedInSegment from './NotLoggedInSegment';

const MainHeader = () => {
    
    const auth = useSelector((state) => state.auth);

    const [showLanguageModal, setShowLanguageModal] = useState(false);
    // dil modal aç 
    const handleShowLanguageModal = () => {
      setShowLanguageModal(true);
    };
    // dil modal kapat
    const handleCloseLanguageModal = () => {
      setShowLanguageModal(false);
    };
  

    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
  return (
    <Fragment>
    <nav
 class="navbar navbar-expand-lg navbar-light"
 style={{
   border: "1px solid rgb(221,221,221)",
 }}
>
 <div class="container py-2">
   <a class="navbar-brand" href="/">
     Afet Yönetim
   </a>
   <button
     className="navbar-toggler"
     type="button"
     onClick={handleToggleMenu}
   >
     <span className="navbar-toggler-icon"></span>
   </button>
   <div
     className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}
     id="navbarNav"
   >
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
       <li className="nav-item mt-2 mx-1">
         {/* <HeaderMenuDropDown /> */}
       </li>

       <li className="nav-item pt-2 mx-1">
         {/* <FormMenuDropDown /> */}
       </li>
       <li className="nav-item pt-1 mx-1">
         <a
           className="nav-link"
           style={{
             textDecorationLine: "none",
           }}
           href="/markalar"
         >
           Markalar
         </a>
       </li>
     </ul>

     <div>
     
       <button
         className="btn btn-light rounded-pill"
         onClick={handleShowLanguageModal}
       >
         <i class="fa-solid fa-globe"></i>
       </button>
       {/* <LanguageModal
         showLanguageModal={showLanguageModal}
         handleCloseLanguageModal={handleCloseLanguageModal}
       /> */}

       {auth.authenticate ? <LoggedInSegment /> : <NotLoggedInSegment />}
     </div>
   </div>
 </div>
</nav>
</Fragment>
  )
}

export default MainHeader