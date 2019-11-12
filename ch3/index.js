$("form").submit(function(){
    let checkSubmit = true;

    // name input check
    if ($('#uname').val() == ''){
        // not input add class error
        // turn textbox color red
        $("#uname").addClass('error');
        // add text in span#alert 
        $('#uname+span').text("名前を入力してください");
        // not submit
        checkSubmit = false;
    } else {
        $('#uname').removeClass('error');
        $('#uname+span').text("");
    }

    // sex
    if ($(":radio:checked").length == 0){
        $(':radio').addClass("error");
        $(":radio+span").text("性別を入力してください")
        // not submit
        checkSubmit = false;
    } else {
        $(':radio').removeClass("error");
        $(":radio+span").text("");
    }

    // email
    $("#uemail").change(function(){
        if($("#uemail").val().match(/^[\w\.\-]+\@[\w\.\-]+$/)){
            $("#uemail").removeClass('error');
            $("#uemail+span").text("");
        } else {
            $("#uemail").addClass("error");
            $("#uemail+span").text("書式に誤りがあります");
        }
    });
    // post address
    $("#uzip").change(function(){
        if($("#uzip").val().match(/^\d{3}\-\d{4}$/)){
            $('#uzip').removeClass('errpr');
            $('#uzip+span').text('');
        } else {
            $("#uzip").addClass("error");
            $("#uzip+span").text("書式に誤りがあります");
        }
    })

    // uaddress
    $("#uaddress").keyup(function(){
        let inputLength = $('#uaddress').val().length;
        if (inputLength <= 20){
            // less 20
            $('#uaddress').removeClass('error');
            $('#uaddress+span').text(inputLength+"/20");
        } else {
            $('#uaddress').addClass('error');
            $('#uaddress+span').text(inputLength+"/20");
        }

    })

    if (checkSubmit == true) {
        // this message disappear soon
        // lets show up popup messages
        $("#success").text("内容を送信しました");
    }

    return checkSubmit;
});