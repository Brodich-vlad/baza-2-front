import MainLink from "../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./HeaderLinks.module.scss";

const NavLinks = () => {
  return (
    <div className={styles.list}>
      {navigationLinks.map(({ url, name }) => (
        <MainLink url={url} key={url}>
          {name}
        </MainLink>
      ))}
    </div>
  );
};

export default NavLinks;
