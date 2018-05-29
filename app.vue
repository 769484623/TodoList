<template>
    <div>
        <div id="container">
            <navi @btn-clicked="btn_clicked"></navi>
            <input-modal v-if="isAddButtonClicked"></input-modal>
            <sect ref="input"></sect>
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
        methods:{
            btn_clicked:function (value) {
                if(value === 'add'){
                    this.isAddButtonClicked = true;
                }
                else if(value === 'config'){
                    this.isConfigButtonClicked = true;
                }
                else{
                    alert('Unhandled Event!');
                }
            },
            user_input:function (input) {
                this.$refs.input.addContent(input);
            }
        }
    }
</script>

<style scoped>
    div{
        margin:auto;
        text-align: center;
    }
    #container{
        height: 700px;
        width: 400px;
        background: honeydew;
    }
</style>