// ---------- FOOTER ----------
export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <footer
      className={`
        border-t border-gray-200 py-8 flex flex-col items-center justify-center
        bg-white/40 backdrop-blur-md shadow-inner transition-all duration-700
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div
        className="
          text-lg font-semibold mb-4 text-center text-transparent bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          italic font-serif transition-all duration-300
          hover:drop-shadow-[0_0_15px_rgba(128,0,255,0.8)]
        "
      >
        Reach out to me via
      </div>

      <div className="flex gap-6">
        <a
          href="https://instagram.com/cmrtoor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white"
        >
          <FaInstagram className="text-xl" />
          <span>Instagram</span>
        </a>

        <a
          href="https://facebook.com/harsimar.singh.395454"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:text-white"
        >
          <FaFacebook className="text-xl" />
          <span>Facebook</span>
        </a>
      </div>
    </footer>
  );
}
