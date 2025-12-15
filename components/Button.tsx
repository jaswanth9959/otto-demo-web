interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  content: string;
  OnClick?: () => void;
  boxShadow?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  disabled?: boolean;
}

const Button = ({
  width = "130px",
  height = "36px",
  backgroundColor = "#2aa782",
  textColor = "white",
  content = "Button",
  boxShadow = "",
  OnClick,
  borderRadius = "18px",
  padding = "px-2 py-1",
  fontSize = "12px",
  fontWeight = "bold",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center disabled:cursor-default`}
      style={{
        width,
        height,
        backgroundColor,
        color: textColor,
        borderRadius,
        padding,
        boxShadow,
      }}
      onClick={OnClick}
      disabled={disabled}
    >
      <div style={{ fontSize, fontWeight }}>{content}</div>
    </button>
  );
};

export const BookDemoButton = ({
  OnClick,
  textColor = "white",
}: {
  OnClick: () => void;
  textColor?: string;
}) => {
  return (
    <>
      <div className="hidden lg:block">
        <Button
          content="Book a Demo"
          OnClick={OnClick}
          width="145px"
          height="42px"
          padding="10px 20px"
          borderRadius="21px"
          fontSize="16px"
          textColor={textColor}
        />
      </div>

      <div className="block lg:hidden">
        <Button
          content="Book a Demo"
          OnClick={OnClick}
          width="130px"
          height="36px"
          padding="4px 8px"
          borderRadius="18px"
          fontSize="12px"
          textColor={textColor}
        />
      </div>
    </>
  );
};

export default Button;
