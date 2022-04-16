import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Footer = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <Link to={`/privacypolicy/`} className="privacyPolicy">
          privacypolicy
        </Link>
        <p className="copyLight"> &copy; mikomura - {date}</p>
      </div>
    </footer>
  );
};
export default Footer;
