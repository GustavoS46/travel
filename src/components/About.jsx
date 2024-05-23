import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div className="tex-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
        <h1>About Us</h1>

        <div className="w-full md:w-3/4 space-y-5 mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            consectetur ab. Esse sed sapiente dolorum officia accusantium porro.
            Quis excepturi atque nemo laudantium laborum voluptatem asperiores
            commodi doloribus consequatur impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit blanditiis cumque alias deserunt, nisi saepe
            consequatur numquam corrupti, totam esse tempora, a rerum optio
            facilis iusto dolorem. Nostrum, recusandae in.
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
