var map;
map = new Datamap({
        element: document.getElementById('newmap'),
        scope: 'usa',
        fills: {
            defaultFill: '00ccff'
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
                    fill: rgb(255, 128, 0);
                console.log(geography.properties.stateNum);
            })
        }

    });

window.addEventListener('resize', function () {
    map.resize();
});