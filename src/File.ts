import path from "node:path";

import fsp from "node:fs/promises";

export class File {
  constructor(
    private buffer: Buffer<ArrayBuffer>,
    private name: string,
    private encoding: string,
    private mimeType: string
  ) {}

  public getBuffer(): Buffer<ArrayBuffer> {
    return this.buffer;
  }

  public getName(): string {
    return this.name;
  }

  public getEncoding(): string {
    return this.encoding;
  }

  public getMimeType(): string {
    return this.mimeType;
  }

  public getSize(): number {
    return this.buffer.length;
  }

  async ensureDir(file: string) {
    const dir = path.dirname(file);

    await fsp.mkdir(dir, { recursive: true });
  }

  async write(file: string) {
    await this.ensureDir(file);

    await fsp.writeFile(file, this.buffer);
  }

  async append(file: string) {
    await this.ensureDir(file);

    await fsp.appendFile(file, this.buffer);
  }
}
