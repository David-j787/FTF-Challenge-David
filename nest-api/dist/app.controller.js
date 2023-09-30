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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(httpCustomService) {
        this.httpCustomService = httpCustomService;
    }
    getUser(name) {
        return this.httpCustomService.getUser(name);
    }
    getRepos(name) {
        return this.httpCustomService.getRepos(name);
    }
    getSingleRepo(owner, repo) {
        return this.httpCustomService.getRepoCommits(owner, repo);
    }
    getHola() {
        return this.httpCustomService.getHola();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('getUser/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('getRepos/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getRepos", null);
__decorate([
    (0, common_1.Get)('getRepoCommits/:owner/:repo'),
    __param(0, (0, common_1.Param)('owner')),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getSingleRepo", null);
__decorate([
    (0, common_1.Get)('hola'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHola", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.HttpCustomService])
], AppController);
//# sourceMappingURL=app.controller.js.map