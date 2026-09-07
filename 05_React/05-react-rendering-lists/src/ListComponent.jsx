import PropTypes from 'prop-types';

function ListComponent(props) {

    // const category = props.category;
    // const items = props.items;

    // destructuring with default values.

    // const category = props.category !== undefined
    //     ? props.category : "Category";

    // const items = props.items !== undefined
    //     ? props.items : [];

    const { category = "Category", items = [] } = props;

    // function ListComponent({ category = "Category", items = [] }) { ....} => modern approach


    const listItems = items.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b></li>);

    return (
        // <> </> fragement that close all our markup
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

// ListComponent.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         calories: PropTypes.number
//     })),
// }

export default ListComponent


