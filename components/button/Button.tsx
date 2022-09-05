import React from "react";
import styled from "styled-components";
import Loading from "../../components/loading";

interface StyledProps {
  display?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  border?: string;
  cursor?: string;
  disabled?: boolean;
}

const ButtonStyles = styled.button<StyledProps>`
  display: ${(props) => props.display || "inline-flex"};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "48px"};
  background-color: ${(props) => props.backgroundColor || props.theme.red};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "none"};
  cursor: ${(props) => props.cursor || "pointer"};
  color: ${(props) => props.color || props.theme.white};

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  disabled,
  loading,
  onClick,
  ...props
}: ButtonProps & StyledProps) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };
  return (
    <ButtonStyles
      disabled={loading || disabled}
      {...props}
      onClick={handleClick}>
      {loading ? <Loading /> : children}
    </ButtonStyles>
  );
};

export default Button;
