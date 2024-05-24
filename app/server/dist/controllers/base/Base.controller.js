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
const Base_service_1 = __importDefault(require("./Base.service"));
const message_data_1 = require("../data/message.data");
class BaseController {
    constructor(nameTable) {
        this.service = new Base_service_1.default(nameTable);
    }
    getAllData() {
        return __awaiter(this, void 0, void 0, function* () {
            const all = yield this.service.getAll();
            return Object.assign({
                data: all,
            }, message_data_1.success);
        });
    }
    getOneData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const one = yield this.service.getOne(id);
            return Object.assign({ data: one }, message_data_1.success);
        });
    }
    ;
    createElement(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const created = yield this.service.createElement(body);
            if (Array.isArray(created) && !created.length) {
                return message_data_1.error;
            }
            return message_data_1.success;
        });
    }
    ;
    updateElement(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield this.service.updateElement(id, body);
            if (updated.length) {
                return Object.assign({ data: updated }, message_data_1.error);
            }
            return Object.assign({ data: updated }, message_data_1.success);
        });
    }
    ;
}
__decorate([
    (0, routing_controllers_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "getAllData", null);
exports.default = BaseController;
//# sourceMappingURL=Base.controller.js.map