import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* This is our new header  */}

      <div className="sticky top-0 border-b border-t">
        {/* this is for fixing */}
        <div className="flex justify-between">
          {" "}
          {/* this is for spcaing and margin */}
          <div className="ml-4">
            <span className="text-2xl font-bold"> Dashboard</span>
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

      {/* End of Header and start of the main div */}
    </>
  );
}

export function Footer() {
  return (
    <>
      {/* This is our new footer  */}

      <div className="fixed bottom-0 w-full border-b border-t text-center">
        This is the footer
      </div>

      {/* End of  footer */}
    </>
  );
}
