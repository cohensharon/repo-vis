import { useState } from 'react';

interface Props {
  onSubmit: (repo: string) => void;
}

export default function RepoInput({ onSubmit }: Props) {
  const [input, setInput] = useState('');

  return (
    <div className="mb-8 flex w-full max-w-xl items-center gap-3">
      <input
        type="text"
        placeholder="owner/repo (e.g. facebook/react)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
      />

      <button
        onClick={() => onSubmit(input)}
        className="rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Load Repo
      </button>
    </div>
  );
}
