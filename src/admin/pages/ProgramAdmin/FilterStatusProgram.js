function FilterStatusProgram({ selectedStatus, handleStatusChange }) {
    return (
        <div>
            <select value={selectedStatus} onChange={handleStatusChange}>
                <option value="all">All Status</option>
                <option value="NO COMING">NO COMING</option>
                <option value="COMING">COMING</option>
                <option value="CLOSE">CLOSE</option>
            </select>
        </div>
    );
}

export default FilterStatusProgram;
