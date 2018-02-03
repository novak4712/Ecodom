const smartgrid = require('smart-grid');

const settings = {
    filename: '_smart-grid',
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1280px',
        fields: '30px'
    },
    breakPoints: {
        lg: {
            width: "1200px",
            fields: "30px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "768px",
            fields: "15px"
        },
        xs: {
            width: "576px",
            fields: "15px"
        }
    },
    oldSizeStyle: false,
    properties: [
    ]
};

smartgrid('./app/scss', settings);