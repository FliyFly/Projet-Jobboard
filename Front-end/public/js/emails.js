class Emails {
    constructor() {

    }


    postEmail(idAd) {
        let id_email = null;
        $('#createEmail').click(function () {
            let dataF = $('#formEmail').serializeJSON();
            dataF = JSON.stringify(dataF)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/email",
                datatype: "json",
                data: dataF,
            })
            .done((data) => {
                $( '#modalPostul' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#modalPostul').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
                id_email = data;

                let dataA = {
                    "id_advertisement": idAd,
                    "id_user": localStorage.getItem("user_id"),
                    "id_email": id_email,
                }
        
                dataA = JSON.stringify(dataA);
        
                $.ajax({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    url: "http://localhost:8080/api/application",
                    datatype: "json",
                    data: dataA,
                })
                .done((data) => {
                    console.log(data);
                })
                .fail(() => {
                    console.log("PAS OK");
                })
            })
            .fail(() => {
                console.log("PAS OK");
            })

        })



    }
}