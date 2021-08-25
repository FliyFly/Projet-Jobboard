class Advertisements {
    constructor() {

    }

    getAllAdvertisements() {
        let dataAdvertissement = null;
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
            url: "http://localhost:8080/api/advertisements",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataAdvertissement = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataAdvertissement;
    }

    getOneAdvertissementsbyId(id) {
        let dataOneAdvertissement = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/advertisements/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataOneAdvertissement = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOneAdvertissement;
    }

    displayAdminAdvertisement() {
        let dataA = this.getAllAdvertisements();
        let advertisementsTbody = $(".tbody-advertisements");

        dataA.forEach(element => {
            let advertisementTr = advertisementsTbody.append(`<tr></tr>`)
            advertisementTr.append(`<td><i class="fas fa-trash-alt delete" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-advertisement" class="fas fa-edit edit" id="${element.id}"></i></td>` ,`<td>${element.title}</td>`, `<td>${element.localisation}</td>`, `<td>${element['companies.name']}</td>`);
        });   
        this.displayEditAdvertisement();
    }


    displayEditAdvertisement() {
        let self = this;
        $(".edit").click(function() {
            let id = $(this).attr('id');
            $('#delete-advertisement').modal('hide').data('bs.modal', null);
            let data = self.getOneAdvertissementsbyId(id);
            console.log(data);

            $("#advertisement-title").val(data.title);
            $("#advertisement-about").val(data.about);
            $("#advertisement-description").val(data.job_description);
            $("#advertisement-localisation").val(data.localisation);
            $("#contract_type").val(data.contract_type);
            $("#wages").val(data.id_wage);
            $("#companies").val(data.id_companie);
            $("#sectors").val(data.id_sector);

            self.editAdvertisement(id);
        })
    }

    editAdvertisement(id) {
        $('#edit-advertisement-btn').click(function(e) {
            let dataA = $('.edit-advertisement-form').serializeJSON();
            dataA = JSON.stringify(dataA)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/advertisement/"+id,
                datatype: "json",
                data: dataA,
            })
            .done((data) => {
                console.log(data);
                $( '#edit-advertisement' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-advertisement').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    deleteAdvertisements() {
        this.displayAdminAdvertisement();
        $(".delete").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/advertisements/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }

    addAdvertisement() {
        let wages = new Wages();
        wages.displaySelect();

        let companies = new Companies();
        companies.displaySelect();

        let sectors = new Sectors();
        sectors.displaySelect();

        $('#submit-advertisement').click(function(e) {
            let dataA = $('.add-advertisement-form').serializeJSON();
            dataA = JSON.stringify(dataA)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/advertisements",
                datatype: "json",
                data: dataA,
            })
            .done((data) => {
                console.log(data);
                $( '#add-advertisement' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#add-advertisement').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    createCard() {
        let dataA = this.getAllAdvertisements();
        let advertissementDiv = $('#advertissementDiv');
        let jdx = 0;
        while (jdx < dataA.length) {
            advertissementDiv.append('<div class="card border-warning cardAdver"><div class="card-header">' + dataA[jdx].title + '</div><div class="card-body text-warning"><h5 class="card-title">' + dataA[jdx].localisation + '</h5><p class="card-text">' + dataA[jdx].contract_type + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx].amount + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx].about + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx]['companies.name'] + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx].name + '</p><button hidden="true" class="btn btn-warning hiddenEle boutonPostul" value="' + dataA[jdx].id + '" data-target="#modalPostul" data-toggle="modal">Postuler</button></div><div class="divClick" data-val="'+ jdx +'"><svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30" ><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg></div></div>');
            jdx++;
        }

        $('.divClick').click(function() {
            let pHide = $(this).parent().find(".hiddenEle");
            let svgChild = $(this).children();
            pHide.each(function () {
                if ($(this).is(':hidden')) {
                    $(this).prop("hidden", false);
                    svgChild.removeClass("chevron");
                    svgChild.addClass("chevronReverse");
                }
                else {
                    $(this).prop("hidden", true);
                    svgChild.removeClass("chevronReverse");
                    svgChild.addClass("chevron");
                }
            })
        })
    }
}