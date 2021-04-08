import request from '@/utils/request'

export default {
// 列表分页接口
  getList(query, current = 1, size = 20) {
    return request({
      url: `/wms/labelManager/search`,
      method: 'post',
      data: { ...query, current, size } // 合并成一个对象
    })
  },
  add(data) {
    return request({
      url: `/wms/labelManager/`,
      method: 'post',
      data
    })
  },
  // 查询
  getById(id) {
    return request({
      url: `/wms/labelManager/${id}`, // 反单引号 ``
      method: 'get'
    })
  },
  // 更新
  update(data) {
    return request({
      url: `/wms/labelManager/`,
      method: 'put', // put 方式提交
      data
    })
  },
  deleteById(id) {
    return request({
      url: `/wms/labelManager/${id}`, // 反单引号 ``
      method: 'delete' // delete 方式提交
    })
  }

}