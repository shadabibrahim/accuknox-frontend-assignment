import React from "react";
import Navbar from "./Components/Navbar";
import { Button, Dropdown, message, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import AddWidges from "./Components/AddWidges";
import CategoryCards from "./Components/CategoryCards";
import { useAuth } from "./dashboardContext";
const items = [
  {
    label: "Last 24 hours",
    key: "1",
  },
  {
    label: "Last 7 days",
    key: "2",
  },
  {
    label: "Last 30 days",
    key: "3",
  },
];
const sortOptions = {
  1: "Last 24 hours",
  2: "Last 7 days",
  3: "Last 30 days",
};
function Dashboard() {
  const [selectedOption, setSelectedOption] = React.useState("2"); // Default to "Last 7 days"

  const handleMenuClick = (e) => {
    const key = e.key;
    setSelectedOption(key); // Update the selected option state

    // Display message
    message.info(`Sorted by ${sortOptions[key]}`);

    // Perform sorting logic here
    sortItems(key);
  };
  const sortItems = (optionKey) => {
    // Define sorting logic based on the optionKey
    // For example, you can fetch and filter data based on the selected period
    console.log(`Sorting items based on: ${sortOptions[optionKey]}`);

    // Implement your sorting or data fetching logic here
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <section className="top-heading">
            <h1>CNAPP Dashboard</h1>
          </section>
          <section className="top-menu">
            <AddWidges />
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  {sortOptions[selectedOption]}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </section>
        </div>
        <div className="CategoryCard-container">
          <CategoryCards />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
