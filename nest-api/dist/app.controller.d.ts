import { HttpCustomService } from './app.service';
export declare class AppController {
    private readonly httpCustomService;
    constructor(httpCustomService: HttpCustomService);
    getUser(name: string): any;
    getRepos(name: string): any;
    getSingleRepo(owner: string, repo: string): any;
    getHola(): any;
}
