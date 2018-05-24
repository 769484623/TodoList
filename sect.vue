<template>
    <div id="sect">
        <mt-checklist
                v-model="value"
                :options="options">
        </mt-checklist>
        <div v-if="options.length === 0" id="waring-tags">
            <span>没有任何待办事情</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Checklist } from 'mint-ui';
    Vue.component(Checklist.name, Checklist);
    export default {
        name: 'sect',
        data:function() {
            return {
                value:[],
                options : []
            }
        },
        methods:{
        }
    }
</script>

<style>
    #waring-tags{
        position: relative;
        top:40%;
        text-align: center;
    }
    #sect{
        height: 600px;
    }
</style>