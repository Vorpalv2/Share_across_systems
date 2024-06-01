"use server";

import { ZodError, ZodIssueCode, z } from "zod";

export async function submitAction(formData: FormData) {
  let username = formData.get("username");
  let password = formData.get("password");

  const user = z.object({
    username: z.string(),
    password: z.string(),
  });

  if (!user.parse({ username, password })) {
    throw new Error("something went wrong with verification");
  } else {
    console.log(user.parse({ username, password }));
  }
}

///checking the commit
