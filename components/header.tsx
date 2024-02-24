export default function Header() {
  return (
    <header className="flex justify-between flex-wrap bg-teal-500 p-5 ">
      <div className="flex justify-start">
        <img className="w-10 h-10" src="image/logo.png" />
        <p className="flex items-center font-semibold text-3xl tracking-tight flex-shrink-0 text-white ml-2 mr-6">
          ChinaBlog
        </p>
      </div>

      <div className="flex items-center justify-end gap-3">
        <a
          className="inline-block py-1 px-4 text-teal-200 text-lg border rounded border-teal-200  hover:bg-white  hover:text-teal-500 hover:border-transparent"
          href="/blog"
        >
          Blogs
        </a>
        <a
          className="inline-block py-1 px-4 text-teal-200 text-lg border rounded border-teal-200  hover:bg-white  hover:text-teal-500 hover:border-transparent"
          href="/about-us"
        >
          About us
        </a>
      </div>
    </header>
  );
}
