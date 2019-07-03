<template>
    <!-- start my form to add & search for word -->
    <form class="search-add" v-on:submit.prevent="addWord">
      <div class="form-row addword">
        <div class="form-group col-md-5">
          <label for="">Word in English</label>
          <input type="text" class="form-control" v-model="newWord.wordInEnglish">
        </div>
        <div class="form-group col-md-2">
          <label for="">Parts of speech</label>
          <input type="text" class="form-control" placeholder="v,n,.." v-model="newWord.partsOfSpeech">
        </div>
        <div class="form-group col-md-5">
          <label for="">Word in Arabic</label>
          <input type="text" class="form-control" v-model="newWord.wordInArabic">
        </div>
        <div class="form-group col-md-6">
          <label for="">Sentence</label>
          <input type="text" class="form-control" v-model="newWord.sentence">
        </div>

      <div class="form-group col-md-6">
        <input type="submit" class="btn btn-light" value="Add">
      </div>
      </div>
    </form>




</template>

<script>
import {db} from '../firebase';
var newWordRef = db.ref('vocabulary').push();
export default{
  data(){
    return{
      vocabulary:[],
      newWord :{},

    }
  },
  firebase : {
      vocabulary: db.ref('vocabulary')
  },
  methods:{
    addWord : function() {
      newWordRef.set(this.newWord);
      this.newWord.wordInEnglish = '';
      this.newWord.partsOfSpeech = '';
      this.newWord.wordInArabic = '';
      this.newWord.sentence = '';
    },
    /*filterWords(){
       db.ref('vocabulary').orderByChild('wordInEnglish').equalTo(findWord)

    }*/
  }
}

</script>

<style lang="scss">
.add-search{
  display: flex;
  justify-content: center;

.search-add{
  color: #f2f2f2;
  font-size: 18px;
.form-control{
  background-color: rgba(174, 166, 159, 0.1);
  border: 1px solid rgba(174, 166, 159,0.2);
  color: #f2f2f2;
  :focus{
    box-shadow: #f2f2f2;
  }
}
button,input[type='submit']{
  background-color: #f2f2f2;
border-color: #f2f2f2;
width: 100%;
font-weight: bold;
}
  .search,.addword{
    margin-top: 40px;
    margin-bottom: 20px;

    &:before{
      content: '';
      display: block;
      background: #403A3E;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #BE5869, #403A3E);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #BE5869, #403A3E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */}

  }
  .addword{
    input[type='submit']{
      margin-top: 34px;
    }
  }
}
}
</style>
