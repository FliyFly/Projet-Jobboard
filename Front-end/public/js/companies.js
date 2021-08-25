class Companies {
    constructor() {

    }

    getAllCompanies() {
        let dataCompanies = null;
        $.ajax({
            method: "GET",
            url: "http://localhost:8080/api/companies",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataCompanies = data;
            })
            .fail(() => {
                console.log("PAS OK")
            })
        return dataCompanies;
    }

    getOneCompanybyId(id) {
        let dataOneCompany = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/company/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                console.log(data);
                dataOneCompany = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOneCompany;
    }

    displaySelect() {
        let dataC = this.getAllCompanies();

        let selectCompanies = $('.companie');
        let idj = 0;
        while (idj < dataC.length) {
            selectCompanies.append(new Option(dataC[idj].name, dataC[idj].id));
            idj++;
        }
    }

    displayAdminCompanies() {
        let dataC= this.getAllCompanies();
        let companiesTbody = $(".tbody-companies");

        dataC.forEach(element => {
            let companiesTr = companiesTbody.append(`<tr></tr>`)
            companiesTr.append(`<td><i class="fas fa-trash-alt delete-companie" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-companies" class="fas fa-edit edit-company" id="${element.id}"></i></td>` ,`<td>${element.name}</td>`);
        });   
        this.displayEditCompanies();
    }

    displayEditCompanies() {
        let self = this;
        $(".edit-company").click(function() {
            let id = $(this).attr('id');
            console.log(id);
            $('#delete-companies').modal('hide').data('bs.modal', null);
            let data = self.getOneCompanybyId(id);

            $("#company-name").val(data.name);
            $("#about-company").val(data.about);
            $("#url-linkedin").val(data.linkedin_link);
            $("#url-twitter").val(data.twitter_link);
            $("#url-website").val(data.website_link);
            $("#id_domain").val(data.id_sector);

            self.editCompany(id);
        })
    }

    editCompany(id) {
        $('#edit-company-btn').click(function(e) {
            let dataC = $('.edit-company-form').serializeJSON();
            dataC = JSON.stringify(dataC)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/company/"+id,
                datatype: "json",
                data: dataC,
            })
            .done((data) => {
                console.log(data);
                $( '#edit-companies' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-companies').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }
    
    deleteCompanies() {
        this.displayAdminCompanies();
        $(".delete-companie").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/companie/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }

    addCompanies() {
        let domains = new Domains();
        domains.displaySelect();

        $('#submit-companie').click(function(e) {
            let dataC = $('.add-companie-form').serializeJSON();
            dataC = JSON.stringify(dataC)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/companie",
                datatype: "json",
                data: dataC,
            })
            .done((data) => {
                console.log(data);
                $('#add-companies').modal('hide').data('bs.modal', null);
                $('#add-companies').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    createCard() {
        let dataC = this.getAllCompanies();
        let companiesDiv = $('#companiesDiv');
        let i = 0;
        while (i < dataC.length) {
            companiesDiv.append('<div class="card border-warning cardAdver"><div class="card-header">' + dataC[i].name + '</div><div class="card-body text-warning"><h5 class="card-title">' + dataC[i].about + '</h5><p class="card-text">' + dataC[i].website_link + '</p></div></div>');
            i++;
        }
    }

}