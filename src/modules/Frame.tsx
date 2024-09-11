import { Outlet } from "react-router-dom";
// import MainRoutes from "./routes/routers.tsx";
import { useEffect, useState } from "react";
import { useUserStore } from "../store/use-store";
import ActionSheetMenu from "../components/action-sheet-menu";
import ActionSheetButtons from "../components/action-sheet-buttons";
import { LoaderSVG } from "@/components/graphics/LoaderSVG";

function Frame() {
  const initUser = useUserStore((state) => state.initUser);
  useEffect(() => {
    void initUser();
  }, [initUser]);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setReady(true));
  }, []);

  return (
    <div className="min-h-screen h-full flex flex-col">
      <ActionSheetButtons />
      <ActionSheetMenu />
      {ready ? (
        <Outlet />
      ) : (
        <div className="w-full h-full flex flex-col flex-grow items-center justify-center">
          <LoaderSVG />
        </div>
      )}
    </div>
  );
}

export default Frame;
