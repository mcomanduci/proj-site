import InstagramIcon from "./helper/InstagramIcon";
import FacebookIcon from "./helper/FacebookIcon";
import TwitterIcon from "./helper/TwitterIcon";
import LinkedinIcon from "./helper/LinkedinIcon";

function Footer() {
  return (
    <div className="bg-[#0D0E0F]">
      <footer className="max-w-[1200px] mx-auto py-12 flex justify-between">
        <div className="space-y-4">
          <h2 className="text-5xl font-poppins text-white">LOGO</h2>
          <nav>
            <ul className="flex gap-8 text-xl text-[#bfbfc1] uppercase font-poppins">
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#info">Informações</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-end gap-4">
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <TwitterIcon />
            </a>
            <a href="">
              <LinkedinIcon />
            </a>
          </div>
          <div className="text-white">© 2024 Comando. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
