import { MailOutlined } from "@ant-design/icons";
import { VscAccount } from "react-icons/vsc";
import { TbError404, TbComponents } from "react-icons/tb";
import { BsCreditCardFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { FaWpforms,FaMap } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import React from "react";

interface meta {
  resource: string;
}

export interface sideBarNavItemType {
  title: string;
  to?: string;
  icon?: any;
  children?: sideBarNavItemType[];
  meta?: meta;
}

const sideBarNavItem: sideBarNavItemType[] = [
  {
    title: "Home",
    icon: MailOutlined,
    children: [
      {
        to: "/home",
        title: "Home",
      },
      {
        to: "/about",
        title: "about1",
        children: [
          {
            to: "/about/a",
            title: "About",
            icon: VscAccount,
          },
        ],
      },
    ],
  },
  {
    to: "/about",
    title: "About",
    icon: VscAccount,
    children: [],
  },
  {
    to: "/components",
    title: "components",
    icon: TbComponents,
    children: [
      {
        to: "/components/card",
        title: "Card",
        icon: BsCreditCardFill,
      },
      {
        to: "/components/map",
        title: "Map",
        icon: GrMapLocation,
      },
      {
        title: "Form",
        icon: FaWpforms,
        children: [
          {
            to: "/components/formwidget",
            title: "Form Widget",
            icon: MdWidgets,
          },
        ],
      },
      {
        to: "/components/floorplan",
        title: "Floor Plan",
        icon: FaMap,
      },
    ],
  },
  {
    to: "/404",
    title: "Page 404",
    icon: TbError404,
    children: [],
  },
];

export default sideBarNavItem;
