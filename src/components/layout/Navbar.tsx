import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";
import logo from "../../assets/logos/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#06080e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="SupremeFX Academy" className="h-12 w-auto" />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-[#D4AF37]"
                    : "text-white hover:text-[#D4AF37]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-xl border border-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10">
            Join Discord
          </button>

          <button className="rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#F6C453]">
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
