import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";
import { DollarSign, Users, Pencil, MessageSquare, Sparkles } from "lucide-react";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const getFeatureIcon = (featureName: string) => {
  const name = featureName.toLowerCase();
  if (name.includes("team member") || name.includes("seat")) {
    return <Users className="w-5 h-5 text-[#3A5AFE]" />;
  }
  if (name.includes("pricing") || name.includes("usage")) {
    return <DollarSign className="w-5 h-5 text-[#3A5AFE]" />;
  }
  if (name.includes("integration") || name.includes("hubspot") || name.includes("salesforce")) {
    return <Pencil className="w-5 h-5 text-[#3A5AFE]" />;
  }
  if (name.includes("sync") || name.includes("crm") || name.includes("activity")) {
    return <MessageSquare className="w-5 h-5 text-[#3A5AFE]" />;
  }
  if (name.includes("intelligence") || name.includes("ai") || name.includes("unlimited")) {
    return <Sparkles className="w-5 h-5 text-[#3A5AFE]" />;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 text-[#3A5AFE]"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Enter every meeting fully prepared
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.stripe.plans.map((plan) => (
            <div key={plan.priceId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={`badge text-xs text-primary-content font-semibold border-0 bg-primary`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={`absolute -inset-[1px] rounded-[9px] bg-primary z-10`}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-6 z-10 bg-base-100 rounded-lg overflow-hidden">
                {/* Header with darker background */}
                <div className="bg-gray-50 px-8 pt-8 pb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center shrink-0">
                      <DollarSign className="w-5 h-5 text-[#3A5AFE]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-bold text-gray-900">{plan.name}</p>
                      {plan.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {plan.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="px-8 pb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    STARTS AT
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-5xl tracking-tight font-extrabold text-gray-900">
                      ${plan.price}
                    </p>
                    <div className="flex flex-col justify-end pb-1">
                      <p className="text-sm text-gray-600 font-medium">
                        /month
                      </p>
                      <p className="text-xs text-gray-500">
                        (billed annually)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                {plan.features && (
                  <div className="px-8 pb-6 flex-1">
                    <ul className="space-y-3 leading-relaxed">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="shrink-0 mt-0.5">
                            {getFeatureIcon(feature.name)}
                          </div>
                          <span className="text-sm text-gray-700">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="px-8 pb-8 space-y-3">
                  <ButtonCheckout priceId={plan.priceId} />
                  <p className="text-xs text-center text-gray-500">
                    Cancel anytime. No hidden fees.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
