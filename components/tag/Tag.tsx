import styled from "styled-components";

interface StyledProps {
  backgroundColor?: string;
}

const TagStyles = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  border-radius: 7px;
`;

interface Props {
  children: React.ReactNode;
}

const Tag = ({ children, ...props }: Props & StyledProps) => {
  return <TagStyles {...props}>{children}</TagStyles>;
};

export default Tag;
