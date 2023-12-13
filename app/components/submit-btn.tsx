import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 hover:bg-gray-950 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 active:scale-[1.02] disabled:bg-opacity-90 disabled:hover:bg-opacity-90"
        disabled={pending}
      >
        {pending ? (
          <div className="animate-spin h-5 w-5 rounded-full border-white border-b-2"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-md opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </div>
  );
}
