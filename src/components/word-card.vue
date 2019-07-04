<template>
  <div>
  <!-- start mylist of words -->
  <form class="findIt">
    <div class="form-row search">
      <div class="form-group col-md-6">
        <input type="search" class="form-control" placeholder="Search For Your Word" v-model="search">
      </div>
      <div class="form-group col-md-6">
        <button type="button" class="btn btn-light">Search</button>
      </div>
    </div>
  </form>
<div class="row">
  <div class="word-card col-md-4" v-for="(word,key) in vocabulary"  :key="key">
    <div id="card">
                    <!-- my word -->
       <ul class="word row" :class="key">
         <li class="edit col-md-12">
          <button @click="removeWord(key)"> <i class="fas fa-trash-alt"></i> </button>
          <button @click='setEditWord(word,key)' ref='edit'> <i class="fas fa-edit"></i> </button>
        </li>
         <li class="col-md-6"><span class="EN"> {{word.wordInEnglish}} </span>&#40;<span class="POS">{{word.partsOfSpeech}}</span>&#41;</li>
         <li class="col-md-6 AR"> {{word.wordInArabic}} </li>
         <li class="col-md-12">{{word.sentence}}</li>
         </ul>
       </div>
                <!-- Edit my word -->
         <ul class="editWord row" :class="key">
           <li class="col-md-12">
             <button type="button" class="form-control" @click="cancelEdit(key)"> X </button>
           </li>
           <!-- <li class="col-md-12"><input type="text" class="form-control" v-model="newWordInEnglish[key]" :placeholder="word.wordInEnglish"></li> -->
           <li class="col-md-12"><input type="text" class="form-control" v-model="word.wordInEnglish"></li>
           <!-- <li class="col-md-12"><input type="text" class="form-control" v-model="newPartsOfSpeech[key]" :placeholder="word.partsOfSpeech"></li> -->
           <li class="col-md-12"><input type="text" class="form-control" v-model="word.partsOfSpeech"></li>
           <!-- <li class="col-md-12"><input type="text" class="form-control" v-model="newWordInArabic[key]" :placeholder="word.wordInArabic"></li> -->
           <li class="col-md-12"><input type="text" class="form-control" v-model="word.wordInArabic"></li>
          <!-- <li class="col-md-12"><input type="text" class="form-control" v-model="newSentence[key]" :placeholder="word.sentence"></li> -->
          <li class="col-md-12"><input type="text" class="form-control" v-model="word.sentence" ></li>
           <li class="col-md-12">
             <input type="button" class="btn btn-light" value="Save" @click="saveEdit(word)">
           </li>
           </ul>
     </div>
       </div>
       </div>
</template>
<script>
import {db} from '../firebase'
const wordRef = db.ref('vocabulary');
import JQuery from 'jquery'
let $ = JQuery
export default{
  data(){
    return{
      search:'',
    vocabulary:{},
    newWordInEnglish : [],
    newPartsOfSpeech : [] ,
    newWordInArabic : [],
    newSentence :[],
    //object that holds varibles for the inputs
    words:{
      wordInEnglish:'',
      partsOfSpeech:'',
      wordInArabic:'',
      sentence:''


    }
    }
},
  firebase : {
      vocabulary: db.ref('vocabulary')
  },
  methods:{
    filterWords(){
       db.ref('vocabulary').orderByChild('wordInEnglish').equalTo(findWord)

    },
    removeWord : function(key){
      wordRef.child(key).remove()
    },
   setEditWord : function(word,key){
     $('ul.word.row.'+key).hide();
     $('ul.editWord.row.' + key).show();
    //  console.log(word)
    //  this.words.wordInEnglish=word.wordInEnglish;
    //  this.words.wordInArabic=word.wordInArabic;
    //  this.words.partsOfSpeech=word.partsOfSpeech;
    //  this.words.sentence=word.sentence


  },
    saveEdit : function(word,key){
       console.log(word)
      //db.ref('vocabulary/' + key)
      wordRef.child(key).set({
        wordInEnglish : word.wordInEnglish,
        partsOfSpeech : word.wordInArabic,
        newWordInArabic:word.partsOfSpeech,
        sentence : word.sentence
      });
      $('ul.word.row.'+key).show();
      $('ul.editWord.row.' + key).hide();
    },
    cancelEdit : function(key){
      $('ul.word.row.'+key).show();
      $('ul.editWord.row.' + key).hide();
    }
  },
  created(){
    wordRef.on('value', (snapshot) => {
      this.vocabulary = snapshot.val()
    });
  }
}


</script>

<style lang="scss">

/*  display: flex;
  justify-content: center;*/

.findIt{
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
button{
  background-color: #f2f2f2;
border-color: #f2f2f2;
width: 100%;
font-weight: bold;
}
  .search{
    margin-top: 40px;
    margin-bottom: 20px;

    &:before{
      content: '';
      display: block;
      background: #403A3E;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #BE5869, #403A3E);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #BE5869, #403A3E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */}

  }
}
.word-card{
  color: #f2f2f2;
  background-color: rgba(174, 166, 159, 0.6);
  padding: 15px 30px;
  margin-top: 15px;
  margin: 20px;
  margin-left: 0;
  -webkit-flex:0 0 360px;
  -ms-flex:0 0 360px;
  flex: 0 0 360px;
  font-size: 20px;
  letter-spacing: 1px;
  border: 1px solid rgba(174, 166, 159, 0.2);
  border-radius: .25rem;
  .edit {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    button{
      background: transparent;
      border:0;
      color: #fff
    }
  }

  ul.editWord{
    display: none;
      width: 100%;
    li:first-of-type{
    height: 38px;
      button{
        color: #f2f2f2;
        background: transparent;
        border: 0;
        font-weight: bold;
        text-align: right;

      }
    }
    li input[type ='text']{
      background : transparent;
      margin: 15px auto;
      border:0;
      border-bottom: 1px solid #ced4da;
      border-radius: 0;
      color: #000;
      font-weight: bold;
    }
    ::placeholder{
      color: #000;
      opacity: 1;
    }
    li:last-of-type{
      input{
        width: 100%;
        margin-top: 20px;
        font-weight: bold;
        cursor: pointer;
      }
    }

  }
  ul.word ,ul.editWord{
    list-style: none;
    padding: 0;

    li span.POS{
        margin: 0 3px;
      }
    li span.EN{
        color: #2F7443;
        font-weight: bold;
        text-transform:capitalize;
      }
    li.AR{
      font-family: 'Harmattan', sans-serif;
      text-align: right;
      font-size: 25px;
      color: #f2f2f2
    }
  }

}
</style>
