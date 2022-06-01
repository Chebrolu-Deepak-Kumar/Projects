
// Must Fill Function

function Check_Pass(Pass_Value) {
	if (Pass_Value.password.value !=Pass_Value.Confirm_password.value) {
			alert('Password doesn\'t match');
			return false;
	} else {
			return true;
			}
		}


var counter=1;
setInterval(function(){
	document.getElementById('r' + counter).checked=true;
	counter++;
	if(counter > 4){
		counter=1;
	}
},3000);
