import React, { useState } from "react";
// import Tabs from "./Tabs";
// import DataTable from "helpers/DataTable";
import {
  archiveIcon,
  attachIcon,
  dotIcon,
  editIcon,
  geareIcon,
  lightBlubIcon,
  printIcon,
  rightArrowIcon,
  userAddIcon,
  userRemoveIcon,
} from "@/assets/Icons";
import "../../List.css";
import RDataGrid from "@/components/DataGrid/tempgrid";
import { useNavigate } from "react-router-dom";
const Vehicles = () => {
  const [isActiveTab, setIsActiveTab] = useState("all");
  const [isAction, setIsAction] = useState(false);
  const API_URL = "https://erp.sugamyatra.up.in/api/vehicleServiceTypes/getall";
  const COL_DEF = [
    {
      field: "id",
      headerName: "Sr. No",
      headerClassName: "super-app-theme--header",
      width: 90,
    },
    {
      field: "vehicleServiceTypeName",
      headerName: "Service Type Name",
      headerClassName: "super-app-theme--header",
      width: 150,
    },
    {
      field: "vehicleServiceTypeCategoryCode",
      headerName: "Service Type Category Code",
      headerClassName: "super-app-theme--header",
      //   type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: "vehicleServiceTypeShortname",
      headerName: "Service Type Short Name",
      headerClassName: "super-app-theme--header",
      width: 150,
      editable: true,
    },
    //     {
    //         field: 'createdBy',
    //         headerName: 'Created By',
    //         headerClassName: 'super-app-theme--header',
    //         width: 150,
    //         editable: true,
    //     },
    //     {
    //         field: 'updatedBy',
    //         headerName: 'Updated By',
    //         headerClassName: 'super-app-theme--header',
    //         width: 150,
    //         editable: true,
    //     },
    //     {
    //         field: 'is_active',
    //         headerName: 'is_active',
    //         headerClassName: 'super-app-theme--header',
    //         width: 150,
    //         editable: true,
    //     },
    //     {
    //         field: 'createdAt',
    //         headerName: 'Created At',
    //         headerClassName: 'super-app-theme--header',
    //         width: 150,
    //         editable: true,
    //     },
  ];
  // const ROW_DEF = []
  const navigate = useNavigate();
  const onAddVechicle = () => {
    navigate("/add_vehicles");
  };
  return (
    <div className="vehicle-wrap">
      <div className="head">
        <div className="heading">Vehicles</div>
        <div className="head-btns">
          <button className="button">Export</button>
          <button className="button" onClick={onAddVechicle}>
            + Add Vehicle
          </button>
          <button className="button dot">
            {dotIcon({ width: 28, height: 28, fill: "#256EB5" })}
          </button>
        </div>
      </div>
      {/*<Tabs isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab}/>*/}
      {/*<DataTable/>*/}
      <div className="action-main d-h-between">
        <div
          className="action-container d-h-center"
          onClick={() => setIsAction(!isAction)}
        >
          <div className="action-div d-h-center">
            {/* <span className="action-notification d-h-center">4</span> */}
            <span className="heading-400-12">Action</span>
            <span className="d-h-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="4"
                viewBox="0 0 7 4"
                fill="none"
              >
                <path
                  d="M3.77398 2.8153L1.42198 0.462296C1.33757 0.383389 1.22578 0.34041 1.11025 0.342448C0.994716 0.344487 0.884508 0.391382 0.802934 0.473217C0.721359 0.555052 0.674813 0.665408 0.673142 0.780944C0.671471 0.89648 0.714806 1.00814 0.79398 1.0923L3.46198 3.7583C3.54288 3.83887 3.65172 3.88517 3.76588 3.8876C3.88003 3.89002 3.99073 3.84837 4.07498 3.7713L6.75798 1.0943C6.80155 1.05357 6.83649 1.0045 6.86072 0.950001C6.88495 0.895504 6.89797 0.836693 6.89903 0.777062C6.90008 0.717431 6.88913 0.658196 6.86684 0.602879C6.84455 0.547561 6.81136 0.497289 6.76926 0.45505C6.72715 0.412811 6.67699 0.379466 6.62174 0.356998C6.56649 0.334529 6.5073 0.323396 6.44766 0.324258C6.38803 0.32512 6.32917 0.337962 6.2746 0.362019C6.22003 0.386075 6.17085 0.420856 6.12998 0.464296L3.77398 2.8153Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
          <span className="heading-400-14 c-blue">Clear selection</span>

          {isAction && (
            <div className="action-option">
              <div className="option-section d-h-between border-bottom-gray">
                <div className="heading-400-12">Update Bus Service Type</div>
                <div>{editIcon({ width: 12, height: 12 })}</div>
              </div>
              <div className="option-section d-h-between">
                <div className="heading-400-12">
                  Print Bus Service Type Labels
                </div>
                <div>{printIcon({ width: 14, height: 14 })}</div>
              </div>
              <div className="option-section d-h-between border-bottom-gray">
                <div className="heading-400-12">Attach Shared Documents</div>
                <div>{attachIcon({ width: 12, height: 14 })}</div>
              </div>
              <div className="option-section d-h-between">
                <div className="heading-400-12">Attach Watcher</div>
                <div>{userAddIcon({ width: 13, height: 11 })}</div>
              </div>
              <div className="option-section d-h-between border-bottom-gray">
                <div className="heading-400-12">Remove Watcher</div>
                <div>{userRemoveIcon({ width: 13, height: 10 })}</div>
              </div>

              <div className="option-section d-h-between ">
                <div className="heading-400-12">Archive</div>
                <div>{archiveIcon({ width: 14, height: 12 })}</div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="d-h-center" style={{ gap: "4px" }}>
            <div className="action-div d-h-center">
              {geareIcon({ width: 15, height: 18 })}
            </div>
            <div className="action-div d-h-center">
              {lightBlubIcon({ width: 15, height: 18 })}
            </div>
          </div>
        </div>
      </div>
      <RDataGrid
        apiUrl={API_URL}
        columnDef={COL_DEF}
        // rowDef={ROW_DEF}
      />
    </div>
  );
};
export default Vehicles;
