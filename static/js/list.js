	var isloading=false;
		$(window).scroll(function(){

				var dH=$(document).height();

				var sT=$(window).scrollTop();

				var cH=$(window).height();

				if(dH-sT-cH>50){
					if(isloading) return;
					isloading=true;


					$.get('static/js/list.json',{},function(data){

						// var data=parseJSON(data);

						// console.log(data);

						for(var i=0;i<data.length;i++){
							var li=$('#shuo li').clone();
							// console.log(li);
							li.find('img').attr('src',data[i].pic);

							$('#shuo').append(li);
						}

					})

					isloading=false;

					// page++;

				}


			})


	$(window).trigger('scroll');