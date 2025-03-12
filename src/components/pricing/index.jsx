"use client";

import { useRouter } from "next/navigation";
import Plans from "../data/plans";

const Pricing = () => {
  const router = useRouter();

  const handleAddToCart = (planId) => {
    router.push(`/cart?plan=${planId}`);
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Choose the best plan for you.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {Plans.map((plan) => (
              <div key={plan.id} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div
                  className={`h-full p-6 rounded-lg border-2 ${plan.borderColor} flex flex-col relative overflow-hidden`}
                >
                  {plan.popular && (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {plan.name}
                  </h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    ${plan.price}{" "}
                    <span className="text-lg font-normal text-gray-500">
                      {plan.duration || ""}
                    </span>
                  </h1>
                  {plan.features.map((feature, index) => (
                    <p
                      key={index}
                      className="flex items-center text-gray-600 mb-2"
                    >
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                  <button
                    onClick={() => handleAddToCart(plan.id)}
                    className={`flex items-center mt-auto text-white ${plan.bgColor} border-0 py-2 px-4 w-full focus:outline-none hover:opacity-80 rounded`}
                  >
                    Add to Cart
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
