const supportFileTypes = [".md", ".py", ".js", ".ts"]

/**
 * @description 文件管理类
 */
export class FileManager {
  public fileHandle: FileSystemFileHandle | null = null
  /**
   * @description 构造函数
   */
  constructor(fileHandle?: FileSystemFileHandle | null) {
    if (fileHandle) {
      this.fileHandle = fileHandle
    } else {
      this.fileHandle = window._fileHandle ?? window._fileHandle
    }
  }

  /**
   * @description 打开单个文件并获取句柄
   */
  async openSingleFile(): Promise<FileSystemFileHandle | null> {
    try {
      ;[this.fileHandle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": supportFileTypes },
          },
        ],
      })
      window._fileHandle = this.fileHandle!
      return this.fileHandle
    } catch (error) {
      console.error("Error opening file:", error)
      return null
    }
  }

  /**
   * @description 读取文件内容
   * @returns 内容，如果没有打开则为undefined
   */
  async readFile(): Promise<string | undefined> {
    if (!this.fileHandle) {
      return
    }
    const file = await this.fileHandle.getFile()
    const content = await file.text()
    // console.log("File content:", content)
    return content
  }

  /**
   * @description 静默保存文件
   */
  async saveFileSilently(text: string): Promise<boolean | void> {
    if (!this.fileHandle) {
      // console.log("No file is opened to save.")
      return
    }
    const writable = await this.fileHandle.createWritable()
    const content = text
    await writable.write(content)
    await writable.close()
    return true
  }
  /**
   * @description 另存为
   */
  async saveAsFile(text: string): Promise<void> {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: "text",
        types: [
          {
            description: "Text Files",
            accept: {
              "text/plain": supportFileTypes,
            },
          },
        ],
      })

      const writable = await handle.createWritable()
      await writable.write(text ?? "Sth..")
      await writable.close()
      console.log("File saved successfully as new file.")
    } catch (err) {
      console.error("Save As operation cancelled or failed:", err)
    }
  }
}

/**
 * @description 处理文件夹类
 */
export class FileFolderManager {
  private directoryHandle: FileSystemDirectoryHandle | undefined
  constructor(directoryHandle?: FileSystemDirectoryHandle) {
    if (directoryHandle) {
      this.directoryHandle = directoryHandle
    } else directoryHandle = undefined
  }
  public getDirectoryHandle() {
    return this.directoryHandle
  }
  async openDirectory(): Promise<FileSystemDirectoryHandle | null> {
    try {
      // 通过 showDirectoryPicker 打开文件夹选择对话框
      const directoryHandle: FileSystemDirectoryHandle =
        await window.showDirectoryPicker()
      // console.log("Directory selected:", directoryHandle)
      this.directoryHandle = directoryHandle
      return directoryHandle
    } catch (error) {
      console.error("Error opening directory:", error)
      return null
    }
  }

  public async createNewFolder(
    directoryHandle: FileSystemDirectoryHandle,
    folderName: string
  ): Promise<FileSystemDirectoryHandle | null> {
    try {
      // 在选中的目录中创建新文件夹
      const newFolderHandle: FileSystemDirectoryHandle =
        await directoryHandle.getDirectoryHandle(folderName, { create: true })
      console.log("Folder created:", newFolderHandle)
      return newFolderHandle
    } catch (error) {
      console.error("Error creating folder:", error)
      return null
    }
  }

  public async renameFolder(
    directoryHandle: FileSystemDirectoryHandle,
    oldName: string,
    newName: string
  ): Promise<void> {
    try {
      // 获取旧文件夹句柄
      const oldFolderHandle: any =
        await directoryHandle.getDirectoryHandle(oldName)
      // 创建新文件夹
      const newFolderHandle: FileSystemDirectoryHandle =
        await directoryHandle.getDirectoryHandle(newName, { create: true })

      // 复制旧文件夹内容到新文件夹
      for await (const entry of oldFolderHandle.values()) {
        if (entry.kind === "file") {
          const file = await entry.getFile()
          const newFileHandle = await newFolderHandle.getFileHandle(
            entry.name,
            { create: true }
          )
          const writable = await newFileHandle.createWritable()
          await writable.write(file)
          await writable.close()
        } else if (entry.kind === "directory") {
          // 递归复制子目录
          await this.copyDirectory(entry, newFolderHandle)
        }
      }

      // 删除旧文件夹
      await directoryHandle.removeEntry(oldName, { recursive: true })

      console.log(`Renamed folder from ${oldName} to ${newName}`)
    } catch (error) {
      console.error("Error renaming folder:", error)
    }
  }

  public async writeFile(
    directoryHandle: FileSystemDirectoryHandle,
    fileName: string,
    content: string | Blob
  ): Promise<void> {
    try {
      const fileHandle = await directoryHandle.getFileHandle(fileName, {
        create: true,
      })
      const writable = await fileHandle.createWritable()
      await writable.write(content)
      await writable.close()
      console.log(`File ${fileName} written successfully.`)
    } catch (error) {
      console.error("Error writing file:", error)
    }
  }
  public async writeBase64ImageFile(
    directoryHandle: FileSystemDirectoryHandle,
    fileName: string,
    base64Data: string
  ): Promise<void> {
    try {
      const binaryData = atob(base64Data.split(",")[1])
      const arrayBuffer = new ArrayBuffer(binaryData.length)
      const uint8Array = new Uint8Array(arrayBuffer)

      for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i)
      }

      const blob = new Blob([uint8Array], { type: "image/png" })
      await this.writeFile(directoryHandle, fileName, blob)
    } catch (error) {
      console.error("Error writing Base64 image file:", error)
    }
  }
  private async copyDirectory(
    sourceHandle: any,
    destinationHandle: FileSystemDirectoryHandle
  ): Promise<void> {
    const newDirHandle = await destinationHandle.getDirectoryHandle(
      sourceHandle.name,
      { create: true }
    )

    for await (const entry of sourceHandle.values()) {
      if (entry.kind === "file") {
        const file = await entry.getFile()
        const newFileHandle = await newDirHandle.getFileHandle(entry.name, {
          create: true,
        })
        const writable = await newFileHandle.createWritable()
        await writable.write(file)
        await writable.close()
      } else if (entry.kind === "directory") {
        await this.copyDirectory(entry, newDirHandle)
      }
    }
  }
}
