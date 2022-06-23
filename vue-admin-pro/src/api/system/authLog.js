import http from '@/design/libs/request/request'

const BASE_URL = '/sys/auth/log'

export default {
  // 获取列表数据
  list: data => http.post(BASE_URL + '/list', data)
}
