"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export const ErrorPage = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen min-w-screen bg-error-page bg-repeat">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-start justify-center w-2/3 h-full gap-10">
          <div className="text-[100px] font-bold leading-[130px]">
            <p>Page not</p>
            <p>found.</p>
          </div>
          <div className="flex flex-col gap-16">
            <div className="text-2xl font-semibold leading-8">
              <p>Oh no! Page not found,</p>
              <p>404 error.</p>
            </div>
            <div>
              <Button
                content="Return to Home"
                backgroundColor="black"
                textColor="white"
                OnClick={() => redirectToHome()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
