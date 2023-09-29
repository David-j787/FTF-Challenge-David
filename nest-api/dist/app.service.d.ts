export declare class HttpCustomService {
    getUser(name: string): Promise<any>;
    getRepos(name: string): Promise<any>;
    getRepoCommits(owner: string, repo: string): Promise<any>;
}
