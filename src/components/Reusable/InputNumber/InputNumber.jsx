const InputNumber = ({
  register,
  name,
  lable,
    placeholder,
  classname,
  validation,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name}>{lable}</label>
      <input
        type="text"
        {...register(name, {
          ...validation,
        })}
        id={name}
        placeholder={placeholder}
        className={`border border-gray-200 rounded focus:outline-none p-2 ${classname} ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default InputNumber;
