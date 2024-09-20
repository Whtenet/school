const {createApp, ref} = Vue

createApp({
    setup() {
        const navbarData = [
            {title: '首页', href: 'index.html'},
            {title: '名师风采', href: 'teacher.html'},
            {title: '校园生活', href: 'life.html'},
            {title: '新闻聚焦', href: 'news.html'},
            {title: '优美风景', href: 'sight.html'},
            {title: '学校介绍', href: 'school.html'}
        ];
        function findNavItemIndex(navbarData) {
            // 获取当前URL的路径部分，并获取第三个元素（即文件名）
            const currentPath = window.location.pathname.split('/')[2];

            // 遍历navbarData数组，寻找匹配的href值
            for (let i = 0; i < navbarData.length; i++) {
                if (navbarData[i].href === currentPath) {
                    // 如果找到匹配的href，返回当前元素的下标
                    return i;
                }
            }
            // 如果没有找到匹配的元素，返回0
            return 0;
        }
        const navbarIndex = findNavItemIndex(navbarData);
        const items = [
            {
                class: "col-sm-4 col-lg-2 order-lg-2",
                title: "关于我们",
                links: [
                    {label: "网站声明"},
                    {label: "学校介绍", url: "school.html"}
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
                title: "更多链接",
                links: [
                    {label: "法律顾问"},
                    {label: "人才招聘"}
                ]
            }
        ];
        const footerItems = {
            name: "University",
            copyright: "© 2023-2024 School. All Rights Reserved.",
            icp: "豫ICP备2023005799号",
            text: "学校以殷殷实力为莘莘学子成就未来，搭建坚实平台，构筑成功之路，让每一位学子走向全国、走向世界、走向成功人生。",
        };

        const cardData = [
            {
                title: "高静",
                imageSrc: "img/teacher01.webp",
                description: "先后荣获郑州商学院双师型教师、优秀教师、教书育人先进个人、信工学院第二届青年教师教学技能竞赛一等奖等荣誉"
            },
            {
                title: "李芳",
                imageSrc: "img/teacher02.webp",
                description: "发表科研论文7篇，核心论文1篇，主持及参与省部级、厅级项目60余项，其中“十四五”规划教材1部，主持及参与成果奖"
            },
            {
                title: "常爱红",
                imageSrc: "img/teacher03.webp",
                description: "先后发表学术论文4篇，其中SCI一篇参与立项省部级课题1项，主持申报市厅级课题2项，参编学术著作2部"
            },
            {
                title: "苏宝英",
                imageSrc: "img/teacher04.webp",
                description: "主持参与市厅级科研项目33项公开发表学术论文16篇，其中5篇为中文核心获得科研成果奖励6项主编、参编著作教材2部"
            },
        ];
        const bannerData = [
            {src: 'img/banner01.webp'},
            {src: 'img/banner02.webp'},
            {src: 'img/banner03.webp'}
        ];


        return {
            navbarData,
            items,
            footerItems,
            cardData,
            bannerData,
            navbarIndex
        }
    }
}).mount('#app')
