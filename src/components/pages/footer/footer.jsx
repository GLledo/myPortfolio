import React from "react";

import "./footer.css";

const FooterPanel = () => {
    return <div className="py-2 text-center footer-style">© Gonzalo Lledo Goitia {new Date().getFullYear()}</div>
};

export default FooterPanel;