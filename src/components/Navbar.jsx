export default function Navbar({ leftFontStyle, rightFontStyle }) {
  return (
    <nav className="flex justify-between items-center py-4 sticky top-0 bg-white z-40">
      <div>
        <a className="font-bold text-3xl">WK</a>
      </div>
      <div className="flex items-center gap-x-4 font-medium">
        <a>Home</a>
        <a>About</a>
        <a>Work</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
    </nav>
  )
}