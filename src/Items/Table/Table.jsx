import React, {useState} from "react";

const Table = ({
    headers,
    row_attributes,
    rows,
    additionalButton,
    updateRow,
    deleteRow,
    UpdateFormComponent,
  }) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [additionalButtonModal, setAdditionalButtonModal] = useState(false);
    var isAdditionalButton;
    if (additionalButton !== undefined) {
      isAdditionalButton = true;
    } else isAdditionalButton = false;
    return (
      <div className="uk-overflow-auto">
        <table className="uk-table  uk-table-divider">
          <thead>
            <tr>
              <th></th>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              {isAdditionalButton && <th>{additionalButton.text}</th>}
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                {row_attributes.map((row_attribute) => (
                  <td key={row_attribute}>{row[row_attribute]}</td>
                ))}
                {isAdditionalButton && (
                  <td>
                    <button
                      className={`uk-button uk-button-default uk-button-${additionalButton.type}`}
                      type="button"
                      onClick={() => setAdditionalButtonModal(true)}
                    >
                      {additionalButton.text}
                    </button>
                  </td>
                )}
                <td>
                  <button
                    className={`uk-button uk-button-default uk-button-secondary`}
                    type="button"
                    onClick={() => setUpdateModal(true)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className={`uk-button uk-button-default uk-button-danger`}
                    type="button"
                    onClick={() => deleteRow(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;