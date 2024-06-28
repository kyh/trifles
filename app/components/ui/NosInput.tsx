import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import Borders from "./Borders";

const inputContainerStyles = cva("mb-3 flex w-full flex-nowrap text-base", {
  variants: {
    variant: {
      normal: "text-normal-text",
      light: "text-normal-text",
      success: "text-normal-text",
      primary: "text-normal-text",
      disabled: "text-normal-text",
      error: "text-normal-text",
      warning: "text-normal-text",
      dark: "bg-dark p-4 text-light",
    },
    isInline: {
      true: "flex-col sm:flex-row",
      false: "flex-col",
    },
  },
  defaultVariants: {
    variant: "normal",
    isInline: false,
  },
});

const inputStyles = cva(
  "w-full border-none px-5 py-3 -outline-offset-2 placeholder:text-dark-555",
  {
    variants: {
      variant: {
        normal: "focus:outline-dark",
        light: "focus:outline-light",
        success: "focus:outline-success",
        primary: "focus:outline-primary",
        error: "focus:outline-error",
        disabled: "focus:outline-disabled",
        warning: "focus:outline-warning",
        dark: "bg-dark focus:outline-light",
      },
      defaultVariants: {
        variant: "normal",
      },
    },
  },
);

const inputLabelStyles = cva("flex-grow-1 mr-6 basis-0 text-base", {
  variants: {
    isInline: {
      true: "mb-4 text-left sm:mb-0 sm:text-right",
      false: "mb-4 text-left",
    },
  },
  defaultVariants: {
    isInline: false,
  },
});

type InputProps = VariantProps<typeof inputStyles> &
  React.HTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    isInline?: boolean;
  };

export const Input = ({
  name,
  isInline,
  label,
  variant,
  type,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div {...props} className={inputContainerStyles({ variant, isInline })}>
      <label htmlFor={name} className={inputLabelStyles({ isInline })}>
        {label}
      </label>

      <div className="relative flex-grow-[5] basis-0">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={inputStyles({ variant })}
        />

        <Borders variant={variant === "dark" ? "light" : variant} />
      </div>
    </div>
  );
};
