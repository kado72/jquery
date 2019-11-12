$(":radio").prop("disabled",true),

// when checkbox clieked
$("#qcheck").click(function(){
    if($("#qcheck").prop("checked")){
        // able radio button
        $(":radio").prop("disabled", false);
    } else {
        // disable radio button
        $(":radio").prop("disabled", true);
    }
});

$(".price").change(function(){
    if (Number($("#lprice").val()) <= Number($("#hprice").val())){        
        // L<H
        $(".price").removeClass('error');
        $(".alert").text("");
        // L>H
    } else {
        $(".price").addClass("error");
        $(".alert").text("価格帯を正しく入力してください");
    }
});

// add Placeholder with JQuery
let placeholderText = '商品名かカテゴリーを入力してください'
// show placeholder text in the input box
$("#gword").addClass("placeholder");
$("#gword").val(placeholderText);

// focus on gword
$("#gword").focus(function(){
    if($("#gword").val() == placeholderText){
        // no input in gword
        $("#gword").removeClass("placeholder");
        $('#gword').val("");
  }
});

// no focus on gword
$("#gword").blur(function(){
    if($("#gword").val() == "") {
        // no input in gword
        $("#gword").addClass("placeholder");
        $("#gword").val(placeholderText);
    }
})