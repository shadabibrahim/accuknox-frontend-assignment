import React, { useState, useContext, createContext } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
  // Initial dashboard structure
  const [dashboard, setDashboard] = useState({
    categories: [
      {
        id: "CSPM",
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            id: 101,
            name: "Widget 1",
            text: "This is the content of Widget 1.",
          },
          {
            id: 102,
            name: "Widget 2",
            text: "This is the content of Widget 2.",
          },
        ],
      },
      {
        id: "CWPP",
        name: "CWPP Dashboard",
        widgets: [
          {
            id: 201,
            name: "Widget A",
            text: "This is the content of Widget A.",
          },
          {
            id: 202,
            name: "Widget B",
            text: "This is the content of Widget B.",
          },
        ],
      },
      {
        id: "Registry",
        name: "Registry Scan",
        widgets: [
          {
            id: 301,
            name: "Widget X",
            text: "This is the content of Widget X.",
          },
          {
            id: 302,
            name: "Widget Y",
            text: "This is the content of Widget Y.",
          },
        ],
      },
    ],
  });
  const [searchQuery, setSearchQuery] = useState('');
  // Function to add a widget
  const addWidget = (categoryId, widgetName, widgetText) => {
    setDashboard((prevDashboard) => {
      const newDashboard = { ...prevDashboard };
      const category = newDashboard.categories.find(
        (cat) => cat.id === categoryId
      );
      if (category) {
        category.widgets.push({
          id: Date.now(), // Generate a unique ID
          name: widgetName,
          text: widgetText,
        });
      }
      return newDashboard;
    });
  };
  // Function to remove a widget
  const removeWidget = (categoryId, widgetId) => {
    setDashboard((prevDashboard) => {
      const newDashboard = { ...prevDashboard };
      const category = newDashboard.categories.find(
        (cat) => cat.id === categoryId
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
      return newDashboard;
    });
  };
  return (
    <AuthContext.Provider value={{ dashboard, addWidget, removeWidget,searchQuery,setSearchQuery }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for consuming the AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
