function Table() {

  const onChecked = () => {
    const d = document.querySelectorAll("input");
    console.log(d);

    d.forEach(item => item.checked)
  }

  return (
    <div className="table__container">
      <table className="table">
        <thead>
          <tr>
            <th className="table__checkbox"><input type="checkbox" onChange={onChecked} /></th>
            <th>Id</th>
            <th>Received</th>
            <th className="table__user">User</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Vehicle</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Est. Ship</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td><span className="table__id">600009</span></td>
            <td>03/25/2024 03:00 PM</td>
            <td>
              <div className="table__img__container">
                <img src="./img/dt_table/default_user_image.png" alt="" className="table__user__img" />
              </div>
            </td>
            <td>Ali Brian</td>
            <td>
              <div className="table__phone">
                <img src="./img/dt_table/call.svg" alt="" />
                <span>(999) 999-9999</span>
              </div>
            </td>
            <td>
              <div className="table__vehicle">
                <div className="table__vehicle__imgs">
                  <img src="./img/dt_table/engine.svg" alt="engine" />
                  <img src="./img/dt_table/trailer.svg" alt="trailer" />
                </div>
                <div className="table__vehicle__text">
                  2022 Toyota Sienna
                </div>
              </div>
            </td>
            <td>California, CA 91101</td>
            <td>Maine, ME 04735</td>
            <td>2024-03-26</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><span className="table__id">600009</span></td>
            <td>03/25/2024 03:00 PM</td>
            <td>
              <div className="table__img__container">
                <img src="./img/dt_table/default_user_image.png" alt="" className="table__user__img" />
              </div>
            </td>
            <td>
              <div className="table__node">
                <span className="table__dode__data">Ali Brian ....</span>
                <div className="table__node__modal">
                  <div className="table__node__content">
                    <div className="node__date">01/21/2024 09:01 AM Ali Brian</div>
                    <p className="nod__description">
                      Customer wants to talk to customer
                    </p>
                  </div>
                  <div className="table__node__content">
                    <div className="node__date">01/21/2024 09:01 AM Ali Brian</div>
                    <p className="nod__description">
                      Customer wants to talk to customer
                    </p>
                  </div>
                  <div className="table__node__content">
                    <div className="node__date">01/21/2024 09:01 AM Ali Brian</div>
                    <p className="nod__description">
                      Customer wants to talk to customer
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="table__phone">
                <img src="./img/dt_table/call.svg" alt="" />
                <span>(999) 999-9999</span>
              </div>
            </td>            <td>
              <div className="table__vehicle">
                <div className="table__vehicle__imgs">
                  <img src="./img/dt_table/engine.svg" alt="engine" />
                  <img src="./img/dt_table/trailer.svg" alt="trailer" />
                </div>
                <div className="table__vehicle__text">
                  2022 Toyota Sienna
                </div>
              </div>
            </td>
            <td>California, CA 91101</td>
            <td>Maine, ME 04735</td>
            <td>2024-03-26</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><span className="table__id">600009</span></td>
            <td>03/25/2024 03:00 PM</td>
            <td>
              <div className="table__img__container">
                <img src="./img/dt_table/default_user_image.png" alt="" className="table__user__img" />
              </div>
            </td>
            <td>Ali Brian</td>
            <td>
              <div className="table__phone">
                <img src="./img/dt_table/call.svg" alt="" />
                <span>(999) 999-9999</span>
              </div>
            </td>            <td>
              <div className="table__vehicle">
                <div className="table__vehicle__imgs">
                  <img src="./img/dt_table/engine.svg" alt="engine" />
                  <img src="./img/dt_table/trailer.svg" alt="trailer" />
                </div>
                <div className="table__vehicle__text">
                  2022 Toyota Sienna
                </div>
              </div>
            </td>
            <td>California, CA 91101</td>
            <td>Maine, ME 04735</td>
            <td>2024-03-26</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><span className="table__id">600009</span></td>
            <td>03/25/2024 03:00 PM</td>
            <td>
              <div className="table__img__container">
                <img src="./img/dt_table/default_user_image.png" alt="" className="table__user__img" />
              </div>
            </td>
            <td>Ali Brian</td>
            <td>
              <div className="table__phone">
                <img src="./img/dt_table/call.svg" alt="" />
                <span>(999) 999-9999</span>
              </div>
            </td>            <td>
              <div className="table__vehicle">
                <div className="table__vehicle__imgs">
                  <img src="./img/dt_table/engine.svg" alt="engine" />
                  <img src="./img/dt_table/trailer.svg" alt="trailer" />
                </div>
                <div className="table__vehicle__text">
                  2022 Toyota Sienna
                </div>
              </div>
            </td>
            <td>California, CA 91101</td>
            <td>Maine, ME 04735</td>
            <td>2024-03-26</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td><span className="table__id">600009</span></td>
            <td>03/25/2024 03:00 PM</td>
            <td>
              <div className="table__img__container">
                <img src="./img/dt_table/default_user_image.png" alt="" className="table__user__img" />
              </div>
            </td>
            <td>Ali Brian</td>
            <td>
              <div className="table__phone">
                <img src="./img/dt_table/call.svg" alt="" />
                <span>(999) 999-9999</span>
              </div>
            </td>            <td>
              <div className="table__vehicle">
                <div className="table__vehicle__imgs">
                  <img src="./img/dt_table/engine.svg" alt="engine" />
                  <img src="./img/dt_table/trailer.svg" alt="trailer" />
                </div>
                <div className="table__vehicle__text">
                  2022 Toyota Sienna
                </div>
              </div>
            </td>
            <td>California, CA 91101</td>
            <td>Maine, ME 04735</td>
            <td>2024-03-26</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default Table;
