import React from "react";
import { Twitter, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-neutral-400 flex md:flex-row flex-col gap-3 justify-evenly py-10 mt-20 px5">
        <div className="w-85 ">
          <h1 className="text-white font-semibold pb-2">CS — Ticket System</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold pb-2">Company</h1>
          <a href="">About Us</a>
          <a href="">Our Mission</a>
          <a href="">Contact Saled</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold pb-2">Services</h1>
          <a href="">Products & Services</a>
          <a href="">Customer Stories</a>
          <a href="">Download Apps</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold pb-2">Information</h1>

          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">Join Us</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-semibold pb-2">Social Links</h1>
          <div className="flex items-center gap-0.5">
            <Twitter className="w-5 h-5" />
            <a href="">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-0.5">
            <Linkedin className="w-5 h-5" />
            <a href="">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-0.5">
            <Facebook className="w-5 h-5" />
            <a href="">@CS — Ticket System</a>
          </div>
          <div className="flex items-center gap-0.5">
            <Mail className="w-5 h-5" />
            <a href="">support@cst.com</a>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="bg-black text-neutral-400 items-center text-center py-6">
        © 2025 CS — Ticket System. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
