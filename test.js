var arr = [];
var len = oFullResponse.results.length;
for (var i = 0; i < len; i++) {
    arr.push({
        key: oFullResponse.results[i].label,
        sortable: true,
        resizeable: true
    });
}