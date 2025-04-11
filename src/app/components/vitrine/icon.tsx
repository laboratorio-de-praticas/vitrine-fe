type IconProps = {
    text: string;
    curso: string;
  };
  
  export const Icon = ({ text, curso }: IconProps) => {
    return (
      <div className={`rounded-[20px] px-6 py-3 ${curso}-PROGRESS text-white inline-block`}>
        {text}
      </div>
    );
  };