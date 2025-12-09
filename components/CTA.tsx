import ButtonSignin from "./ButtonSignin";
import ButtonDemo from "./ButtonDemo";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#3A5AFE] to-[#2A3FCC] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-[960px] mx-auto px-8 py-16 md:py-24 text-center">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ready to eliminate blind meetings?
          </div>
          
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 md:mb-8">
            Enter every meeting fully informed
          </h2>
          <p className="text-lg opacity-90 mb-8 md:mb-12 leading-relaxed max-w-xl">
            Primer turns your CRM activity into actionable briefings—automatically. 
            No more scrolling. No more guessing. Just clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <ButtonDemo 
              text="Watch Demo" 
              extraStyle="bg-white hover:bg-gray-100 text-[#3A5AFE] px-8 py-4 rounded-lg font-semibold transition-all duration-150 shadow-xl hover:shadow-2xl hover:scale-[1.02] text-base flex items-center gap-2" 
            />
            <ButtonSignin 
              text="Start Free Trial" 
              extraStyle="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold transition-all duration-150 text-base" 
            />
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-4.902z"
                />
              </svg>
              <span>Secure & compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <span>Free 7-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-4.902z"
                />
              </svg>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
