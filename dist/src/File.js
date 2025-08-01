"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const node_path_1 = __importDefault(require("node:path"));
const promises_1 = __importDefault(require("node:fs/promises"));
class File {
    constructor(buffer, name, encoding, mimeType) {
        this.buffer = buffer;
        this.name = name;
        this.encoding = encoding;
        this.mimeType = mimeType;
    }
    getBuffer() {
        return this.buffer;
    }
    getName() {
        return this.name;
    }
    getEncoding() {
        return this.encoding;
    }
    getMimeType() {
        return this.mimeType;
    }
    getSize() {
        return this.buffer.length;
    }
    async ensureDir(file) {
        const dir = node_path_1.default.dirname(file);
        await promises_1.default.mkdir(dir, { recursive: true });
    }
    async write(file) {
        await this.ensureDir(file);
        await promises_1.default.writeFile(file, this.buffer);
    }
    async append(file) {
        await this.ensureDir(file);
        await promises_1.default.appendFile(file, this.buffer);
    }
}
exports.File = File;
