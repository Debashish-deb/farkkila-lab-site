import { NavLink } from 'react-router-dom';
import logo from '../assets/labicon.png';
import { useState, useEffect } from 'react';

const linkClass = ({ isActive }) =>
  `px-3 py-1 rounded-md transition-colors duration-200 ${
    isActive
      ? 'text-accent-800 font-semibold'
      : 'hover:text-accent-700 text-paper-ink/90'
  }`;

export default function Header() {
  const [showPubMenu, setShowPubMenu] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);

  const openMenu = () => {
    clearTimeout(hoverTimer);
    setShowPubMenu(true);
  };

  const closeMenu = () => {
    const timer = setTimeout(() => setShowPubMenu(false), 150);
    setHoverTimer(timer);
  };

  useEffect(() => () => clearTimeout(hoverTimer), [hoverTimer]);

  return (
    <header className="sticky top-0 z-40 bg-paper/70 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.05)] border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* --- Left: Logo and Title --- */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Lab icon"
              className="w-12 h-12 rounded-full mix-blend-multiply shadow-soft"
            />
            <div>
              <h1 className="hdr text-4xl font-bold text-paper-ink tracking-tight leading-tight">
                Färkkilä Lab
              </h1>
              <p className="text-sm text-paper-ink/70">
                Systems Oncology • HGSC
              </p>
            </div>
          </div>

          {/* --- Right: Navigation --- */}
          <nav className="relative flex items-center gap-4 text-base">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/members" className={linkClass}>
              Lab Members
            </NavLink>

            {/* --- Publications Dropdown --- */}
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenu}
            >
              <button
                className="px-3 py-1 rounded-md text-paper-ink/90 hover:text-accent-700 transition-colors duration-200 font-semibold flex items-center gap-1"
              >
                Publications <span className="text-xs">▾</span>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-52 rounded-md bg-paper/95 border border-black/10 shadow-lg backdrop-blur-md transform transition-all duration-200 ease-out origin-top ${
                  showPubMenu
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <NavLink
                  to="/publications"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-t-md hover:bg-accent-50 hover:text-accent-800 ${
                      isActive
                        ? 'font-semibold text-accent-800'
                        : 'text-paper-ink/90'
                    }`
                  }
                >
                  All Publications
                </NavLink>

                <NavLink
                  to="/publications/thesis"
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-b-md hover:bg-accent-50 hover:text-accent-800 ${
                      isActive
                        ? 'font-semibold text-accent-800'
                        : 'text-paper-ink/90'
                    }`
                  }
                >
                  Thesis
                </NavLink>
              </div>
            </div>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
