"use strict";
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
const sql_request_1 = require("../../db/sql.request");
const db_1 = __importDefault(require("../../db"));
class Service {
    constructor(table) {
        this.db = db_1.default;
        this.table = table;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [all] = yield (yield this.db).query((0, sql_request_1.sqlGetAllData)(this.table));
            return all;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [one] = yield (yield this.db).query((0, sql_request_1.sqlGetOneById)(this.table, id));
            return one;
        });
    }
    createElement(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const [typedAnimals] = yield (yield this.db).query((0, sql_request_1.sqlGetAllData)("type_animals"));
            const typedAnimalsId = typedAnimals.map((item) => item.id);
            if (!~typedAnimalsId.indexOf(payload.type_id)) {
                return [];
            }
            if (!payload.commands && !payload.name && !payload.birthday) {
                return [];
            }
            const [resultHeader] = yield (yield this.db).query((0, sql_request_1.sqlCreateElement)(this.table), [
                payload.name,
                payload.commands,
                payload.birthday,
                payload.type_id,
            ]);
            return resultHeader;
        });
    }
    updateElement(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!payload.commands) {
                return [];
            }
            const element = yield this.getOne(id);
            if (!element.length) {
                return [];
            }
            const [updated] = yield (yield this.db).execute((0, sql_request_1.sqlUpdateElementById)(this.table, id), [payload.commands]);
            return updated;
        });
    }
}
exports.default = Service;
//# sourceMappingURL=Base.service.js.map