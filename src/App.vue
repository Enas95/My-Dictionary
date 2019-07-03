<template>
  <div id="app">
    <div class="container">
      <!-- start page-header -->
      <div class="page-header">
        <h1> &#128214; My Dictionary &#128214;</h1>
      </div>
      <!-- search & add word -->
      <div class="add-search">
        <div class="row">
        <my-dictionary></my-dictionary>
        </div>
      </div>
      <hr/>
      <!-- my words -->
      <div class="my-words">
        <h2>My vocabulary</h2>
          <word-card></word-card>
      </div>

</div>
  </div>
</template>

<script>
import MyDictionary from './components/my-dictionary'
import WordCard from './components/word-card'
import {db} from './firebase'
export default {

components: {
  MyDictionary,
  WordCard
},
mounted(){

}
}

</script>

<style lang="scss">
#app {
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  background: url('./assets/2.jpg');
  background-size: cover;
  font-family: 'Mali', cursive;
  h1,h2{
     color: #2F7443;
    text-align: center;
    padding: 30px;
    font-weight: bold;
  }
  hr{
    border-top: 2px solid #f2f2f2;
    margin-top: 3rem;
    margin-bottom: 3rem
  }
}
</style>
