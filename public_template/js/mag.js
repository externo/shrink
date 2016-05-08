function mag_include(file)
{
	if (document.createElement && document.getElementsByTagName)
	{
		var head = document.getElementsByTagName('head')[0];

		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', file);

		head.appendChild(script);
	}
	else
	{
		alert('Your browser can\'t deal with the DOM standard. That means it\'s old. Go fix it!');
	}
}

//mag_include("db.js");

function mag_onload()
{
	if( ('photo' in db) && ('categories' in db['photo']) )
	for(var i in db['photo']['categories'])
	{
		var cat_name=db['photo']['categories'][i]['name'];
		var i=db['photo']['categories'][i]['id'];
		var el=document.createElement('li');
		el.innerHTML='<a href="#!/page_photo_'+i+'">'+cat_name+'</a>';
		if(document.getElementById('photo_menu')) document.getElementById('photo_menu').appendChild(el);
		
		var page='';
		
		page+='<div class="box2">';
		page+='<div class="gallery_txt">'+cat_name+'</div>';
		page+='<a href="#" class="prevGall"><span></span></a>';
		page+='<a href="#" class="nextGall"><span></span></a>';
		page+='<div class="scrollGall"><ul>';			
		var c_i=0
		if( ('list' in db['photo']) && (i in db['photo']['list']) )
		for(var ii in db['photo']['list'][i])
		{
			
			var photo=db['photo']['list'][i][ii];
			page+='<li>';
			page+='<a class="photo1" href="gallery/'+i+'/'+photo['id']+'.jpg" rel="prettyPhoto[pp_gal'+i+']" title="'+photo['description'].replace(/"/ig, '&quot;')+'"><img src="gallery/'+i+'/'+photo['id']+'_small.jpg" title="'+photo['description'].replace(/"/ig, '&quot;')+'"><span class="txt">'+photo['description'].replace(/"/ig, '&quot;')+'</span><div class="over"></div></a>';
			page+='</li>';
			
		}
		page+='</ul></div>';//scroll-pane
		page+='</div>';//box2
		var el=document.createElement('li');
		el.setAttribute('id','page_photo_'+i);
		el.innerHTML=page;
		if(document.getElementById('pages')) document.getElementById('pages').appendChild(el);
	}
	
	
	
	if( ('video' in db) && ('categories' in db['video']) )
	for(var i in db['video']['categories'])
	{
		var cat_name=db['video']['categories'][i]['name'];
		var i=db['video']['categories'][i]['id'];
		var el=document.createElement('li');
		el.innerHTML='<a href="#!/page_video_'+i+'">'+cat_name+'</a>';
		if(document.getElementById('video_menu')) document.getElementById('video_menu').appendChild(el);
		
		var page='';
		
		page+='<div class="box">';
		page+='<h2>'+cat_name+'</h2>';	
		page+='<div class="scroll-pane"><div>';		
		var c_i=0
		if( ('list' in db['video']) &&(i in db['video']['list']) )
		for(var ii in db['video']['list'][i])
		{
			c_i++;
			if(c_i==3)
			{
				var clas=' last';
				var clea=' <div class="clear"></div>';
				c_i=0;
			}
			else
			{
				var clas='';
				var clea='';
			}
			var video=db['video']['list'][i][ii];
			page+='<div class="vid1'+clas+'">';
			page+='<div class="video1"><a href="'+video['video']+'" rel="prettyPhoto[mixed_'+i+']" title="'+video['description'].replace(/"/ig, '&quot;')+'"><img src="videos/'+i+'/'+video['id']+'_small.jpg" title="'+video['description'].replace(/"/ig, '&quot;')+'"></a></div><span class="txt">'+video['description'].replace(/"/ig, '&quot;')+'</span>';
			page+='</div>';			
			page+=clea;
		}
		page+='</div></div>';//scroll-pane
		page+='</div>';//box
		var el=document.createElement('li');
		el.setAttribute('id','page_video_'+i);
		el.innerHTML=page;
		if(document.getElementById('pages')) document.getElementById('pages').appendChild(el);
	}
	
	
	init_gals();
}