"use client";

import { useForm } from "react-hook-form";
import InputNumber from "../Reusable/InputNumber/InputNumber";
import InputPassword from "../Reusable/InputPassowrd/InputPassword";
import InputText from "../Reusable/InputText/InputText";

const InputFeild = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleSubmitData = (data) => {
    console.log("Form Data:", data);
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

        <InputNumber
          register={register}
          name="product_price"
          lable="Product Price"
          validation={{
            required: "Product Price is required.",
            setValueAs: (v) => (v === "" ? undefined : Number(v)),
            validate: (v) => {
              if (isNaN(v)) return "Price must be a valid number";
              if (v <= 0) return "Price must be greater than 0";
              return true;
            },
          }}
          error={errors.product_price}
        />

        <InputPassword
          register={register}
          name="user_password"
          lable="Password"
          validation={{
            required: "Password is required.",
            validate: {
              minLength: (v) =>
                v.length >= 8 || "Password must be at least 8 characters",
              hasUpper: (v) =>
                /[A-Z]/.test(v) || "Must contain at least 1 uppercase letter",
              hasLower: (v) =>
                /[a-z]/.test(v) || "Must contain at least 1 lowercase letter",
              hasNumber: (v) =>
                /\d/.test(v) || "Must contain at least 1 number",
              hasSpecial: (v) =>
                /[@$!%*?&]/.test(v) ||
                "Must contain at least 1 special character",
            },
          }}
          error={errors.user_password}
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
