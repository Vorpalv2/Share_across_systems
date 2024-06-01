"use server";

import { ZodError, ZodIssueCode, z } from "zod";

export async function submitAction(formData: FormData) {
  let username = formData.get("username");
  let password = formData.get("password");

  const user = z.object({
    username: z.string(),
    password: z.string(),
  });

  const parsedUser = user.parse({ username, password });

  if (parsedUser.password === "" || parsedUser.username === "") {
    throw new Error("fields cannot be left empty");
  } else {
    console.log(user.parse({ username, password }));
  }
}

///checking the commit
