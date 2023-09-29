import { Controller, Get, Param } from '@nestjs/common';
import { HttpCustomService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly httpCustomService: HttpCustomService) {}

  @Get('getUser/:name')
  getUser(@Param('name') name: string): any {
    return this.httpCustomService.getUser(name);
  }

  @Get('getRepos/:name')
  getRepos(@Param('name') name: string): any {
    return this.httpCustomService.getRepos(name);
  }

  @Get('getRepoCommits/:owner/:repo')
  getSingleRepo(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ): any {
    return this.httpCustomService.getRepoCommits(owner, repo);
  }
}
