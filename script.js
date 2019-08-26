(function () {
    $(function () {
        $(".logoDiv").attr("src", "pics/empty.png");
        $('#select9').colorselector();
		
		$("#select1").on("change", function (e) {
	        var vl = $(this).val();
            var logo = $("#logo");
            logo.css("background-color", vl);
            $(this).css("background-color", vl);
        });

        $("#select2").on("change", function (e) {
            var vl = $(this).find("option:selected").val();
            var logo = $("#logo");
			logo.css("background-image", "url(" + vl + ")");
        });

        $("#select3").on("change", function (e) {
            var vl = $(this).find("option:selected").val();
            var companyName = $("#companyName");
            companyName.text(vl);
        });

        $("#select4").on("change", function (e) {
            var vl = $(this).find("option:selected").val();
            var companyName = $("#companyName");
            companyName.css("font-size", vl);
        });

        $("#select5").on("change", function (e) {
            var vl = $(this).find("option:selected").val();
            var companyName = $("#companyName");
            companyName.css("font-family", vl);
        });

        $("#select6").on("change", function (e) {
            var vl = $(this).val();
            var companyName = $("#companyName");
            companyName.css("color", vl);
            $(this).css("background-color", vl);
        });

        //logo
        $("#select7").on("change", function (e) {
            changeLogo();
        });

        // logo count
        $("#select8").on("change", function (e) {
            changeLogo();
        });

        //logo color
        $("#select9").on("change", function (e) {
            var vl = $(this).find("option:selected").css("background-color");
            $(this).css("background-color", vl);
            changeLogo();
        });

        var changeLogo = function () {
            $(".logoDiv").attr("src", "pics/empty.png");
			changeSizeToDefault();

            var logo = $("#select7").find("option:selected").val();
            var logoCnt = $("#select8").find("option:selected").val();
            var color = $("#select9").find("option:selected").val();

            var logoImgUrl = "pics/256/" + color + "/" + logo + ".png";
			if (logo === "no") logoImgUrl = "pics/empty.png";

            switch (logoCnt) {
                case "1":
				    changeSize();
                    $("#d5").attr("src", logoImgUrl);
                    break;
                case "2":
                    $("#d4").attr("src", logoImgUrl);
                    $("#d6").attr("src", logoImgUrl);
                    break;
                case "3":
                    $("#d4").attr("src", logoImgUrl);
                    $("#d5").attr("src", logoImgUrl);
                    $("#d6").attr("src", logoImgUrl);
                    break;
                case "4":
                    $("#d1").attr("src", logoImgUrl);
                    $("#d3").attr("src", logoImgUrl);
                    $("#d7").attr("src", logoImgUrl);
                    $("#d9").attr("src", logoImgUrl);
                    break;
                case "5":
                    $("#d1").attr("src", logoImgUrl);
                    $("#d3").attr("src", logoImgUrl);
                    $("#d5").attr("src", logoImgUrl);
                    $("#d7").attr("src", logoImgUrl);
                    $("#d9").attr("src", logoImgUrl);
                    break;
                case "6":
                    $("#d1").attr("src", logoImgUrl);
                    $("#d3").attr("src", logoImgUrl);
                    $("#d4").attr("src", logoImgUrl);
                    $("#d6").attr("src", logoImgUrl);
                    $("#d7").attr("src", logoImgUrl);
                    $("#d9").attr("src", logoImgUrl);
                    break;
                case "7":
                    $("#d1").attr("src", logoImgUrl);
                    $("#d3").attr("src", logoImgUrl);
                    $("#d4").attr("src", logoImgUrl);
                    $("#d5").attr("src", logoImgUrl);
                    $("#d6").attr("src", logoImgUrl);
                    $("#d7").attr("src", logoImgUrl);
                    $("#d9").attr("src", logoImgUrl);
                    break;
                case "8":
                    $("#d1").attr("src", logoImgUrl);
                    $("#d2").attr("src", logoImgUrl);
                    $("#d3").attr("src", logoImgUrl);
                    $("#d4").attr("src", logoImgUrl);
                    $("#d6").attr("src", logoImgUrl);
                    $("#d7").attr("src", logoImgUrl);
                    $("#d8").attr("src", logoImgUrl);
                    $("#d9").attr("src", logoImgUrl);
                    break;
                case "9":
                    $("#d1").attr("src", logoImgUrl);
                    $("#d2").attr("src", logoImgUrl);
                    $("#d3").attr("src", logoImgUrl);
                    $("#d4").attr("src", logoImgUrl);
                    $("#d5").attr("src", logoImgUrl);
                    $("#d6").attr("src", logoImgUrl);
                    $("#d7").attr("src", logoImgUrl);
                    $("#d8").attr("src", logoImgUrl);
                    $("#d9").attr("src", logoImgUrl);
                    break;
                default:
                    break;
            }
        };
		
		var changeSize = function(){
			var size64 = "64";
			var size256 = "256";
			var width = "width";
			var height = "height";			
			var d1 = $("#d1");
			d1.css(width, size64);
			d1.css(height, size64);
			var d2 = $("#d2");
			d2.css(width, size256);
			d2.css(height, size64);
			var d3 = $("#d3");
			d3.css(width, size64);
			d3.css(height, size64);
			var d4 = $("#d4");
			d4.css(width, size64);
			d4.css(height, size256);
			var d5 = $("#d5");
			d5.css(width, size256);
			d5.css(height, size256);
			var d6 = $("#d6");
			d6.css(width, size64);
			d6.css(height, size256);
			var d7 = $("#d7");
			d7.css(width, size64);
			d7.css(height, size64);
			var d8 = $("#d8");
			d8.css(width, size256);
			d8.css(height, size64);
			var d9 = $("#d9");
			d9.css(width, size64);
			d9.css(height, size64);
		};
		
		var changeSizeToDefault = function(){		    
			var size = "128px";
			var imgs = $(".logoDiv");
			imgs.css("width", size);
			imgs.css("height", size);
		};

    });
})();
