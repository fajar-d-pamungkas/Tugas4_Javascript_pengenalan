var tFajar = 2
var tDika = 3
var tRahmat = 1

if(tFajar>tDika)
{
	if(tFajar>tRahmat)
	{
		if(tRahmat>tDika)
		{
			console.log(tFajar,tRahmat,tDika)
		}
		else
		{
			console.log(tFajar,tDika,tRahmat)
		}	
	}
	else
	{
		console.log(tRahmat,tFajar,tDika)
	}
		
}
else if(tDika>tRahmat)
{
	if(tRahmat>tFajar)
	{
		console.log(tDika,tRahmat,tFajar)
	}
	else
	{
		console.log(tDika,tFajar,tRahmat)
	}
}
else
{
	console.log(tRahmat,tDika,tFajar)
}