import type { Repo } from "../types/github";

interface Props {
  repo: Repo;
}

export default function RepoInfo({ repo }: Props) {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
        {repo.full_name}
      </h2>

      <p className="mt-3 text-base font-normal leading-7 text-slate-600">
        {repo.description ?? "No description available"}
      </p>

      <div className="mt-6 flex gap-4">
        <div className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
          ⭐ Stars: {repo.stargazers_count.toLocaleString()}
        </div>
        <div className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
          🍴 Forks: {repo.forks_count.toLocaleString()}
        </div>
      </div>
    </div>
  );
}