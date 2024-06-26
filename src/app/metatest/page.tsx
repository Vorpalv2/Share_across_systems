import React from "react";
import type { Metadata } from "next";
import { submitAction } from "@/action/form.actions";
import Partial from "./@partial/page";

export const metadata: Metadata = {
  title: "test page",
  description: "test description for metadata page",
};

function MetaTest() {
  return (
    <>
      <Partial />
      <form action={submitAction}>
        <input className="text-black" type="text" name="username" />
        <input className="text-black" type="password" name="password" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default MetaTest;
