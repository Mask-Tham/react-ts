import React, { FC, lazy, Suspense } from "react";
import { Navigate, RouteObject, useNavigate } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import ContentLayout from "../layouts/ContentLayout";
import { getCookie } from "../services/cookies";

interface meta {
  resource?: string;
}

interface RoutesType {
  path: string;
  name?: string;
  element?: JSX.Element;
  redirect?: string | Function;
  children?: RoutesType[];
  meta?: meta;
}

const Loader = (Component: FC) => {
  return (
    <Suspense>
      <Component></Component>
    </Suspense>
  );
};

const defaultRoute: RoutesType[] = [
  {
    path: "/",
    element: (
      <Navigate to={!getCookie("userData") ? "/login" : "/home"}></Navigate>
    ),
  },
  {
    path: "/404",
    name: "404",
    element: Loader(lazy(() => import("../views/error/404"))),
    meta: {
      resource: "Public",
    },
  },
  {
    path: "/*",
    name: "*",
    element: Loader(lazy(() => import("../views/error/404"))),
    meta: {
      resource: "Public",
    },
  },
];

const authRoute: RoutesType[] = [
  {
    path: "/login",
    name: "login",
    element: Loader(lazy(() => import("../views/login/Login"))),
    meta: {
      resource: "Public",
    },
  },
];

const mainRoute: RoutesType[] = [
  {
    path: "/home",
    name: "home",
    element: Loader(lazy(() => import("../views/app/home/Home"))),
    meta: {
      resource: "",
    },
  },
  {
    path: "/about",
    name: "about",
    element: Loader(lazy(() => import("../views/app/about/About"))),
    meta: {
      resource: "",
    },
  },
  {
    path: "/about/:id",
    name: "about-id",
    element: Loader(lazy(() => import("../views/app/about/About"))),
    meta: {
      resource: "",
    },
  },
  {
    path: "/components",
    name: "components",
    element: Loader(lazy(() => import("../views/app/components/Components"))),
    meta: {
      resource: "",
    },
  },
  {
    path: "/components/card",
    name: "card",
    element: Loader(
      lazy(() => import("../views/app/components/Card"))
    ),
    meta: {
      resource: "",
    },
  },
  {
    path: "/components/map",
    name: "map",
    element: Loader(
      lazy(() => import("../views/app/components/Map"))
    ),
    meta: {
      resource: "",
    },
  },
  {
    path: "/components/formwidget",
    name: "form widget",
    element: Loader(
      lazy(() => import("../views/app/components/Formwidget"))
    ),
    meta: {
      resource: "",
    },
  },
  {
    path: "/components/floorplan",
    name: "form widget",
    element: Loader(
      lazy(() => import("../views/app/components/Floorplan"))
    ),
    meta: {
      resource: "",
    },
  },
];

const vertifyRoute = () => {};

const GenRoute = () => {
  const router: RouteObject[] = defaultRoutes;
  const routerAuth: RouteObject[] = authRoutes;
  const rountMain: RouteObject[] = mainRoutes;
  let routers = [...router];

  const userData = getCookie("userData");
  // console.log(userData);
  if (!userData) {
    routers = [...routers, ...routerAuth];
  }
  if (userData) {
    routers = [...routers, ...rountMain];
  }
  console.log(routers);

  return routers;
};

const GenTreeToChildren = (data: RoutesType[]) => {
  if (data?.length > 0) {
    let datas: Array<object> = [];
    data.forEach((tData: RoutesType) => {
      if (tData.children) {
        let _datas = GenTreeToChildren(tData.children) || [];
        datas = [...datas, ..._datas];
      }
      if (tData.path && tData.element) {
        datas.push({
          path: tData.path,
          element: tData.element,
          meta: tData.meta,
        });
      }
    });
    return datas;
  }
};

const defaultRoutes = [
  {
    path: "/",
    element: <BlankLayout />,
    children: GenTreeToChildren(defaultRoute),
  },
];

const authRoutes = [
  {
    path: "/",
    element: <ContentLayout />,
    type: "main",
    children: GenTreeToChildren(authRoute),
  },
];

const mainRoutes = [
  {
    path: "/",
    element: <ContentLayout />,
    type: "main",
    children: GenTreeToChildren(mainRoute),
  },
];

export { defaultRoute, GenRoute };
