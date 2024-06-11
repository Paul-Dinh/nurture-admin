import { Outlet } from "react-router-dom";

import DraftSidebar from "../DraftSidebar";

const DraftLayout = () => {
  return (
    <div className="draft-layout">
      <DraftSidebar />
      <main className="draft-layout__main">
        <Outlet />
      </main>
    </div>
  );
};

export default DraftLayout;
