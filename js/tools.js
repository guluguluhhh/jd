//添加class
		



//move

function getStyle(obj,name){
				if(window.getComputedStyle){
					return getComputedStyle(obj,null)[name];
				}else{
					return obj.currentStyle[name];
				}
			}
function move(obj,attr,target,speed,callback){
					var curent=parseInt(getStyle(obj,attr));
					if(curent>target){
						speed=-speed;
					}
					clearInterval(obj.timer);
					obj.timer=setInterval(function(){
						var oldValue=parseInt(getStyle(obj,attr));
						var newValue=oldValue+speed;
						if((newValue>target && speed>0)||(newValue<target && speed<0)){
							newValue=target;
						}
						obj.style[attr]=newValue+"px";
						if(newValue==target){
							clearInterval(obj.timer);
							callback&&callback();
						}
					},30);
				}





function hasClass(obj,cn){
			var reg=new RegExp("\\b"+cn+"\\b");
			return reg.test(obj.className);
		}
		function addClass(obj,cn){
			if(!hasClass(obj,cn)){
				obj.className+=" "+cn;
			}
		}
		function removeClass(obj,cn){
			var reg = new RegExp("\\b"+cn+"\\b");
			obj.className=obj.className.replace(reg,"");
		}
		function toggleClass(obj,cn){
			if(hasClass(obj,cn)){
				removeClass(obj,cn);
			}else{
				addClass(obj,cn);
			}
		}