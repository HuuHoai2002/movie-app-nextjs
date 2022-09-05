import styled from "styled-components";

interface StyledProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
}
const LoadingStyles = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "16px"};
  height: ${(props) => props.height || "16px"};
  border-radius: ${(props) => props.borderRadius || "50%"};
  border: ${(props) => props.border || `2px solid ${props.theme.white}`};
  border-top: ${(props) => props.border || "2px solid transparent"};
  animation: spiner 1s linear infinite;

  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

interface LoadingProps {}

const Loading = ({ ...props }: LoadingProps & StyledProps) => {
  return <LoadingStyles {...props}></LoadingStyles>;
};

export default Loading;
