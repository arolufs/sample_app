function textCounter(field,cntfield,maxlimit) {
// if too long...trim it!
if (field.value.length > maxlimit) 
	field.value = field.value.substring(0, maxlimit);
// otherwise, update 'characters left' counter
else
	cntfield.innerHTML = maxlimit - field.value.length;
}