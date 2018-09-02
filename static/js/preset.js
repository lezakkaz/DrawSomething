var model_raw_data;

function getRawData(className) {
    startLoading();
    console.log("ajax called");
    $.ajax({
        dataType: "json",
        url: "https://s3.ap-northeast-2.amazonaws.com/elice-project-drawsomething/"+ className +".vae.json",
    }).done(function(data){
        model_raw_data = JSON.stringify(data);
        console.log("Data obtained");
        setup();
    });
}
