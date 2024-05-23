import React from "react";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#222] rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className="mt-4">
          <Link>
            <h1 className="font-semibold text-2xl text-brightRed">FitZone</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aspernatur sint quas necessitatibus possimus autem suscipit sit
            enim! Officia quibusdam iste a fugiat tempora atque aliquid
            perspiciatis harum quia. Nisi.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl mt-4">Address</h1>
          <p className="flex flex-row items-center gap-2 mt-4">
            Av. Liberdade, 22 - Centro Piraporinha - Goiânia - GO
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl mt-4">Contact</h1>
          <div className="flex flex-row items-center gap-2 mt-4">
            <AiTwotonePhone size={20} />
            <p>(62) 3333-3333</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>fitzone@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center mt-4">
          Copyright &copy; 2024{" "}
          <span className="text-brightRed">
            <a href="https://www.linkedin.com/in/gustavo-desenvolvedor/">
              Gustavo Silva
            </a>
          </span>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
