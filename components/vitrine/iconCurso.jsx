  export const IconCurso = ({ text }) => {
    return (
      <div className={`rounded-[20px] px-6 py-3 ${text}-ICON text-white inline-block text-[clamp(18px,2vw,40px)`}>
        {text}
      </div>
    );
  };