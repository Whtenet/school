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

        const newsList = [
            {
                id: 1,
                title: "河南广播电视台：郑商雪景",
                description: "雪中的郑商校园宁静而美丽  一片银装素裹  充斥着冬日的浪漫",
                author: "发布人：党委宣传部（新闻中心）",
                date: "Dec 12",
                readingTime: "浏览次数：100次 ",
                imageSrc: "img/news05.webp",
                imageHeight: 120
            },
            {
                id: 2,
                title: "全国人大代表、全国劳动模范胡中辉到郑州商学院作报告",
                description: "11月29日下午，郑州商学院特邀全国人大代表、全国劳动模范、平高集团有限公司首席工匠胡中辉作主题报告，900余名师生代表参加了报告会。",
                author: "来源：郑州商学院",
                date: "Dec 12",
                readingTime: "浏览次数：502次",
                imageSrc: "img/news06.webp",
                imageHeight: 120
            },
            {
                id: 3,
                title: "郑州商学院与兰州财经大学签订硕士研究生联合培养协议",
                description: "11月1日，郑州商学院校长助理刘升阳带领金融与贸易学院院长梁鹏、副院长贾孝魁等一行赴兰州财经大学签订国际商务专业硕士研究生联合培养协议。",
                author: "来源：郑州商学院",
                date: "Dec 12",
                readingTime: "浏览次数：222次",
                imageSrc: "img/news07.webp",
                imageHeight: 120
            }
        ];
        const popularNewsList = [
            {
                id: 1,
                title: "我校工会第二届会员代表大会第一次全体会议顺利召开",
                author: "时间：2023-12-20"
            },
            {
                id: 2,
                title: "成功大讲堂：央视《百家讲坛》特邀主讲林乾教授莅校讲学",
                author: "时间：2023-12-18"
            },
            {
                id: 3,
                title: "喜讯 | 我校四个学科获批立项新一轮河南省重点学科",
                author: "时间：2023-12-18"
            },
            {
                id: 4,
                title: "第十四届全国大学生电子商务“创新、创意及创业”挑战赛河南赛区校赛负责人培训会在我校成功举办",
                author: "时间：2023-12-15"
            }
        ];
        const cardData = [
            {
                title: "我校工会第二届会员代表大会第一次全体会议顺利召开",
                imageSrc: "img/news01.webp",
                description: "12月19日，我校工会第二届会员代表大会第一次全体会议在图书馆五楼报告厅顺利召开。,党委书记吴建军、校长吴泽强、党委副书记兼纪委书记裴晓涛、副校长李刚、校长助理兼工会主席张江涛、校长助理刘升阳及大会主席团成员出席会议，全体代表参加会议。会议由党委副书记裴晓涛主持。"
            },
            {
                title: "成功大讲堂：央视《百家讲坛》特邀主讲林乾教授莅校讲学",
                imageSrc: "img/news02.webp",
                description: "12月17日，“学术郑商”成功大讲堂开讲，央视《百家讲坛》特邀主讲、中国政法大学法律史学研究院副院长、,博士生导师林乾教授莅校作题为《读书成就了曾国藩》的专题学术报告。校长吴泽强、党委副书记兼纪委书记裴晓涛、校长助理兼工会主席张江涛等校领导及党委宣传部、科研处等部门负责人，巩义市教体局、文广旅局、豫联集团等企事业单位嘉宾及我校2000余名师生共同聆听了报告。报告会由张江涛主席主持。"
            },
            {
                title: "第十四届全国大学生电子商务“创新、创意及创业”挑战赛河南赛区校赛负责人培训会在我校成功举办",
                imageSrc: "img/news03.webp",
                description: "12月14日上午，第十四届全国大学生电子商务“创新、创意及创业”挑战赛河南赛区校赛负责人培训会在我校图书馆五楼报告厅举办，三创赛组委会主席、教育部高等学院电子商务类教学指导委员会副主任委员、西安交通大学李琪教授，三创赛组委会副主席、教育部高等学院电子商务类教学指导委员会副主任委员、厦门大学彭丽芳教授，三创赛组委会副秘书长、湖北经济学院创新创业学院执行院长毛志斌教授，三创组委会副秘书长、武汉惠赠你网络科技有限公司董事长游文超先生，杭州弧米科技公司CEO邓亚辉先生、浙江思睿智训科技有限公司董事长助理陈浙斌先生和我校吴泽强校长出席了会议，全省50余所高校校赛负责人及我校师生代表参加了本次会议，会议由我校管理学院院长杨松柏主持。"
            },
            {
                title: "成功大讲堂：央视《百家讲坛》特邀主讲林乾教授莅校讲学",
                imageSrc: "img/news04.webp",
                description: "12月17日，“学术郑商”成功大讲堂开讲，央视《百家讲坛》特邀主讲、中国政法大学法律史学研究院副院长、博士生导师林乾教授莅校作题为《读书成就了曾国藩》的专题学术报告。校长吴泽强、党委副书记兼纪委书记裴晓涛、校长助理兼工会主席张江涛等校领导及党委宣传部、科研处等部门负责人，巩义市教体局、文广旅局、豫联集团等企事业单位嘉宾及我校2000余名师生共同聆听了报告。报告会由张江涛主席主持。"
            },
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
        }
        const bannerData = [
            {src: 'img/banner01.webp'},
            {src: 'img/banner02.webp'},
            {src: 'img/banner03.webp'}
        ];


        return {
            navbarData,
            items,
            footerItems,
            navbarIndex,
            cardData,
            newsList,
            popularNewsList,
            bannerData
        }
    }
}).mount('#app')
