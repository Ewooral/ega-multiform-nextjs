type CustomButtonProps = {
    children: React.ReactNode;
}

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
  return (
    <div
      {...props}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded custom_button hover:bg-blue-700"
    >
      {children}
    </div>
  );
}

export default CustomButton;