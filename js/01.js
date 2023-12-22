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

        const cardData = [
            {
                title: "高静",
                imageSrc: "img/b01.jpg",
                description: "先后荣获郑州商学院双师型教师、优秀教师、教书育人先进个人、信工学院第二届青年教师教学技能竞赛一等奖等荣誉"
            },
            {
                title: "李芳",
                imageSrc: "img/b02.jpg",
                description: "发表科研论文7篇，核心论文1篇，主持及参与省部级、厅级项目60余项，其中“十四五”规划教材1部，主持及参与成果奖"
            },
            {
                title: "常爱红",
                imageSrc: "img/b03.jpg",
                description: "先后发表学术论文4篇，其中SCI一篇参与立项省部级课题1项，主持申报市厅级课题2项，参编学术著作2部"
            },
            {
                title: "苏宝英",
                imageSrc: "img/b04.jpg",
                description: "主持参与市厅级科研项目33项公开发表学术论文16篇，其中5篇为中文核心获得科研成果奖励6项主编、参编著作教材2部"
            },
        ];
        const bannerData = [
            {src: 'img/222.jpg'},
            {src: 'img/333.jpg'},
            {src: 'img/444.jpg'}
        ];


        return {
            navbarData,
            items,
            footerItems,
            cardData,
            bannerData

        }
    }
}).mount('#app')
