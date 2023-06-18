function List({item, checkout, id}) {

    function handleCheck() {
        checkout(id);
    }

    return (
        <li className="w-full px-4 py-2 border-b border-gray-400 dark:border-gray-600">
            <input checked={item.done} onChange={handleCheck} type="checkbox" className="border me-2" />
            <span className={item.done ? `line-through` : ``}>{item.name}</span>
        </li>
    );
}

export default List;