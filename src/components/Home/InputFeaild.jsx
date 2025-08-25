"use client";

import { useForm } from "react-hook-form";
import InputNumber from "../Reusable/InputNumber/InputNumber";
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
            pattern: {
              value: /^(0*[1-9]\d*(\.\d+)?|0*\.\d+)$/,
              message: "Price must be a valid number",
            },
            validate: (v) =>
              parseFloat(v) > 0 || "Price must be greater than 0", 
          }}
          error={errors.product_price}
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
