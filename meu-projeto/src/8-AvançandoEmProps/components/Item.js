import PropTypes from 'prop-types';

function Item({marca, anoLancamento}){
    return(
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    );
}

Item.prototypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired,
}

Item.defaulProps = {
    marca: 'Faltou a marca',
    anoLancamento: 0,
}

export default Item;