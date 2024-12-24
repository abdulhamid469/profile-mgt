import "./App.css";

import { useState } from "react";

import { Alert } from "./components/Alert";
import { Button, OutlineButton } from "./components/Button";
import { Table } from "./components/Table";
import {
  SelectField,
  CheckboxField,
  RadioField,
  UploadField,
  MonthSelector
} from "./components/Form";
import { Pagination } from "./components/Pagination";

const App = () => {
  const funClick = () => {
    console.log("Button Click");
  };


  // Select
  const optionsSelect = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };



  // Check
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Radio

  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const optionsRadion = [
    { value: 'option1', label: 'Active Radio' },
    { value: 'option2', label: 'Radio option' },
    { value: 'option3', label: 'Radio option' },
  ];

  // 
  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  // Months

  const [selectedMonths, setSelectedMonths] = useState([]);

  const handleMonthChange = (newSelectedMonths) => {
    setSelectedMonths(newSelectedMonths);
  };


  return (
    /// Alerts

    <div className="p-4">
      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Alerts</h1>
        </div>
        <div>
          <Alert type="danger" message="A simple success alert—check it out!" />
          <Alert
            type="success"
            message="A simple success alert—check it out!"
          />
          <Alert
            type="warning"
            message="A simple success alert—check it out!"
          />
        </div>
      </div>

      {/**
       * Buttons
       */}

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Buttons</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="primary" onClick={funClick}>
            Primary
          </Button>
          <Button variant="success" onClick={funClick}>
            Sucess
          </Button>
          <Button variant="danger" onClick={funClick}>
            Danger
          </Button>
          <Button variant="link" onClick={funClick}>
            Link
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">
            Outline Buttons
          </h1>
        </div>
        <div className="flex gap-4">
          <OutlineButton variant="primary" onClick={funClick}>
            Primary
          </OutlineButton>
          <OutlineButton variant="success" onClick={funClick}>
            Sucess
          </OutlineButton>
          <OutlineButton variant="danger" onClick={funClick}>
            Danger
          </OutlineButton>
        </div>
      </div>

      {/**
       * Pagination
       */}

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">
            Pagination Working with icons
          </h1>
        </div>
        <div>
          <Pagination
            currentPage={1}
            totalPages={3}
            onChange={(page) => console.log(page)}
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Headings</h1>
        </div>
        <div className="">
          <h1>h1.heading</h1>
          <h2>h2.heading</h2>
          <h3>h3.heading</h3>
        </div>
      </div>

      {/**
       * Table
       */}

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Tables</h1>
        </div>
        <div className="">
          <Table
            data={[
              {
                Image: "https://via.placeholder.com/50",
                Name: "Mark",
                Status: "Completed",
                Date: "2024-05-10",
              },
              {
                Image: "https://via.placeholder.com/50",
                Name: "Jacob",
                Status: "In Progress",
                Date: "2024-06-15",
              },
              {
                Image: "https://via.placeholder.com/50",
                Name: "Danish",
                Status: "Received",
                Date: "2024-06-10",
              },
            ]}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="mb-4">
          <div className="mb-4">
            <h1 className="font-roboto text-[25px] font-medium">Select</h1>
          </div>
          <div>
            <SelectField
              label="Select option"
              name="selectField"
              value={selectedValue}
              onChange={handleSelectChange}
              options={optionsSelect}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-4">
            <h1 className="font-roboto text-[25px] font-medium">Radio</h1>
          </div>
          <div>
            <RadioField
              label="Label Title goes here"
              name="radioGroup"
              value={selectedValue}
              options={optionsRadion}
              onChange={handleRadioChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-4">
            <h1 className="font-roboto text-[25px] font-medium">Check box</h1>
          </div>
          <div>
            <CheckboxField
              label="Active Check box"
              name="activeCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>

      {/**
       * UploadComponents
       */}

      <div>
        <div>
          <h1></h1>
        </div>
        <div>
          <UploadField
            label="Upload Your Document"
            name="document"
            multiple={false}
            onChange={handleFileChange}
          />
        </div>
      </div>

      {/**
       * YearCheck
       */}

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Year check unchecked component</h1>
        </div>
        <div>
          <MonthSelector
            label="Label goes here"
            selectedMonths={selectedMonths}
            onChange={handleMonthChange}
          />
        </div>
      </div>

    </div>
  );
};

export default App;
