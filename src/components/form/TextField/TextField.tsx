import { utilizeModuleClasses } from "easy-css-modules";
import { InputHTMLAttributes } from "react";
import Label from "../Label/Label";
import TextHint from "../TextHint/TextHint";
import { FormError } from "../form-types";
import styles from "./textField.module.scss";

const $_ = utilizeModuleClasses(styles);

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  isRequired?: boolean;
  id?: string | undefined;
  label?: string;
  description?: string | number | undefined;
  error?: FormError;
  hintColor?: string;
  w?: string;
  minW?: string;
  maxW?: string;
  minH?: string;
  maxH?: string;
}

const TextField = ({
  name,
  id,
  placeholder,
  label,
  isRequired,
  hintColor,
  description,
  error,
  w = "100%",
  minW = "100%",
  maxW = "40.625rem",
  minH = "10rem",
  maxH = "20rem",
}: Props) => {
  const customStyles = {
    "--_sizeX": w,
    "--_minSizeX": minW,
    "--_maxSizeX": maxW,
    "--_minSizeY": minH,
    "--_maxSizeY": maxH,
  } as React.CSSProperties;
  return (
    <div className={$_("textField")}>
      <Label htmlFor={id || name} isRequired={isRequired}>
        {label || name}
      </Label>
      {description && <TextHint color={hintColor}>{description}</TextHint>}
      {error?.message && <TextHint color="red">{error.message}</TextHint>}
      <textarea
        className={$_(`textField__textarea ${error ? "error" : ""}`)}
        name={name}
        id={id || name}
        placeholder={placeholder}
        required={isRequired}
        style={customStyles}
      />
    </div>
  );
};

export default TextField;
