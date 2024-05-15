import {
  changeFileManagerState,
  changeSettings,
  getFileManagerState,
  getSettings,
} from "@App/config/change"
import { FileManager } from "@App/fileSystem/file"
import { getMdTextFromMonaco } from "@App/text/getMdText"
import { replaceMonacoAll, replaceMonacoAllForce } from "@App/text/replaceText"
import IOSSwitch from "@Root/js/React/Components/myCom/Switches/SwitchIOS"
import { Box, Button, Divider, ThemeProvider, Typography } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import { observer } from "mobx-react"
import { useTheme } from "@mui/material/styles"

import React from "react"
import SwitchIOS from "@Root/js/React/Components/myCom/Switches/SwitchIOS"
import MyPaper from "@Root/js/React/Components/myCom/Paper"
import alertUseArco from "@App/message/alert"
import { FileFolderManager } from "@App/fileSystem/file"
import RenamableSimpleTreeView from "./SubFile.tsx/FileFolder"
import FileManagment from "./SubFile.tsx/FileManager"
import FileExplorer from "./SubFile.tsx/FileManager"

const fileManager = new FileManager()
let _t: NodeJS.Timeout | null
const FileDrawer = observer(function FileDrawer() {
  const [fileDirectoryArr, setFileDirectoryArr] = React.useState<any>([])
  const [editingFileName, setEditingFileName] = React.useState("")
  const theme = useTheme()
  const toggleDrawer = (newOpen: boolean) => () => {
    changeFileManagerState(newOpen)
  }
  const handleOnChangeFileEditLocalSwitch = (_e: Event, i: boolean) => {
    changeSettings({
      basic: { fileEditLocal: i },
    })
    // if (i) {
    //   // 监听本地文件改动
    //   _t = setInterval(async () => {
    //     const content = await fileManager.readFile()
    //   }, 1000)
    // } else {
    //   _t = null
    // }
  }
  return (
    <>
      <Drawer
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent", // 设置背景为透明
          },
        }}
        anchor="right"
        open={getFileManagerState()}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            padding: "20px",
            width: "26svw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100svh",
            flexDirection: "column",
          }}
        >
          <Box className={"FLEX COL"}>
            <FileExplorer fileDirectoryArr={fileDirectoryArr} />
            <Typography>
              {getSettings().basic.fileEditLocal ? editingFileName : ""}
            </Typography>
            <Button
              sx={{ mb: "10px" }}
              onClick={async () => {
                try {
                  const fileHandle = await fileManager.openSingleFile()
                  setEditingFileName(fileHandle?.name ?? "")
                  if (fileHandle) {
                    alertUseArco("正在打开本地文件，别急，你给我等会😅")
                    const content = await fileManager.readFile()
                    if (content) {
                      replaceMonacoAll(window.monaco, window.editor, content)
                      alertUseArco(`打开${fileHandle?.name}成功！😀`)
                    }
                  } else {
                    alertUseArco("左顾右盼，活在梦幻?", 2500, {
                      kind: "warning",
                    })
                  }
                } catch (error) {
                  alertUseArco("尼玛的报错乐🤣", 2000, { kind: "error" })
                }
              }}
              variant="contained"
              color="primary"
            >
              打开文件
            </Button>
            <Button
              sx={{ mb: "10px" }}
              variant="contained"
              color="primary"
              onClick={async () => {
                let fileFolderManager = new FileFolderManager()
                const directoryHandle = await fileFolderManager.openDirectory()
                if (directoryHandle) {
                  // fileFolderManager.listDirectory(directoryHandle)
                  // console.log(
                  //   await fileFolderManager.listDirectoryAsObject(
                  //     directoryHandle
                  //   )
                  // )
                  setFileDirectoryArr(
                    await fileFolderManager.readDirectoryAsArray(directoryHandle)
                  )
                  console.log(await fileFolderManager.readDirectoryAsArray(directoryHandle));
                  // fileFolderManager.createNewFolder(directoryHandle, "test2")
                }
              }}
            >
              打开文件夹
            </Button>
            <Button
              sx={{ mb: "10px" }}
              variant="contained"
              onClick={() => {
                fileManager.saveAsFile(getMdTextFromMonaco())
              }}
            >
              另存为
            </Button>
            <Box className={"FLEX COW ALI-CEN"}>
              <Typography
                sx={{ mr: "10px", fontSize: "17px" }}
                color={theme.palette.info.contrastText}
              >
                同步本地编辑
              </Typography>
              <SwitchIOS
                checked={getSettings().basic.fileEditLocal}
                size="small"
                // value={getSettings().basic.syncScroll}
                inputProps={{ "aria-label": "controlled" }}
                onChange={handleOnChangeFileEditLocalSwitch}
              ></SwitchIOS>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  )
})
export default FileDrawer
