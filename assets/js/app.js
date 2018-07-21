/****CONTENT FITERING AND SEARCHING******************/
var inp=document.querySelector("#input_id");
var final_items=document.querySelectorAll(".item");
var items = document.getElementsByTagName("a");



inp.addEventListener("keyup", ()=>{
	var user_input = inp.value.toLowerCase();
	for(let i=0;i<items.length;i++)
	{
		var phrase =items[i].getAttribute("data-title").toLowerCase();
		var bool=phrase.includes(user_input);
		if(bool)
		final_items[i].style.display = "inline-block";
		else
			final_items[i].style.display = "none";
		
	
	}
});


 
 
 
 /***********LIGHTBOX PLUGIN OPTION****************/
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false,
	  'alwaysShowNavOnTouchDevices':true
    });
