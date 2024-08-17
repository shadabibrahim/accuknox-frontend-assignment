##Dashboard Widget Management System

 ###Overview

This repository contains a React application for a dynamic dashboard and widget management system. The application allows users to manage widgets across various categories, including the ability to add, remove, and search widgets.
### Features
Tasks Completed

1. Dynamic Dashboard and Widget Configuration

	•	Task: Created a JSON structure to build the dashboard and widgets dynamically.
	•	Details: The JSON file includes categories and each category contains multiple widgets. This structure allows for the dynamic rendering of categories and widgets on the dashboard.
2. Add and Remove Widgets

	•	Task: Enabled users to dynamically add and remove widgets from categories.
	•	Details: Users can click a “+Add Widget” button to add new widgets to a selected category. Users can also remove widgets from a category using a cross icon on each widget or by unchecking the widget in the add category section.
    3. Widget Text Content

	•	Task: Implemented functionality to include random text for each widget.
	•	Details: For the purpose of this assignment, widgets are initialized with random text that can be customized later.
4. Widget Addition Form

	•	Task: Users can add a widget by entering a widget name and text in a form.
	•	Details: The form includes fields for the widget name and text. After submission, the widget is added to the selected category.
5. Remove Widget Functionality

	•	Task: Implemented a cross icon to remove widgets from categories.
	•	Details: Each widget includes a cross icon to facilitate its removal from the category. Additionally, users can deselect widgets from the category list in the add category section.
    6. Widget Search Feature

	•	Task: Users can search through a list of all widgets.
	•	Details: Added a search box that filters widgets based on their name or text. The search is case-insensitive and updates in real-time as users type.

    7. State Management with Context API

	•	Task: Implemented state management using React’s Context API.
	•	Details: Created a context to manage and share the state of categories and widgets across the application. This approach simplifies state management and allows for clean and maintainable code.


    Getting Started
    	  1.	Clone the Repository:
        https://github.com/shadabibrahim/accuknox-frontend-assignment.git
        2.	Navigate to the Project Directory:
        cd accuknox-frontend-assignment
        3.	Install Dependencies:
        npm install
        4.	Start the Development Server:
        npm start
