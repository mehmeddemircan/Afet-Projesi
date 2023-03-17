
import { Fragment, useState } from "react";
import LoginModal from "../modal/Auth/LoginModal";

import { useTranslation } from "react-i18next";
const NotLoggedInSegment = () => {

    const {t} = useTranslation()
    const [showLoginModal, setShowLoginModal] = useState(false)

    const handleShowLoginModal = () => {
        setShowLoginModal(true)
    }

    const handleCancelLoginModal = () => {
        setShowLoginModal(false)
    }

  return (
    <Fragment>
     

      <button
              className="btn btn-light rounded-pill d-inline-flex align-items-center "
              style={{ border: "1px solid rgb(221,221,221)" }}
              onClick={handleShowLoginModal}
            >
              <i class="fa-solid fa-bars mx-2"></i>
     
              <a>{t('header.login')}</a>
            </button>
            <LoginModal 
              showLoginModal={showLoginModal}
              handleCancelLoginModal={handleCancelLoginModal}
            />
    </Fragment>
  );
};

export default NotLoggedInSegment;
