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

        const cardItems = [
            {
                imgSrc:
                    "img/sight01.webp",
                alt: "夏日一角",
                title: "夏日一角",

            },
            {
                imgSrc:
                    "img/sight02.webp",
                alt: "艺文广场",
                title: "艺文广场",
                link: "post.html",
            },
            {
                imgSrc:
                    "img/sight03.webp",
                alt: "秋日校园",
                title: "秋日校园",
            },
            {
                imgSrc:
                    "img/sight04.webp",
                alt: "灿烂银杏",
                title: "灿烂银杏",
            },
            {
                imgSrc:
                    "img/sight05.webp",
                alt: "春日花坛",
                title: "春日花坛",
            },
            {
                imgSrc:
                    "img/sight06.webp",
                alt: "艺术展示",
                title: "艺术展示",
            },

        ];


        return {
            navbarData,
            items,
            footerItems,
            cardItems,
            navbarIndex

        }
    }
}).mount('#app')
