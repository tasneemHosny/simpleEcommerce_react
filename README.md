# React + Vite

## Products App

This project is a product listing page built with **Vite** and **React**, using **React Query** for data fetching, **Axios** for HTTP requests, and **React-Loader-Spinner** to display a loading spinner. It also uses **React Hot Toast** for error notifications. The app fetches product data from an external API and displays it in a responsive grid format.

### Approach

- **Data Fetching**: We use `useQuery` from `@tanstack/react-query` to fetch products from an API. React Query helps in managing server state and caching, improving performance by reducing redundant network requests.
- **Error Handling**: If an error occurs while fetching data, a toast notification alerts the user.
- **Loading State**: The `Bars` loader from `react-loader-spinner` shows a loading animation while data is being fetched.
- **Product Display**: Products are displayed in a responsive grid with basic details like title, price, category, and ratings. Each product has an "Add to Cart" button, which can be further enhanced.

### Challenges Faced

- **Handling Errors**: Managing errors from the API and ensuring users are informed about failures was a priority. We utilize the isError property from the useQuery hook to detect when an error occurs during data fetching. When isError is true, a message is displayed to inform the user about the issue .

- **Responsive Design**: Tailwind CSS made it easier to ensure that the grid adapts well on various screen sizes.
- **Data Management**: React Query was chosen for its efficient data caching and server-state management, but it required learning the `useQuery` syntax and configuration.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tasneemHosny/simpleEcommerce_react.git
2. Navigate into the project directory:
   ```bash
   cd simpleEcommerce_react
3. Install the dependencies:
   ```bash
   npm install
### Running the App
- To start the development server, use:
   ```bash
   npm run dev
## Dependencies

- **React**: Library for building user interfaces.
- **Vite**: Fast development build tool.
- **@tanstack/react-query**: Data-fetching library.
- **Axios**: HTTP client for API requests.
- **React Loader Spinner**: Provides loading spinner components.
- You can install these dependencies using the following command:
   ```bash
   npm install react react-dom vite @tanstack/react-query axios react-loader-spinner

## Notes
Ensure the API endpoint ([https://ecommerce.routemisr.com/api/v1/products](https://ecommerce.routemisr.com/api/v1/products)) is accessible for data fetching.
