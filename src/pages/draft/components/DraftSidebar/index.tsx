import { NavLink } from "react-router-dom";

import { DRAFT_ROUTES } from "../../routes";

const DraftSidebar = () => {
  return (
    <aside className="draft-sidebar">
      <nav>
        {Object.values(DRAFT_ROUTES).map((i, x) => (
          <div key={x}>
            <NavLink to={i.to}>{i.label}</NavLink>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DraftSidebar;
