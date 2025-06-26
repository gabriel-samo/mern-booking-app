import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => onClose(), 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  let styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-md shadow-xl bg-accent-secondary border-l-[5px] border-green-600 text-dark max-w-md"
      : "fixed top-4 right-4 z-50 p-4 rounded-md shadow-xl bg-accent-secondary border-l-[5px] border-red-600 text-dark max-w-md";

  styles += isClosing ? " animate-slide-out" : " animate-slide-in";

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
      <div className="absolute h-[5px] bottom-0 left-0 bg-blue-500 animate-progress w-full" />
    </div>
  );
};

export default Toast;
