import Mock from 'mockjs';

Mock.mock('/user/login', 'post', (params) => {
    return {
        ...JSON.parse(params.body),
        token:'token12345678',
        userId:'userId123',
        avatar:''
    };
})

Mock.mock('/home/list', 'get', {
    code: '0',
    msg: 'success',
    'list|16': [{msg: '@name @integer(18, 30)',key:'@name' }]
})

Mock.mock('/user/list', 'get', {
    code: '0',
    msg: 'success',
    'list|16': [{ name: '@name', age: '@integer(18, 30)',key:'@name' }]
})

