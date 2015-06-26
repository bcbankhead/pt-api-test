module.exports = {
  objectParse: function(input){
    var story={};
    for (var i =0; i < input.length; i++){
    story[i] = {};
    story[i].name = input[i].name;
    story[i].url = input[i].url;
    story[i].id = input[i].id;
    }
    return story;
    //console.log('wtf', input)
  }
}
