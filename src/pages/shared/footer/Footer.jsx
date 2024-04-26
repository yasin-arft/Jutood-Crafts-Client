import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto p-3 py-5 md:p-6 lg:p-10 text-white">
      <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 w-full">
        <aside>
          <p className="font-bold text-3xl">
            Jutood Crafts
          </p>
        </aside>
        <div>
          <h2 className="text-xl font-semibold mb-3">Contacts</h2>
          <p>+880 011111-121212</p>
          <p>example@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <a><FaFacebookSquare /></a>
          <a><FaInstagramSquare /></a>
          <a><FaTwitterSquare /></a>
          <a><FaGithubSquare /></a>
        </div>
      </div>
      <hr className="text-white my-8 opacity-50" />
      <p className="text-center ">Copyright © 2024 - All right reserved</p>
    </div>
  );
};

export default Footer;