import React from "react";

export default function Table() {
  return (
    <div
      className="white_box QA_section card_height_100"
      style={{
        boxSizing: "border-box",
        height: "770px",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    >
      <div
        className="white_box_tittle list_header m-0 align-items-center"
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0px",
          marginBottom: "0px",
        }}
      >
        <div
          className="main-title mb-sm-15"
          style={{ boxSizing: "border-box" }}
        >
          <h3
            className="m-0 nowrap"
            style={{
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              fontFamily: "rajdhani, sans-serif",
              fontWeight: 600,
              fontSize: "22px",
              color: "rgb(46, 71, 101)",
              lineHeight: 1.2,
              margin: "0px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            Patients
          </h3>
        </div>
        <div
          className="box_right d-flex lms_block"
          style={{ boxSizing: "border-box", display: "flex" }}
        >
          <div
            className="serach_field-area2"
            style={{
              boxSizing: "border-box",
              width: "480px",
              position: "relative",
            }}
          >
            <div className="search_inner" style={{ boxSizing: "border-box" }}>
              <form style={{ boxSizing: "border-box" }}>
                <div
                  className="search_field"
                  style={{ boxSizing: "border-box" }}
                >
                  <input
                    type="text"
                    placeholder="Search here..."
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "inherit",
                      lineHeight: "inherit",
                      borderWidth: "0px 0px 1px",
                      borderImage: "initial",
                      background: "rgb(245, 247, 253)",
                      borderRadius: "30px",
                      color: "rgb(0, 0, 0)",
                      fontSize: "17px",
                      height: "55px",
                      width: "100%",
                      paddingLeft: "82px",
                      borderTopStyle: "initial",
                      borderRightStyle: "initial",
                      borderLeftStyle: "initial",
                      borderTopColor: "initial",
                      borderRightColor: "initial",
                      borderLeftColor: "initial",
                      paddingRight: "15px",
                      borderBottomStyle: "solid",
                      borderBottomColor: "rgb(244, 247, 252)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "0px",
                    margin: "0px",
                    fontFamily: "inherit",
                    lineHeight: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    cursor: "pointer",
                    background: "0px 0px",
                    border: "0px",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "100%",
                    fontSize: "12px",
                    paddingLeft: "40px",
                    paddingRight: "11px",
                  }}
                >
                  {" "}
                  <i
                    className="ti-search"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      fontFamily: "themify",
                      speak: "none",
                      fontStyle: "normal",
                      fontWeight: 400,
                      textTransform: "none",
                      lineHeight: 1,
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "14px",
                      color: "rgb(129, 142, 148)",
                    }}
                  />{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="QA_table" style={{ boxSizing: "border-box" }}>
        <div
          id="DataTables_Table_0_wrapper"
          className="dataTables_wrapper no-footer"
          style={{
            boxSizing: "border-box",
            position: "relative",
            clear: "both",
            zoom: 1,
          }}
        >
          <table
            id="DataTables_Table_0"
            className="table lms_table_active2 dataTable no-footer dtr-inline collapsed"
            role="grid"
            style={{
              captionSide: "bottom",
              borderColor: "rgb(222, 226, 230)",
              color: "rgb(33, 37, 41)",
              verticalAlign: "top",
              boxSizing: "content-box",
              margin: "0px auto",
              borderSpacing: "0px",
              clear: "both",
              borderCollapse: "separate",
              borderBottom: "0px solid transparent",
              background: "rgb(255, 255, 255)",
              borderRadius: "10px",
              paddingTop: "20px",
              width: "100%",
              marginBottom: "0px",
            }}
          >
            <thead
              style={{
                boxSizing: "border-box",
                borderColor: "inherit",
                borderStyle: "solid",
                borderWidth: "0px",
                verticalAlign: "bottom",
              }}
            >
              <tr
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                }}
              >
                <th
                  className="sorting_asc"
                  colSpan="1"
                  rowSpan="1"
                  aria-controls="DataTables_Table_0"
                  aria-label="Patients Name: activate to sort column descending"
                  aria-sort="ascending"
                  scope="col"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    verticalAlign: "middle",
                    backgroundPosition: "right center",
                    cursor: "pointer",
                    padding: "17px 30px",
                    whiteSpace: "nowrap",
                    border: "0px",
                    background: "rgb(45, 170, 184)",
                    lineHeight: "16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                    textTransform: "capitalize",
                    fontFamily: "rajdhani, sans-serif",
                    backgroundImage: "initial",
                    backgroundRepeat: "initial",
                    backgroundColor: "rgb(45, 170, 184)",
                    borderRadius: "30px 0px 0px 30px",
                    width: "137px",
                    borderTop: "0px",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.3)",
                    borderBottomWidth: "1px",
                    borderBottomColor: "rgba(130, 139, 178, 0.3)",
                  }}
                >
                  Patients Name
                </th>
                <th
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  aria-controls="DataTables_Table_0"
                  aria-label="department: activate to sort column ascending"
                  scope="col"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    verticalAlign: "middle",
                    backgroundPosition: "right center",
                    cursor: "pointer",
                    padding: "17px 30px",
                    whiteSpace: "nowrap",
                    border: "0px",
                    background: "rgb(45, 170, 184)",
                    lineHeight: "16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                    textTransform: "capitalize",
                    fontFamily: "rajdhani, sans-serif",
                    backgroundImage: "initial",
                    backgroundRepeat: "initial",
                    backgroundColor: "rgb(45, 170, 184)",
                    width: "86px",
                    borderTop: "0px",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.3)",
                    borderBottomWidth: "1px",
                    borderBottomColor: "rgba(130, 139, 178, 0.3)",
                  }}
                >
                  department
                </th>
                <th
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  aria-controls="DataTables_Table_0"
                  aria-label="Appointment Date: activate to sort column ascending"
                  scope="col"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    verticalAlign: "middle",
                    backgroundPosition: "right center",
                    cursor: "pointer",
                    padding: "17px 30px",
                    whiteSpace: "nowrap",
                    border: "0px",
                    background: "rgb(45, 170, 184)",
                    lineHeight: "16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                    textTransform: "capitalize",
                    fontFamily: "rajdhani, sans-serif",
                    backgroundImage: "initial",
                    backgroundRepeat: "initial",
                    backgroundColor: "rgb(45, 170, 184)",
                    width: "90px",
                    borderTop: "0px",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.3)",
                    borderBottomWidth: "1px",
                    borderBottomColor: "rgba(130, 139, 178, 0.3)",
                  }}
                >
                  Appointment Date
                </th>
                <th
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  aria-controls="DataTables_Table_0"
                  aria-label="Serial Number: activate to sort column ascending"
                  scope="col"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    verticalAlign: "middle",
                    backgroundPosition: "right center",
                    cursor: "pointer",
                    padding: "17px 30px",
                    whiteSpace: "nowrap",
                    border: "0px",
                    background: "rgb(45, 170, 184)",
                    lineHeight: "16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                    textTransform: "capitalize",
                    fontFamily: "rajdhani, sans-serif",
                    backgroundImage: "initial",
                    backgroundRepeat: "initial",
                    backgroundColor: "rgb(45, 170, 184)",
                    width: "77px",
                    borderTop: "0px",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.3)",
                    borderBottomWidth: "1px",
                    borderBottomColor: "rgba(130, 139, 178, 0.3)",
                  }}
                >
                  Serial Number
                </th>
                <th
                  className="sorting"
                  colSpan="1"
                  rowSpan="1"
                  aria-controls="DataTables_Table_0"
                  aria-label="Amount: activate to sort column ascending"
                  scope="col"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    verticalAlign: "middle",
                    backgroundPosition: "right center",
                    cursor: "pointer",
                    padding: "17px 30px",
                    whiteSpace: "nowrap",
                    border: "0px",
                    background: "rgb(45, 170, 184)",
                    lineHeight: "16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgb(255, 255, 255)",
                    textTransform: "capitalize",
                    fontFamily: "rajdhani, sans-serif",
                    backgroundImage: "initial",
                    backgroundRepeat: "initial",
                    backgroundColor: "rgb(45, 170, 184)",
                    borderRadius: "0px 30px 30px 0px",
                    width: "0px",
                    display: "none",
                    borderTop: "0px",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.3)",
                    borderBottomWidth: "1px",
                    borderBottomColor: "rgba(130, 139, 178, 0.3)",
                  }}
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody
              style={{
                boxSizing: "border-box",
                borderColor: "inherit",
                borderStyle: "solid",
                borderWidth: "0px",
                verticalAlign: "inherit",
              }}
            >
              <tr
                className="odd"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/pataint.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
              <tr
                className="even"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/2.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
              <tr
                className="odd"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/3.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
              <tr
                className="even"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/4.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
              <tr
                className="odd"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/5.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
              <tr
                className="even"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/6.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
              <tr
                className="odd"
                role="row"
                style={{
                  boxSizing: "border-box",
                  borderColor: "inherit",
                  borderStyle: "solid",
                  borderWidth: "0px",
                  backgroundColor: "rgb(255, 255, 255)",
                  transition: "all 0.3s ease 0s",
                }}
              >
                <th
                  className="sorting_1"
                  scope="row"
                  tabIndex="0"
                  style={{
                    textAlign: "-webkit-match-parent",
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    borderBottomWidth: "1px",
                    position: "relative",
                    paddingLeft: "30px",
                    cursor: "pointer",
                    borderTop: "0px",
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="patient_thumb d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="student_list_img mr_20"
                      style={{ boxSizing: "border-box", marginRight: "20px" }}
                    >
                      <img
                        src="https://demo.dashboardpack.com/hospital-html/img/patient/6.png"
                        style={{
                          boxSizing: "border-box",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                          width: "45px",
                          height: "45px",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        lineHeight: "24px",
                        fontSize: "14px",
                        marginBottom: "0px",
                        color: "rgb(130, 139, 178)",
                        fontFamily: "poppins, sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      Jhon Kural
                    </p>
                  </div>
                </th>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  Monte Carlo
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  11/03/2020
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    borderTop: "0px",
                  }}
                >
                  MDC65454
                </td>
                <td
                  style={{
                    borderColor: "inherit",
                    borderStyle: "solid",
                    borderWidth: "0px",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 0 9999px transparent",
                    boxSizing: "content-box",
                    padding: "16px 30px",
                    lineHeight: 1.9,
                    verticalAlign: "middle",
                    borderBottom: "1px solid rgba(130, 139, 178, 0.1)",
                    fontSize: "14px",
                    color: "rgb(130, 139, 178)",
                    fontWeight: 400,
                    borderBottomWidth: "1px",
                    display: "none",
                    borderTop: "0px",
                  }}
                >
                  <div
                    className="amoutn_action d-flex align-items-center"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {"$29,192"}
                    <div
                      className="dropdown ms-4"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        marginLeft: "1.5rem",
                      }}
                    >
                      <a
                        id="dropdownMenuLink"
                        className="dropdown-toggle hide_pils"
                        aria-expanded="false"
                        aria-haspopup="true"
                        href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                        role="button"
                        style={{
                          boxSizing: "border-box",
                          textDecoration: "none",
                          transition: "all 0.5s ease 0s",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "rgb(130, 139, 178)",
                        }}
                      >
                        <i
                          className="fas fa-ellipsis-v"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontFamily: '"Font Awesome 5 Free"',
                            fontWeight: 900,
                          }}
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuLink"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          position: "absolute",
                          zIndex: 1000,
                          display: "none",
                          minWidth: "10rem",
                          fontSize: "1rem",
                          color: "rgb(33, 37, 41)",
                          textAlign: "left",
                          backgroundColor: "rgb(255, 255, 255)",
                          backgroundClip: "padding-box",
                          border: "1px solid rgb(238, 225, 226)",
                          padding: "12px 0px 20px",
                          margin: "0px",
                          borderRadius: "0px",
                        }}
                      >
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          View
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="https://demo.dashboardpack.com/hospital-html/index_2.html#"
                          style={{
                            boxSizing: "border-box",
                            transition: "all 0.5s ease 0s",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            border: "0px",
                            display: "block",
                            width: "100%",
                            clear: "both",
                            textAlign: "inherit",
                            backgroundColor: "transparent",
                            padding: "4px 20px",
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "rgb(127, 119, 120)",
                          }}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
