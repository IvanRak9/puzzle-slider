import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from "react-router-dom";

/**
 * Компонент спливаючого вікна для згоди з використанням Cookies (GDPR).
 * Надає користувачу можливість прийняти або відхилити використання локального сховища.
 */
const CookiePopup = () => {
    const [isVisible, setIsVisible] = useState(
        !document.cookie.includes('puzzle15_gdpr_consent')
    );
    const [toastMessage, setToastMessage] = useState("");

    const showMessage = (msg) => {
        setToastMessage(msg);
        setTimeout(() => {
            setToastMessage("");
        }, 4000);
    };

    return (
        <>
            {/*  */}
            {toastMessage && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-2xl z-[1000] font-medium transition-all duration-300">
                    {toastMessage}
                </div>
            )}

            {/* вікно Cookie */}
            {isVisible && (
                <CookieConsent
                    location="bottom"
                    buttonText="Погодитись"
                    enableDeclineButton={true}
                    declineButtonText="Відхилити"
                    cookieName="puzzle15_gdpr_consent"
                    style={{ background: "#2B373B", fontSize: "14px", alignItems: "center" }}
                    buttonStyle={{ background: "#48bb78", color: "#fff", fontSize: "14px", borderRadius: "5px", padding: "8px 15px" }}
                    declineButtonStyle={{ background: "#e53e3e", color: "#fff", fontSize: "14px", borderRadius: "5px", padding: "8px 15px" }}
                    expires={150}
                    onAccept={() => {
                        setIsVisible(false);
                        showMessage("✅ Ви погодились. Ваш ігровий прогрес буде збережено!");
                    }}
                    onDecline={() => {
                        localStorage.removeItem('puzzleSettings');
                        localStorage.removeItem('puzzleLeaderboard');
                        setIsVisible(false);
                        showMessage("❌ Ви відхилили Cookie. Всі ваші збережені дані видалено.");
                    }}
                >
                    Цей сайт використовує cookies та LocalStorage для збереження вашого ігрового прогресу та налаштувань.{" "}
                    <Link
                        to="/privacy-policy"
                        style={{ color: "#48bb78", textDecoration: "underline", marginLeft: "5px" }}
                    >
                        Політика конфіденційності
                    </Link>
                </CookieConsent>
            )}
        </>
    );
};

export default CookiePopup;