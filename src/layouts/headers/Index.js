import HeaderLayoutDefault from "./LayoutDefault";

const Header = ({ layout, extraClass }) => {
  switch (layout) {
    case 1:
      return;

    case 2:
      return;

    default:
      return <HeaderLayoutDefault extraClass={extraClass} />;
  }
};
export default Header;
