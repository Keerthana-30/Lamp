function start(event){
    event.dataTransfer.setData("text",event.target.id);
  }
  
  function drag(event){
   event.preventDefault();
    console.log("dragging");
  }
  
  function dropf(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
   // console.log(data);
    event.target.appendChild(document.getElementById(data));
  }
  
  function leave(event){
    var data=event.dataTransfer.getData("text");
    console.log(data);
    
    //event.target.remove(document.getElementById(data))
  }



  