import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              dev<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-slate-400 md:text-left">
            © {new Date().getFullYear()} Al Amin Hossain.
            All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            <Link
              to="https://github.com/alaminhossain1997web-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={18} />
            </Link>

            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-[#0A66C2] hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all hover:bg-sky-500 hover:text-white"
            >
              <FaXTwitter size={18} />
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;