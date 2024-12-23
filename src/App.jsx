import "./App.css"

import { Alert } from './components/Alert';
import { Button, OutlineButton } from './components/Button';
import { Table } from './components/Table';
import { Select } from './components/Select';
import { Radio } from './components/Radio';
import { Checkbox } from './components/Checkbox';
import { UploadComponent } from './components/UploadComponent';
import { Pagination } from './components/Pagination';
import { YearCheck } from './components/YearCheck';

const App = () => {
  const funClick = () => {
    console.log("Button Click");
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Alerts</h1>
        </div>
        <div>
          <Alert type="danger" message="A simple success alert—check it out!" />
          <Alert type="success" message="A simple success alert—check it out!" />
          <Alert type="warning" message="A simple success alert—check it out!" />
        </div>
      </div>


      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Buttons</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="primary" onClick={funClick}>Primary</Button>
          <Button variant="success" onClick={funClick}>Sucess</Button>
          <Button variant="danger" onClick={funClick}>Danger</Button>
          <Button variant="link" onClick={funClick}>Link</Button>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Outline Buttons</h1>
        </div>
        <div className="flex gap-4">

          <OutlineButton variant="primary" onClick={funClick}>Primary</OutlineButton>
          <OutlineButton variant="success" onClick={funClick}>Sucess</OutlineButton>
          <OutlineButton variant="danger" onClick={funClick}>Danger</OutlineButton>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Pagination Working with icons</h1>
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

      <div className="mb-4">
        <div className="mb-4">
          <h1 className="font-roboto text-[25px] font-medium">Tables</h1>
        </div>
        <div className="">
          <Table
            data={[
              { Image: "https://via.placeholder.com/50", Name: "Mark", Status: "Completed", Date: "2024-05-10" },
              { Image: "https://via.placeholder.com/50", Name: "Jacob", Status: "In Progress", Date: "2024-06-15" },
              { Image: "https://via.placeholder.com/50", Name: "Danish", Status: "Received", Date: "2024-06-10" },
            ]}
          />
        </div>
      </div>
      <Select
        label="Select Option"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        onChange={(value) => console.log(value)}
      />
      <Radio
        label="Choose an option"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        onChange={(value) => console.log(value)}
      />
      <Checkbox
        label="Choose options"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
        onChange={(checked, value) => console.log({ checked, value })}
      />
      <UploadComponent />

      <YearCheck
        months={['Jan', 'Feb', 'Mar', 'Apr']}
        selectedMonths={['Feb']}
        onToggle={(month) => console.log(month)}
      />
    </div>
  );
};

export default App;