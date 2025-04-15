  export const Icon = ({ text, curso }) => {
    return (
      <div className={`rounded-[12px] px-4 py-2 ${curso}-PROGRESS text-white inline-block `}>
        {text}
      </div>
    );
  };