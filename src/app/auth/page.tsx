"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
import "../../components/commonComp/styles.css";

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = searchParams.get("type") || "";
  const [authType, setAuthTpe] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTermChecked, setIsTermChecked] = useState<boolean>(false);

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
      {
        authType === "signup"
          ? router.push("/auth?type=login")
          : router.push("/auth?type=login");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
      reset();
    }
  });

  const HeaderBorder = () => {
    return (
      <div
        style={{
          height: "0.3rem",
          width: "full",
          borderRadius: "1rem",
          marginTop: "0.3rem",
          background: "#110113",
        }}></div>
    );
  };
  const HeaderTransborder = () => {
    return (
      <div
        style={{
          height: "0.3rem",
          width: "full",
          marginTop: "0.3rem",
          background: "transparent",
        }}></div>
    );
  };

  if (!authType) {
    return <Loader />;
  }

  return (
    <>
      {isLoading && <Loader />}
      <div className="w-full h-full lg:w-[80%] mx-auto flex flex-col gap-y-[2rem] pt-[2rem]">
        <div className="flex gap-x-6 justify-start items-center">
          <Link href="/auth?type=signup">
            <Header text="Sign up" />
            {authType === "signup" ? <HeaderBorder /> : <HeaderTransborder />}
          </Link>
          <Link href="/auth?type=login">
            <Header text="Log in" />
            {authType === "login" ? <HeaderBorder /> : <HeaderTransborder />}
          </Link>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-y-[2rem]">
          <div className="flex flex-col gap-y-[1rem]">
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
              <div className="flex flex-col mt-2">
                <div className="flex items-stretch">
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={isTermChecked}
                    {...register("terms", {
                      onChange: (e) => setIsTermChecked(e.target.checked),
                    })}
                  />
                  <span className="font-medium text-[#101928] text-xs sm:text-normal ml-2">
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

          <div className="flex flex-col gap-y-[.5rem]">
            <Button
              bgcolor="#1B004E"
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
              text="Continue with Google"
              icon={googlebutton}
              textcolor="#98a2b3"
            />
          </div>
        </form>
      </div>
    </>
  );
}
