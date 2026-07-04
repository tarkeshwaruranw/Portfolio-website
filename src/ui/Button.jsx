const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-violet-500 border border-transparent hover:brightness-110",

    outline:
      "border border-slate-700 hover:border-slate-400 hover:bg-slate-800",
  };

  return (
    <button
      {...props}
      className={`
        cursor-pointer
        text-white
        rounded-full
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        z-20
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-400
        focus:ring-offset-2
        focus:ring-offset-black
        hover:scale-105
        hover:-translate-y-0.5
        hover:shadow-md
        hover:shadow-indigo-500/40
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:scale-100
        disabled:hover:shadow-none
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
