$(document).ready(function(){
  var results = [];
   var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
 var joiner ="&format=json&limit=10&callback=?";
 
     $('#button').click(function() {
     var search = $('input').val();
     var url = api+search+joiner;
   
         //$content.append('<div><h1><a href="'+object[3][i]+'" target="_blank">'+object[1][i]+'</h1></a>'+'<p>'+object[2][i]+'</p></div>');
             $.getJSON(url,function(object){
   
               for(var j=1;j<object.length;j++){
               for (var i=0; i<object[j].length; i++){
                     display(object[2][i]);
                 
                     display(object[3][i]);
                   
               }
               }
     
             });          
 
     });
    
});

function display(object){
   
    var content = $("#content");
    content.html("");

    content.append('<div id="content"><p>'+object+'</p><br/>');
}