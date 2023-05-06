import Mock from 'mockjs';

Mock.mock('/user/login', 'post', (params) => {
    return {
        ...JSON.parse(params.body),
        token:'token12345678'
    }
})

Mock.mock('/user/list', 'get', {
    code: '0',
    msg: 'success',
    'list|16': [{ name: '@name', age: '@integer(18, 30)' }]
})

