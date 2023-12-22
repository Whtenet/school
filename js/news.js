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
        const cards = [
            {
                img: "img/political01.webp",
                title: "文传学院：举办第一届玩教具创新创意大赛作品展",
                description: "为充分发挥“一站式”学生社区的作用，促进师生沟通交流，培养学前教育专业同学们的创新精神与实践能力。12月13日，我院师生一同来到32号楼的“一站式”学生社区——学习研修功能室，参观我院第一届自制玩教具创新创意大赛优秀作品初审展览。",
            },
            {
                img: "img/political02.webp",
                title: "外语学院：举行2023-2024学年宿舍文化建设主题活动模范宿舍授牌暨颁奖仪式",
                description: "12月12日，外语学院于图书馆5楼报告厅举办2023-2024学年宿舍文化建设主题活动模范宿舍授牌暨颁奖仪式。会上，营造温馨宿舍环境；与会领导分别为获奖宿舍代表颁奖并合影留念。",
            },
            {
                img: "img/political03.webp",
                title: "信工学院：联合金贸学院开展学风建设交流会",
                description: "12月6日下午，我院与金贸学院在三彩校区JT202教室联合开展学风建设交流会。校长助理刘升阳、金贸学院党委书记吕鹏、副院长贾孝魁、教师发展中心副主任季艺；信工学院院长张晓冬、副院长张伟华以及各学院学生代表参加本次学风建设交流会。",
            },
            {
                img: "img/political04.webp",
                title: "通识中心：中南财经政法大学杜鹏教授莅校讲学",
                description: "为提升我校通识课程建设质量，进一步营造良好的学术氛围，打造通识教育品牌，形成协同育人氛围。12月5日下午，通识中心特邀中南财经政法大学杜鹏教授讲授《人人学点营销学》专题讲座。",
            },
            {
                img: "img/political05.webp",
                title: "科研处：科研服务战线临时党支部开展“追溯红色记忆，传承红色血脉”主题党日活动",
                description: "充分发挥科研服务战线党员先锋模范作用，12月5日，科研服务战线临时党支部组织全体党员前往巩义市新中镇豫西抗日根据地纪念馆开展主题党日活动。",
            },
            {
                img: "img/political06.webp",
                title: "管理学院：开展消防安全宣传教育系列活动",
                description: "管理学院召开学务例会时强调开展消防安全教育意义重大。将消防安全教育活动落到实处，进一步加强学生消防安全意识思想引领，进一步提高全体师生的消防安全意识和自我救护能力。 ",
            },
        ];


        return {
            navbarData,
            items,
            footerItems,
            cards

        }
    }
}).mount('#app')
