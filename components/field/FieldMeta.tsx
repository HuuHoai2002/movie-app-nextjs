import styled from "styled-components";

interface StyledProps {
  labelColor?: string;
  valueColor?: string;
}
const FieldMetaStyled = styled.div<StyledProps>`
  display: flex;
  /* align-items: center; */
  gap: 10px;

  .label {
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.labelColor || props.theme.white};
    opacity: 0.8;
  }

  .value {
    font-size: 16px;
    color: ${(props) => props.valueColor || props.theme.white};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    .item {
      display: inline-block;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }
  }
`;

interface FieldMetaProps {
  label: string;
  value: string | string[];
  labelColor?: string;
  valueColor?: string;
}

const FieldMeta = (props: FieldMetaProps & StyledProps) => {
  return (
    <FieldMetaStyled {...props}>
      <span className="label">{props.label}</span>
      <span className="value">
        {Array.isArray(props.value)
          ? props.value.map((item) => (
              <span className="item" key={item}>
                {item}
              </span>
            ))
          : props.value}
      </span>
    </FieldMetaStyled>
  );
};

export default FieldMeta;
