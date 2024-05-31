"use server";

import { ZodError, z } from "zod";

export async function submitAction(formData: FormData) {
  let username = formData.get("username");
  let password = formData.get("password");

  const user = z.object({
    username: z.string(),
    password: z.string(),
  });

  if (user.parse({ username, password })) {
    throw new ZodError();
  }

  console.log(user.parse({ username, password }));
}
