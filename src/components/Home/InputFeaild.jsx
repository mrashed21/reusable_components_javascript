"use client";

import { useForm } from "react-hook-form";
import InputText from "../Reusable/InputText/InputText";

const InputFeild = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitData = (data) => {
    console.log(data);
  };

  return (
    <section className="mt-20">
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <InputText
          register={register}
          name="user_frist_name"
          lable="First Name"
          validation={{
            required: "First name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid first name.",
            },
          }}
          error={errors.user_frist_name}
        />
        <InputText
          register={register}
          name="user_last_name"
          lable="Last Name"
          validation={{
            required: "Last name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid last name.",
            },
          }}
          error={errors.user_last_name}
        />

        <button
          type="submit"
          className="cursor-pointer py-2 px-5 rounded border border-gray-200 mt-5"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default InputFeild;
