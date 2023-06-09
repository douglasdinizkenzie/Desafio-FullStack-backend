"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactsRoutes = void 0;
const express_1 = require("express");
const ensureIsAuth_middleware_1 = require("../middlewares/ensureIsAuth.middleware");
const contacts_controller_1 = require("../controllers/contacts.controller");
const ensureDataIsValid_middleware_1 = require("../middlewares/ensureDataIsValid.middleware");
const contacts_schema_1 = require("../schemas/contacts.schema");
const ensureContactUserAlreadyAdded_middleware_1 = require("../middlewares/ensureContactUserAlreadyAdded.middleware");
const ensureContactExists_middleware_1 = require("../middlewares/ensureContactExists.middleware");
exports.contactsRoutes = (0, express_1.Router)();
exports.contactsRoutes.use(ensureIsAuth_middleware_1.ensureIsAuthMiddleware);
exports.contactsRoutes.get("", contacts_controller_1.ListAllContactsController);
exports.contactsRoutes.get("/:id", ensureContactExists_middleware_1.ensureContactExistsMiddleware, contacts_controller_1.listContactPerIdController);
exports.contactsRoutes.post("", (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(contacts_schema_1.contactsSchemaRequest), ensureContactUserAlreadyAdded_middleware_1.ensureContactUserAlreadyAddedMiddleware, contacts_controller_1.CreateContactsController);
exports.contactsRoutes.patch("/:id", (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(contacts_schema_1.contactsSchemaRequestUpdate), ensureContactExists_middleware_1.ensureContactExistsMiddleware, contacts_controller_1.updateContactController);
exports.contactsRoutes.delete("/:id", ensureContactExists_middleware_1.ensureContactExistsMiddleware, contacts_controller_1.deleteContactController);
