import { TextCursorInput } from "lucide-react";

export default function InputControl({ name, handleNameChange }) {
  return (
    <div className="relative mt-6 px-4 py-2 md:mt-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-light">
          <TextCursorInput className="h-3 w-3" />
          Name
        </span>
      </div>
      <div className="flex justify-between rounded-lg p-1">
        <input
          maxLength="10"
          value={name}
          onChange={handleNameChange}
          type="text"
          placeholder="Your logo name"
          className="peer relative flex w-full items-center rounded-xl border border-white/5 bg-transparent p-2 text-white transition-opacity duration-500 outline-none placeholder:text-white/40 dark:border-black/30 dark:text-black"
        />
      </div>
    </div>
  );
}
