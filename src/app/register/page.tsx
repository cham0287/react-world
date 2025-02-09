"use client";
import { fetchRegisterUser } from "@/services/users";
import { RegisterUserInput } from "@/types/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const inputStyle = "border border-gray-400 px-4 py-3 m-2 w-80 rounded-md";

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterUserInput>();
  const router = useRouter();

  const onSubmit = async (registerInput: RegisterUserInput) => {
    const {
      user: { token },
    } = await fetchRegisterUser(registerInput);
    localStorage.setItem("token", token);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl p-3">Sign up</h1>
      <Link href="/login" className="text-sm text-primary">
        Have an account?
      </Link>
      <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
        <input className={inputStyle} placeholder="Username" {...register("username", { required: true })} />
        <input
          className={inputStyle}
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button className="bg-primary text-white text-lg px-6 py-3 rounded-md" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};
export default Register;
