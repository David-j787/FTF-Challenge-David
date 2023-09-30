import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class HttpCustomService {
  async getUser(@Param('name') name: string) {
    const apiCall = fetch(`https://api.github.com/users/${name}`).then((res) =>
      res.json(),
    );

    return apiCall;
  }

  async getRepos(@Param('name') name: string) {
    const apiCall = fetch(`https://api.github.com/users/${name}/repos`).then(
      (res) => res.json(),
    );

    return apiCall;
  }

  async getRepoCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
  ) {
    const apiCall = fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
    ).then((res) => res.json());

    return apiCall;
  }

  async getHola() {
    return {
      hola: 'hola'
    }
  }
}
