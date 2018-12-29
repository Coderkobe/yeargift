<template>
	<div id="app">
        <router-view v-cloak></router-view>
	</div>
</template>
<script>
	//引用外部css
    import './asset/css/common.scss';
    export default {}
</script>
<style>
    html, body{
        height: 100%;
    }
    #app, .wrapper{
        height: 100%;
    }
    .wrapper > div{
        height: 100%;
    }
    .wrapper > div{
        padding-bottom: 0.3rem;
        overflow: scroll;
    }
</style>

