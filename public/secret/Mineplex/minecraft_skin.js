/*
	A hodgepodge of random scripts for making minecraft skins in html5 canvas tags.
	By Kent Rasmussen @ earthiverse.ath.cx
*/

//Draw an isometric model of a minecraft character
function draw_model(canvas_id,scratch_id,scale,hat) {
    var canvas_container, scratch_container;
    if (typeof canvas_id == 'string') {    
        canvas_container = document.getElementById(canvas_id);
    } else {
        canvas_container = canvas_id;
    }
    if (typeof scratch_id == 'string') {    
        scratch_container = document.getElementById(scratch_id);
    } else {
        scratch_container = scratch_id;
    }
    
	var model = canvas_container.getContext('2d');
	var scratch = scratch_container.getContext('2d');
	
	//Resize Scratch
	scratch_container.width = 64*scale;
	scratch_container.height = 32*scale;
	
	//Resize Isometric Area (Found by trial and error)
	canvas_container.width = 20*scale;
	canvas_container.height = 44.8*scale;
	
	var skin = new Image();
	skin.src = '/art/skins/Kyrea.png';
	
	skin.onload = function(){
		//Draw the skin on to the scratch
		scratch.drawImage(skin,0,0,64,32,0,0,64,32);
		//Scale it
		scale_image(scratch.getImageData(0,0,64,32), scratch, 0, 0, scale);
		//Left Leg
		//Left Leg - Front
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.scale(-1,1);
		model.drawImage(scratch_container, 4*scale, 20*scale, 4*scale, 12*scale, -16*scale, 34.4/1.2*scale, 4*scale, 12*scale);
		
		//Right Leg
		//Right Leg - Right
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 0*scale, 20*scale, 4*scale, 12*scale, 4*scale, 26.4/1.2*scale, 4*scale, 12*scale);
		//Right Leg - Front
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 4*scale, 20*scale, 4*scale, 12*scale, 8*scale, 34.4/1.2*scale, 4*scale, 12*scale);
		
		//Arm Left
		//Arm Left - Front
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.scale(-1,1);
		model.drawImage(scratch_container, 44*scale, 20*scale, 4*scale, 12*scale, -20*scale, 20/1.2*scale, 4*scale, 12*scale);
		//Arm Left - Top
		model.setTransform(-1,0.5,1,0.5,0,0);
		model.drawImage(scratch_container, 44*scale, 16*scale, 4*scale, 4*scale, 0, 16*scale, 4*scale, 4*scale);
		
		//Body
		//Body - Front
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 20*scale, 20*scale, 8*scale, 12*scale, 8*scale, 20/1.2*scale, 8*scale, 12*scale);
		
		//Arm Right
		//Arm Right - Right
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 40*scale, 20*scale, 4*scale, 12*scale, 0, 16/1.2*scale, 4*scale, 12*scale);
		//Arm Right - Front
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 44*scale, 20*scale, 4*scale, 12*scale, 4*scale, 20/1.2*scale, 4*scale, 12*scale);
		//Arm Right - Top
		model.setTransform(-1,0.5,1,0.5,0,0);
		model.scale(-1,1);
		model.drawImage(scratch_container, 44*scale, 16*scale, 4*scale, 4*scale, -16*scale, 16*scale, 4*scale, 4*scale);
		
		//Head
		//Head - Front
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 8*scale, 8*scale, 8*scale, 8*scale, 10*scale, 13/1.2*scale, 8*scale, 8*scale);
		//Head - Right
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(scratch_container, 0, 8*scale, 8*scale, 8*scale, 2*scale, 3/1.2*scale, 8*scale, 8*scale);
		//Head - Top
		model.setTransform(-1,0.5,1,0.5,0,0);
		model.scale(-1,1);
		model.drawImage(scratch_container, 8*scale, 0, 8*scale, 8*scale, -3*scale, 5*scale, 8*scale, 8*scale);
		
		if(hat == true) {
			if(!is_one_color(scratch.getImageData(40*scale,8*scale,8*scale,8*scale))) {
				//Hat
				//Hat - Front
				model.setTransform(1,-0.5,0,1.2,0,0);
				model.drawImage(scratch_container, 40*scale, 8*scale, 8*scale, 8*scale, 10*scale, 13/1.2*scale, 8*scale, 8*scale);
				//Hat - Right
				model.setTransform(1,0.5,0,1.2,0,0);
				model.drawImage(scratch_container, 32*scale, 8*scale, 8*scale, 8*scale, 2*scale, 3/1.2*scale, 8*scale, 8*scale);
				//Hat - Top
				model.setTransform(-1,0.5,1,0.5,0,0);
				model.scale(-1,1);
				model.drawImage(scratch_container, 40*scale, 0, 8*scale, 8*scale, -3*scale, 5*scale, 8*scale, 8*scale);
			}
		}
	}
}

//Draw the model facing the other way (left)
function draw_model_left(canvas_id,scratch_id,username,scale,hat) {
	//Draws an isometric model of the given minecraft username
	var model = document.getElementById(canvas_id).getContext('2d');
	var scratch = document.getElementById(scratch_id).getContext('2d');
	
	//Resize Scratch
	document.getElementById(scratch_id).width = 64*scale;
	document.getElementById(scratch_id).height = 32*scale;
	
	//Resize Isometric Area (Found by trial and error)
	document.getElementById(canvas_id).width = 20*scale;
	document.getElementById(canvas_id).height = 44.8*scale;
	
	var skin = new Image();
	//skin.src = 'https://web.archive.org/web/20171025140636/http://s3.amazonaws.com/MinecraftSkins/' + username + '.png' - Causes DOM Security Errors. So I made a php script that grabs it instead.
	skin.src = '/art/skins/Kyrea.png';
	
	skin.onload = function(){
		//Draw the skin on to the scratch
		scratch.drawImage(skin,0,0);
		//Scale it
		scale_image(scratch.getImageData(0,0,64,32), scratch, 0, 0, scale);
		
		//Left Leg
		//Left Leg - Left
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.scale(-1,1);
		model.drawImage(document.getElementById(scratch_id), 0*scale, 20*scale, 4*scale, 12*scale, -16*scale, 36.4/1.2*scale, 4*scale, 12*scale);
		//Left Leg - Front
		model.setTransform(1,0.5,0,1.2,0,0);
		model.scale(-1,1);
		model.drawImage(document.getElementById(scratch_id), 4*scale, 20*scale, 4*scale, 12*scale, -12*scale, 24.4/1.2*scale, 4*scale, 12*scale);
		
		//Right Leg
		//Right Leg - Front
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(document.getElementById(scratch_id), 4*scale, 20*scale, 4*scale, 12*scale, 4*scale, 24.4/1.2*scale, 4*scale, 12*scale);
		
		//Arm Left
		//Arm Left - Left
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.scale(-1,1);
		model.drawImage(document.getElementById(scratch_id), 40*scale, 20*scale, 4*scale, 12*scale, -20*scale, 26/1.2*scale, 4*scale, 12*scale);
		//Arm Left - Front
		model.setTransform(1,0.5,0,1.2,0,0);
		model.scale(-1,1);
		model.drawImage(document.getElementById(scratch_id), 44*scale, 20*scale, 4*scale, 12*scale, -16*scale, 10/1.2*scale, 4*scale, 12*scale);
		//Arm Left - Top
		model.setTransform(1,0.5,-1,0.5,0,0);
		model.scale(-1,1);
		model.drawImage(document.getElementById(scratch_id), 44*scale, 16*scale, 4*scale, 4*scale, -26*scale, 6*scale, 4*scale, 4*scale);
		
		//Body
		//Body - Front
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(document.getElementById(scratch_id), 20*scale, 20*scale, 8*scale, 12*scale, 4*scale, 10/1.2*scale, 8*scale, 12*scale);
		
		//Arm Right - Front
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(document.getElementById(scratch_id), 44*scale, 20*scale, 4*scale, 12*scale, 0*scale, 10/1.2*scale, 4*scale, 12*scale);
		//Arm Right - Top
		model.setTransform(1,0.5,-1,0.5,0,0);
		model.drawImage(document.getElementById(scratch_id), 44*scale, 16*scale, 4*scale, 4*scale, 10*scale, 6*scale, 4*scale, 4*scale);
		
		//Head
		//Head - Left
		model.setTransform(1,-0.5,0,1.2,0,0);
		model.drawImage(document.getElementById(scratch_id), 16*scale, 8*scale, 8*scale, 8*scale, 10*scale, 13/1.2*scale, 8*scale, 8*scale);
		//Head - Front
		model.setTransform(1,0.5,0,1.2,0,0);
		model.drawImage(document.getElementById(scratch_id), 8*scale, 8*scale, 8*scale, 8*scale, 2*scale, 3/1.2*scale, 8*scale, 8*scale);
		//Head - Top
		model.setTransform(1,0.5,-1,0.5,0,0);
		model.drawImage(document.getElementById(scratch_id), 8*scale, 0, 8*scale, 8*scale, 5*scale, -5*scale, 8*scale, 8*scale);
		
		if(hat == true) {
			if(!is_one_color(scratch.getImageData(40*scale,8*scale,8*scale,8*scale))) {
				//Hat
				//Hat - Left
				model.setTransform(1,-0.5,0,1.2,0,0);
				model.drawImage(document.getElementById(scratch_id), 48*scale, 8*scale, 8*scale, 8*scale, 10*scale, 13/1.2*scale, 8*scale, 8*scale);
				//Hat - Front
				model.setTransform(1,0.5,0,1.2,0,0);
				model.drawImage(document.getElementById(scratch_id), 40*scale, 8*scale, 8*scale, 8*scale, 2*scale, 3/1.2*scale, 8*scale, 8*scale);
				//Hat - Top
				model.setTransform(1,0.5,-1,0.5,0,0);
				model.drawImage(document.getElementById(scratch_id), 40*scale, 0, 8*scale, 8*scale, 5*scale, -5*scale, 8*scale, 8*scale);
			}
		}
	}
}

//Draw minecraft skin's hat over head
function draw_hat(canvas_id,scale) {
	var hat = document.getElementById(canvas_id).getContext('2d');
	
	//Resize Canvas
	document.getElementById(canvas_id).width = 8*scale;
	document.getElementById(canvas_id).height = 8*scale;
	
	//User's Minecraft Skin
	var skin = new Image();
	skin.src = '/art/skins/Kyrea.png';
	
	skin.onload = function(){
		//Draw hat initially so we can test if it's one color
		hat.drawImage(skin,40,8,8,8,0,0,8,8);
		if(is_one_color(hat.getImageData(0,0,8,8))) {
			//Clear the canvas
			hat.clearRect(0,0,8,8);
			//Draw the head
			hat.drawImage(skin,8,8,8,8,0,0,8,8);
		} else {
			//Draw the head
			hat.drawImage(skin,8,8,8,8,0,0,8,8);
			//Draw the hat
			hat.drawImage(skin,40,8,8,8,0,0,8,8);
		}
		//Scale the hat
		scale_image(hat.getImageData(0,0,8,8), hat, 0, 0, scale);
	};
}

//Draw minecraft skin's head
function draw_head(canvas_id,scale) {
	var canvas = document.getElementById(canvas_id).getContext('2d');
	
	//Resize Canvas
	document.getElementById(canvas_id).width = 8*scale;
	document.getElementById(canvas_id).height = 8*scale;
	
	//User's Minecraft Skin
	var head_original = new Image();
	head_original.src = '/art/skins/Kyrea.png';
	
	head_original.onload = function(){
		//Draw the head
		canvas.drawImage(head_original,8,8,8,8,0,0,8,8);
		//Scale the head
		scale_image(canvas.getImageData(0,0,8,8), canvas, 0, 0, scale);
	};
}

//Checks if the provided imageData is one color
function is_one_color(imageData) {
	var width = imageData.width;
	var height = imageData.height;
	var is_one_color = true;
	
	//Get First Pixel Color
	var pixel_data = "" + imageData.data[0] + imageData.data[1] + imageData.data[2]
	for(y=0; y<height; y++) { //height original
		for(x=0; x<width; x++) { //width original
			//Gets original colour, then makes a rectangle of it
			var index = (x + y * width) * 4;
			var compare = "" + imageData.data[index+0] + imageData.data[index+1] + imageData.data[index+2]
			if (compare !== pixel_data) {
				//Break loop if not one color
				is_one_color = false;
				break;
			}
		//Break loop if not one color
		if(is_one_color == false) break;
		}
	}
	return is_one_color;
}

//Scales using nearest neighbour
function scale_image(imageData, context, d_x, d_y, scale) {
	var width = imageData.width;
	var height = imageData.height;
	context.clearRect(0,0,width,height); //Clear the spot where it originated from
	for(y=0; y<height; y++) { //height original
		for(x=0; x<width; x++) { //width original
			//Gets original colour, then makes a scaled square of the same colour
			var index = (x + y * width) * 4;
			context.fillStyle = "rgba(" + imageData.data[index+0] + "," + imageData.data[index+1] + "," + imageData.data[index+2] + "," + imageData.data[index+3] + ")";
			context.fillRect(d_x + x*scale, d_y + y*scale, scale, scale);
		}
	}
}

/*
     FILE ARCHIVED ON 14:06:36 Oct 25, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:16:18 Oct 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.723
  exclusion.robots: 0.036
  exclusion.robots.policy: 0.023
  esindex: 0.011
  cdx.remote: 9.103
  LoadShardBlock: 74.066 (3)
  PetaboxLoader3.datanode: 151.185 (5)
  load_resource: 288.482 (2)
  PetaboxLoader3.resolve: 171.884 (2)
*/