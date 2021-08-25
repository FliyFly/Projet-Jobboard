class Roles {
    constructor() {

    }

    getAllRoles() {
        let dataroles = null;
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
            url: "http://localhost:8080/api/roles",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataroles = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataroles;
    }

    getOneRolebyId(id) {
        let dataOnerole = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/role/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataOnerole = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOnerole;
    }

    displayAdminRoles() {
        let dataR = this.getAllRoles();
        let roleTbody = $(".tbody-role");

        dataR.forEach(element => {
            let roleTr = roleTbody.append(`<tr></tr>`)
            roleTr.append(`<td><i class="fas fa-trash-alt delete-role" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-role" class="fas fa-edit edit-role" id="${element.id}"></i></td>` ,`<td>${element.name}</td>`);
        });   
        this.displayEditRole();
    }


    displayEditRole() {
        let self = this;
        $(".edit-role").click(function() {
            let id = $(this).attr('id');
            $('#delete-role').modal('hide').data('bs.modal', null);
            let data = self.getOneRolebyId(id);
            console.log(data);

            $("#role-name").val(data.name);

            self.editRole(id);
        })
    }

    editRole(id) {
        $('#edit-role-btn').click(function(e) {
            let dataR = $('.edit-role-form').serializeJSON();
            dataR = JSON.stringify(dataR)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/role/"+id,
                datatype: "json",
                data: dataR,
            })
            .done((data) => {
                console.log(data);
                $( '#edit-role' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-role').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    deleteRole() {
        this.displayAdminRoles();
        $(".delete-role").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/role/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }


    addRole() {
        $('#submit-role').click(function(e) {
            let dataR = $('.add-role-form').serializeJSON();
            dataR = JSON.stringify(dataR)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/role",
                datatype: "json",
                data: dataR,
            })
            .done((data) => {
                console.log(data);
                $( '#add-role' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#add-role').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }


}