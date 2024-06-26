const path = require("node:path");

const fsp = require("node:fs/promises");

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
    const dir = path.dirname(file);

    await fsp.mkdir(dir, { recursive: true });
  }

  async write(file) {
    await this.ensureDir(file);

    await fsp.writeFile(file, this.buffer);
  }

  async append(file) {
    await this.ensureDir(file);

    await fsp.appendFile(file, this.buffer);
  }
}

module.exports = File;
