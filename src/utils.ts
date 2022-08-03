// 获取静态图片
export const getAssetsImages = (fileName: string) => new URL(`../public/${fileName}`, import.meta.url).href
