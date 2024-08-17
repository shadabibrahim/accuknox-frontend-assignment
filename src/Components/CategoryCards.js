import React from "react";
import { Button, Card, Col, Row, Space } from "antd";
import AddWidges from "./AddWidges";
import { CloseOutlined } from "@ant-design/icons";
import { useAuth } from "../dashboardContext";

function CategoryCards() {
  const { dashboard, removeWidget, searchQuery } = useAuth();
  const filteredCategories = dashboard.categories.map((category) => {
    if (!searchQuery) {
      return category;
    }

    return {
      ...category,
      widgets: category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          widget.text.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    };
  });
  return (
    <div className="cards-container">
      {filteredCategories.map((category, index) => {
        return (
          <div key={index}>
            <h3>{category.name}</h3>
            <div className="card-Columns">
              <Row gutter={24}>
                {category.widgets.map((widget, index) => {
                  return (
                    <Col span={8} key={index}>
                      <div key={widget.id} className="card">
                        <Card
                          title={widget.name}
                          bordered={false}
                          extra={
                            <Space>
                              <Button
                                onClick={() =>
                                  removeWidget(category.id, widget.id)
                                }
                                icon={<CloseOutlined />}
                              ></Button>
                            </Space>
                          }
                        >
                          {widget.text}
                        </Card>
                      </div>
                    </Col>
                  );
                })}

                <Col span={8}>
                  <div className="card">
                    <Card bordered={false} className="cardBtn">
                      <AddWidges />
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCards;
