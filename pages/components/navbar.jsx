import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/images/main-logo.png";
import NavItem from "./navitem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/#about" },
  { text: "Publications", href: "/#publications" },
  { text: "Team", href: "/#team" },
  { text: "Contact", href: "/#contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav drop-shadow-md`}>
        <Link href={"/"} className= "mx-10">
          <Image src={Logo} height={50}width={50}alt="Notta Lab" />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;