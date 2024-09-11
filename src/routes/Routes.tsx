import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import About from "../pages/framework/about";
import PrivacyPolicy from "../pages/framework/privacy-policy";
import TermsOfService from "../pages/framework/terms-of-service";
import Settings from "../pages/framework/settings";
import Frame from "@/modules/Frame";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Frame />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
