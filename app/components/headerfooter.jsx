import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-transparent backdrop-blur">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Name */}
        <div className="text-2xl font-bold transition-transform duration-200 hover:scale-110 cursor-default">
          Simar Toor
        </div>

        {/* Navigation */}
        <nav className="flex gap-2 text-lg">
          <Link
            href="/"
            className="px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/skills"
            className="px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Skills
          </Link>

          <Link
            href="/experiences"
            className="px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Experience
          </Link>

          <Link
            href="/about"
            className="px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 border-t py-3 flex flex-col items-center justify-center">
      {/* Centered text */}
      <div className="text-lg font-semibold mb-4 text-center">
        Reach out to me via
      </div>

      {/* Social links centered below text */}
      <div className="flex gap-6">
        {/* Instagram */}
        <a
          href="https://instagram.com/cmrtoor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white transition"
        >
          <FaInstagram className="text-xl" />
          <span>Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/harsimar.singh.395454"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
        >
          <FaFacebook className="text-xl" />
          <span>Facebook</span>
        </a>
      </div>
    </footer>
  );
}

/*export default function Header() {
  return (
    <>"fixed bottom-0 w-full border-t text-right p-2"
    \="mt-12 border-t py-6 flex flex-col items-center gap-4"
      <div className="sticky top-0 border-b border-t">
        <div className="flex justify-between">
          {" "}
          <div className="ml-4">
            <span className="text-2xl font-bold"> Harsimar S. Toor</span>
          </div>
          <nav className="mr-4 text-xl pt-1 pb-1 mt-1 mb-1">
            <Link
              className="p-2 rounded-full mr-2 hover:bg-blue-500 hover:text-white"
              href="/"
            >
              Home
            </Link>
            <Link
              className="p-2 rounded-full mr-2 hover:bg-blue-500 hover:text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              className="p-2 rounded-full mr-2 hover:bg-blue-500 hover:text-white"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
     */
