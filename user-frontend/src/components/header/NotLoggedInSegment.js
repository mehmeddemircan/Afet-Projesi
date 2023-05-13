
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotLoggedInSegment = () => {
    
    const navigate = useNavigate()
    
  return (
    <Fragment>
     

      <button   
                onClick={() => navigate('/login',{replace : true})}
              className="btn btn-light rounded-pill d-inline-flex align-items-center "
              style={{ border: "1px solid rgb(221,221,221)" }}

            >
              <i class="fa-solid fa-bars  mx-2"></i>
     
              <a>Giriş Yap</a>
            </button>
           
    </Fragment>
  );
};

export default NotLoggedInSegment