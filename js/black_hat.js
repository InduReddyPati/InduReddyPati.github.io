function display(){
    switch(document.form_radio.option.value){
        case "AllShootings":
            document.getElementById("radio_img_div").innerHTML = "<img src='images/allshootings.png' style='width:1000px;height:600px;' class='radio_img'>";
            document.getElementById("img_legend_2").innerHTML = '<img style="width:200px;height:60px;" src="images/format_1.png" alt="legend" id="img_l_2">';
            var img_4 = document.getElementById("img_l_1");
            if (typeof(img_4) != 'undefined' && img_4 != null){
                img_4.remove();
            }
            var text_2 = document.getElementById("h1_img_txt_c");
            if (typeof(text_2) != 'undefined' && text_2 != null){
                text_2.remove();
            }
            document.getElementById("img_txt_c").innerHTML = '<h3 id="h1_img_txt_c" class="font_0">"EAST COAST" voilent "KILLERS"!! "MID US" and "WEST COAST" more "SAFE"!!!</h3>';
            break;
        case "MaleFemale":
            document.getElementById("radio_img_div").innerHTML = "<img src='images/MaleFemale.png' style='width:1000px;height:600px;' class='radio_img'>"; 
            var img_1 = document.getElementById("img_l_1");
            if (typeof(img_1) != 'undefined' && img_1 != null){
                img_1.remove();
            }
            var img_2 = document.getElementById("img_l_2");
            if (typeof(img_2) != 'undefined' && img_2 != null){
                img_2.remove();
            }
            var text_1 = document.getElementById("h1_img_txt_c");
            if (typeof(text_1) != 'undefined' && text_1 != null){
                text_1.remove();
            }
            document.getElementById("img_txt_c").innerHTML = '<h3 id="h1_img_txt_c" class="font_0">"SLAYERS" fascinated by "MALES THAN FEMALES"! To "KILL"!!!</h3>';
            break;
        case "DeathsChoropleth":
            document.getElementById("radio_img_div").innerHTML = "<img src='images/deathchoropleth.png' style='width:1000px;height:600px;' class='radio_img'>";
            document.getElementById("img_legend_1").innerHTML = '<img style="width:200px;height:60px;" src="images/format.png" alt="legend" id="img_l_1">';
            var img_3 = document.getElementById("img_l_2");
            if (typeof(img_3) != 'undefined' && img_3 != null){
                img_3.remove();
            }
            var text_3 = document.getElementById("h1_img_txt_c");
            if (typeof(text_3) != 'undefined' && text_3 != null){
                text_3.remove();
            }
            document.getElementById("img_txt_c").innerHTML = '<h3 id="h1_img_txt_c" class="font_0">"TEXAS" and "CALIFORNIA" "MURDEROUS" US States!! "FLORIDA" no "LESS"!!</h3>';
            break;
    }
  }