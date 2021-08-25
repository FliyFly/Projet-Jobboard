class Wages {
    constructor() {

    }

    getAllWages() {
        let dataWage = null;
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
            url: "http://localhost:8080/api/wages",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataWage = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataWage;
    }

    getOneWagebyId(id) {
        let dataOneWage = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/wage/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataOneWage = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOneWage;
    }

    displaySelect() {
        let dataW = this.getAllWages();

        let selectWages = $('.wage');
        let idx = 0;
        while (idx < dataW.length) {
            selectWages.append(new Option(dataW[idx].amount, dataW[idx].id));
            idx++;
        }
    }


    displayAdminWages() {
        let dataW = this.getAllWages();
        let wageTbody = $(".tbody-wage");

        dataW.forEach(element => {
            let wageTr = wageTbody.append(`<tr></tr>`)
            wageTr.append(`<td><i class="fas fa-trash-alt delete-wage" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-wage" class="fas fa-edit edit-wage" id="${element.id}"></i></td>` ,`<td>${element.amount}</td>`);
        });   
        this.displayEditWage();
    }


    displayEditWage() {
        let self = this;
        $(".edit-wage").click(function() {
            let id = $(this).attr('id');
            $('#delete-wage').modal('hide').data('bs.modal', null);
            let data = self.getOneWagebyId(id);
            console.log(data);

            $("#wage-amount").val(data.amount);

            self.editWage(id);
        })
    }

    editWage(id) {
        $('#edit-wage-btn').click(function(e) {
            let dataW = $('.edit-wage-form').serializeJSON();
            dataW = JSON.stringify(dataW)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/wage/"+id,
                datatype: "json",
                data: dataW,
            })
            .done((data) => {
                console.log(data);
                $( '#edit-wage' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-wage').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    deleteWage() {
        this.displayAdminWages();
        $(".delete-wage").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/wage/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }


    addWage() {
        $('#submit-wage').click(function(e) {
            let dataW = $('.add-wage-form').serializeJSON();
            dataW = JSON.stringify(dataW)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/wages",
                datatype: "json",
                data: dataW,
            })
            .done((data) => {
                console.log(data);
                $( '#add-wage' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#add-wage').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

}