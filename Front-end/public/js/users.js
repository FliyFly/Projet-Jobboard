class Users {
    constructor() {

    }

    getAllUsers() {
        let dataUser = null;
        $.ajax({
            headers: {
                'Content-Type': 'application/json',
            },
            method: "GET",
            url: "http://localhost:8080/api/users",
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataUser = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataUser;
    }

    getOneUserbyId(id) {
        let dataOneUser = null;
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/api/user/'+id,
            datatype: "json",
            async: false
        })
            .done((data) => {
                dataOneUser = data;
            })
            .fail(() => {
                console.log("PAS OK");
            })
        return dataOneUser;
    }


    postUser() {
        $('#createUser').click(function () {
            let dataF = $('#myFormId').serializeJSON();
            dataF = JSON.stringify(dataF)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/users",
                datatype: "json",
                data: dataF,
            })
            .done((data) => {
                $( '#modal-inscription' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#modal-inscription').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
                localStorage.setItem('user_id', data);
                document.cookie = "status=connected";
                $("#connexion-btn").css("display", "block");
                $("#inscription-btn").css("display", "block");
                $("#deconnexion-btn").css("display", "none");
                document.location.reload();
            })
            .fail(() => {
                document.location.reload();
            })
        })
    }
    

    connectUser() {
        $('#connectUser').click(function() {
            let dataF = $('#connectionForm').serializeJSON();
            dataF = JSON.stringify(dataF)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'same-origin',
                method: "POST",
                url: "http://localhost:8080/api/user/login",
                datatype: "json",
                data: dataF,
            })
            .done((data) => {
                console.log(data);
                localStorage.setItem('user_id', data.id);
                document.cookie = "status=connected";
                $("#connexion-btn").css("display", "block");
                $("#inscription-btn").css("display", "block");
                $("#deconnexion-btn").css("display", "none");
                if (data.id_role == '4') {
                    window.location.href = "admin.html";
                } else {
                    window.location.href = "index.html";
                }
            })
            .fail(() => {
                document.location.reload();
            })
        })
    }

    userStatus() {
        let status = null;
        if (document.cookie == "status=connected") {
            status = document.cookie;
            $.ajax({
                method: "GET",
                url: "http://localhost:8080/api/user/status/"+status,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK")
            })
            $("#connexion-btn").css("display", "none");
            $("#inscription-btn").css("display", "none");
            $("#deconnexion-btn").css("display", "block");
        } else {
            $.ajax({
                method: "GET",
                url: "http://localhost:8080/api/user/status/"+status,
            })
            .done((data) => {
                
            })
            .fail(() => {
                document.location.reload();
            })
        }
    }

    disconnectUser() {
        $('#deconnexion-btn').click(function () {
            localStorage.removeItem('user_id');
            document.cookie = "status= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
            window.location.href = "index.html";
        }) 
    }

    createAdmin() {
        $('#submit-user').click(function () {
            let dataU = $('#add-user-form').serializeJSON();
            dataU = JSON.stringify(dataU)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                url: "http://localhost:8080/api/users",
                datatype: "json",
                data: dataU,
            })
            .done((data) => {
                $( '#add-user' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#add-user').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
                console.log(data);
            })
            .fail(() => {

            })
        })
    }

    displayAdminUser() {
        let dataU = this.getAllUsers();
        let userTbody = $(".tbody-user");

        dataU.forEach(element => {
            let userTr = userTbody.append(`<tr></tr>`)
            userTr.append(`<td><i class="fas fa-trash-alt delete-user" id="${element.id}"></i></td>`, `<td><i data-toggle="modal" data-target="#edit-user" class="fas fa-edit edit-user" id="${element.id}"></i></td>` ,`<td>${element.email}</td>`);
        });   
        this.displayEditUser();
    }


    displayEditUser() {
        let self = this;
        $(".edit-user").click(function() {
            let id = $(this).attr('id');
            $('#delete-user').modal('hide').data('bs.modal', null);
            let data = self.getOneUserbyId(id);
            console.log(data);

            $("#firstName").val(data.first_name);
            $("#lastName").val(data.last_name);
            $("#emailAdress").val(data.email);
            $("#phoneNumber").val(data.phone);
            $("#sex").val(data.gender);
            $("#birthdayDate").val(data.birthday);

            self.editUser(id);
        })
    }

    editUser(id) {
        $('#edit-user-btn').click(function(e) {
            let dataU = $('.edit-user-form').serializeJSON();
            dataU = JSON.stringify(dataU)

            $.ajax({
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                url: "http://localhost:8080/api/user/"+id,
                datatype: "json",
                data: dataU,
            })
            .done((data) => {
                $( '#edit-user' ).modal( 'hide' ).data( 'bs.modal', null );
                $('#edit-user').on('hidden.bs.modal', function(){
                    $(this).find('form').trigger('reset');
                });
            })
            .fail(() => {
                console.log("PAS OK")
            })
        })
    }

    deleteUser() {
        this.displayAdminUser();
        $(".delete-user").click(function() {
            let id = $(this).attr('id');
            $.ajax({
                method: 'DELETE',
                url: 'http://localhost:8080/api/user/'+id,
            })
            .done((data) => {
                console.log(data);
            })
            .fail(() => {
                console.log("PAS OK");
            })
        })
    }

}