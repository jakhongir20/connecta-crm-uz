
 function TableDropdown({text}:{text:string}) {
    return (
        <div className="table__node">
            <div className="table__node__data">
                <img src="./img/dt_table/nodeimg.png" alt="" />
                <div className="table__node__count">
                    <span>{text}</span>
                    <div className="table__node__modal">
                        <div className="table__node__content">
                            <textarea cols={40} rows={4} className="table__node__textarea"></textarea>
                            <div className="table__node__footer">
                                <button type="button" className="table__node__info">Cancel</button>
                                <button type="button" className="table__node__primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TableDropdown