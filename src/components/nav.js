import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleClass = () => {
    setOpen(!open);
  };
  const isBrowser = typeof document !== "undefined";
  useEffect(() => {
    if (isBrowser) {
      document.body.classList.toggle("open", open);
    }
  }, [open]);
  const navMenu = [
    {
      id: `homeID`,
      className: `home`,
      title: `home`,
      link: `/`,
    },
    {
      id: `portfolioID`,
      className: `portfolio`,
      title: `portfolio`,
      link: `/portfolio/`,
    },
    {
      id: `blogID`,
      className: `blog`,
      title: `note`,
      link: `/blog/`,
    },
    {
      id: `contactID`,
      className: `contact`,
      title: `contact`,
      link: `/contact/`,
    },
  ];
  return (
    <React.Fragment>
      <nav className="nav">
        <ul>
          {navMenu.map((nav) => {
            return (
              <li className={nav.className}>
                <Link to={`${nav.link}`}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="navBtn" onClick={toggleClass}>
        <span className="sr-only">MENU</span>
        <span className="navBtn-bar" />
      </button>
    </React.Fragment>
  );
};
export default Nav;
