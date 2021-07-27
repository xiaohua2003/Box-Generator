
function generateBox(){
   var x=document.getElementById("selectColor");
   var bgcolor=x.options[x.selectedIndex].value;
   document.getElementById('box').style.backgroundColor=bgcolor;
   document.getElementById('box').style.display='block';
   var y=document.getElementById('selectWidth');
   var wdvalue=y.options[y.selectedIndex].value;
   document.getElementById('box').style.width=wdvalue;
   var z=document.getElementById('selectHeight');
   var htvalue=z.options[z.selectedIndex].value;
   document.getElementById('box').style.height=htvalue;
   document.getElementById('box').style.display='block';
}