"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/commonComp/Header";
import Link from "next/link";
import Input from "@/components/commonComp/Input";
import Button from "@/components/commonComp/Button";
import { googlebutton } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, loginSchema } from "@/lib/validationSchema";
import { AuthFormData } from "../../../types/global";
import Loader from "@/components/commonComp/Loader";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const params = searchParams.get("type") || "";
  const [authType, setAuthTpe] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authType === "signup" ? signupSchema : loginSchema),
  });

  useEffect(() => {
    setAuthTpe(params);
    reset();
  }, [params, reset]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("clicked", data);
      // router.push("/dashboard");
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
      reset();
    }
  });

  const HeaderLink = ({ text, path }: { text: string; path: boolean }) => {
    const gradientBorderStyle = {
      borderImage: "linear-gradient(180deg, #8661AE 0%, #420C7C 100%) 1",
    };

    return (
      <div
        className={`flex flex-col items-center pb-1 border-b-4 rounded-b-lg transition duration-300 ease-in-out ${
          path ? "" : "border-transparent"
        }`}
        style={path ? gradientBorderStyle : {}}>
        <Header active={path?.toString()} text={text} />
      </div>
    );
  };

  if (!authType) {
    return <Loader />;
  }

  return (
    <div className="h-[10h]">
      {isLoading && <Loader />}
      <div className="w-[80%] h-full mx-auto flex flex-col justify-center">
        <div className="flex gap-x-6 justify-start items-center">
          <Link href="/auth?type=signup">
            <HeaderLink text="Sign up" path={authType === "signup"} />
          </Link>
          <Link href="/auth?type=login">
            <HeaderLink text="Log in" path={authType === "login"} />
          </Link>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-y-[2rem] mt-[2rem]">
          <div className="flex flex-col gap-y-[.5rem]">
            {authType === "signup" && (
              <Input
                label="Email"
                placeholder="Enter your email address"
                fieldname="email"
                register={register}
                error={errors.email?.message}
              />
            )}
            <Input
              label="Username"
              placeholder="enter your  profile username"
              fieldname="username"
              register={register}
              error={errors.username?.message}
            />
            <Input
              label="Password"
              placeholder="enter your password"
              type="password"
              fieldname="password"
              register={register}
              error={errors.password?.message}
            />
            {authType === "signup" && (
              <Input
                label="Confirm password"
                placeholder="confirm password"
                type="password"
                fieldname="confirmPassword"
                register={register}
                error={errors.confirmPassword?.message}
              />
            )}

            {authType === "signup" && (
              <div className="flex flex-col">
                <div className="flex items-stretch">
                  <input
                    type="checkbox"
                    className="bg-red-500 text-green-500"
                    {...register("terms")}
                  />
                  <span className="font-medium text-[#101928] text-sm sm:text-normal ml-2">
                    I accept Intelligent Scholar’s Terms of Service and Privacy
                    Policy
                  </span>
                </div>
                <div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm">
                      {errors.terms.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-y-[1rem]">
            <Button
              gradient="true"
              text={authType === "signup" ? "Sign up" : "Login"}
            />

            <div className="w-[15%] mx-auto">
              <div className="w-full flex items-center justify-center ">
                <div className="flex-1 border-t border-[#7F7F7F]"></div>
                <span className="mx-2 text-[#7F7F7F]"> OR </span>
                <div className="flex-1 border-t border-[#7F7F7F]"></div>
              </div>
            </div>
            <Button
              gradient="false"
              text="Continue with Google"
              icon={googlebutton}
              textcolor="#98a2b3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
