import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-[960px] mx-auto px-8 py-16 md:py-24">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-semibold tracking-tight text-base md:text-lg text-gray-900">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-4 text-sm text-gray-700">
              {config.appDescription}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="font-semibold text-gray-900 tracking-widest text-sm md:text-left mb-3 uppercase">
                Links
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target="_blank"
                    className="text-gray-700 hover:text-[#3A5AFE] transition-colors duration-150"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <Link href="/#pricing" className="text-gray-700 hover:text-[#3A5AFE] transition-colors duration-150">
                  Pricing
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-[#3A5AFE] transition-colors duration-150">
                  Blog
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="font-semibold text-gray-900 tracking-widest text-sm md:text-left mb-3 uppercase">
                Legal
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="text-gray-700 hover:text-[#3A5AFE] transition-colors duration-150">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-[#3A5AFE] transition-colors duration-150">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
