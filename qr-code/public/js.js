$(() => {
    $("#input_text").focus();

    $(".generate").on("click", () => {
        let text = $("#input_text").val();
        let qrIMG = $("<div>").qrcode(text)[0];

        swal({
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "btn-primary",
                    closeModal: true
                },
                confirm: {
                    text: "Download",
                    value: true,
                    visible: true,
                    className: "btn-success",
                    closeModal: false
                }
            },
            content: {
                element: qrIMG,
                attributes: {
                    style: "height: 150px; width: 150px;",
                },
            }
        }).then((result) => {
            if (result) {
                // convert object to canvas
                let image = qrIMG.childNodes[0].toDataURL("image/png");
                // create anchor tag and downlaod
                let downloadIMG = document.createElement('a');
                downloadIMG.download = "qrCode.png";
                downloadIMG.href = image;
                downloadIMG.click();
                swal.close();
            }else{
                $("#input_text").focus();
            }
        });
    })
})