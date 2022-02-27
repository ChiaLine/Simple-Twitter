// ./src/utils/mixins.js
import moment from 'moment'
// 在推文中將發文時間格式化
export const formatDateFilter = {
  filters: {
    formatDate(datetime) {
      return datetime ? moment(datetime).locale('zh_cn').format('a h:mm．LL') : '-'
    }
  }
}
// 在推文回覆中將回覆時間改成相對時間
export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      return datetime ? moment(datetime).locale('zh_cn').fromNow() : '-'
    }
  }
}
// 沒有上傳圖片時，顯示一張空的圖片
export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}