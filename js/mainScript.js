$(function(){
	$("#youroption").change(function(){
		var strchoose=$(this).val();
		var choose=parseInt(strchoose); 
		var price=choose*3;
		if (price==0) {
			alert("您还未选择相应目的地\n请选择")
		}else{
			alert("票价："+price+"元");
		}
	});
	$(".am-btn-group label").click(function(event) {
		if (this.id=="fiveyuan") {
			checkMoney(5);
		}else if (this.id=="tenyuan") {
			checkMoney(10);
		}else if (this.id=="twentyyuan") {
			checkMoney(20);
		}else if (this.id=="fiftyyuan") {
			checkMoney(50);
		};
	});
	$("#submittonext").click(function(event) {
		if ($("#youroption").val()==0) {
			alert("您还未选择相应目的地\n请选择")
		}else{
			
			var inputs=document.getElementsByTagName("input");
			for (var i = 0; i < inputs.length; i++) {
				// 获取被选择的投入价钱选项
				if (inputs[i].checked) {
					// 足够就找零并出票
					if(checkMoney(inputs[i].id)){
						var change=inputs[i].id-$("#youroption").val()*3;
						alert("您所需的到"+$("#youroption").find("option:selected").text()+"的地铁票出票成功\n找零"+change+"元");
					}
				}
			}
		}
	});
});
function checkMoney(youmoney){
	var change=youmoney-$("#youroption").val()*3;
	if (change<0) {
		alert("您投入的钱币不足\n退还您"+youmoney+"元\n请重新投入");
		return false;
	}else{
		return true;
	}
}