import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 py-4 flex items-center justify-between">

       
        <div className="flex items-center gap-12">
          
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-semibold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold text-slate-900">
              PharmIntel
            </span>
          </button>

       
          <div className="flex items-center gap-8">
            <NavItem to="/" label="Home" />
            <NavItem to="/workspace" label="Workspace" />
            <NavItem to="/archive" label="Archive" />
          </div>
        </div>

        
        <Button onClick={() => navigate("/workspace")}>
          Start Research
        </Button>
      </div>
    </nav>
  );
}
function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors ${
          isActive
            ? "text-blue-600"
            : "text-slate-500 hover:text-slate-900"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
