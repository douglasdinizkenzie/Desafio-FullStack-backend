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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const user_entity_1 = require("../../entities/user.entity");
const data_source_1 = require("../../data-source");
const users_schemas_1 = require("../../schemas/users.schemas");
const updateUserService = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    const user = yield userRepository.findOneBy({ id: userId });
    const updatedUser = userRepository.create(Object.assign(Object.assign({}, user), data));
    yield userRepository.save(updatedUser);
    return users_schemas_1.userSchemaResponse.parse(updatedUser);
});
exports.updateUserService = updateUserService;
