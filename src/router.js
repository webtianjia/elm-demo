const routers = [{
    path: '/',
    meta: {
        title: ''
    },
     component: (resolve) => require(['./views/index.vue'], resolve),
     children:[
        {
            path:"/",
            redirect:"/goods"
        },
        {
            path:"/goods",
            meta:{
                title:""
            },
           component:(resolve=>require(['./components/goods/goods.vue'],resolve))
        },
        {
            path:"/ratings",
            meta:{
                title:""
            },
            component:(resolve=>require(['./components/ratings/ratings.vue'],resolve))
        },
        {
            path:"/seller",
            meta:{
                title:""
            },
            component:(resolve=>require(['./components/seller/seller.vue'],resolve))
        },
    ]
}];
export default routers;