function Header() {
  return (
    <div className="mx-auto bg-[#0d0e0f]">
      <header className="text-white flex justify-between items-center px-3 py-3 max-w-[1200px] mx-auto">
        <h1 className="text-5xl font-poppins"><a href="./">LOGO</a></h1>
        <nav>
          <ul className="flex gap-8 text-xl text-[#bfbfc1] uppercase font-poppins">
            <li>
              <a
                href="#servicos"
                className="relative after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:mt-1 after:w-0 hover:after:w-full after:absolute"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#info"
                className="relative after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:mt-1 after:w-0 hover:after:w-full after:absolute"
              >
                Informações
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="relative after:block after:h-0.5 after:bg-white after:transition-all after:duration-300 after:mt-1 after:w-0 hover:after:w-full after:absolute"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
