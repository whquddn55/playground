import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import MyActivity from "./MyActivity";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";

export const { Stack, useFlow, useStepFlow } = stackflow({
	transitionDuration: 300,
	plugins: [
		basicRendererPlugin(),
		basicUIPlugin({ theme: "cupertino" }),
		historySyncPlugin({
			routes: { MyActivity: "/my-activity" },
			fallbackActivity: () => "MyActivity",
		}),
	],
	activities: { MyActivity },
	initialActivity: () => "MyActivity",
});
