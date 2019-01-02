<template>
    <home-component
        :name="name"
        :items="items"
    ></home-component>
</template>

<script>
export default {
    data() {
        return {
            name: 'name',
            items: [
                {
                    title: '工作台',
                    titleTip: 'workbench',
                    icon: require('../../static/icon04.png'),
                    callback: () => {
                        this.$router.push({ path: '/AccendantWorkbench' })
                    }
                },
                {
                    title: '个人中心',
                    titleTip: 'personal',
                    icon: require('../../static/icon03.png'),
                    callback: () => {
                        this.$router.push({ path: '/PersonalCenter' })
                    }
                }
            ]
        }
    }
}
</script>

