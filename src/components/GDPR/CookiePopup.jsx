import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from "react-router-dom";

const CookiePopup = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Зрозуміло"
            cookieName="puzzle15_gdpr_consent"
            style={{ background: "#2B373B", fontSize: "14px" }}
            buttonStyle={{ background: "#48bb78", color: "#fff", fontSize: "14px", borderRadius: "5px" }}
            expires={150}
        >
            Цей сайт використовує cookies та local storage для збереження вашого ігрового прогресу та налаштувань.{" "}
            <Link
                to="/privacy-policy"
                style={{ color: "#48bb78", textDecoration: "underline" }}
            >
                Політика конфіденційності
            </Link>
        </CookieConsent>
    );
};

export default CookiePopup;