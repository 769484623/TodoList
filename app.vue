<template>
    <div>
        <div id="container">
            <navi></navi>
            <input-modal v-if="isAddButtonClicked"></input-modal>
            <sect></sect>
            <asides v-if="isConfigButtonClicked"></asides>
        </div>
    </div>
</template>

<script>
    import Navi from './navi'
    import Sect from './sect'
    import Asides from './asides'
    import InputModal from "./inputModal";
    import 'mint-ui/lib/style.css';
    export default {
        name: "app",
        components: {InputModal, Sect, Asides, Navi},
        data:function() {
            return {
                isAddButtonClicked:false,
                isConfigButtonClicked:false,
            }
        },
        methods:{}
    }
</script>

<style scoped>
    div{
        margin:auto;
        text-align: center;
    }
    #container{
        width: 400px;
        background: honeydew;
    }
</style>