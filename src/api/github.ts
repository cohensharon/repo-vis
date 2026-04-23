import axios from "axios";
import type { Repo } from "../types/github";


const GITHUB_URL_BASE = "https://api.github.com/repos/";

export async function fetchRepo(repo: string): Promise<Repo | null> {
    const ownerRepo: string[] = repo.split("/");
    const repoURL = `${GITHUB_URL_BASE}${ownerRepo[0]}/${ownerRepo[1]}`;

    try {
        const response = await axios.get(repoURL);
        return response.data;
    } catch(error) {
        console.error("Fetch Repo API call failed:", error);
        return null;
    }
};
