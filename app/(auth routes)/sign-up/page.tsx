"use client";

import { register } from "@/lib/api";

const SignUp = () => {
  const handleSubmit = async (formData: FormData) => {
    const userName = formData.get("userName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await register({ userName, email, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Sign up</h1>
      <form action={handleSubmit}>
        <label>
          Username
          <input type="text" name="userName" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SignUp;
