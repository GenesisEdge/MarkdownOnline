type FileType = "image" | "pdf" | "doc" | "video" | "folder" | "pinned" | "trash";
export type ExtendedTreeItemProps = {
    fileType?: FileType;
    id: string;
    label: string;
};
declare module "react" {
    interface CSSProperties {
        "--tree-view-color"?: string;
        "--tree-view-bg-color"?: string;
    }
}
export default function FileExplorer(props: {
    fileDirectoryArr: any;
}): import("react/jsx-runtime").JSX.Element;
export {};
