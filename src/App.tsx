import { useState } from 'react';
import { fetchRepo } from './api/github';
import RepoInput from './components/RepoInput';
import type { Repo } from './types/github';
import RepoInfo from './components/RepoInfo';

function App() {
  const [repoData, setRepoData] = useState<Repo | null>(null);
  const [errorMessage, setErrorMessage] = useState<String | null>(null);

  const handleSubmit = async (repo: string) => {
    setErrorMessage(null);
    const data = await fetchRepo(repo);
    console.log(data);
    if (data === null) {
      setErrorMessage('Error loading repo');
    }
    setRepoData(data);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="w-full max-w-4xl px-6">
        <h1 className="mb-8 text-center text-5xl font-bold tracking-tight text-slate-900">
          Repo Visualizer
        </h1>

        <div className="flex flex-col items-center">
          <RepoInput onSubmit={handleSubmit} />

          {errorMessage && (
            <p className="mb-6 mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </p>
          )}

          {repoData && (
            <div className="mt-6 w-full flex justify-center">
              <RepoInfo repo={repoData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
