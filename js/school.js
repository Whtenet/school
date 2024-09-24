const {createApp, ref, onMounted} = Vue

createApp({
    setup() {
        const navbarData = ref([]);
        const items = ref([]);
        const footerItems = ref({})
        const navbarIndex = ref()
        onMounted(async () => {
            const data = await (await fetch("./js/data.json")).json();
            navbarData.value = data.navbarData
            items.value = data.items
            footerItems.value = data.footerItems
            navbarIndex.value = findNavItemIndex(navbarData.value);
        })

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




        return {
            navbarData,
            items,
            footerItems,
            navbarIndex

        }
    }
}).mount('#app')
