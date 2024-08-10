"use client";
import React, { useState } from "react";
import Header from "@/components/commonComp/Header";
import { todoListAuth } from "@/lib/utils";
import Button from "@/components/commonComp/Button";
import ProgressBar from "@/components/commonComp/ProgressBar";
import Link from "next/link";
import { useGlobalContext } from "../ProfileContext";

export default function TodoPage() {
  const { setTodo } = useGlobalContext();
  const [activeTab, setActiveTab] = useState<string | "">("");

  const getTodoSelection = (value: string) => {
    setActiveTab(value);
    setTodo(value);
  };
  return (
    <div className="w-full h-[100vh] lg:w-[80%] mx-auto flex flex-col gap-y-[2rem] pt-[2rem]">
      <ProgressBar progress={100} />
      <div className="flex flex-col justify-center mt-[5rem]">
        <div className="flex justify-center items-center">
          <Header text="What would you like to do here?" />
        </div>
        <div className="flex flex-col gap-y-[3rem] mt-[3rem]">
          <div className="flex flex-wrap justify-center gap-x-[2rem] gap-y-[1rem]">
            {todoListAuth.map((item) => (
              <p
                onClick={() => getTodoSelection(item)}
                key={item}
                className={`tab ${activeTab === item ? "tab-active" : ""}`}>
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-y-8">
            <Link href="/profile/todo">
              <Button gradient="true" text="Next" />
            </Link>
            <Link href="/profile/todo">
              <Button textcolor="#98a2b3" text="Do this later!" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
