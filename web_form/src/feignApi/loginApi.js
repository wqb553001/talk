import Service from '@/interceptor/service.js'

export function login(data){
  return Service({
    method: 'GET',
    url: '/login',
    data
  })
}
export function findByName(params){
  return Service({
    method: 'GET',
    url: '/findByName',
    params
  })
}

