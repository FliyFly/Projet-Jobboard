class Sectors {
    constructor() {

    }

    getAllSectors() {
        let dataSectors = null;
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
            url: "http://localhost:8080/api/sectors",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataSectors = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataSectors;
    }

    getOneSectorbyId(id) {
        let dataOneSector = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/sector/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataOneSector = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOneSector;
    }

    displaySelect() {
        let dataS = this.getAllSectors();

        let selectSectors = $('.sector');
        let idk = 0;
        while (idk < dataS.length) {
            selectSectors.append(new Option(dataS[idk].name, dataS[idk].id));
            idk++;
        }
    }

    displayAdminSectors() {
        let dataS = this.getAllSectors();
        let sectorTbody = $(".tbody-sector");

        dataS.forEach(element => {
            let sectorTr = sectorTbody.append(`<tr></tr>`)
            sectorTr.append(`<td><i class="fas fa-trash-alt delete-sector" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-sector" class="fas fa-edit edit-sector" id="${element.id}"></i></td>` ,`<td>${element.name}</td>`);
        });   
        this.displayEditSector();
    }


    displayEditSector() {
        let self = this;
        $(".edit-sector").click(function() {
            let id = $(this).attr('id');
            $('#delete-sector').modal('hide').data('bs.modal', null);
            let data = self.getOneSectorbyId(id);
            console.log(data);

            $("#sector-name").val(data.name);

            self.editSector(id);
        })
    }

    editSector(id) {
        $('#edit-sector-btn').click(function(e) {
            let dataS = $('.edit-sector-form').serializeJSON();
            dataS = JSON.stringify(dataS)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/sector/"+id,
                datatype: "json",
                data: dataS,
            })
            .done((data) => {
                console.log(data);
                $( '#edit-sector' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-sector').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    deleteSector() {
        this.displayAdminSectors();
        $(".delete-sector").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/sector/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }


    addSector() {
        $('#submit-sector').click(function(e) {
            let dataS = $('.add-sector-form').serializeJSON();
            dataS = JSON.stringify(dataS)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/sector",
                datatype: "json",
                data: dataS,
            })
            .done((data) => {
                console.log(data);
                $( '#add-sector' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#add-sector').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }


}