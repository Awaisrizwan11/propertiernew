import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white absolute">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-around items-start">
          <div className="w-full md:w-1/3 mb-4">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mb-4" />
            <div className="mb-2">
              <p className="font-bold text-xl">Information:</p>
              <p className="mt-2">
                Street no. 2, Jhangi, near old food Godown, main Manshera road,
                Abbottabad
              </p>
              <p className="mt-2">Email: info@propertier.pk</p>
              {/* <p className="mt-2">Phone: +44 7848950763</p> */}
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4">
            <p className="font-bold text-2xl">Hours of Operation</p>
            <p className="mt-4">Mon-Sat: 9am - 6pm</p>
            <p className="mt-4">
              Thank you for your interest in our services! If you have any
              questions, inquiries, or would like to discuss your project, were
              here to help. Our dedicated team is ready to assist you and
              provide the information you need.
            </p>
            <div className="mt-4">
              <button className="bg-white text-black px-4 py-2 rounded mr-2">
                Featured Your Ad
              </button>
              <button className="bg-white text-black px-4 py-2 rounded">
                Support
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-center items-center">
          <nav className="flex flex-wrap justify-center md:justify-center space-x-4">
            <a href="#" className="text-sm">
              Home
            </a>
            <a href="#" className="text-sm">
              Terms And Conditions
            </a>
            <a href="#" className="text-sm">
              Our Services
            </a>
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-sm">
              Refund Policy
            </a>
            <a href="#" className="text-sm">
              FAQs
            </a>
            <a href="#" className="text-sm">
              Contact Us
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col md:flex-row justify-center items-center"></div>

        <p className="text-xs text-center mt-4">
          This site uses Google AdSense ad intent links. AdSense automatically
          generates these links and they may help creators earn money.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="text-xs text-center mt-4">
          © Copyrights 2024. Propertier.pk. All Rights Reserved. Powered by
          Exagic.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
