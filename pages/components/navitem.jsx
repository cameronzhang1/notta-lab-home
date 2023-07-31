import Link from "next/link";

const NavItem = ({ text, href }) => {
  return (
    <Link href={href} scroll={false}>
        <h2 className= "nav__link">{text}</h2>
    </Link>
  );
};

export default NavItem;