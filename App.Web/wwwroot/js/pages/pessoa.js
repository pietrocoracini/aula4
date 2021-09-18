$(document).ready(function () {
    load();
});

function load() {
    PessoaListaPessoas().then(function (data) {
        data.forEach(obj => {
            $('#table tbody').append('' +
                '<tr id="obj-' + obj.id + '">' +
                )
        })
    })
}