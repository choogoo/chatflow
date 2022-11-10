"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = exports.transferAIBOT = exports.transferNLP = exports.init = exports.nlp = exports.chatAibot = exports.chat = void 0;
var chat_1 = require("./lib/chat");
Object.defineProperty(exports, "chat", { enumerable: true, get: function () { return chat_1.chat; } });
Object.defineProperty(exports, "chatAibot", { enumerable: true, get: function () { return chat_1.chatAibot; } });
var nlp_1 = require("./lib/nlp");
Object.defineProperty(exports, "nlp", { enumerable: true, get: function () { return nlp_1.nlp; } });
var auth_1 = require("./lib/auth");
Object.defineProperty(exports, "init", { enumerable: true, get: function () { return auth_1.auth; } });
var util_1 = require("./lib/util");
Object.defineProperty(exports, "transferNLP", { enumerable: true, get: function () { return util_1.transferNLP; } });
Object.defineProperty(exports, "transferAIBOT", { enumerable: true, get: function () { return util_1.transferAIBOT; } });
Object.defineProperty(exports, "genToken", { enumerable: true, get: function () { return util_1.genToken; } });
