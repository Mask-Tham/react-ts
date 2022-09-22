import { Affix, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import sideBarNavItem, { sideBarNavItemType } from "./sidebarNavItem";
import { v4 as uuidv4 } from "uuid";
import { VscCircleOutline } from "react-icons/vsc";
import Icon from "../../../components/util/Icon";
import '../../ContentLayoutStyle.scss'

const GenGroupNav = (itemsNav: sideBarNavItemType[]) => {
  const goto = (item: sideBarNavItemType) => {};

  let menus: Array<any> = [];
  if (itemsNav?.length > 0) {
    itemsNav.forEach((itemNav: sideBarNavItemType) => {
      if (itemNav.children && itemNav.children?.length > 0) {
        let _datas = (
          <Menu.SubMenu
            title={itemNav.title}
            key={itemNav.title}
            icon={
              itemNav.icon === undefined ? (
                <VscCircleOutline />
              ) : (
                <Icon type={itemNav.icon} />
              )
            }
          >
            {GenGroupNav(itemNav.children)}
          </Menu.SubMenu>
        );

        menus = [...menus, _datas];
      }
      if (
        itemNav.to &&
        itemNav.title &&
        (!itemNav.children || itemNav.children?.length === 0)
      ) {
        menus.push(
          <Menu.Item
            key={itemNav.to}
            icon={
              itemNav.icon === undefined ? (
                <VscCircleOutline />
              ) : (
                <Icon type={itemNav.icon} />
              )
            }
          >
            <Link to={itemNav.to}>{itemNav.title}</Link>
          </Menu.Item>
        );
      }
    });
    return menus;
  }
};
const SideBarNav: React.FC = () => {
  const sideBarNavItems = sideBarNavItem;
  // console.log(GenGroupNav(sideBarNavItems));
  const [selectKey, setSelectKey] = useState([""]);
  const location = useLocation();

  const findDefaultOpenMenu = (NavItem: sideBarNavItemType[], path: string) => {
    NavItem.find((item) => {
      console.log(item);
      let arrOpen = [];
      if (item.to === path) {
        console.log("ok ppp", item);
        return true;
      }
      if (item.children && item.children.length > 0) {
        let open = findDefaultOpenMenu(item.children, path);
        console.log("open", open);
      }
    });
  };

  const genSelectKeyArray = (path: string) => {
    let newSelectKey = path.split("/");
    if (newSelectKey[0] === "") {
      newSelectKey.shift();
    }
    let arrSelectKey: Array<string> = [];
    newSelectKey.forEach((el) => {
      if (arrSelectKey.length > 0)
        arrSelectKey.push(`${arrSelectKey[arrSelectKey.length - 1]}/${el}`);
      else arrSelectKey.push(`/${el}`);
    });
    return arrSelectKey;
  };

  useEffect(() => {
    // console.log(location.pathname);
    // findDefaultOpenMenu(sideBarNavItems,location.pathname)
    setSelectKey(genSelectKeyArray(location.pathname));
    // console.log(selectKey);
  }, [location]);

  const goto: MenuProps["onClick"] = (item) => {
    console.log(item);
    console.log(selectKey);
  };

  return (
    <Menu mode="inline" className="sidebar" selectedKeys={selectKey} defaultOpenKeys={[""]}>
      {GenGroupNav(sideBarNavItems)}
      {/* {GenGroupNav(sideBarNavItems)}
      {GenGroupNav(sideBarNavItems)} */}
    </Menu>
  );
};

export const FooterSidebar: React.FC = () => {
  const fixbottom = {
    position: "fixed",
    background: '#efefef',
    bottom: "0px",
    padding: "10px",
    textAlign: "center",
    width:'200px'
  } as React.CSSProperties;
  return <div style={fixbottom}>Power by Mask-Tham</div>;
};

export default SideBarNav;
