const {createApp, ref} = Vue

createApp({
    setup() {
        const navbarData = [
            {title: '首页', href: 'index.html'},
            {title: '01', href: '01.html'},
            {title: '02', href: '02.html'},
            {title: '03', href: '03.html'},
            {title: '04', href: '04.html'},
            {title: '05', href: '05.html'}
        ];


        const items = [
            {
                class: "col-sm-4 col-lg-2 order-lg-2",
                title: "关于",
                links: [
                    {label: "关于我们", url: "/about/"},
                    {label: "友链", url: "/links/"}
                ]
            },
            {
                class: "col-sm-4 col-lg-2 order-lg-3",
                title: "特别致谢",
                links: [
                    {label: "Bootstrap", url: "https://www.bootcss.com/"},
                    {label: "jQuery", url: "https://jquery.com/"}
                ]
            },
            {
                class: "col-sm-4 col-lg-2 order-lg-4",
                title: "联系方式",
                links: [
                    {label: "微博", url: "https://weibo.com/bootcss"},
                    {label: "邮箱", url: "mailto:cdn@bootcdn.cn"}
                ]
            }
        ];
        const footerItems = {
            name: "School网",
            copyright: "© 2023-2024 School. All Rights Reserved.",
            icp: "豫ICP备2023005799号",
            text: "学校以殷殷实力为莘莘学子成就未来，搭建坚实平台，构筑成功之路，让每一位学子走向全国、走向世界、走向成功人生。",
        };
        const newsList = [
            {
                id: 1,
                title: "鸡排拌饭",
                description: "当你为吃饭而烦恼的时候，选择这家的鸡排拌饭一定没有错，鸡排外焦里嫩，多种酱汁可供选择，还可以双拼，满足绝大多数同学的口味，快来尝一尝吧！",
                author: "推荐指数：7分",
                date: "南苑二楼",
                readingTime: "东校区",
                imageSrc: "img/food01.webp",
                imageHeight: 120
            },
            {
                id: 2,
                title: "烤鸭拌饭",
                description: "新鲜出炉的半只精品烤鸭，香嫩多汁，搭配酸甜爽口的土豆丝，份量大到吃不完，老板还有礼品相送，好吃不贵，经济实惠！",
                author: "推荐指数：9分",
                date: "双月三楼",
                readingTime: "三彩校区",
                imageSrc: "img/food02.webp",
                imageHeight: 120
            },
            {
                id: 3,
                title: "牛肉面",
                description: "见过这么大碗的面吗？它有的不只是噱头，真材实料才是受欢迎的秘诀，快来打卡吧！",
                author: "推荐指数：8分",
                date: "四希一楼",
                readingTime: "东校区",
                imageSrc: "img/food03.webp",
                imageHeight: 120
            }
        ];
        const popularNewsList = [
            {
                id: 1,
                title: "体育场",
                author: "阳光、草地、清风好友、欢笑、汗水谱成青春动人的乐章体育场是各种活动的聚集地还等什么快来运动吧！"
            },
            {
                id: 2,
                title: "篮球场",
                author: "北湖旁、体育场对面、南苑边激烈的碰撞，震天的呼喊，肆意挥洒汗水的少年，热闹的篮球场是青春最亮丽的风景线"
            },
            {
                id: 3,
                title: "排球场",
                author: "提起排球大家都会想到女排精神团结协作、绝不服输、少男少女们紧盯着高高扬起的排球，郑商学子排球场上也绝对不输！"
            },
            {
                id: 4,
                title: "体育馆",
                author: "综合性多功能体育馆馆内设备齐全，再也不用担心下雨天没有运动场地了，快和小伙伴们相约一起来体育馆运动吧！"
            }
        ];
        const imgcardsitems = [
            {
                imgSrc: "img/facility01.webp",
                alt: 'Tabler - free and open-source HTML Dashboard UI Kit built on Bootstrap',
                title: '大厅明亮舒适 视野开阔',
                bootstrapVersion: '舒适沙发 好友交流'
            },
            {
                imgSrc: "img/facility02.webp",
                alt: 'Anchor - a free Bootstrap UI Kit',
                title: '基础设施齐全 舒适安心',
                bootstrapVersion: '惬意生活 如家温暖'
            }
        ];


        return {
            navbarData,
            items,
            footerItems,
            popularNewsList,
            newsList,
            imgcardsitems


        }
    }
}).mount('#app')
