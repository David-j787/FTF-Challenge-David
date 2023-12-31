"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpCustomService = void 0;
const common_1 = require("@nestjs/common");
let HttpCustomService = class HttpCustomService {
    async getUser(name) {
        const apiCall = fetch(`https://api.github.com/users/${name}`).then((res) => res.json());
        return apiCall;
    }
    async getRepos(name) {
        const apiCall = fetch(`https://api.github.com/users/${name}/repos`).then((res) => res.json());
        return apiCall;
    }
    async getRepoCommits(owner, repo) {
        const apiCall = fetch(`https://api.github.com/repos/${owner}/${repo}/commits`).then((res) => res.json());
        return apiCall;
    }
    async getHola() {
        return {
            hola: 'hola'
        };
    }
};
exports.HttpCustomService = HttpCustomService;
__decorate([
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HttpCustomService.prototype, "getUser", null);
__decorate([
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HttpCustomService.prototype, "getRepos", null);
__decorate([
    __param(0, (0, common_1.Param)('owner')),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HttpCustomService.prototype, "getRepoCommits", null);
exports.HttpCustomService = HttpCustomService = __decorate([
    (0, common_1.Injectable)()
], HttpCustomService);
//# sourceMappingURL=app.service.js.map