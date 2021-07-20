import React from "react";

import Drawer from "../Drawer/Drawer";
const Wind: React.FC<any> = (props) => {
  return <Drawer routeName={props.route?.name} />;
};

export default Wind;
