import RootLayout from "./layouts/RootLayout";
import HomePage from "./screens/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {

   // Creating a browser router instance with the root and home routes configured
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index={true} element={<HomePage />} />
      </Route>,
    ),
  );

  // Creating a new instance of QueryClient to manage the queries' state
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
