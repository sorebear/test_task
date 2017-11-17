"use strict";function getImages(e){$.ajax({url:"https://techi.envivent.com/images.json",success:function(t){for(var o=t.employees,s=t["images-folder"],n=0;n<e.length;n++){var a=$('<img src="'+s+o[e[n].id-1].full+'">');$(".team-image-"+n).append(a)}},error:function(){console.log("There was an error getting the proper images.")}})}function getTitles(e){$.ajax({url:"https://techi.envivent.com/description.json",success:function(t){var o=t.employees.sort(function(e,t){return e.id-t.id});console.log("Titles After Sort: ",o);for(var s=0;s<e.length;s++){var n=o[e[s].id-1].title,a=o[e[s].id-1].description;$(".team-image-"+s+" .employee-title").text(n),$(".team-image-"+s+" .job-description").text(a)}},error:function(){console.log("There was an error getting the proper images.")}})}function toggleMobileMenu(){$(".mobile-menu").hasClass("fa-bars")?($("nav ul").css("animation","open .5s both"),$(".mobile-menu").addClass("fa-times").removeClass("fa-bars").css("color",teal)):($("nav ul").css("animation","collapse .5s both"),$(".mobile-menu").addClass("fa-bars").removeClass("fa-times").css("color","black"))}var teal="rgb(00, 150, 136)";$(".mobile-menu").on("click",function(){return toggleMobileMenu()}),$.ajax({url:"https://techi.envivent.com/names.json",success:function(e){for(var t=e.employees,o=[],s=0;s<3;s++){o.push(t.splice(Math.floor(Math.random()*t.length),1)[0]);var n=o[s].first_name+" "+o[s].last_name;$(".team-image-"+s+" .employee-name").text(n)}getTitles(o),getImages(o)},error:function(){console.log("There was an error getting the employees information")}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZ2V0SW1hZ2VzIiwiZW1wbG95ZWVBcnJheSIsIiQiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsInJlc3VsdCIsImVtcGxveWVlUGljdHVyZXMiLCJlbXBsb3llZXMiLCJpbWFnZUZvbGRlciIsImkiLCJsZW5ndGgiLCJpbWFnZSIsImFwcGVuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldFRpdGxlcyIsImVtcGxveWVlVGl0bGVzIiwic29ydCIsImEiLCJiIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGV4dCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJoYXNDbGFzcyIsImNzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0ZWFsIiwib24iLCJyYW5kb21UaHJlZUVtcGxveWVlcyIsInB1c2giLCJzcGxpY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxhQTZCQSxTQUFTQSxVQUFVQyxHQUNsQkMsRUFBRUMsTUFDREMsSUFBSyx5Q0FDTEMsUUFBUyxTQUFpQkMsR0FHekIsSUFBSyxJQUZEQyxFQUFtQkQsRUFBT0UsVUFDMUJDLEVBQWNILEVBQU8saUJBQ2hCSSxFQUFJLEVBQUdBLEVBQUlULEVBQWNVLE9BQVFELElBQUssQ0FDOUMsSUFBSUUsRUFBUVYsRUFBRSxhQUFlTyxFQUFjRixFQUFpQk4sRUFBY1MsR0FBTyxHQUFJLEdBQVMsS0FBSSxNQUNsR1IsRUFBRSxlQUFpQlEsR0FBR0csT0FBT0QsS0FHL0JFLE1BQU8sV0FDTkMsUUFBUUMsSUFBSSxvREFPZixTQUFTQyxVQUFVaEIsR0FDbEJDLEVBQUVDLE1BQ0RDLElBQUssOENBQ0xDLFFBQVMsU0FBaUJDLEdBQ3pCLElBQUlZLEVBQWlCWixFQUFPRSxVQUFVVyxLQUFLLFNBQVVDLEVBQUdDLEdBQ3ZELE9BQU9ELEVBQUVFLEdBQUtELEVBQUVDLEtBRWpCUCxRQUFRQyxJQUFJLHNCQUF1QkUsR0FDbkMsSUFBSyxJQUFJUixFQUFJLEVBQUdBLEVBQUlULEVBQWNVLE9BQVFELElBQUssQ0FDOUMsSUFBSWEsRUFBUUwsRUFBZWpCLEVBQWNTLEdBQU8sR0FBSSxHQUFVLE1BQzFEYyxFQUFjTixFQUFlakIsRUFBY1MsR0FBTyxHQUFJLEdBQWdCLFlBQzFFUixFQUFFLGVBQWlCUSxFQUFJLG9CQUFvQmUsS0FBS0YsR0FDaERyQixFQUFFLGVBQWlCUSxFQUFJLHFCQUFxQmUsS0FBS0QsS0FHbkRWLE1BQU8sV0FDTkMsUUFBUUMsSUFBSSxvREFNZixTQUFTVSxtQkFDSnhCLEVBQUUsZ0JBQWdCeUIsU0FBUyxZQUM5QnpCLEVBQUUsVUFBVTBCLElBQUksWUFBYSxpQkFDN0IxQixFQUFFLGdCQUFnQjJCLFNBQVMsWUFBWUMsWUFBWSxXQUFXRixJQUFJLFFBQVNHLFFBRTNFN0IsRUFBRSxVQUFVMEIsSUFBSSxZQUFhLHFCQUM3QjFCLEVBQUUsZ0JBQWdCMkIsU0FBUyxXQUFXQyxZQUFZLFlBQVlGLElBQUksUUFBUyxVQTFFN0UsSUFBSUcsS0FBTyxvQkFFWDdCLEVBQUUsZ0JBQWdCOEIsR0FBRyxRQUFTLFdBQzdCLE9BQU9OLHFCQUdSeEIsRUFBRUMsTUFDREMsSUFBSyx3Q0FDTEMsUUFBUyxTQUFpQkMsR0FHekIsSUFBSyxJQUZERSxFQUFZRixFQUFPRSxVQUNuQnlCLEtBQ0t2QixFQUFJLEVBQUdBLEVBQUksRUFBR0EsSUFBSyxDQUMzQnVCLEVBQXFCQyxLQUFLMUIsRUFBVTJCLE9BQU9DLEtBQUtDLE1BQU1ELEtBQUtFLFNBQVc5QixFQUFVRyxRQUFTLEdBQUcsSUFDNUYsSUFBSTRCLEVBQU9OLEVBQXFCdkIsR0FBZSxXQUFJLElBQU11QixFQUFxQnZCLEdBQWMsVUFDNUZSLEVBQUUsZUFBaUJRLEVBQUksbUJBQW1CZSxLQUFLYyxHQUloRHRCLFVBQVVnQixHQUNWakMsVUFBVWlDLElBRVhuQixNQUFPLFdBQ05DLFFBQVFDLElBQUkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHRlYWwgPSBcInJnYigwMCwgMTUwLCAxMzYpXCI7XG5cbiQoJy5tb2JpbGUtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRvZ2dsZU1vYmlsZU1lbnUoKTtcbn0pO1xuLy8gRmlyc3QgQWpheCBDYWxsIGFuZCBGdW5jdGlvbiBHZXRzIFRoZSBFbXBsb3llZSBOYW1lcyBhbmQgUmFuZG9tbHkgQ2hvb3NlcyBUaHJlZSBUbyBEaXNwbGF5XG4kLmFqYXgoe1xuXHR1cmw6IFwiaHR0cHM6Ly90ZWNoaS5lbnZpdmVudC5jb20vbmFtZXMuanNvblwiLFxuXHRzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlc3VsdCkge1xuXHRcdHZhciBlbXBsb3llZXMgPSByZXN1bHQuZW1wbG95ZWVzO1xuXHRcdHZhciByYW5kb21UaHJlZUVtcGxveWVlcyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyYW5kb21UaHJlZUVtcGxveWVlcy5wdXNoKGVtcGxveWVlcy5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1wbG95ZWVzLmxlbmd0aCksIDEpWzBdKTtcblx0XHRcdHZhciBuYW1lID0gcmFuZG9tVGhyZWVFbXBsb3llZXNbaV1bJ2ZpcnN0X25hbWUnXSArIFwiIFwiICsgcmFuZG9tVGhyZWVFbXBsb3llZXNbaV1bJ2xhc3RfbmFtZSddO1xuXHRcdFx0JChcIi50ZWFtLWltYWdlLVwiICsgaSArIFwiIC5lbXBsb3llZS1uYW1lXCIpLnRleHQobmFtZSk7XG5cdFx0fVxuXHRcdC8vIE9uY2UgdGhlIDMgcmFuZG9tIGVtcGxveWVlcyBhcmUgY2hvc2VuLCBcblx0XHQvLyB0aGUgb3RoZXIgMiBBSkFYIGNhbGxzIGFuZCBpbnZva2VkIHdpdGggdGhhdCBpbmZvcm1hdGlvblxuXHRcdGdldFRpdGxlcyhyYW5kb21UaHJlZUVtcGxveWVlcyk7XG5cdFx0Z2V0SW1hZ2VzKHJhbmRvbVRocmVlRW1wbG95ZWVzKTtcblx0fSxcblx0ZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuXHRcdGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgdGhlIGVtcGxveWVlcyBpbmZvcm1hdGlvblwiKTtcblx0fVxufSk7XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgaW1hZ2VzIGZvciB0aGUgMyBlbXBsb3llZXMgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgRGl2IG9uIHRoZSBET01cbmZ1bmN0aW9uIGdldEltYWdlcyhlbXBsb3llZUFycmF5KSB7XG5cdCQuYWpheCh7XG5cdFx0dXJsOiBcImh0dHBzOi8vdGVjaGkuZW52aXZlbnQuY29tL2ltYWdlcy5qc29uXCIsXG5cdFx0c3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdHZhciBlbXBsb3llZVBpY3R1cmVzID0gcmVzdWx0LmVtcGxveWVlcztcblx0XHRcdHZhciBpbWFnZUZvbGRlciA9IHJlc3VsdFtcImltYWdlcy1mb2xkZXJcIl07XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVtcGxveWVlQXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGltYWdlID0gJCgnPGltZyBzcmM9XCInICsgaW1hZ2VGb2xkZXIgKyBlbXBsb3llZVBpY3R1cmVzW2VtcGxveWVlQXJyYXlbaV1bXCJpZFwiXSAtIDFdW1wiZnVsbFwiXSArICdcIj4nKTtcblx0XHRcdFx0JChcIi50ZWFtLWltYWdlLVwiICsgaSkuYXBwZW5kKGltYWdlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgdGhlIHByb3BlciBpbWFnZXMuXCIpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyB0aGUgdGl0bGVzL2pvYiBkZXNjcmlwdGlvbnMgZm9yIHRoZSAzIGVtcGxveWVlc1xuLy8gQW5kIHNldHMgaXQgdG8gdGhlIFRleHQgcHJvcGVydHkgb2YgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHMgb24gdGhlIERPTVxuZnVuY3Rpb24gZ2V0VGl0bGVzKGVtcGxveWVlQXJyYXkpIHtcblx0JC5hamF4KHtcblx0XHR1cmw6IFwiaHR0cHM6Ly90ZWNoaS5lbnZpdmVudC5jb20vZGVzY3JpcHRpb24uanNvblwiLFxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHR2YXIgZW1wbG95ZWVUaXRsZXMgPSByZXN1bHQuZW1wbG95ZWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIGEuaWQgLSBiLmlkO1xuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlRpdGxlcyBBZnRlciBTb3J0OiBcIiwgZW1wbG95ZWVUaXRsZXMpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbXBsb3llZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciB0aXRsZSA9IGVtcGxveWVlVGl0bGVzW2VtcGxveWVlQXJyYXlbaV1bXCJpZFwiXSAtIDFdW1widGl0bGVcIl07XG5cdFx0XHRcdHZhciBkZXNjcmlwdGlvbiA9IGVtcGxveWVlVGl0bGVzW2VtcGxveWVlQXJyYXlbaV1bXCJpZFwiXSAtIDFdW1wiZGVzY3JpcHRpb25cIl07XG5cdFx0XHRcdCQoXCIudGVhbS1pbWFnZS1cIiArIGkgKyBcIiAuZW1wbG95ZWUtdGl0bGVcIikudGV4dCh0aXRsZSk7XG5cdFx0XHRcdCQoXCIudGVhbS1pbWFnZS1cIiArIGkgKyBcIiAuam9iLWRlc2NyaXB0aW9uXCIpLnRleHQoZGVzY3JpcHRpb24pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgcHJvcGVyIGltYWdlcy5cIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gSW4gTW9iaWxlIFZpZXcsIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgT3BlbmluZyBhbmQgQ2xvc2luZyBvZiB0aGUgTWVudSBvbiBCdXR0b24gUHJlc3NcbmZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XG5cdGlmICgkKCcubW9iaWxlLW1lbnUnKS5oYXNDbGFzcygnZmEtYmFycycpKSB7XG5cdFx0JCgnbmF2IHVsJykuY3NzKCdhbmltYXRpb24nLCAnb3BlbiAuNXMgYm90aCcpO1xuXHRcdCQoJy5tb2JpbGUtbWVudScpLmFkZENsYXNzKCdmYS10aW1lcycpLnJlbW92ZUNsYXNzKCdmYS1iYXJzJykuY3NzKCdjb2xvcicsIHRlYWwpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJ25hdiB1bCcpLmNzcygnYW5pbWF0aW9uJywgJ2NvbGxhcHNlIC41cyBib3RoJyk7XG5cdFx0JCgnLm1vYmlsZS1tZW51JykuYWRkQ2xhc3MoJ2ZhLWJhcnMnKS5yZW1vdmVDbGFzcygnZmEtdGltZXMnKS5jc3MoJ2NvbG9yJywgJ2JsYWNrJyk7XG5cdH1cbn0iXX0=
