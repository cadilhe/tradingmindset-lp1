import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const isHostingerSubpath =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/pv/tradingmindset");

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: isHostingerSubpath ? "/pv/tradingmindset" : "/",
  });

  return router;
};
