import * as React from "react"
import { styled, alpha } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Menu, { MenuProps } from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import EditIcon from "@mui/icons-material/Edit"
import AttachEmailIcon from "@mui/icons-material/AttachEmail"
import Divider from "@mui/material/Divider"
import ArchiveIcon from "@mui/icons-material/Archive"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import MyButton from "../../Components/myCom/CustomButton"
import myPrint from "@App/export/myPrint"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { Message } from "@arco-design/web-react"
// import ImageManager from "./ImageManager"
import save, { isSaved } from "@App/save"
import { Modal } from "@arco-design/web-react"
import { kit } from "@Root/js/index"
import { useImage } from "@Mobx/Image"
import { observer } from "mobx-react"
import StyledMenu from "@Com/myCom/StyleMenu"
import CloudMail from "@App/share/CloudMail"
import { getRenderHTML } from "@App/text/getMdText"
import exportAsImage from "@App/export/domToImg"
import Share from "./Share/Share"
import Export from "./Export/Export"
// import domtoimg from "@App/export/domToImg"

const CustomizedMenus = observer(() => {
  const image = useImage()
  // 1本menu anchor
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  // 2分享 anchor
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null)

  // 3导出 anchor
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null)

  const [modalState, setModalState] = React.useState<boolean>(false)
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)
  const open3 = Boolean(anchorEl3)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget)
    event.stopPropagation()
  }
  const handleClick3 = async (event: React.MouseEvent<HTMLElement>) => {
    if (await isSaved()) {
      //@ts-ignore
      setAnchorEl3(event.target)
      event.stopPropagation()
    } else {
      handleClose()
      setModalState(true)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClose2 = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(null)
    e.stopPropagation()
  }
  const handleClose3 = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(null)
    e.stopPropagation()
  }
  const handleImageManager = () => {
    // console.log(image.displayState)
    image.display()
    handleClose()
    // 点击这个的时候 传递一个信号给另一个抽屉组件
  }
  return (
    <div>
      <Modal
        title={
          <>
            <div className="ERR">注意!</div>
          </>
        }
        visible={modalState}
        onOk={() => {
          setModalState(false)
          save()
        }}
        onCancel={() => setModalState(false)}
        autoFocus={false}
        focusLock={true}
      >
        <div className="FLEX JUS-CENTER">
          <b>您还未保存，确定要继续导出吗？</b>
          (确定将会自动保存)
        </div>
      </Modal>
      <MyButton
        open={open}
        endIcon={<MoreVertIcon />}
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
        // style={{ fontFamily: "monospace" }}
      >
        {"更多"}
      </MyButton>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        elevation={24}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleImageManager} disableRipple>
          <EditIcon />
          图片管理器
          {/* {imgManagerState ? <ImageManager /> : undefined} */}
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            console.log(e)
            handleClick3(e)
            // handleClose()
          }}
          disableRipple
        >
          <Export anchorEl={anchorEl3} open={open3} onClick={handleClose3} />
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={(e) => {
            handleClick2(e)
            // handleClose()
          }}
          disableRipple
        >
          <Share closAll={handleClose} anchorEl={anchorEl2} open={open2} onClick={handleClose2} />
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose()
          }}
          disableRipple
        >
          <MoreHorizIcon />
          更多(敬请期待)
        </MenuItem>
      </StyledMenu>
    </div>
  )
})

export default CustomizedMenus
