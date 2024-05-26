import { utilizeModuleClasses } from "easy-css-modules";
import { InputHTMLAttributes } from "react";
import Label from "../Label/Label";
import TextHint from "../TextHint/TextHint";
import { FormError } from "../form-types";
import styles from "./inputField.module.scss";

const $_ = utilizeModuleClasses(styles);

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
  label?: string;
  description?: string | number | undefined;
  error?: FormError;
  hintColor?: string | undefined;
}

const InputField = ({
  type,
  name,
  id,
  placeholder,
  label,
  isRequired,
  hintColor,
  description,
  error,
  ...rest
}: Props) => {
  return (
    <div className={$_("inputField")}>
      <Label htmlFor={id || name} isRequired={isRequired}>
        {label || name}
      </Label>
      {description && <TextHint color={hintColor}>{description}</TextHint>}
      {error?.message && <TextHint color="red">{error.message}</TextHint>}

      <input
        className={$_(`inputField__input ${error ? "error" : ""}`)}
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        required={isRequired}
        {...rest}
      />
    </div>
  );
};
export default InputField;
