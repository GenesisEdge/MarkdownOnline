/**
 * @description 文件管理类
 */
export declare class FileManager {
    fileHandle: FileSystemFileHandle | null;
    /**
     * @description 构造函数
     */
    constructor(fileHandle?: FileSystemFileHandle | null);
    /**
     * @description 打开单个文件并获取句柄
     */
    openSingleFile(): Promise<FileSystemFileHandle | null>;
    /**
     * @description 读取文件内容
     * @returns 内容，如果没有打开则为undefined
     */
    readFile(): Promise<string | undefined>;
    /**
     * @description 静默保存文件
     */
    saveFileSilently(text: string): Promise<boolean | void>;
    /**
     * @description 另存为
     */
    saveAsFile(text: string): Promise<void>;
}
/**
 * @description 处理文件夹类
 */
export declare class FileFolderManager {
    protected topDirectoryHandle: FileSystemDirectoryHandle | undefined;
    protected currentDirectoryHandle: FileSystemDirectoryHandle | undefined;
    constructor(directoryHandle?: FileSystemDirectoryHandle);
    getTopDirectoryHandle(): FileSystemDirectoryHandle | undefined;
    getCurrentDirectoryHandle(): FileSystemDirectoryHandle | undefined;
    /**
     * @description 打开目录并存储句柄到全局变量
     */
    openDirectory(): Promise<FileSystemDirectoryHandle | null>;
    readDirectoryAsArray(directoryHandle: FileSystemDirectoryHandle): Promise<any[]>;
    listDirectoryAsObject(directoryHandle: any): Promise<any>;
    /**
     * @description 检查该目录是否存在，如果存在那么设置当前目录为该目录的句柄
     */
    checkOrCreateDirectory(directoryHandle: FileSystemDirectoryHandle, dirName: string): Promise<FileSystemDirectoryHandle>;
    renameFolder(directoryHandle: FileSystemDirectoryHandle, oldName: string, newName: string): Promise<void>;
    /**
     * @description 在当前目录写入文件
     */
    writeFile(directoryHandle: FileSystemDirectoryHandle, fileName: string, content: string | Blob): Promise<void>;
    /**
     * @description 以base64写入文件
     */
    writeBase64ImageFile(directoryHandle: FileSystemDirectoryHandle, fileName: string, base64Data: string): Promise<void>;
    private copyDirectory;
}
