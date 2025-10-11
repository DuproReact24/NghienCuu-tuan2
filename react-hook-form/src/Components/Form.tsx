import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};
export default function Form() {
     const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input {...register("username", { required: "Username is required" })} />
      {errors.username && <p>{errors.username.message}</p>}

      <label>Email</label>
      <input {...register("email", { 
        required: "Email is required", 
        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
      })} />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}
