 function ausklappen (id) {

document.getElementById("1").style.display="none";
document.getElementById("2").style.display="none";

document.getElementById(id).style.display="block";
 }












$(document).ready(function() {

var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]; 
var dayNames= ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year    
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
	
}); 
	
var jsalarm={
	padfield:function(f){
		return (f<10)? "0"+f : f
	},
	showcurrenttime:function(){
		var dateobj=new Date()
		var ct=this.padfield(dateobj.getHours())+":"+this.padfield(dateobj.getMinutes())+":"+this.padfield(dateobj.getSeconds())
		this.ctref.innerHTML=ct
		this.ctref.setAttribute("title", ct)
		if (typeof this.hourwake!="undefined"){ //if alarm is set
			if (this.ctref.title==(this.hourwake+":"+this.minutewake+":"+this.secondwake)){
				//clearInterval(jsalarm.timer)
				
				//CHECKBOX
				
				var remember = document.getElementById('youtube');
			    if (remember.checked){
			       // alert("checked") ;
			        window.location=document.getElementById("musicloc").value  
			    }    
			        
			        var sound = document.getElementById('Iceber');
			        var wecker = document.getElementById('wecker');
			        var weckerklassisch = document.getElementById('weckerklassisch');
			        var sirene = document.getElementById('sirene');
			        var schiff = document.getElementById('schiff');
			        var kirche = document.getElementById('kirche');
			        var hahn = document.getElementById('hahn');
				    if (sound.checked){
				    	
				    	if (wecker.checked){
				    	document.getElementsByTagName("audio")[0].play();return false  
				    	
				    		}
				    	if (weckerklassisch.checked){
					    	document.getElementsByTagName("audio")[1].play();return false  
					    	}
				    	if (sirene.checked){
					    	document.getElementsByTagName("audio")[2].play();return false  
					    	}
				    	if (schiff.checked){
					    	document.getElementsByTagName("audio")[3].play();return false  
					    	}
				    	if (kirche.checked){
					    	document.getElementsByTagName("audio")[4].play();return false  
					    	}
				    	if (hahn.checked){
					    	document.getElementsByTagName("audio")[5].play();return false  
					    	}
				    	
				    	
			        //alert("You didn't check it! Let me check it for you.")
			    	}
				//CHECKBOX
				
				
				
			}
		}
	},
	init:function(){
		var dateobj=new Date()
		this.ctref=document.getElementById("jsalarm_ct")
		this.submitref=document.getElementById("submitbutton")
		this.submitref.onclick=function(){
			
			
			jsalarm.setalarm()
			this.value="Alarm gesetzt"
			this.disabled=true
			return false
		}
		this.resetref=document.getElementById("resetbutton")
		this.resetref.onclick=function(){
			
		jsalarm.submitref.disabled=false
		jsalarm.submitref.value="Alarm !"
		jsalarm.hourwake=undefined
		jsalarm.hourselect.disabled=false
		jsalarm.minuteselect.disabled=false
		jsalarm.secondselect.disabled=false
		document.getElementById('sound').disabled=false;
		document.getElementById('wecker').disabled=false;
		document.getElementById('weckerklassisch').disabled=false;
		document.getElementById('sirene').disabled=false;
		document.getElementById('schiff').disabled=false;
		document.getElementById('kirche').disabled=false;
		document.getElementById('hahn').disabled=false;
		document.getElementById('youtube').disabled=false;
		document.getElementById('musicloc').disabled=false;
		return false
		}
		var selections=document.getElementsByTagName("select")
		this.hourselect=selections[0]
		this.minuteselect=selections[1]
		this.secondselect=selections[2]
		for (var i=0; i<60; i++){
			if (i<24) //If still within range of hours field: 0-23
			this.hourselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getHours()==i)
			this.minuteselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getMinutes()==i)
			this.secondselect[i]=new Option(this.padfield(i), this.padfield(i), false, dateobj.getSeconds()==i)

		}
		jsalarm.showcurrenttime()
		jsalarm.timer=setInterval(function(){jsalarm.showcurrenttime()}, 1000)
	},
	setalarm:function(){
		this.hourwake=this.hourselect.options[this.hourselect.selectedIndex].value
		this.minutewake=this.minuteselect.options[this.minuteselect.selectedIndex].value
		this.secondwake=this.secondselect.options[this.secondselect.selectedIndex].value
		this.hourselect.disabled=true
		this.minuteselect.disabled=true
		this.secondselect.disabled=true
		document.getElementById('sound').disabled=true;
		document.getElementById('wecker').disabled=true;
		document.getElementById('weckerklassisch').disabled=true;
		document.getElementById('sirene').disabled=true;
		document.getElementById('schiff').disabled=true;
		document.getElementById('kirche').disabled=true;
		document.getElementById('hahn').disabled=true;
		document.getElementById('youtube').disabled=true;
		document.getElementById('musicloc').disabled=true;
	}
}
