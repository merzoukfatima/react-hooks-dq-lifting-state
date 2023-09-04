import React, { useState } from "react";

function Menu({handleDarkMode}) {
  const [checked, setChecked] = useState(false);
  const changeChecked = () => {
    setChecked(!checked);
    handleDarkMode()
  };
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={checked}
          onChange={changeChecked}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
