var a=document.body.appendChild(document.createElement("div"));a.innerHTML="Saving...";a.style.position="fixed";a.style.height="100%";a.style.width="100%";a.style.top=0;a.style.left=0;a.style.zIndex=1E3;a.style.fontSize="40px";a.style.textAlign="center";a.style.fontWeight="bold";a.style.color="#fff";a.style.paddingTop="10%";a.style.fontFamily="sans-serif";a.style.backgroundColor="rgba(0,0,0,.5)";setTimeout(function(){a.innerHTML="OK!";setTimeout(function(){a.parentNode.removeChild(a)},1E3)},1E3);