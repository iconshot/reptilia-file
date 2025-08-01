export declare class File {
    private buffer;
    private name;
    private encoding;
    private mimeType;
    constructor(buffer: Buffer<ArrayBuffer>, name: string, encoding: string, mimeType: string);
    getBuffer(): Buffer<ArrayBuffer>;
    getName(): string;
    getEncoding(): string;
    getMimeType(): string;
    getSize(): number;
    ensureDir(file: string): Promise<void>;
    write(file: string): Promise<void>;
    append(file: string): Promise<void>;
}
