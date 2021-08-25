$( document ).ready(function() {
    let switchRecruiter = $('#role');
    let recruiter = $('.forRecruiter');
    let selectComp = $('#companies');
    recruiter.hide();

    const advertissement = new Advertisements();
    //let dataA = advertissement.getAllAdvertisements();
    advertissement.deleteAdvertisements();
    advertissement.addAdvertisement();
    advertissement.createCard();

    const wages = new Wages();
    wages.addWage();
    wages.deleteWage();

    const sectors = new Sectors();
    sectors.addSector();
    sectors.deleteSector();

    const domains = new Domains();
    domains.addDomain();
    domains.deleteDomain();

    const roles = new Roles();
    roles.addRole();
    roles.deleteRole();
   

    // let advertissementDiv = $('#advertissementDiv');
    // let jdx = 0;
    // while (jdx < dataA.length) {
    //     advertissementDiv.append('<div class="card border-warning cardAdver"><div class="card-header">' + dataA[jdx].title + '</div><div class="card-body text-warning"><h5 class="card-title">' + dataA[jdx].localisation + '</h5><p class="card-text">' + dataA[jdx].contract_type + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx].amount + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx].about + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx]['companies.name'] + '</p><p hidden="true" class="hiddenEle">' + dataA[jdx].name + '</p><button hidden="true" class="btn btn-warning hiddenEle boutonPostul" value="' + dataA[jdx].id + '" data-target="#modalPostul" data-toggle="modal">Postuler</button></div><div class="divClick" data-val="'+ jdx +'"><svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30" ><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg></div></div>');
    //     jdx++;
    // }


    const email = new Emails();
    $('.boutonPostul').click(function () { 
        let idAd = $(this).val();
        $('#createEmail').click(function () {
            email.postEmail(idAd);
        })
        // const advertissement = new Advertisements();
        // let dataAId = advertissement.getOneAdvertissementsbyId(idAd);
        // $('.bodyModal').append('<h1>' + dataAId.title + '</h1>')
    });


    // $('.divClick').click(function() {
    //     let pHide = $(this).parent().find(".hiddenEle");
    //     let svgChild = $(this).children();
    //     pHide.each(function () {
    //         if ($(this).is(':hidden')) {
    //             $(this).prop("hidden", false);
    //             svgChild.removeClass("chevron");
    //             svgChild.addClass("chevronReverse");
    //         }
    //         else {
    //             $(this).prop("hidden", true);
    //             svgChild.removeClass("chevronReverse");
    //             svgChild.addClass("chevron");
    //         }
    //     })
    // })

    let newCompanies = new Companies();
    let dataC = newCompanies.getAllCompanies();
    newCompanies.deleteCompanies();
    newCompanies.addCompanies();
    newCompanies.createCard();

    // let companiesDiv = $('#companiesDiv');
    // let i = 0;
    // while (i < dataA.length) {
    //     companiesDiv.append('<div class="card border-warning cardAdver"><div class="card-header">' + dataC[i].name + '</div><div class="card-body text-warning"><h5 class="card-title">' + dataC[i].about + '</h5><p class="card-text">' + dataC[i].website_link + '</p></div></div>');
    //     i++;
    // }

    let newUsers = new Users();
    newUsers.postUser();
    newUsers.connectUser();
    newUsers.userStatus();
    newUsers.disconnectUser();
    newUsers.createAdmin();
    newUsers.deleteUser();

    let selectCompanies = $('#companie');
    let idx = 0;
    while (idx < dataC.length) {
        selectCompanies.append(new Option(dataC[idx].name, dataC[idx].id));
        idx++;
    }
    
    switchRecruiter.change(function() {
        if (switchRecruiter.val() == 2) {
            recruiter.show();
            selectComp.prop("disabled", false);
            switchRecruiter.attr("value", "2");
        }
        else
        {
            recruiter.hide();
            selectComp.prop("disabled", true);
            switchRecruiter.attr("value", "1");
        }
    })
});