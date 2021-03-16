
import request from '@/utils/request'

export default {
// 文章列表分页接口
  getList(query, current = 1, size = 20) {
    return request({
      url: `/wms/goodsManager/search`,
      method: 'post',
      data: { ...query, current, size } // 合并成一个对象
    })
  }
}

