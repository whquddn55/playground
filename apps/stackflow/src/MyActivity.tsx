import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useFlow, useStepFlow } from "./stackflow";

interface IMyActivityProps {
	count?: number;
}

const MyActivity: ActivityComponentType<IMyActivityProps> = ({ params }) => {
	const { push } = useFlow();
	const { stepPush } = useStepFlow("MyActivity");
	const { count = 0 } = params;

	const goToMyActivity = () => {
		push("MyActivity", { count: count + 1 });
	};

	const goToMyStep = () => {
		stepPush({ count: count + 1 });
	};

	return (
		<AppScreen appBar={{ title: count }}>
			<h1>{count}</h1>
			<button onClick={goToMyActivity}>Push Activity</button>
			<button onClick={goToMyStep}>Push Step</button>
		</AppScreen>
	);
};

export default MyActivity;
