import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from 'react-phone-number-input';

export default function CustomInput({
  name,
  type,
  control,
  label,
  error,
  placeholder,
  inputType,
  //   classStr,
}) {
  return (
    <div className="flex flex-col">
      <label className="text-black pb-1 text-xs font-sans">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) =>
          inputType === "mobile" ? (
            <>
              <PhoneInput
                value={value}
                onChange={onChange}
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                placeholder="Enter your mobile number"
                className={`border-[2px] ${
                  error ? "border-red-500" : "border-gray-200"
                } py-3 px-2 text-xs rounded-lg text-black focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 [&_input]:outline-none [&_input]:border-0 [&_input]:ring-0 [&_input:focus]:outline-none [&_input:focus]:border-0 [&_input:focus]:ring-0`}
                error={value ? !isValidPhoneNumber(value) : false}
              />
              {value && !isValidPhoneNumber(value) && !error && (
                <p className="text-red-500 text-xs pt-2">Please enter a valid phone number</p>
              )}
            </>
          ) : (
            <input
              placeholder={placeholder}
              className="border-[2px] border-gray-200 py-3 px-2 text-xs rounded-lg text-black"
              value={value}
              onChange={onChange}
              type={type}
            />
          )
        }
      />
      <p className="text-red-500 text-xs pt-2">{error}</p>
    </div>
  );
}
