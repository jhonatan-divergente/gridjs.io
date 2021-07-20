new gridjs.Grid({
    columns: ["Departamento", "Ciudades"],

    server: {
        url: 'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json',
        then: data => data.map(item => [item.departamento, item.ciudades.length + ' ciudades']),
    },

    sort: true,

    search: {
        enabled: true
    },

    pagination: {
        enabled: true,
        limit: 8,
        summary: false
    },

    style: {
        td: {
          border: '0px'
        },
        table: {
          'font-size': '14px'
        }
    },

    width: '75%',

    language: {
        'search': {
          'placeholder': 'Buscar...'
        },
        'pagination': {
          'previous': '<',
          'next': '>',
          'showing': 'Mostrando',
          'results': () => 'Resultados'
        }
    }
  }).render(document.getElementById("table"));

new gridjs.Grid({
    columns: ["Departamento", "Correo", "Celular"],

    server: {
        url: 'data.json',
        then: data => data.map(card => [card.name, card.email, card.phoneNumber]),
    },

    sort: true,

    search: {
        enabled: true
    },

    pagination: {
        enabled: true,
        limit: 8,
        summary: true
    },

    style: {
        td: {
          border: '0px'
        },
        table: {
          'font-size': '14px'
        }
    },

    width: '75%',

    language: {
        'search': {
          'placeholder': 'Buscar...'
        },
        'pagination': {
          'previous': '<',
          'next': '>',
          'showing': 'Mostrando',
          'to' : 'a',
          'of' : 'de',
          'results': () => 'resultados'
        }
    }
  }).render(document.getElementById("table-2"));