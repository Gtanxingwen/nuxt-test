/**
 * Created by hasee on 2018/6/25.
 */
const prod = Object.is('NODE_ENV', 'production')
const apiConfig = {
  baseUrl: prod ? 'prod_url' : 'https://api.hi-five.ilongyuan.cn'
}

export default apiConfig
