type IconProps = {
    text: string;
  };
  
  export const IconCurso = ({ text }: IconProps) => {
    return (
      <div className={`rounded-[20px] px-6 py-3 ${text}-ICON text-white inline-block`}>
        {text}
      </div>
    );
  };