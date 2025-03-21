export default function CustomButton({ label, icon, classes }) {
  return (
    <div className="flex justify-center items-center pt-1">
      <button
        className={`w-full cursor-pointer py-2 rounded-lg flex justify-center items-center gap-2 font-bold bg-violet-600 ${classes}`}
        type="submit"
      >
        {icon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            viewBox="0 0 256 256"
            className="pointer-events-none"
          >
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>
        )}
        {label}
      </button>
    </div>
  );
}
