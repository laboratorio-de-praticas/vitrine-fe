  export const Icon = ({ text, curso }) => {
    return (
      <div className={`rounded-[12px] px-4 py-2 3xl:px-5 3xl:py-3 ${curso}-PROGRESS text-[16px] 3xl:text-[38px] text-white inline-block `}>
        {text}
      </div>
    );
  };