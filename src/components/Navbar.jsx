// Navigation bar component - displays company branding and contact action
function Navbar() {
  return (
    // Navigation container with flexbox layout for spacing
    <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
      {/* Company logo/title - left aligned */}
      <h1 className="text-2xl font-bold text-green-600">
        Satyarthi Solar Solution
      </h1>

      {/* Contact Us button - right aligned call-to-action */}
      <a
  href="#contact"
  className="bg-green-600 text-white px-5 py-2 rounded-lg"
>
  Contact Us
</a>
    </nav>
  );
}

export default Navbar;