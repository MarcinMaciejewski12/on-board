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
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const error_1 = require("../utils/error");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = bcryptjs_1.default.genSaltSync(10);
    const passwordHash = bcryptjs_1.default.hashSync(req.body.password, hash);
    try {
        const newUser = new UserModel_1.default({
            username: req.body.username,
            email: req.body.email,
            password: passwordHash,
        });
        yield newUser.save();
        res.status(200).send("new user created!");
    }
    catch (err) {
        next(err);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userLogin = UserModel_1.default.findOne({ username: req.body.username });
        if (!userLogin)
            return next((0, error_1.createError)(404, "user not found"));
        // const userPassword = bcrypt.compare(req.body.password, userLogin);
        res.status(200).json(userLogin);
    }
    catch (err) {
        next(err);
    }
});
exports.login = login;
