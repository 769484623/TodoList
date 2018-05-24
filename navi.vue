<template>
    <div id="navi">
        <mt-header title="Todo v0.1">
            <mt-button id="config-button" type="primary" slot="left">设置</mt-button>
            <mt-button id="add-button" type="danger" slot="right" @click="configButtonOnClicked">添加</mt-button>
        </mt-header>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Button , Header} from 'mint-ui';
    Vue.component(Button.name, Button);
    Vue.component(Header.name, Header);
    export default {
        name: "navi",
        methods:{
            configButtonOnClicked:function(){
                alert("Clicked!");
            }
        }
    }
</script>

<style scoped>
    #config-button{
        float: left;
    }
    #add-button{
        float: right;
    }
</style>