import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@stackflow/plugin-basic-ui/index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
