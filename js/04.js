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

        const cardItems = [
            {
                imgSrc:
                    "img/e01.jpg",
                alt: "Card image",
                title: "夏日一角",
                link: "post.html",
            },
            {
                imgSrc:
                    "img/e02.jpg",
                alt: "Card image",
                title: "艺文广场",
                link: "post.html",
            },
            {
                imgSrc:
                    "img/e03.jpg",
                alt: "Card image",
                title: "秋日校园",
                link: "post.html",
            },
            {
                imgSrc:
                    "img/e04.jpg",
                alt: "Card image",
                title: "灿烂银杏",
                link: "post.html",
            },
            {
                imgSrc:
                    "img/e05.jpg",
                alt: "Card image",
                title: "春日花坛",
                link: "post.html",
            },
            {
                imgSrc:
                    "img/e06.jpg",
                alt: "Card image",
                title: "艺术展示",
                link: "post.html",
            },

        ];


        return {
            navbarData,
            items,
            footerItems,
            cardItems


        }
    }
}).mount('#app')
