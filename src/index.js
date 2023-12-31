import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { SidebarProvider } from "./context/sidebarContext";
import { BlogsProvider } from "./context/blogsContext";
import { UserProvider } from "./context/userContext";
import { CommentProvider } from "./context/commentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <UserProvider>
      <BlogsProvider>
        <CommentProvider>
          <App />
        </CommentProvider>
      </BlogsProvider>
    </UserProvider>
  </SidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
