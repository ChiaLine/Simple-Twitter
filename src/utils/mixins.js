// 沒有上傳圖片時，顯示一張空的圖片
export const emptyImageFilter = {
  filters: {
    emptyImage (src) {
      // return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
      return src || 'https://i.imgur.com/1VXOEcB.png'
    }
  }
}