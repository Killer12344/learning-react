function List({item, checkout, id, deleteData, edit}) {

    function handleCheck() {
        checkout(id);
    }

    function handleDelete() {
        deleteData(id);
    }

    function handleEdit() {
        edit(id);
    }

    return (
        <li className="w-full px-4 py-2 border-b border-gray-400 dark:border-gray-600">
            <input checked={item.done} onChange={handleCheck} type="checkbox" className="border me-2" />
            <span className={item.done ? `line-through` : ``}>{item.name}</span>
            <div className="inline-block float-right">
                <button onClick={handleDelete} className="btn me-3"> Delete </button>
                <button onClick={handleEdit} className="btn"> Edit </button>
            </div>
        </li>
    );
}

export default List;