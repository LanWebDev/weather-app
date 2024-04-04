"use client";
import MenuBtn from "./MenuBtn";
import MenuTabs from "./NavigationTabs";

const Menu = () => {
  function menuOptions() {
    <MenuTabs />;
  }

  return (
    <div className="m-4">
      <MenuTabs />
      <MenuBtn onPress={menuOptions} />
    </div>
  );
};

export default Menu;
