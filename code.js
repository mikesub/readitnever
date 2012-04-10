(function(g){
	var div = document.body.appendChild(document.createElement('div'));
	div.innerHTML = 'Saving...';
	div.style.position = 'fixed';
	div.style.height = '100%';
	div.style.width = '100%';
	div.style.top = 0;
	div.style.left = 0;
	div.style.zIndex = 1000;
	div.style.fontSize = '200%';
	div.style.textAlign = 'center';
	div.style.fontWeight = 'bold';
	div.style.color = '#fff';
	div.style.paddingTop = '10%';
	div.style.fontFamily = 'sans-serif';
	div.style.backgroundColor = 'rgba(0,0,0,.5)';
	g.setTimeout(function(){
		div.innerHTML = 'OK!';
		g.setTimeout(function(){
			div.parentNode.removeChild(div);
		}, 1000);
	}, 1000);
})(window);