function List({item}) {
    return (
        <li className="w-full px-4 py-2 border-b border-gray-400 dark:border-gray-600">{item.name}</li>
    );
}

export default List;