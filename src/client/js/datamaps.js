var map;
map = new Datamap({
        element: document.getElementById('newmap'),
        scope: 'usa',
        fills: {
            defaultFill: 'blue'
        },
        geographyConfig: {
            highlightOnHover: true,
            popupOnHover: true
        },
        responsive: true,

        done: function(datamap) {
            datamap.svg
                .selectAll('.datamaps-subunit')
                .on('click', function(geography) {
                alert(geography.properties.name);
            })
        }

    });

window.addEventListener('resize', function () {
    map.resize();
});