class Applications {
    constructor() {

    }


    postEmail() {
        let id_user = null;
        $('#createEmail').click(function () {
            let dataF = $('#formEmail').serializeJSON();
            dataF = JSON.stringify(dataF)
            console.log(dataF)

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
                id_user = data;
            })
            .fail(() => {
                console.log("PAS OK")
            })

            return id_user;
        })

    }
}