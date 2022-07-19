export interface Menu {
    title?: string
    icon?: string
    isClick?: boolean
    route?: string
}

export default interface IMenu extends Menu {
    children?: Menu[]
}