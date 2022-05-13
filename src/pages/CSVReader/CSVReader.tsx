import React, { CSSProperties, useState } from "react";
import { useCSVReader } from "react-papaparse";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  } as CSSProperties,
  browseFile: {
    backgroundColor: "#0c870c",
    color: "white",
    fontWeight: "bold",
    width: "20%",
  } as CSSProperties,
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  } as CSSProperties,
  remove: {
    backgroundColor: "#DC143C",
    color: "white",
    fontWeight: "bold",
    borderRadius: 0,
    padding: "0 20px",
  } as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: "green",
  } as CSSProperties,
};

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  //   const [data, setData] = useState([]);

  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);
  console.log(columnData);
  console.log(rowData);
  return (
    <div>
      <CSVReader
        onUploadAccepted={(results: any) => {
          const data = results.data;
          console.log(data);
          const columns = data[0]?.map((col, index) => {
            return {
              Header: col,
              accessor: col.split(" ").join("_").toLowerCase(),
            };
          });
          const rows = data?.slice(1)?.map((row) => {
            return row.reduce((acc, curr, index) => {
              acc[columns[index].accessor] = curr;
              return acc;
            }, {});
          });
          setRowData(rows);
          setColumnData(columns);
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
        }: any) => (
          <>
            <div style={styles.csvReader}>
              <button
                type="button"
                {...getRootProps()}
                style={styles.browseFile}
              >
                Browse file
              </button>
              <div style={styles.acceptedFile}>
                {acceptedFile && acceptedFile.name}
              </div>
              <button {...getRemoveFileProps()} style={styles.remove}>
                Remove
              </button>
              <div> </div>
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {columnData.map((c) => {
                return (
                  <>
                    <th>{c.Header}</th>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {rowData.map((r) => {
              return (
                <tr>
                  <td>{r.username}</td>
                  <td>{r._identifier}</td>
                  <td>{r.first_name}</td>
                  <td>{r.last_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
