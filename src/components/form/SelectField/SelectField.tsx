import { utilizeModuleClasses } from "easy-css-modules";
import { SelectHTMLAttributes, useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Label from "../Label/Label";
import styles from "./selectField.module.scss";

const $_ = utilizeModuleClasses(styles);

// utility functions
const subString = (str: string, limit: number) => {
  if (str.length > limit) {
    return str.substring(0, limit) + "...";
  } else {
    return str;
  }
};

export interface Option {
  id: string;
  value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  color?: string;
  options?: Option[];
  handler?: (name: string, value: string | number) => void;
}

const SelectField = ({
  id,
  name,
  label,
  placeholder,
  color = "var(--accent)",
  options,
  handler,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options?.[0]);

  const handleOptionSelection = (option: Option) => {
    setSelectedOption(option);

    setIsOpen(false);

    handler && handler(name, option.value);
  };

  const styleFieldStyles = useMemo(() => {
    return {
      "--_color": color,
    } as React.CSSProperties;
  }, [color]);

  return (
    <div className={$_("selectField")} style={styleFieldStyles}>
      <Label htmlFor={id} color={color}>
        {label}
      </Label>
      {/* Select */}
      <button
        role="combobox"
        aria-expanded={isOpen}
        aria-labelledby="select button"
        aria-haspopup="listbox"
        aria-controls="select-dropdown"
        type="button"
        className={$_("selectField__select")}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={$_("selectField__select__placeholder")}>
          {subString(selectedOption?.value || (placeholder as string), 20)}
        </span>

        <span className={$_("selectField__downArrow")}>
          <FaChevronDown color={color} />
        </span>
      </button>
      {/* Options */}
      <ul
        role="listbox"
        aria-expanded={isOpen}
        className={$_("selectField__options")}
      >
        {options?.map((option) => {
          return (
            <li
              key={option?.id}
              role="option"
              className={$_("selectField__option")}
              onClick={() => handleOptionSelection(option)}
            >
              <input
                type="radio"
                title="Test"
                name={name}
                id={option?.id}
                checked={option.id === selectedOption?.id ? true : false}
              />
              <label htmlFor={option?.id}>{option.value}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectField;
