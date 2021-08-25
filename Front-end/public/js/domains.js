class Domains {
    constructor() {

    }

    getAllDomains() {
        let dataDomain = null;
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
            url: "http://localhost:8080/api/domains",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataDomain = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataDomain;
    }

    getOneDomainbyId(id) {
        let dataOneDomain = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/domain/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataOneDomain = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOneDomain;
    }

    displaySelect() {
        let dataD = this.getAllDomains();

        let selectDomain = $('.domain');
        let idx = 0;
        while (idx < dataD.length) {
            selectDomain.append(new Option(dataD[idx].name, dataD[idx].id));
            idx++;
        }
    }

    displayAdminDomains() {
        let dataD = this.getAllDomains();
        let domainTbody = $(".tbody-domain");

        dataD.forEach(element => {
            let domainTr = domainTbody.append(`<tr></tr>`)
            domainTr.append(`<td><i class="fas fa-trash-alt delete-domain" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-domain" class="fas fa-edit edit-domain" id="${element.id}"></i></td>` ,`<td>${element.name}</td>`);
        });   
        this.displayEditDomain();
    }


    displayEditDomain() {
        let self = this;
        $(".edit-domain").click(function() {
            let id = $(this).attr('id');
            $('#delete-domain').modal('hide').data('bs.modal', null);
            let data = self.getOneDomainbyId(id);
            console.log(data);

            $("#domain-name").val(data.name);

            self.editDomain(id);
        })
    }

    editDomain(id) {
        $('#edit-domain-btn').click(function(e) {
            let dataD = $('.edit-domain-form').serializeJSON();
            dataD = JSON.stringify(dataD)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/domain/"+id,
                datatype: "json",
                data: dataD,
            })
            .done((data) => {
                console.log(data);
                $( '#edit-domain' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-domain').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    deleteDomain() {
        this.displayAdminDomains();
        $(".delete-domain").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/domain/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }


    addDomain() {
        $('#submit-domain').click(function(e) {
            let dataD = $('.add-domain-form').serializeJSON();
            dataD = JSON.stringify(dataD)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/domain",
                datatype: "json",
                data: dataD,
            })
            .done((data) => {
                console.log(data);
                $( '#add-domain' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#add-domain').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }


}