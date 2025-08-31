"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import InputNumber from "../Reusable/InputNumber/InputNumber";
import InputPassword from "../Reusable/InputPassowrd/InputPassword";
import InputText from "../Reusable/InputText/InputText";
import ReactPhoneInput from "../Reusable/ReactPhoneInput/ReactPhoneInput";

const InputFeild = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [phoneValue, setPhoneValue] = useState("+8801781131905");

  const handleSubmitData = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="mt-20">
      <form onSubmit={handleSubmit(handleSubmitData)}>
        {/* textinput */}
        <InputText
          register={register}
          name="user_frist_name"
          lable="First Name"
          placeholder="Enter Your Frist Name"
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
          placeholder="Enter Your Last Name"
          validation={{
            required: "Last name is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Invalid last name.",
            },
          }}
          error={errors.user_last_name}
        />

        {/* numberinput */}
        <InputNumber
          register={register}
          name="product_price"
          lable="Product Price"
          placeholder="Enter Product Price"
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

        {/* Phone input with real-time validation */}
        <ReactPhoneInput
          label="Phone Number"
          register={register}
          name="user_phone"
          setValue={setValue}
          phoneValue={phoneValue}
          setPhoneValue={setPhoneValue}
          placeholder="Enter Your Phone Number"
          validation={{
            required: "Phone number is required.",
          }}
          error={errors.user_phone}
        />

        {/* passwordinput */}
        <InputPassword
          register={register}
          name="user_password"
          lable="Password"
          placeholder="Enter your Password"
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
