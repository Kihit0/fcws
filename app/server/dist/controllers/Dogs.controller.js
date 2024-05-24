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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const Base_controller_1 = __importDefault(require("./base/Base.controller"));
let DogsController = class DogsController extends Base_controller_1.default {
    constructor() {
        super("dogs");
    }
    getDog(id) {
        const _super = Object.create(null, {
            getOneData: { get: () => super.getOneData }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getOneData.call(this, id);
        });
    }
    createDog(body) {
        const _super = Object.create(null, {
            createElement: { get: () => super.createElement }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.createElement.call(this, body);
        });
    }
    updateDog(id, body) {
        const _super = Object.create(null, {
            updateElement: { get: () => super.updateElement }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.updateElement.call(this, id, body);
        });
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogsController.prototype, "getDog", null);
__decorate([
    (0, routing_controllers_1.Post)(),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DogsController.prototype, "createDog", null);
__decorate([
    (0, routing_controllers_1.Put)("/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DogsController.prototype, "updateDog", null);
DogsController = __decorate([
    (0, routing_controllers_1.JsonController)("/dogs"),
    __metadata("design:paramtypes", [])
], DogsController);
exports.default = DogsController;
//# sourceMappingURL=Dogs.controller.js.map