import React from "react";
type Props = {
  Icon: React.ReactElement;
  text: string;
};
function SidebarLink({ Icon, text }: Props): JSX.Element {
  return (
    <li className="flex items-center sidebar-link ">
      <span>{Icon}</span>
      <span className="ml-4">{text}</span>
    </li>
  );
}

export default SidebarLink;
